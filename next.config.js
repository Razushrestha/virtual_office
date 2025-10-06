/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: [
			'lucide-react',
			'@radix-ui/react-accordion',
			'@radix-ui/react-dialog',
			'@radix-ui/react-popover'
		]
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'images.unsplash.com' },
			{ protocol: 'https', hostname: 'cdn.jsdelivr.net' }
		]
	}
};

module.exports = nextConfig;
