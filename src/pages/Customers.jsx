import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { Quote, Star, Building2, ArrowRight } from 'lucide-react';

/**
 * Milestone 1 Placeholder: Customers / Testimonials Page (Route: `/customers`)
 * Features all 3 full verbatim enterprise reviews from Qualcomm, PetSafe, and Cummins.
 */
export default function Customers() {
  const testimonials = [
    {
      company: 'Hi-Tech Leader (Qualcomm Ecosystem)',
      author: 'Demand Manager Lead',
      role: 'Hi-Tech',
      quote:
        'A highly valued asset during the implementation phase of Demantra. The product knowledge PLECO brought to the team helped resolve various customization activities within the module. Team was often challenged to provide solutions on various complex business needs. They quickly resolved all scenarios and often exceeded expectations. I strongly recommend this team for similiar efforts',
      highlight: 'Exceeded expectations on complex Demantra customization',
    },
    {
      company: 'PetSafe (Radio Systems Corporation)',
      author: 'ERP Manager',
      role: 'Enterprise Systems',
      quote:
        "Pleco Solutions delivered a fully functional VCP proof-of-concept in just 2 weeks—achieving what our previous consulting partner couldn't deliver in two months—and guided our full implementation to go-live well ahead of the anticipated six-month timeline.",
      highlight: 'Delivered VCP POC in 2 weeks ahead of 6-month timeline',
    },
    {
      company: 'Cummins Power Generation',
      author: 'Business Planning & Analysis Manager',
      role: 'Supply Chain BP&A',
      quote:
        'The Pleco team provided invaluable support during our ODP migration to Oracle Demantra, delivering the project on schedule, shortening our monthly forecast cycle, and resolving complex planning challenges.',
      highlight: 'Shortened monthly forecast cycles and delivered ODP migration',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Customer Testimonials' }]} />

        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Client Success
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Customer Testimonials
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Read firsthand how Pleco Solutions partners with global enterprises to modernize Oracle planning
            systems, resolve intricate architectural bottlenecks, and deliver ahead of schedule.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                <Quote className="w-8 h-8 text-sky-300 mb-4" />
                <div className="inline-block px-2.5 py-1 rounded bg-sky-50 text-sky-700 text-xs font-semibold mb-4">
                  {t.highlight}
                </div>
                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                <div className="text-xs text-sky-600 font-semibold mt-1 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Bottom Banner */}
        <div className="bg-slate-900 rounded-2xl text-white p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Ready to achieve similar results?</h2>
            <p className="text-sm text-slate-400">
              Schedule a technical discovery session with our Oracle VCP specialists.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shrink-0"
          >
            <span>Contact Pleco Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
