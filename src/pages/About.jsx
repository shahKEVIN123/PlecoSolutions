import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  ShieldCheck,
  Award,
  Users,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Target,
  Factory,
  Package,
  Pill,
  Briefcase,
  Building2,
  Sparkles,
} from 'lucide-react';

export default function About() {
  const highlights = [
    'Deep specialization in Oracle VCP (Demantra, ASCP, GOP, S&OP) and SCM Cloud',
    'Proven delivery track record across Fortune 500 and mid-market leaders',
    'Certified Oracle planning consultants with deep domain and technical expertise',
    'Pragmatic business methodology balancing rapid time-to-value with scalability',
  ];

  const pillars = [
    {
      title: 'Oracle Partnership Alignment',
      desc: 'We adhere strictly to official Oracle standard business practices, ensuring upgrades and extensions remain fully maintainable.',
      icon: Award,
    },
    {
      title: 'Pragmatic Methodology',
      desc: 'Balancing rapid proof-of-concepts with robust enterprise architecture to deliver fast time-to-value without cutting corners.',
      icon: Target,
    },
    {
      title: 'Cross-Vertical Fluency',
      desc: 'Deep familiarity with unique compliance, batching, configure-to-order, and distribution requirements across industries.',
      icon: Factory,
    },
    {
      title: 'Dedicated Managed Care',
      desc: '24/7 technical and functional help desk support that minimizes post-go-live operational risk and protects ongoing business continuity.',
      icon: ShieldCheck,
    },
  ];

  const verticals = [
    {
      title: 'Hi-Tech | Consumer Packaged Goods (CPG)',
      desc: 'High-velocity demand shaping, configure-to-order allocation, and real-time order promising.',
      icon: Package,
    },
    {
      title: 'Industrial Manufacturing | Distribution',
      desc: 'Finite capacity scheduling, machine bottleneck elimination, and supplier VMI programs.',
      icon: Factory,
    },
    {
      title: 'Life Sciences | Pharma | Process industry',
      desc: 'Batch shelf-life management, potency tracking, cold-chain synchronization, and strict compliance.',
      icon: Pill,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Niche Oracle Planning Expertise</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              About Pleco
            </h1>

            {/* Verbatim Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                Pleco is a Business consulting firm primarily focused on providing most comprehensive and
                cost-effective Oracle Value Chain Planning and Oracle Edge Product solutions to the customers
                across various industry verticals.
              </p>
              <p>
                We partner with Oracle in bringing best and proven standard business practices as well as our
                extensive experience in various industry segments enable us to deliver a robust solution.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/customers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Read Client Testimonials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 font-semibold text-sm transition-all"
              >
                <span>Contact Leadership</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Organizations Choose Pleco */}
        <div className="mb-16 bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Core Value Proposition
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Organizations Choose Pleco
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {highlights.map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:bg-pleco-ice hover:border-blue-200 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-pleco-blue shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
            {pillars.map((p) => {
              const IconComp = p.icon;
              return (
                <div key={p.title} className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-pleco-ice text-pleco-blue flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industry Verticals Section */}
        <div className="mb-16 bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Industry Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Pleco has extensive experience in various verticals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verticals.map((v) => {
              const IconComp = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-pleco-blue inline-flex mb-4 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sub-navigation Directory Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <Link
            to="/customers"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-pleco-blue hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-pleco-ice text-pleco-blue flex items-center justify-center mb-4 group-hover:bg-pleco-blue group-hover:text-white transition-colors">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-pleco-blue transition-colors mb-1">
              Customer Testimonials
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Explore verified client outcomes from Qualcomm, PetSafe, and Cummins.
            </p>
            <span className="text-xs font-bold text-pleco-blue inline-flex items-center gap-1">
              <span>View Reviews</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>

          <Link
            to="/careers"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-pleco-blue hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-pleco-ice text-pleco-blue flex items-center justify-center mb-4 group-hover:bg-pleco-blue group-hover:text-white transition-colors">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-pleco-blue transition-colors mb-1">
              Career Opportunities
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Join our elite consulting team as an ASCP or Demantra implementation specialist.
            </p>
            <span className="text-xs font-bold text-pleco-blue inline-flex items-center gap-1">
              <span>View Openings</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>

          <Link
            to="/contact"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-pleco-blue hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-pleco-ice text-pleco-blue flex items-center justify-center mb-4 group-hover:bg-pleco-blue group-hover:text-white transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-pleco-blue transition-colors mb-1">
              Contact Leadership
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Connect directly with our headquarters team for inquiries and project scoping.
            </p>
            <span className="text-xs font-bold text-pleco-blue inline-flex items-center gap-1">
              <span>Get in Touch</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
