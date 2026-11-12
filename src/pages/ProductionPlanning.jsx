import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { CalendarClock, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * Milestone 1 Placeholder: Production Planning (Route: `/production-planning`)
 * Focuses on Oracle Production Scheduling (PS) and plant-floor bottleneck management.
 */
export default function ProductionPlanning() {
  const capabilities = [
    'Oracle Production Scheduling (PS)',
    'Finite capacity scheduling across machines, tools, and labor',
    'Sequence-dependent setup time and changeover cost minimization',
    'Interactive Gantt chart drag-and-drop dispatching workbench',
    'Floating bottleneck detection and throughput optimization',
    'Seamless bidirectional integration with Oracle ASCP and shop-floor execution',
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Production Planning' },
          ]}
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm mb-12">
          <div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
            <CalendarClock className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Oracle Production Scheduling (PS)
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Production Planning &amp; Scheduling
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mb-8">
            Pleco Solutions implements Oracle Production Scheduling (PS) to convert supply plans into realistic,
            executable shop-floor schedules. We eliminate bottlenecks, reduce costly machine changeovers, and
            provide planners with interactive dispatch workbenches to maximize production throughput.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">Core Module Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium text-sm transition-colors"
            >
              <span>Optimize Factory Scheduling</span>
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
