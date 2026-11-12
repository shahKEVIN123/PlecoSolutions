import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  TrendingUp,
  Layers,
  Cpu,
  Network,
  Clock,
  CheckCircle2,
  ArrowRight,
  Factory,
  Package,
  Pill,
  Award,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function SolutionsHub() {
  const solutions = [
    {
      title: 'Demand Planning',
      href: '/demand-planning',
      code: 'Oracle Demantra DM / AFDM / SPF',
      description: 'Advanced Bayesian forecasting engines, multi-dimensional demand modeling, automated forecast analytics, and service parts forecasting.',
      icon: TrendingUp,
      accent: 'from-blue-600 to-cyan-500',
      highlights: ['Multidimensional Data Modeling', 'Automated Forecast Analytics', 'ODP-to-Demantra Migration'],
    },
    {
      title: 'Supply Planning',
      href: '/supply-planning',
      code: 'Oracle ASCP / Rapid Planning / IO',
      description: 'Holistic multi-echelon supply chain planning, material and resource constraints, in-memory simulations, and safety stock optimization.',
      icon: Layers,
      accent: 'from-indigo-600 to-blue-500',
      highlights: ['Multi-tier Supply Chain Planning', 'Constrained & Cost-Optimized', 'In-Memory Incremental Engine'],
    },
    {
      title: 'Integrated Business Planning',
      href: '/integrated-business-planning',
      code: 'SIMPLE Framework / Real-Time S&OP',
      description: 'Executive alignment across Sales, Marketing, Operations, and Finance translating strategic goals into a consensus one-number plan.',
      icon: Cpu,
      accent: 'from-cyan-600 to-teal-500',
      highlights: ['SIMPLE Framework Methodology', 'Demantra Real-Time S&OP', 'APCC Financial Convergence'],
    },
    {
      title: 'Network Planning',
      href: '/network-planning',
      code: 'Oracle SNO / Collaborative Planning',
      description: 'Strategic network design, sourcing cost minimization, contingency modeling, and multi-tier partner collaboration.',
      icon: Network,
      accent: 'from-blue-700 to-indigo-600',
      highlights: ['Supply Chain Network Modeling', 'Strategic What-If Simulation', 'Vendor Managed Inventory (VMI)'],
    },
    {
      title: 'Production Planning',
      href: '/production-planning',
      code: 'Oracle Production Scheduling (PS)',
      description: 'Finite capacity scheduling, sequence-dependent setup minimization, bottleneck elimination, and factory-floor dispatch workbench.',
      icon: Clock,
      accent: 'from-sky-600 to-blue-600',
      highlights: ['Resource & Bottleneck Optimization', 'Constraint-Based Finite Scheduling', 'Setup Time Minimization'],
    },
    {
      title: 'Order Fulfillment',
      href: '/order-fulfillment',
      code: 'Oracle GOP / DOO',
      description: '24/7 high-availability ATP, CTP, and CTD order promising with distributed order orchestration and zero downtime.',
      icon: CheckCircle2,
      accent: 'from-emerald-600 to-teal-500',
      highlights: ['24x7 Customer Order Promising', 'ATP / CTP / CTD Rules Engine', 'Fair-Share Supply Allocation'],
    },
  ];

  const coreModules = [
    'Integrated Business Planning',
    'Demand Planning',
    'Supply Planning',
    'Sales & Operations Planning',
    'Production Planning',
    'Network Planning',
    'Order Promising',
    'Service Parts Planning',
    'Logististics Optimization',
    'Business Intelligence',
    'Product Value Chain',
    'Hyperion planning',
  ];

  const verticals = [
    {
      title: 'Hi-Tech | Consumer Packaged Goods (CPG)',
      desc: 'Rapid product life cycles, demand shaping, configure-to-order (CTO) architectures, and real-time ATP fulfillment.',
      icon: Package,
    },
    {
      title: 'Industrial Manufacturing | Distribution',
      desc: 'Complex bill of materials (BOM), finite resource scheduling, multi-tier supply chain networks, and supplier VMI.',
      icon: Factory,
    },
    {
      title: 'Life Sciences | Pharma | Process industry',
      desc: 'Stringent regulatory tracking, potency batch balancing, expiration date constraints, and cold-chain logistics.',
      icon: Pill,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Solutions' }]} />

        {/* Hero Header Card */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="glass-pill-dark inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Comprehensive Enterprise Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Oracle Planning Solutions Portfolio
            </h1>

            {/* Verbatim Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Pleco serve customers to enhance processes for Integrated Business Planning, Demand Planning,
              Supply Planning, Sales &amp; Operations Planning, Production Planning, Network Planning, Order
              Promising, Service Parts Planning, Logististics Optimization,Business Intelligence, Product Value
              Chain and Hyperion planning.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Request Architecture Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#all-modules"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/20 font-semibold text-sm transition-all backdrop-blur-md"
              >
                <span>View All 12 Modules</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Planning Modules Bento Grid */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
                Deep-Dive Modules
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Specialized Value Chain Planning Domains
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Each module is delivered with proven deployment templates, customized data models, and verified Oracle standard practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.href}
                  className="glass-card rounded-3xl p-7 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-pleco-ice/90 group-hover:bg-pleco-blue text-pleco-blue group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs border border-blue-100">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-md">
                        {item.code.split('/')[0].trim()}
                      </span>
                    </div>

                    <div className="text-[11px] font-bold text-pleco-blue uppercase tracking-wider mb-1">
                      {item.code}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pleco-blue transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {item.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-pleco-blue shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={item.href}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-bold text-pleco-blue group-hover:text-blue-700 transition-colors"
                  >
                    <span>Explore Deep-Dive</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* All 12 Oracle Modules Catalog Section */}
        <div id="all-modules" className="mb-20 p-8 lg:p-12 rounded-3xl glass-card">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Complete Functional Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              All 12 Core Oracle Planning Disciplines
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pleco Solutions provides certified, multi-disciplined consultants skilled in every facet of Oracle’s supply chain planning suite:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {coreModules.map((mod) => (
              <div
                key={mod}
                className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/80 hover:bg-pleco-ice/80 hover:border-blue-200 transition-all flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-pleco-blue shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {mod}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Verticals Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-pleco-ice/90 border border-blue-100 text-pleco-blue">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block">
                Target Industries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Pleco has extensive experience in various verticals
              </h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-8 max-w-3xl leading-relaxed">
            Our consultants understand the distinct supply chain challenges inherent to discrete manufacturing, fast-moving consumer packaged goods, and regulated pharmaceutical distribution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verticals.map((vert) => {
              const IconComp = vert.icon;
              return (
                <div
                  key={vert.title}
                  className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-pleco-blue inline-flex mb-4 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {vert.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {vert.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="text-center bg-gradient-to-r from-pleco-navy-dark via-navy-900 to-pleco-navy-dark p-10 lg:p-14 rounded-3xl text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
            Need Expert Guidance on Your Oracle Planning Architecture?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Schedule a confidential technical review with our principal architects to explore deployment roadmaps, upgrade feasibility, and performance tuning.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-blue-500/25"
          >
            <span>Schedule Initial Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
