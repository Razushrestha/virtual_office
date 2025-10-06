"use client"
import React from 'react'

interface MetricCardProps {
  label: string
  value: string | number
  color?: 'violet' | 'blue' | 'fuchsia' | 'green' | 'orange'
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

const colorClasses = {
  violet: 'border-violet-200/60 text-violet-500 dark:border-violet-500/30',
  blue: 'border-blue-200/60 text-blue-500 dark:border-blue-500/30',
  fuchsia: 'border-fuchsia-200/60 text-fuchsia-500 dark:border-fuchsia-500/30',
  green: 'border-green-200/60 text-green-500 dark:border-green-500/30',
  orange: 'border-orange-200/60 text-orange-500 dark:border-orange-500/30'
}

const trendIcons = {
  up: <span className="text-[10px] text-green-500">▲</span>,
  down: <span className="text-[10px] text-red-500">▼</span>,
  neutral: null
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  label, 
  value, 
  color = 'violet', 
  trend = 'neutral',
  className = '' 
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl border bg-white/70 p-4 text-center text-xs shadow-soft-lg backdrop-blur transition hover:shadow-glow dark:bg-gray-800/50 ${colorClasses[color]} ${className}`}>
      <div className={`mb-1 text-[11px] font-medium uppercase tracking-wide ${colorClasses[color].split(' ')[2]}`}>
        {label}
      </div>
      <div className="flex items-center justify-center gap-1 text-lg font-bold text-gray-900 dark:text-gray-100">
        <span>{typeof value === 'number' ? Intl.NumberFormat().format(value) : value}</span>
        {trendIcons[trend]}
      </div>
    </div>
  )
}