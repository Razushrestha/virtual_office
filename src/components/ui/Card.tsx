import React from 'react'
import clsx from 'clsx'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={clsx('rounded-xl border bg-white dark:bg-gray-700/60 dark:border-gray-600 shadow-sm', className)} {...props} />
)

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div className={clsx('p-5 border-b border-gray-100 dark:border-gray-800', className)} {...p} />
)
export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...p }) => (
  <h3 className={clsx('text-sm font-semibold', className)} {...p} />
)
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div className={clsx('p-5', className)} {...p} />
)
export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div className={clsx('p-5 border-t border-gray-100 dark:border-gray-800', className)} {...p} />
)

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={clsx('animate-pulse rounded-md bg-gray-200/70 dark:bg-gray-700/50', className)} />
)