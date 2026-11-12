import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Layers, Phone, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-pleco-ice text-pleco-blue mx-auto flex items-center justify-center mb-6 shadow-xs">
          <Compass className="w-8 h-8 animate-pulse text-pleco-blue" />
        </div>

        <div className="text-xs uppercase tracking-widest font-bold text-pleco-blue mb-2">
          Error 404
        </div>
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
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-pleco-blue hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/solutions"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
          >
            <Layers className="w-4 h-4" />
            <span>Explore Solutions Portfolio</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-pleco-blue transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact Technical Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
