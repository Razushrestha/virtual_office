import React from 'react'
import clsx from 'clsx'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  hint?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, hint, id, ...props }, ref) => {
    const inputId = id || props.name || Math.random().toString(36).slice(2)
    return (
      <div className="space-y-1.5 text-sm">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-medium text-gray-600 dark:text-gray-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
            id={inputId}
            className={clsx(
              'w-full rounded-md border px-3 py-2 text-sm outline-none transition',
              'bg-white dark:bg-gray-600/40 border-gray-300 dark:border-gray-500',
              'focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-400/20',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
              className
            )}
            {...props}
        />
        {hint && !error && <p className="text-[10px] text-gray-500">{hint}</p>}
        {error && <p className="text-[10px] font-medium text-red-600">{error}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'