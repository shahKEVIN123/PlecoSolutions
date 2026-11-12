import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { Boxes, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * Milestone 1 Placeholder: Supply Planning (Route: `/supply-planning`)
 * Focuses on Oracle ASCP, Rapid Planning (RP), and Inventory Optimization (IO).
 */
export default function SupplyPlanning() {
  const capabilities = [
    'Oracle Advanced Supply Chain Planning (ASCP)',
    'Oracle Rapid Planning (RP) in-memory simulation engine',
    'Oracle Inventory Optimization (IO)',
    'Multi-echelon inventory positioning and postponement strategies',
    'Simultaneous material, supplier, and resource capacity constraints',
    'Automated exception management and pegging analysis',
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Supply Planning' },
          ]}
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm mb-12">
          <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
            <Boxes className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Oracle VCP Supply Chain Suite
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Supply Planning Solutions
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mb-8">
            Pleco Solutions delivers comprehensive supply planning architecture utilizing Oracle Advanced
            Supply Chain Planning (ASCP), Rapid Planning, and Inventory Optimization (IO). We help enterprises
            synchronize multi-tier supplier networks, reduce working capital, and optimize service-level targets
            under complex real-world operational constraints.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">Core Module Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium text-sm transition-colors"
            >
              <span>Consult an ASCP Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-colors"
            >
              <span>View All Solutions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
