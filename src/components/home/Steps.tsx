import React from 'react'

export const Steps: React.FC = () => {
  const data = [
    { 
      step: '1', 
      title: 'Tell Us About You', 
      desc: 'Country, course, budget & test scores.',
      icon: '👤',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      darkBg: 'dark:from-emerald-500/10 dark:to-teal-500/10'
    },
    { 
      step: '2', 
      title: 'AI Generates Matches', 
      desc: 'Top 5 universities with fit score & reasons.',
      icon: '🤖',
      gradient: 'from-violet-400 via-purple-500 to-indigo-600',
      bgGradient: 'from-violet-50 to-purple-50',
      darkBg: 'dark:from-violet-500/10 dark:to-purple-500/10'
    },
    { 
      step: '3', 
      title: 'Book & Apply', 
      desc: 'Expert guidance to finalize applications.',
      icon: '🎯',
      gradient: 'from-orange-400 via-pink-500 to-rose-600',
      bgGradient: 'from-orange-50 to-pink-50',
      darkBg: 'dark:from-orange-500/10 dark:to-pink-500/10'
    }
  ]
  
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Clean light background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-purple-50/30" />
      
      <div className="relative">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Simple Process
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-800">
            How It <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get matched with your perfect university in just three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {data.map((item, index) => (
            <div key={item.step} className="group relative">
              {/* Connection line (desktop only) */}
              {index < data.length - 1 && (
                <div className="absolute left-1/2 top-12 z-0 hidden h-0.5 w-full bg-gradient-to-r from-gray-100 to-gray-200 md:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-70" />
                </div>
              )}
              
              {/* Card */}
              <div className="relative z-10 flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Light glow effect */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 blur transition-opacity group-hover:opacity-10`} />
                
                {/* Step number circle */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${item.gradient} text-xl font-black text-white shadow-lg`}>
                    {item.step}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="mb-4 text-center text-3xl">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="flex flex-1 flex-col justify-center text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Bottom accent */}
                <div className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${item.gradient}`} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-lg">
            <span className="text-sm text-gray-600">Ready to get started?</span>
            <a 
              href="/ai-finder" 
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:from-indigo-500 hover:to-purple-500"
            >
              Try AI Finder →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}