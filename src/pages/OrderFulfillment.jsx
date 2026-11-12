import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  CheckCircle2,
  ArrowRight,
  Truck,
  ShieldCheck,
  Zap,
  Clock,
  Layers,
  Award,
} from 'lucide-react';

export default function OrderFulfillment() {
  const coreTechnologies = [
    {
      title: 'Oracle Global Order Promising (GOP)',
      detail: 'High-availability memory-resident order promising engine evaluating real-time supply, production capacity, and transit schedules with sub-second response times.',
    },
    {
      title: 'Oracle Distributed Order Orchestration (DOO)',
      detail: 'Centralized business process orchestrator harmonizing multi-channel customer order capture, validation, routing, and fulfillment execution.',
    },
  ];

  const keyCapabilities = [
    {
      title: '24x7 Customer Order Promising with zero downtime',
      desc: '24x7 Customer Order Promising with zero downtime, maintaining continuous sub-second response times during live plan regenerations and ERP maintenance.',
    },
    {
      title: 'Constraint-Aware Promising',
      desc: 'Evaluates inventory, component availability, production capacity constraints, and supplier lead times before returning reliable commit dates.',
    },
    {
      title: 'Available to Promise (ATP)',
      desc: 'Instant verification of existing uncommitted warehouse inventory and scheduled supply receipts across distribution networks.',
    },
    {
      title: 'Capable to Promise (CTP)',
      desc: 'Simultaneous explosion of dynamic bill-of-materials and shop-floor capacity to promise customer orders that require on-demand manufacturing.',
    },
    {
      title: 'Capable to Deliver (CTD)',
      desc: 'End-to-end transportation transit calendar and carrier constraint modeling determining exact door-to-door customer delivery dates.',
    },
    {
      title: 'Fair-Share Supply Allocation for strategic accounts',
      desc: 'Hierarchical allocation rules protecting critical customer quotas and preventing supply starvation during constrained allocation periods.',
    },
    {
      title: 'Complex Configure-to-Order (CTO) Architecture',
      desc: 'Rules-based model and option promising ensuring custom configured products match valid engineering permutations and component availability.',
    },
    {
      title: 'Enterprise Multi-System Integration',
      desc: 'High-throughput connectors bridging multiple ERPs, eCommerce storefronts, WMS, and TMS platforms into a unified order orchestrator.',
    },
  ];

  const benefits = [
    'Guarantee 99.5%+ fulfillment promise reliability and eliminate costly missed ship-date penalties',
    'Operate 24/7 global eCommerce and B2B ordering channels with zero maintenance downtime',
    'Protect strategic high-margin account allocations during product shortages or component crunches',
    'Accelerate order cycle time through automated multi-channel distributed order routing',
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

        {/* Hero Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <Truck className="w-4 h-4 text-cyan-400" />
              <span>Real-Time Order Promising | GOP / DOO</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Order Fulfillment &amp; Real-Time Promising
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Empower global sales and eCommerce channels with accurate, constraint-validated delivery dates.
              Pleco implements Oracle Global Order Promising (GOP) and Distributed Order Orchestration (DOO)
              to guarantee 24x7 zero-downtime order promising across complex distribution networks.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Consult an Order Promising Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 font-semibold text-sm transition-all"
              >
                <span>View All Solutions</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Technology Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Core Promising &amp; Orchestration Engines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreTechnologies.map((tech) => (
              <div
                key={tech.title}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-pleco-blue hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-pleco-ice text-pleco-blue flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tech.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="mb-16 bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Fulfillment Rules
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Key Capabilities &amp; Promising Rules (ATP, CTP, CTD)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-pleco-blue shrink-0" />
                    <h3 className="text-xs font-bold text-slate-900">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Card */}
        <div className="mb-16 p-8 lg:p-12 rounded-3xl bg-slate-900 text-white">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              Business Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Order Promising &amp; Fulfillment ROI
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3"
              >
                <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="p-8 lg:p-10 rounded-2xl bg-pleco-ice border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Ready to Implement 24x7 Global Order Promising?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Eliminate order fulfillment latency and allocate constrained inventory with mathematical fairness.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pleco-blue hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shrink-0"
          >
            <span>Request GOP Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
