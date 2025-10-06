# System Architecture & Database Flow (Blueprint)

## High-Level Stack
Frontend: Next.js 14 (App Router) + Tailwind + Framer Motion
Backend (planned): FastAPI or Node (modular services) behind API Gateway
AI Layer: OpenAI GPT-4/5 + LangChain, Vector DB (Pinecone) + (Optional) Knowledge Graph
Databases: PostgreSQL (primary), Redis (cache/session), Neo4j (graph option)
Storage: S3 (documents), CDN for assets
OCR: AWS Textract / Google Vision
Auth: Auth0 / Firebase Auth
Notifications: Twilio WhatsApp, SendGrid Email, FCM pushes
Payments: Stripe (+ regional)
Observability: Sentry, Prometheus/Grafana, optional ELK/Datadog
Deployment: Vercel (frontend), AWS/HZ/DO for backend & DB
CI/CD: GitHub Actions

## Service Decomposition
- User Service: profiles, roles, auth integration
- AI Service: prompts, embeddings, RAG logic, scoring
- Application Service: application lifecycle, status events
- Document Service: uploads, OCR, verification state machine
- Notification Service: multi-channel dispatch
- Payment Service: plans, invoices, webhooks
- Admin Service: content, partner management, analytics

## Data Flow (AI Finder)
1. User submits profile preferences
2. API composes embedding + queries vector DB
3. Filter by constraints (budget, intake, scores)
4. Score & rank matches (Fit Score algorithm) -> store snapshot
5. Return top N + reasoning bullets
6. Optionally queue background PDF generation

## Core Tables (SQL Outline)
```
users(id PK, name, email UNIQUE, phone, role, country, created_at)
profiles(user_id PK/FK->users, dob, gpa, ielts, toefl, statements JSONB, budget INT, preferred_countries TEXT[], created_at)
documents(id PK, user_id FK, type, url, verified BOOLEAN, ocr_text TEXT, uploaded_at)
universities(id PK, name, country, rank INT, tuition_estimate INT, courses JSONB)
courses(id PK, university_id FK, name, duration, intake_months TEXT[], fees INT)
applications(id PK, user_id FK, university_id FK, course_id FK, status, fit_score INT, applied_at, updated_at)
counsellors(id PK, user_id FK, specialties TEXT[], rating NUMERIC, bio TEXT)
bookings(id PK, user_id FK, counsellor_id FK, status, timeslot TIMESTAMPTZ)
scholarships(id PK, name, eligibility_criteria TEXT, deadline DATE)
leads(id PK, source, campaign, score INT, created_at)
activity_log(id PK, user_id FK, action, metadata JSONB, created_at)
```

## Fit Score (Early Heuristic Example)
Score = (academic_weight * academic_alignment) + (budget_weight * budget_fit) + (preference_weight * preference_match) - penalties

## Scaling Phases
Phase 1: Single region, managed Postgres, minimal workers
Phase 2: Introduce queue, vector DB scaling, CDN, read replicas
Phase 3: Multi-region active/passive DB, global routing, resiliency testing

## Security Controls
- RBAC per role (student/counsellor/admin)
- JWT access tokens (short) + refresh rotation
- Rate limiting (gateway) + abuse detection for AI endpoints
- Encryption at rest (KMS) + transport (TLS)
- Audit logs (activity_log) & anomaly detection (admin dashboards)

## Background Jobs (Examples)
- OCR Processing
- Embedding Generation
- Scholarship Scraper
- Application Status Polling
- Notification Fanout

## Observability Events (Emit Examples)
`application.created`, `application.status_changed`, `document.uploaded`, `ai.match.performed`, `booking.created`, `payment.success`.

