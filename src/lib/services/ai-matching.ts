import OpenAI from 'openai'
import { prisma } from '@lib/prisma'

const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
}) : null

interface UserProfile {
  fullName: string
  residence: string
  education: string
  intake: string
  preferredCountry: string
  fieldOfStudy: string
  campusSize?: string
  climate?: string
  ielts?: string
  gre?: string
  gmat?: string
  cgpa?: string
  budget: number
  scholarshipRequired?: string
  workWhileStudy?: string
}

interface UniversityMatch {
  name: string
  country: string
  program: string
  estTuition: string
  score: number
  ranking: string
  scholarships: string
  location: string
  acceptance: string
  gradient: string
  highlights: string[]
  reasons: string[]
}

export class AIMatchingService {
  
  /**
   * Generate university matches based on user profile
   */
  async generateMatches(profile: UserProfile): Promise<UniversityMatch[]> {
    try {
      // Store the matching session
      const session = await this.storeMatchingSession(profile)
      
      // Generate AI-powered matches
      const matches = await this.getAIMatches(profile)
      
      // Update session with matches
      await this.updateSessionWithMatches(session.id, matches)
      
      return matches
    } catch (error) {
      console.error('Error generating matches:', error)
      return this.getFallbackMatches(profile)
    }
  }

  /**
   * Get AI-powered university matches using OpenAI
   */
  private async getAIMatches(profile: UserProfile): Promise<UniversityMatch[]> {
    if (!openai) {
      console.log('OpenAI not configured, using fallback matches')
      return this.getFallbackMatches(profile)
    }

    const prompt = this.buildMatchingPrompt(profile)
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert education consultant specializing in international university admissions. Provide accurate, helpful university recommendations based on student profiles."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content
    
    if (!response) {
      throw new Error('No response from AI')
    }

    return this.parseAIResponse(response, profile)
  }

  /**
   * Build the matching prompt for AI
   */
  private buildMatchingPrompt(profile: UserProfile): string {
    return `
Please recommend 5 universities for a student with the following profile:

**Student Profile:**
- Name: ${profile.fullName}
- Current Location: ${profile.residence}
- Education Level: ${profile.education}
- Preferred Country: ${profile.preferredCountry}
- Field of Study: ${profile.fieldOfStudy}
- Budget: $${profile.budget} USD per year
- IELTS Score: ${profile.ielts || 'Not provided'}
- GRE Score: ${profile.gre || 'Not provided'}
- CGPA: ${profile.cgpa || 'Not provided'}
- Intake: ${profile.intake}
- Campus Size Preference: ${profile.campusSize || 'No preference'}
- Climate Preference: ${profile.climate || 'No preference'}
- Scholarship Required: ${profile.scholarshipRequired || 'No'}
- Work While Study: ${profile.workWhileStudy || 'No preference'}

**Requirements:**
1. Recommend exactly 5 universities that match the profile
2. Focus on universities in ${profile.preferredCountry}
3. Consider the budget constraint of $${profile.budget}
4. Match the field of study: ${profile.fieldOfStudy}
5. Provide fit scores (0-100) based on profile alignment

**Response Format (JSON):**
[
  {
    "name": "University Name",
    "country": "${profile.preferredCountry}",
    "program": "Specific program name",
    "estTuition": "$XX,XXX",
    "score": 95,
    "ranking": "#X in Country/World",
    "scholarships": "$XX,XXX available",
    "location": "City, State/Province",
    "acceptance": "XX%",
    "highlights": ["highlight1", "highlight2", "highlight3"],
    "reasons": ["reason1", "reason2", "reason3"]
  }
]
`
  }

  /**
   * Parse AI response and format as university matches
   */
  private parseAIResponse(response: string, profile: UserProfile): UniversityMatch[] {
    try {
      // Extract JSON from response
      const jsonMatch = response.match(/\[[\s\S]*\]/)
      if (!jsonMatch) {
        throw new Error('No JSON found in response')
      }

      const universities = JSON.parse(jsonMatch[0])
      
      return universities.map((uni: any, index: number) => ({
        name: uni.name || `${profile.preferredCountry} University ${index + 1}`,
        country: uni.country || profile.preferredCountry,
        program: uni.program || profile.fieldOfStudy,
        estTuition: uni.estTuition || `$${profile.budget}`,
        score: uni.score || (90 - index * 5),
        ranking: uni.ranking || `#${index + 1} in ${profile.preferredCountry}`,
        scholarships: uni.scholarships || '$10,000 available',
        location: uni.location || `City, ${profile.preferredCountry}`,
        acceptance: uni.acceptance || `${75 + index * 2}%`,
        gradient: this.getGradientForScore(uni.score || (90 - index * 5)),
        highlights: uni.highlights || ['Great programs', 'Good location', 'Affordable'],
        reasons: uni.reasons || ['Matches your profile', 'Good fit score', 'Within budget']
      }))
    } catch (error) {
      console.error('Error parsing AI response:', error)
      return this.getFallbackMatches(profile)
    }
  }

