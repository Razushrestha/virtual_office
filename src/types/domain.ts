// Domain type placeholders – align later with backend schemas

export type UserRole = 'student' | 'counsellor' | 'admin'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  country?: string
  createdAt: string
}

export interface UniversityMatch {
  id: string
  name: string
  country: string
  fitScore: number // 0-100
  reasons: string[]
  tuitionEstimate?: number
  scholarships?: string[]
}

export interface FinderResultSnapshot {
  id: string
  userId: string
  createdAt: string
  matches: UniversityMatch[]
}
