import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Enterprise Breadcrumbs Component
 * Provides accessible semantic navigation trail for subpages and solutions routes.
 *
 * @param {Object} props
 * @param {Array<{ label: string, href?: string }>} props.items
 */
export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="inline-flex flex-wrap items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm text-slate-500 font-medium shadow-xs">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-slate-500 hover:text-pleco-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pleco-blue rounded p-0.5"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label || index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="text-slate-900 font-bold truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-pleco-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pleco-blue rounded p-0.5 truncate"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
