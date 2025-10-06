import './globals.css'
import { ReactNode } from 'react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import { ThemeToggle } from '../components/ui/ThemeToggle'

export const metadata = {
	title: 'Education Consultancy Nepal | Study Abroad Consultancy Kathmandu | Virtual Office',
	description: 'Leading education consultancy in Nepal offering study abroad services. Best consultancy in Kathmandu, Pokhara, Chitwan for Australia, Germany, USA, UK, Canada. Expert counseling services.',
	keywords: [
		// Primary Keywords
		'consultancy kathmandu', 'consultancy nepal', 'education consultancy kathmandu', 'study abroad consultancy nepal',
		
		// Location-based Keywords
		'consultancy chabahil', 'consultancy baneshwor', 'consultancy putalisadak', 'consultancy pokhara', 
		'consultancy chitwan', 'consultancy itahari', 'consultancy biratnagar', 'consultancy butwal',
		'consultancy kumaripati', 'consultancy bagbazar', 'consultancy new baneshwor', 'consultancy birtamode',
		
		// Country-specific Keywords
		'consultancy for australia in nepal', 'consultancy for germany in nepal', 'consultancy for usa in nepal',
		'consultancy for canada in nepal', 'consultancy for uk in nepal', 'consultancy for italy in nepal',
		'consultancy for japan in nepal', 'consultancy for luxembourg in nepal', 'consultancy for malta in nepal',
		
		// Service Keywords
		'education consultancy services', 'study abroad counseling', 'university admission help',
		'visa consultancy nepal', 'student visa assistance', 'abroad education guidance',
		
		// Business Keywords
		'consultancy near me', 'best consultancy kathmandu', 'top consultancy nepal', 
		'consultancy contact number', 'consultancy appointment', 'free consultation',
		
		// Nepali Keywords
		'consultancy meaning in nepali', 'consultancy in nepali', 'परामर्श सेवा', 'विदेश अध्ययन परामर्श'
	].join(', '),
	openGraph: {
		title: 'Best Education Consultancy in Nepal | Virtual Office Kathmandu',
		description: 'Leading study abroad consultancy in Nepal. Expert guidance for Australia, Germany, USA, UK, Canada. Located in Kathmandu with branches across Nepal.',
		locale: 'en_US',
		type: 'website',
		siteName: 'Virtual Office - Education Consultancy Nepal'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Education Consultancy Nepal | Study Abroad Services',
		description: 'Premier consultancy services in Kathmandu, Nepal for international education. Expert counseling for top universities worldwide.'
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://virtualoffice.com',
		languages: {
			'en-US': 'https://virtualoffice.com',
			'ne-NP': 'https://virtualoffice.com/ne'
		}
	}
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<body className="min-h-full bg-white text-gray-900 antialiased">
				<ThemeProvider>
					<div className="flex min-h-screen flex-col">
						<Header />
						<Breadcrumb />
						<div className="fixed right-4 bottom-4 z-40">
							<ThemeToggle />
						</div>
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