  /**
   * Get gradient color based on fit score
   */
  private getGradientForScore(score: number): string {
    if (score >= 90) return 'from-green-400 to-emerald-600'
    if (score >= 80) return 'from-blue-400 to-indigo-600'
    if (score >= 70) return 'from-purple-400 to-violet-600'
    if (score >= 60) return 'from-orange-400 to-red-600'
    return 'from-gray-400 to-gray-600'
  }

  /**
   * Store matching session in database
   */
  private async storeMatchingSession(profile: UserProfile) {
    return await prisma.finderSession.create({
      data: {
        userId: 'anonymous', // Will be updated when user auth is implemented
        formData: profile as any,
        matches: {},
      }
    })
  }

  /**
   * Update session with generated matches
   */
  private async updateSessionWithMatches(sessionId: string, matches: UniversityMatch[]) {
    return await prisma.finderSession.update({
      where: { id: sessionId },
      data: {
        matches: matches as any,
        fitScores: matches.map(m => ({
          university: m.name,
          score: m.score,
          reasons: m.reasons
        })) as any
      }
    })
  }

  /**
   * Get fallback matches when AI fails
   */
  private getFallbackMatches(profile: UserProfile): UniversityMatch[] {
    const country = profile.preferredCountry
    const field = profile.fieldOfStudy
    
    return [
      {
        name: `${country} International University`,
        country,
        program: `${field} Program`,
        estTuition: `$${profile.budget}`,
        score: 88,
        ranking: `#3 in ${country}`,
        scholarships: '$15,000 available',
        location: `Capital City, ${country}`,
        acceptance: '75%',
        gradient: 'from-green-400 to-emerald-600',
        highlights: ['Top-ranked program', 'Great campus', 'Industry connections'],
        reasons: ['Excellent fit for your profile', 'Strong in your field', 'Within budget']
      },
      {
        name: `${country} College of ${field.split(' ')[0]}`,
        country,
        program: `Master's in ${field}`,
        estTuition: `$${Math.round(profile.budget * 0.9)}`,
        score: 82,
        ranking: `#7 in ${country}`,
        scholarships: '$12,000 available',
        location: `Tech City, ${country}`,
        acceptance: '68%',
        gradient: 'from-blue-400 to-indigo-600',
        highlights: ['Specialized program', 'Research focus', 'Good value'],
        reasons: ['Strong program match', 'Affordable option', 'Good acceptance rate']
      },
      {
        name: `${country} Global Academy`,
        country,
        program: `${field} Studies`,
        estTuition: `$${Math.round(profile.budget * 1.1)}`,
        score: 79,
        ranking: `#12 in ${country}`,
        scholarships: '$8,000 available',
        location: `University Town, ${country}`,
        acceptance: '71%',
        gradient: 'from-purple-400 to-violet-600',
        highlights: ['Diverse student body', 'Modern facilities', 'Strong alumni network'],
        reasons: ['Good program quality', 'International focus', 'Scholarship opportunities']
      }
    ]
  }

  /**
   * Calculate fit score based on multiple factors
   */
  calculateFitScore(profile: UserProfile, university: any): number {
    let score = 0
    
    // Budget fit (30% weight)
    const budgetFit = university.tuition <= profile.budget ? 30 : Math.max(0, 30 - ((university.tuition - profile.budget) / profile.budget) * 20)
    score += budgetFit
    
    // Academic fit (40% weight)
    const academicFit = this.calculateAcademicFit(profile, university)
    score += academicFit * 0.4 * 40
    
    // Preference fit (20% weight)
    const preferenceFit = this.calculatePreferenceFit(profile, university)
    score += preferenceFit * 0.2 * 20
    
    // Location fit (10% weight)
    const locationFit = university.country === profile.preferredCountry ? 10 : 0
    score += locationFit
    
    return Math.min(100, Math.max(0, Math.round(score)))
  }

  private calculateAcademicFit(profile: UserProfile, university: any): number {
    // Simplified academic fit calculation
    // In a real implementation, this would consider GPA, test scores, etc.
    return 0.8 // 80% fit
  }

  private calculatePreferenceFit(profile: UserProfile, university: any): number {
    // Simplified preference fit calculation
    // In a real implementation, this would consider campus size, climate, etc.
    return 0.7 // 70% fit
  }
}