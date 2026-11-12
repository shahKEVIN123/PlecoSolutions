import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { Truck, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * Milestone 1 Placeholder: Order Fulfillment (Route: `/order-fulfillment`)
 * Highlights Oracle Global Order Promising (GOP) and Distributed Order Orchestration (DOO).
 */
export default function OrderFulfillment() {
  const capabilities = [
    'Oracle Global Order Promising (GOP)',
    'Distributed Order Orchestration (DOO)',
    '24/7 high-availability Available-To-Promise (ATP) engine',
    'Capable-To-Promise (CTP) dynamic resource promising',
    'Capable-To-Deliver (CTD) transit lead-time calculation',
    'Multi-channel order allocation and profitable fulfillment sourcing',
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Order Fulfillment' },
          ]}
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm mb-12">
          <div className="w-14 h-14 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-6">
            <Truck className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-50 text-cyan-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Global Order Promising (GOP) &amp; DOO
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Order Fulfillment &amp; Promising
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mb-8">
            Pleco Solutions deploys Oracle Global Order Promising (GOP) and Distributed Order Orchestration (DOO)
            to deliver instantaneous, dependable order commitments. We enable 24/7 real-time order promising across
            complex global supply networks while maximizing fulfillment profitability and customer satisfaction.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">Core Module Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium text-sm transition-colors"
            >
              <span>Implement Global Promising</span>
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
