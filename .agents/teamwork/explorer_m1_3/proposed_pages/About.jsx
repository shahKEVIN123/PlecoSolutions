import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { ShieldCheck, Award, Users, ChevronRight, CheckCircle2 } from 'lucide-react';

/**
 * Milestone 1 Placeholder: About Us Page (Route: `/about`)
 * Highlights Pleco's positioning, Oracle partnership philosophy, and industry background.
 */
export default function About() {
  const highlights = [
    'Deep specialization in Oracle VCP (Demantra, ASCP, GOP, S&OP) and SCM Cloud',
    'Proven delivery track record across Fortune 500 and mid-market leaders',
    'Certified Oracle planning consultants with deep domain and technical expertise',
    'Pragmatic business methodology balancing rapid time-to-value with scalability',
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-medium mb-6">
            <Award className="w-4 h-4 text-sky-600" />
            <span>Niche Oracle Planning Expertise</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
            About Pleco Solutions
          </h1>

          <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-4xl">
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

          <h2 className="text-xl font-bold text-slate-900 mb-4">Why Organizations Choose Pleco</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Quick Sub-navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
            <Link
              to="/customers"
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-white transition-all group"
            >
              <div className="text-sm font-bold text-slate-900 mb-1 group-hover:text-sky-600 flex items-center justify-between">
                <span>Customer Testimonials</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600" />
              </div>
              <p className="text-xs text-slate-500">Read verified reviews from enterprise clients.</p>
            </Link>

            <Link
              to="/careers"
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-white transition-all group"
            >
              <div className="text-sm font-bold text-slate-900 mb-1 group-hover:text-sky-600 flex items-center justify-between">
                <span>Career Opportunities</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600" />
              </div>
              <p className="text-xs text-slate-500">Explore open ASCP and Demantra consulting roles.</p>
            </Link>

            <Link
              to="/contact"
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-white transition-all group"
            >
              <div className="text-sm font-bold text-slate-900 mb-1 group-hover:text-sky-600 flex items-center justify-between">
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600" />
              </div>
              <p className="text-xs text-slate-500">Connect with our executive team in Carrollton, TX.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
