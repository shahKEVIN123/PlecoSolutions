import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  Cpu,
  CheckCircle2,
  ArrowRight,
  Workflow,
  BarChart3,
  Award,
  Zap,
  Target,
  Sparkles,
} from 'lucide-react';

export default function IntegratedBusinessPlanning() {
  const framework = {
    acronym: 'SIMPLE',
    fullName: 'Smart Integrated Market-driven PLanning & Execution',
    motto: 'From Plan to Performance to Profit',
    alignedFunctions: ['Sales', 'Marketing', 'Operations', 'Finance'],
  };

  const coreTechnologies = [
    {
      title: 'Oracle Demantra Real-Time Sales & Operations Planning (RTSOP)',
      detail: 'Dynamic collaborative S&OP workbench reconciling commercial forecasts with constrained operational plans in real time.',
    },
    {
      title: 'Oracle Advanced Planning Command Center (APCC)',
      detail: 'Executive analytics dashboard providing multidimensional scenario comparison, financial P&L rollups, and KPI tracking.',
    },
  ];

  const keyCapabilities = [
    {
      title: 'Strategic "What-If" Scenario Modeling',
      desc: 'Simulate the financial and operational impact of pricing changes, product launches, capacity limits, and supplier disruptions before execution.',
    },
    {
      title: 'Operational & Financial Convergence',
      desc: 'Translate volume-based operational plans directly into revenue, margin, and working capital projections aligned with executive financial targets.',
    },
    {
      title: 'Single consensus one-number forecast',
      desc: 'Eliminate conflicting spreadsheets by establishing a unified, cross-functional consensus plan binding Sales, Marketing, Operations, and Finance.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Integrated Business Planning' },
          ]}
        />

        {/* Hero Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-12 shadow-xl relative overflow-hidden border border-slate-700/60">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="glass-pill-dark inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sky-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>S&amp;OP &amp; Executive Analytics</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Integrated Business Planning (IBP)
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Bridge the divide between executive corporate strategy and day-to-day supply chain execution.
              Pleco’s Integrated Business Planning framework couples Oracle Demantra Real-Time S&amp;OP and
              Advanced Planning Command Center (APCC) to establish an authoritative one-number consensus plan.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20"
              >
                <span>Consult an IBP / S&amp;OP Architect</span>
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

        {/* SIMPLE Framework Feature Card */}
        <div className="mb-16 p-8 lg:p-12 rounded-3xl glass-card shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pleco-ice/90 border border-blue-200 text-pleco-blue text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Proprietary Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The {framework.acronym} Framework
            </h2>
            <div className="text-sm font-semibold text-pleco-blue mt-1">
              {framework.fullName}
            </div>
            <p className="text-sm italic text-slate-500 mt-1">
              "{framework.motto}"
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {framework.alignedFunctions.map((func) => (
              <div
                key={func}
                className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/80 text-center hover:bg-pleco-ice/70 hover:border-blue-200 transition-all shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-pleco-blue flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <Target className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-slate-900">{func}</div>
                <div className="text-[11px] text-slate-500 mt-1">Aligned Function</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl border-t border-slate-100 pt-6">
            The SIMPLE framework ensures all operational plans directly serve executive profit targets while maintaining customer service commitments across Sales, Marketing, Operations, and Finance.
          </p>
        </div>

        {/* Core Technologies */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Technology Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Core Technologies &amp; Dashboards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreTechnologies.map((tech) => (
              <div
                key={tech.title}
                className="p-7 rounded-2xl glass-card hover:border-pleco-blue hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pleco-ice/90 border border-blue-100 text-pleco-blue flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Workflow className="w-5 h-5" />
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
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Key Capabilities &amp; Convergence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Bottom Consultation CTA */}
        <div className="p-8 lg:p-10 rounded-2xl bg-pleco-ice border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Elevate Your S&amp;OP to Integrated Business Planning
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Align executive finance, commercial sales, and operational manufacturing with Oracle Demantra RTSOP &amp; APCC.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pleco-blue hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shrink-0"
          >
            <span>Request IBP Workshop</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
