import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, TrendingUp, Users, ChevronRight } from 'lucide-react';

/**
 * Milestone 1 Placeholder: Home Page (Route: `/`)
 * Features hero overview and previews for all 4 core spotlights (About, Services, Solutions, Testimonials).
 */
export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-brand-primary-900 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary-800/80 border border-brand-primary-700/60 text-sky-300 text-xs sm:text-sm font-medium mb-6">
              <Award className="w-4 h-4 text-sky-400" />
              <span>Oracle Specialized Value Chain Planning Partner</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Strategic Oracle Value Chain Planning &amp; SCM Cloud Consulting
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Pleco is a Business consulting firm primarily focused on providing most comprehensive and
              cost-effective Oracle Value Chain Planning and Oracle Edge Product solutions to the customers
              across various industry verticals.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-lg hover:shadow-sky-500/20"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-sm transition-all"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlights Grid */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Spotlight 1: About */}
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">About Pleco</h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              We partner with Oracle in bringing best and proven standard business practices as well as our
              extensive experience in various industry segments enable us to deliver a robust solution.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary-600 hover:text-brand-primary-800"
            >
              <span>More Info</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Spotlight 2: Services */}
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Consulting Services</h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Pleco provides comprehensive services in Value Chain Planning and Oracle® Edge product areas that
              enables business to "achieve most" from their consulting partners.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary-600 hover:text-brand-primary-800"
            >
              <span>More Info</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Spotlight 3: Solutions */}
          <div className="p-8 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Planning Solutions</h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Comprehensive capabilities across Demand Planning, Supply Planning, IBP, Network Planning,
              Production Scheduling, and Order Promising.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary-600 hover:text-brand-primary-800"
            >
              <span>Explore Portfolio</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <p className="text-xs uppercase tracking-wider text-sky-400 font-semibold mb-3">
              Client Testimonial
            </p>
            <blockquote className="text-base sm:text-lg italic text-slate-200 mb-4 leading-relaxed">
              "A highly valued asset during the implementation phase of Demantra. The product knowledge PLECO
              brought to the team helped resolve various customization activities within the module. Team was often
              challenged to provide solutions on various complex business needs. They quickly resolved all scenarios
              and often exceeded expectations. I strongly recommend this team for similiar efforts"
            </blockquote>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-slate-800">
              <span className="text-sm font-medium text-slate-400">
                — Demand Manager Lead, Hi-Tech
              </span>
              <Link
                to="/customers"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Read All Testimonials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
