import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { 
  BarChart2, 
  Boxes, 
  Workflow, 
  Network, 
  CalendarClock, 
  Truck, 
  ArrowRight,
  Factory,
  CheckCircle2
} from 'lucide-react';

/**
 * Milestone 1 Placeholder: Solutions Hub Page (Route: `/solutions`)
 * Displays comprehensive catalog of planning modules and direct links to all 6 deep-dive routes.
 */
export default function SolutionsHub() {
  const solutions = [
    {
      title: 'Demand Planning',
      href: '/demand-planning',
      code: 'Demantra DM / AFDM / SPF',
      description: 'Advanced Bayesian forecasting engines, multi-dimensional demand modeling, and service parts forecasting.',
      icon: BarChart2,
    },
    {
      title: 'Supply Planning',
      href: '/supply-planning',
      code: 'Oracle ASCP / Rapid Planning / IO',
      description: 'Holistic multi-echelon supply chain planning, material and resource constraints, and safety stock optimization.',
      icon: Boxes,
    },
    {
      title: 'Integrated Business Planning',
      href: '/integrated-business-planning',
      code: 'SIMPLE Framework / Real-Time S&OP',
      description: 'Executive alignment across Sales, Operations, and Finance translating corporate strategy into operational execution.',
      icon: Workflow,
    },
    {
      title: 'Network Planning',
      href: '/network-planning',
      code: 'Oracle SNO / Collaborative Planning',
      description: 'Strategic network design, sourcing cost minimization, contingency modeling, and multi-tier partner collaboration.',
      icon: Network,
    },
    {
      title: 'Production Planning',
      href: '/production-planning',
      code: 'Oracle Production Scheduling (PS)',
      description: 'Finite capacity scheduling, sequence-dependent setup minimization, and factory-floor dispatch workbench.',
      icon: CalendarClock,
    },
    {
      title: 'Order Fulfillment',
      href: '/order-fulfillment',
      code: 'Oracle GOP / DOO',
      description: '24/7 high-availability ATP, CTP, and CTD order promising with distributed order orchestration.',
      icon: Truck,
    },
  ];

  const verticals = [
    'Hi-Tech | Consumer Packaged Goods (CPG)',
    'Industrial Manufacturing | Distribution',
    'Life Sciences | Pharma | Process industry',
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Solutions' }]} />

        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Oracle Planning Solutions Portfolio
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Pleco serve customers to enhance processes for Integrated Business Planning, Demand Planning,
            Supply Planning, Sales &amp; Operations Planning, Production Planning, Network Planning, Order
            Promising, Service Parts Planning, Logististics Optimization,Business Intelligence, Product Value
            Chain and Hyperion planning.
          </p>
        </div>

        {/* 6 Planning Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.href}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-sky-300 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-sky-50 text-brand-primary-600 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-semibold text-sky-600 uppercase tracking-wide mb-1">
                    {item.code}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <Link
                  to={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary-600 group-hover:text-brand-primary-800 transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Verticals Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Factory className="w-6 h-6 text-brand-primary-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Pleco has extensive experience in various verticals
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {verticals.map((vert) => (
              <div
                key={vert}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{vert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
