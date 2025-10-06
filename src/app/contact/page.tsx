import React from 'react'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-sm text-gray-600">We usually respond within 1 business day. Chat, WhatsApp or form.</p>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700">Chatbot</h2>
            <div className="mt-3 text-xs text-gray-600">AI assistant widget placeholder. Future: floating widget / embedded frame.</div>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700">WhatsApp</h2>
            <p className="mt-3 text-xs text-gray-600">Tap button to open WhatsApp.</p>
            <button className="mt-4 text-xs font-medium text-violet-600 hover:underline">Message on WhatsApp →</button>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700">Office</h2>
            <ul className="mt-3 space-y-1 text-xs text-gray-600">
              <li>Address: TBD</li>
              <li>Hours: 9am - 6pm</li>
            </ul>
            <div className="mt-4 rounded-md border border-dashed p-4 text-center text-xs">Map Embed Placeholder</div>
          </div>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium">Send a Message</h2>
          <form className="mt-6 space-y-5 text-sm">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Name</label>
              <input className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Email</label>
              <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Message</label>
              <textarea rows={5} className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
            </div>
            <button className="rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-sm font-medium text-white shadow-soft-lg hover:shadow-md transition" type="button">Submit</button>
            <div className="text-xs text-gray-500">Submitting will log lead to CRM (future API integration).</div>
          </form>
        </div>
      </div>
    </div>
  )
}
