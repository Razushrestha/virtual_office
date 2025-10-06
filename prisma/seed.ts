import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const universities = [
  // Canada
  {
    name: 'University of Toronto',
    country: 'Canada',
    city: 'Toronto',
    ranking: 1,
    tuitionEstimate: 35000,
    website: 'https://www.utoronto.ca',
    description: 'Premier research university in Canada',
    intakes: ['September', 'January', 'May'],
    courses: [
      { name: 'Computer Science', level: 'Bachelor', duration: '4 years', fees: 35000 },
      { name: 'Master of Engineering', level: 'Master', duration: '2 years', fees: 40000 },
      { name: 'MBA', level: 'Master', duration: '2 years', fees: 65000 }
    ]
  },
  {
    name: 'University of British Columbia',
    country: 'Canada',
    city: 'Vancouver',
    ranking: 2,
    tuitionEstimate: 32000,
    website: 'https://www.ubc.ca',
    description: 'Top research university on Canada\'s west coast',
    intakes: ['September', 'January'],
    courses: [
      { name: 'Business Administration', level: 'Bachelor', duration: '4 years', fees: 32000 },
      { name: 'Data Science', level: 'Master', duration: '2 years', fees: 38000 }
    ]
  },
  // USA
  {
    name: 'Massachusetts Institute of Technology',
    country: 'USA',
    city: 'Cambridge',
    ranking: 1,
    tuitionEstimate: 55000,
    website: 'https://www.mit.edu',
    description: 'Leading technology and engineering institution',
    intakes: ['September'],
    courses: [
      { name: 'Computer Science', level: 'Bachelor', duration: '4 years', fees: 55000 },
      { name: 'Artificial Intelligence', level: 'Master', duration: '2 years', fees: 60000 }
    ]
  },
  {
    name: 'Stanford University',
    country: 'USA',
    city: 'Stanford',
    ranking: 2,
    tuitionEstimate: 58000,
    website: 'https://www.stanford.edu',
    description: 'Elite private research university in Silicon Valley',
    intakes: ['September'],
    courses: [
      { name: 'Business Administration', level: 'Bachelor', duration: '4 years', fees: 58000 },
      { name: 'MBA', level: 'Master', duration: '2 years', fees: 75000 }
    ]
  },
  // UK
  {
    name: 'University of Oxford',
    country: 'UK',
    city: 'Oxford',
    ranking: 1,
    tuitionEstimate: 30000,
    website: 'https://www.ox.ac.uk',
    description: 'World\'s oldest English-speaking university',
    intakes: ['October'],
    courses: [
      { name: 'Philosophy, Politics and Economics', level: 'Bachelor', duration: '3 years', fees: 30000 },
      { name: 'MBA', level: 'Master', duration: '1 year', fees: 65000 }
    ]
  },
  {
    name: 'University of Cambridge',
    country: 'UK',
    city: 'Cambridge',
    ranking: 2,
    tuitionEstimate: 32000,
    website: 'https://www.cam.ac.uk',
    description: 'Prestigious collegiate research university',
    intakes: ['October'],
    courses: [
      { name: 'Natural Sciences', level: 'Bachelor', duration: '3 years', fees: 32000 },
      { name: 'Engineering', level: 'Master', duration: '1 year', fees: 38000 }
    ]
  },
  // Australia
  {
    name: 'University of Melbourne',
    country: 'Australia',
    city: 'Melbourne',
    ranking: 1,
    tuitionEstimate: 28000,
    website: 'https://www.unimelb.edu.au',
    description: 'Leading comprehensive research university',
    intakes: ['February', 'July'],
    courses: [
      { name: 'Medicine', level: 'Bachelor', duration: '6 years', fees: 40000 },
      { name: 'Business Analytics', level: 'Master', duration: '2 years', fees: 30000 }
    ]
  },
  {
    name: 'Australian National University',
    country: 'Australia',
    city: 'Canberra',
    ranking: 2,
    tuitionEstimate: 26000,
    website: 'https://www.anu.edu.au',
    description: 'Premier research university in Australia\'s capital',
    intakes: ['February', 'July'],
    courses: [
      { name: 'International Relations', level: 'Bachelor', duration: '3 years', fees: 26000 },
      { name: 'Public Policy', level: 'Master', duration: '2 years', fees: 28000 }
    ]
  }
]

const scholarships = [
  {
    name: 'Canada Excellence Research Chairs',
    amount: 50000,
    currency: 'CAD',
    eligibilityCriteria: 'Outstanding researchers in any field',
    deadline: new Date('2025-03-01'),
    country: 'Canada',
    level: 'PhD',
    provider: 'Government of Canada'
  },
  {
    name: 'Fulbright Program',
    amount: 40000,
    currency: 'USD',
    eligibilityCriteria: 'International students for US universities',
    deadline: new Date('2025-02-15'),
    country: 'USA',
    level: 'Master',
    provider: 'US Government'
  },
  {
    name: 'Rhodes Scholarship',
    amount: 70000,
    currency: 'GBP',
    eligibilityCriteria: 'Outstanding students for Oxford University',
    deadline: new Date('2025-01-31'),
    country: 'UK',
    level: 'Master',
    provider: 'Rhodes Trust'
  },
  {
    name: 'Australia Awards',
    amount: 35000,
    currency: 'AUD',
    eligibilityCriteria: 'Students from developing countries',
    deadline: new Date('2025-04-30'),
    country: 'Australia',
    level: 'Master',
    provider: 'Australian Government'
  }
]

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create universities with courses
  for (const universityData of universities) {
    const { courses, ...university } = universityData
    
    const createdUniversity = await prisma.university.create({
      data: university
    })
    
    console.log(`✅ Created university: ${university.name}`)
    
    // Create courses for this university
    for (const courseData of courses) {
      await prisma.course.create({
        data: {
          ...courseData,
          universityId: createdUniversity.id
        }
      })
    }
    
    console.log(`  📚 Added ${courses.length} courses`)
  }

  // Create scholarships
  for (const scholarship of scholarships) {
    await prisma.scholarship.create({
      data: scholarship
    })
    console.log(`💰 Created scholarship: ${scholarship.name}`)
  }

  // Create a sample admin user
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@no1consultancy.com',
      role: 'ADMIN',
      password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBJyjw7/Gam9Jy', // hashed 'admin123'
    }
  })

  console.log(`👤 Created admin user: ${adminUser.email}`)

  console.log('✨ Database seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })