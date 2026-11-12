import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  Network,
  CheckCircle2,
  ArrowRight,
  Globe2,
  ShieldAlert,
  Share2,
  Award,
  Zap,
} from 'lucide-react';

export default function NetworkPlanning() {
  const coreTechnologies = [
    {
      title: 'Oracle Strategic Network Optimization (SNO)',
      detail: 'Mathematically rigorous mixed-integer linear programming (MILP) solver optimizing total landed costs across global facility networks.',
    },
    {
      title: 'Oracle Collaborative Planning (CP)',
      detail: 'Web-based B2B multi-tier collaboration hub enabling automated demand and supply signal sharing with suppliers, contract manufacturers, and customers.',
    },
  ];

  const keyCapabilities = [
    {
      title: 'Comprehensive Network Modeling',
      desc: 'Comprehensive supply chain network modeling accounting for all facilities, nodes, lanes, costs, and limits to evaluate total cost-to-serve.',
    },
    {
      title: 'Strategic What-If Simulation',
      desc: 'Strategic what-if simulation (single vs multi-sourcing, inventory pre-build vs overtime, tariffs, M&A) before making major capital expenditures.',
    },
    {
      title: 'Resilient Contingency Planning',
      desc: 'Robust contingency planning against unplanned interruptions and natural disasters to guarantee operational continuity and risk mitigation.',
    },
    {
      title: 'Vendor Managed Inventory (VMI)',
      desc: 'Vendor Managed Inventory (VMI) programs for strategic trading partners with automated replenishment triggers and collaborative exception workflows.',
    },
  ];

  const benefits = [
    'Model total supply chain landed cost savings across manufacturing, warehousing, duties, and transport',
    'Stress-test supplier geopolitical, climatic, or capacity vulnerabilities with automated contingency plans',
    'Evaluate facility consolidation, expansion, or contract manufacturing scenarios with mathematical precision',
    'Streamline supplier communication with automated forecast sharing and order commitment tracking',
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Network Planning' },
          ]}
        />

        {/* Hero Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-12 shadow-xl relative overflow-hidden border border-slate-700/60">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="glass-pill-dark inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sky-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Network className="w-4 h-4 text-cyan-400" />
              <span>Supply Chain Design | SNO / CP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Network Planning &amp; Supply Chain Design
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Design a resilient, cost-optimized global supply chain network. Pleco utilizes Oracle Strategic
              Network Optimization (SNO) and Oracle Collaborative Planning (CP) to evaluate facility footprints,
              sourcing strategies, and risk mitigation contingency models.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20"
              >
                <span>Consult a Network Design Specialist</span>
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
              Core Technologies &amp; Solvers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreTechnologies.map((tech) => (
              <div
                key={tech.title}
                className="p-7 rounded-2xl glass-card hover:border-pleco-blue hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pleco-ice/90 border border-blue-100 text-pleco-blue flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Globe2 className="w-5 h-5" />
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
              Strategic Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Key Capabilities &amp; Contingency Modeling
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
              Network Optimization ROI
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
              Ready to Stress-Test Your Supply Chain Network?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Evaluate total landed costs and build contingency architectures with Oracle SNO and Collaborative Planning.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pleco-blue hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shrink-0"
          >
            <span>Request Network Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
