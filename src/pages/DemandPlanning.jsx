import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  BarChart3,
  RefreshCw,
  Zap,
} from 'lucide-react';

export default function DemandPlanning() {
  const coreTechnologies = [
    {
      title: 'Oracle Demantra Demand Management (DM)',
      detail: 'Multi-tiered Bayesian statistical forecasting engine that automatically selects optimal algorithms based on demand pattern volatility.',
    },
    {
      title: 'Oracle Demantra Advanced Forecasting & Demand Modeling (AFDM)',
      detail: 'Sophisticated causal factor analytics modeling promotions, price elasticity, external macroeconomic drivers, and retail point-of-sale data.',
    },
    {
      title: 'Legacy ODP-to-Demantra Migration',
      detail: 'Rapid conversion utilities, hierarchy restructuring, and proven migration templates transitioning on-premise ODP to modern Demantra.',
    },
  ];

  const keyCapabilities = [
    {
      title: 'Multidimensional Data Modeling',
      desc: 'Seamless aggregation and disaggregation across product families, customer accounts, sales territories, and manufacturing facilities.',
    },
    {
      title: 'Automated Forecast Analytics',
      desc: 'Autonomous algorithm tournament selecting the most accurate statistical forecast while minimizing user intervention.',
    },
    {
      title: 'Real-Time Forecast Capabilities',
      desc: 'Immediate recalculation of projected demand volumes and revenues upon updating promotional or commercial assumptions.',
    },
    {
      title: 'Product Lifecycle Management & Phase-Out',
      desc: 'Supersession modeling, like-item history mapping, and gradual phase-in / phase-out curves preventing obsolescence.',
    },
    {
      title: 'Web-Based Collaboration & Exception Management',
      desc: 'Consensus forecasting workbench uniting commercial, finance, and operations teams with automated exception alerts.',
    },
  ];

  const benefits = [
    'Increase on-time customer order fulfillment and service levels',
    'Elevate sales revenue through improved product availability',
    'Boost customer satisfaction and brand loyalty',
    'Substantially decrease inventory carrying and distribution logistics costs',
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Demand Planning' },
          ]}
        />

        {/* Hero Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-12 shadow-xl relative overflow-hidden border border-slate-700/60">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="glass-pill-dark inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sky-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Oracle Demantra Suite | DM / AFDM / SPF</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Demand Planning Solutions
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Pleco Solutions specializes in delivering industry-leading Demand Planning solutions utilizing
              Oracle Demantra Demand Management (DM), Advanced Forecasting and Demand Modeling (AFDM), and
              Service Parts Forecasting (SPF). We empower organizations to automate complex forecasting, model
              causal factors, and eliminate forecast cycle latency.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20"
              >
                <span>Consult an ASCP / Demantra Expert</span>
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

        {/* Core Technologies Grid */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Technology Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Core Technologies &amp; Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreTechnologies.map((tech) => (
              <div
                key={tech.title}
                className="p-7 rounded-2xl glass-card hover:border-pleco-blue hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pleco-ice/90 border border-blue-100 text-pleco-blue flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-5 h-5" />
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

        {/* Key Capabilities Section */}
        <div className="mb-16 glass-card rounded-3xl p-8 lg:p-12 shadow-sm">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Functional Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Key Capabilities &amp; Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Measurable ROI Benefits Card */}
        <div className="mb-16 p-8 lg:p-12 rounded-3xl glass-card-dark text-white border border-slate-700/60 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              Business Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Proven Business ROI &amp; Operational Impact
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

        {/* Bottom Consultation Callout */}
        <div className="p-8 lg:p-10 rounded-2xl bg-pleco-ice border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Ready to Upgrade or Deploy Oracle Demantra?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Speak with a certified Demantra implementation specialist about your forecasting challenges.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pleco-blue hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shrink-0"
          >
            <span>Schedule Demantra Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
