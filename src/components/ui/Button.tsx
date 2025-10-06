import * as React from 'react'
import clsx from 'clsx'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const base = 'relative inline-flex items-center justify-center font-medium rounded-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<string, string> = {
  primary: 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-soft-lg hover:shadow-md focus-visible:ring-violet-500',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500',
  outline: 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 focus-visible:ring-violet-500',
  ghost: 'text-gray-700 hover:bg-gray-100 focus-visible:ring-violet-500'
}

const sizes: Record<string, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, loading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading && (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
