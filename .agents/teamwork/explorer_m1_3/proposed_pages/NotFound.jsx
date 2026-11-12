import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Boxes, PhoneCall } from 'lucide-react';

/**
 * Milestone 1 Placeholder: 404 Not Found Page (Catch-All Route: `*`)
 * Enterprise fallback state with recovery links to primary sections.
 */
export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-brand-primary-600 mx-auto flex items-center justify-center mb-6">
          <Compass className="w-8 h-8 text-sky-600 animate-pulse" />
        </div>

        <div className="text-xs uppercase tracking-widest font-bold text-sky-600 mb-2">Error 404</div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          The requested URL does not match any route in the Pleco Solutions enterprise architecture.
          Please verify the web address or use the navigation links below.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-semibold text-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/solutions"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
          >
            <Boxes className="w-4 h-4" />
            <span>Explore Solutions Portfolio</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact Technical Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
