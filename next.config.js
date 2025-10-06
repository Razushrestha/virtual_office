/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: [
			'lucide-react',
			'@radix-ui/react-accordion',
			'@radix-ui/react-dialog',
			'@radix-ui/react-popover',
			'framer-motion'
		]
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'images.unsplash.com' },
			{ protocol: 'https', hostname: 'cdn.jsdelivr.net' }
		],
		formats: ['image/webp', 'image/avif']
	},
	compress: true,
	poweredByHeader: false
};

module.exports = nextConfig;
