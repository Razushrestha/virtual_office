# Website Wireframe & Page Layout (2025 Ready)

This document enumerates the UX blocks for rapid iteration. Each section will map to a component or layout segment.

## Global Navigation
- Logo (top-left) linking home
- Primary links: Discover | Services | AI Finder | Success Wall | Blog | Counsellors
- Auth: Login / Sign up
- CTA: Book Free Counseling (gradient button)
- Mobile: collapsible sheet / overlay menu

## Homepage Sections (Order)
1. Hero (full viewport): Headline, subcopy, dual CTAs, mini AI Finder widget, trust metrics.
2. How It Works (3 steps cards)
3. AI Finder Demo (embedded microflow)
4. Success Wall (video carousel + approval feed)
5. Top Countries (cards with visa time, cost, scholarships)
6. Services Snapshot (grid icons)
7. Verified Counsellors (profile cards + rating)
8. FAQ / Blog highlight (accordion + article list)
9. Footer (info, resources, legal, social, signup)

## Interaction Principles
- Micro animations (Framer Motion) for entering sections in viewport
- Skeleton loaders for async content
- Inline form validation (react-hook-form + zod)
- Accessible: headings order, aria labels on nav, focus states, color contrast check

## Component Mapping
| Section | Component Folder | Notes |
|---------|------------------|-------|
| Hero | `components/home/Hero.tsx` | gradient background + mini form |
| Steps | `components/home/Steps.tsx` | timeline or cards |
| AI Demo | `components/finder/DemoWidget.tsx` | collects 3 inputs |
| Success Wall | `components/success/Wall.tsx` | video deck + feed |
| Countries | `components/discover/CountryCards.tsx` | static SSG data initially |
| Services | `components/services/ServicesGrid.tsx` | icons + links |
| Counsellors | `components/counsellors/CounsellorCards.tsx` | rating stars |
| FAQ | `components/faq/FAQAccordion.tsx` | Radix Accordion |
| Blog Highlight | `components/blog/FeaturedPosts.tsx` | uses ISR |
| Footer | `components/layout/Footer.tsx` | present |

## Progressive Enhancement
Phase 1: Static + mock data
Phase 2: Wire to API endpoints
Phase 3: Personalization (auth-aware content)

