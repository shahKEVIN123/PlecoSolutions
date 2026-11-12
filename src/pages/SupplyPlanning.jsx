import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Cpu,
  BarChart2,
  Boxes,
  Zap,
  ShieldCheck,
  Award,
} from 'lucide-react';

export default function SupplyPlanning() {
  const coreTechnologies = [
    {
      title: 'Oracle Advanced Supply Chain Planning (ASCP)',
      detail: 'Comprehensive simultaneous material and capacity constraint planning across multi-tier enterprise supply chain networks.',
    },
    {
      title: 'Oracle Rapid Planning (RP)',
      detail: 'Ultra-fast in-memory planning engine supporting rapid simulations, hot-scenario evaluations, and incremental replans in minutes.',
    },
    {
      title: 'Oracle Inventory Optimization (IO)',
      detail: 'Stochastic multi-echelon postponement algorithms establishing time-phased safety stock targets balanced against service levels and risk.',
    },
  ];

  const keyCapabilities = [
    {
      title: 'Multi-Tier Network Visibility',
      desc: 'Multi-tier supply chain planning across suppliers, plants, distribution centers, and customers with end-to-end pegging.',
    },
    {
      title: 'Flexible Planning Modes',
      desc: 'Supports unconstrained, material-constrained, resource-constrained, and fully cost-optimized planning modes based on operational priority.',
    },
    {
      title: 'In-Memory Incremental Engine',
      desc: 'High-speed, fast in-memory incremental planning engine allowing immediate simulation of supply disruptions or demand spikes.',
    },
    {
      title: 'Multi-Echelon Safety Stock Optimization',
      desc: 'Time-phased optimal safety stock and inventory targets across multi-echelon network minimizing tied-up working capital.',
    },
  ];

  const benefits = [
    'Drastically reduce inventory holding costs while sustaining 98%+ on-time order delivery',
    'Evaluate multiple supply disruption what-if scenarios in minutes before committing purchase orders',
    'Synchronize production capacities with real-time supplier component constraints',
    'Eliminate expedited freight costs through proactive bottleneck identification',
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

        {/* Hero Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-12 shadow-xl relative overflow-hidden border border-slate-700/60">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="glass-pill-dark inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sky-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Oracle Value Chain Planning | ASCP / RP / IO</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Advanced Supply Planning Solutions
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Pleco delivers high-performance supply planning architectures using Oracle Advanced Supply Chain Planning (ASCP),
              Oracle Rapid Planning, and Inventory Optimization. We help enterprise clients synchronize supplier constraints,
              manufacturing capacities, and distribution channels into a unified, responsive supply plan.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20"
              >
                <span>Consult an ASCP Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm font-semibold text-sm transition-all shadow-sm"
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
              Core Technologies &amp; Engines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreTechnologies.map((tech) => (
              <div
                key={tech.title}
                className="p-7 rounded-2xl glass-card hover:border-pleco-blue hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pleco-ice/90 border border-blue-100 text-pleco-blue flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Boxes className="w-5 h-5" />
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
        <div className="mb-16 glass-card rounded-3xl p-8 lg:p-12 shadow-sm">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Planning Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Key Capabilities &amp; Optimization Modes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-pleco-blue shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Card */}
        <div className="mb-16 p-8 lg:p-12 rounded-3xl glass-card-dark text-white border border-slate-700/60 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              Business Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Measurable Supply Chain Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3 backdrop-blur-sm"
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
              Need ASCP Configuration or Rapid Planning Tuning?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Our principal supply planning architects have tuned complex multi-echelon networks for Fortune 500 manufacturers.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pleco-blue hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shrink-0"
          >
            <span>Request ASCP Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
