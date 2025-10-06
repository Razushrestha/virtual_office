"use client"
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

interface NavItem {
	label: string
	href: string
}

const NAV_ITEMS: NavItem[] = [
	{ label: 'Discover', href: '/discover' },
	{ label: 'Services', href: '/services' },
	{ label: 'AI Finder', href: '/ai-finder' },
	{ label: 'Success Stories', href: '/success' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Counsellors', href: '/counsellors' }
]

export const Header: React.FC = () => {
	const pathname = usePathname()
	const [open, setOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const onScroll = useCallback(() => {
		setScrolled(window.scrollY > 10)
	}, [])

	useEffect(() => {
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [onScroll])

	useEffect(() => { setOpen(false) }, [pathname])

	return (
		<header
			className={[
				'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
				scrolled 
					? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100/50' 
					: 'bg-transparent'
			].join(' ')}
			role="banner"
		>
			<div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14 xs:h-16">
					{/* Logo */}
					<Link 
						href="/" 
						className="flex items-center space-x-1 xs:space-x-2 group"
						aria-label="Virtual Office - Home"
					>
						<div className="w-7 h-7 xs:w-8 xs:h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
							<span className="text-white font-bold text-xs xs:text-sm" aria-hidden="true">V</span>
						</div>
						<span className="font-bold text-lg xs:text-xl text-gray-900 hidden xs:block">Virtual Office</span>
						<span className="font-bold text-lg text-gray-900 block xs:hidden">VO</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
						{NAV_ITEMS.map((item) => {
							const isActive = pathname === item.href
							return (
								<Link
									key={item.href}
									href={item.href}
									className={[
										'relative text-sm font-medium transition-colors duration-200',
										isActive 
											? 'text-black' 
											: 'text-gray-600 hover:text-black'
									].join(' ')}
									aria-current={isActive ? 'page' : undefined}
								>
									{item.label}
									{isActive && (
										<motion.div
											layoutId="activeTab"
											className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
											initial={false}
											transition={{ type: "spring", stiffness: 500, damping: 30 }}
											aria-hidden="true"
										/>
									)}
								</Link>
							)
						})}
					</nav>

					{/* Right Section */}
					<div className="flex items-center space-x-2 xs:space-x-4">
						{/* Auth Links - Desktop */}
						<div className="hidden md:flex items-center space-x-1">
							<Link 
								href="/login" 
								className="px-3 xs:px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
							>
								Login
							</Link>
							<Link 
								href="/book" 
								className="inline-flex items-center px-3 xs:px-4 py-2 bg-black text-white text-xs xs:text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-200 group"
							>
								<span className="hidden xs:inline">Get Started</span>
								<span className="xs:hidden">Start</span>
								<ArrowRight className="ml-1 xs:ml-2 w-3 h-3 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform duration-200" />
							</Link>
						</div>

						{/* Mobile menu button */}
						<button
							onClick={() => setOpen(!open)}
							className="md:hidden p-2 touch-target text-gray-600 hover:text-black transition-colors duration-200 rounded-lg hover:bg-gray-100"
							aria-label={open ? "Close menu" : "Open menu"}
							aria-expanded={open}
							aria-controls="mobile-menu"
							type="button"
						>
							{open ? 
								<X size={18} className="xs:w-5 xs:h-5" aria-hidden="true" /> : 
								<Menu size={18} className="xs:w-5 xs:h-5" aria-hidden="true" />
							}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{open && (
					<motion.nav
						id="mobile-menu"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
						role="navigation"
						aria-label="Mobile navigation"
					>
						<div className="px-4 xs:px-6 py-4 xs:py-6 space-y-3 xs:space-y-4">
							{NAV_ITEMS.map((item) => {
								const isActive = pathname === item.href
								return (
									<Link
										key={item.href}
										href={item.href}
										className={[
											'block text-base xs:text-lg font-medium transition-colors duration-200 py-2 px-2 rounded-lg touch-target',
											isActive 
												? 'text-black bg-gray-50' 
												: 'text-gray-600 hover:text-black hover:bg-gray-50'
										].join(' ')}
										aria-current={isActive ? 'page' : undefined}
									>
										{item.label}
									</Link>
								)
							})}
							
							<div className="pt-3 xs:pt-4 border-t border-gray-100 space-y-2 xs:space-y-3">
								<Link 
									href="/login" 
									className="block text-center py-2 xs:py-3 text-gray-700 font-medium touch-target rounded-lg hover:bg-gray-50"
								>
									Login
								</Link>
								<Link 
									href="/book" 
									className="block text-center py-3 xs:py-4 bg-black text-white font-medium rounded-full touch-target hover:bg-gray-800 transition-colors"
								>
									Get Started
								</Link>
							</div>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	)
}
