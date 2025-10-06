// Performance optimization note: 
// For lazy loading of below-fold components, consider using dynamic imports in production:
// const LazyComponent = dynamic(() => import('./Component'), { loading: () => <LoadingSkeleton /> })
// 
// Current implementation uses direct imports for simplicity with NodeNext module resolution.
// To enable lazy loading, update tsconfig.json moduleResolution to "bundler" instead of "nodenext"

export const LazyLoadingReadme = `
Lazy loading was attempted but conflicts with current TypeScript NodeNext module resolution.
To enable lazy loading:

1. Update tsconfig.json:
   "moduleResolution": "bundler" instead of "nodenext"

2. Use this pattern:
   const LazySection = dynamic(() => import('./Section'), {
     loading: () => <div className="h-96 animate-pulse bg-gray-100" />
   })

3. Benefits: Reduced initial bundle size, faster LCP for hero section
`