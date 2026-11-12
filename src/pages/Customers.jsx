import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { Quote, Building2, ArrowRight, Award, ShieldCheck, CheckCircle2, Star } from 'lucide-react';

export default function Customers() {
  const testimonials = [
    {
      id: 'qualcomm',
      clientName: 'Qualcomm, Inc.',
      role: 'Demand Manager Lead, Hi-Tech (Qualcomm, Inc.)',
      industry: 'Hi-Tech',
      quote:
        'A highly valued asset during the implementation phase of Demantra. The product knowledge PLECO brought to the team helped resolve various customization activities within the module. Team was often challenged to provide solutions on various complex business needs. They quickly resolved all scenarios and often exceeded expectations. I strongly recommend this team for similiar efforts',
      highlight: 'Exceeded expectations on intricate Demantra customizations',
      metrics: 'Rapid Scenario Resolution',
    },
    {
      id: 'petsafe',
      clientName: 'PetSafe',
      role: 'ERP Manager, Petsafe',
      industry: 'Pet Products / CPG',
      quote:
        "Pleco worked as consulting partner for our Demantra Demand Management implementation project in August 2011. In just 2 weeks we had fully functional VCP proof-of-the-concept - something that previous implementation partner couldn't deliver in 2 months using handful of consultants. Few more weeks for couple of extensions and conversion - and we went live with project that was previously estimated to take half-year. . That's what distinguishes prime consultancy from sub-prime!",
      highlight: 'Functional POC in 2 weeks vs. competitor 2 months',
      metrics: 'Go-Live in Weeks vs. 6-Month Estimate',
    },
    {
      id: 'cummins',
      clientName: 'Cummins Power Generation',
      role: 'Business Planning & Analysis Manager, Cummins Power Generation',
      industry: 'Industrial Manufacturing',
      quote:
        "...[PLECO] supported Cummins Power Generation BP&A launched ODP migration to Oracle Demantra application. With his assistance, the whole project was finished on time and helped shorten the forecast cycle. ...[PLECO] good team players, very responsible, not only identify issues but also provide solutions. It's my pleasure to work with ...[PLECO].",
      highlight: 'Shortened forecast cycles & seamless ODP migration',
      metrics: 'On-Time Migration to Demantra',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Customer Testimonials' }]} />

        {/* Hero Header Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-16 shadow-xl relative overflow-hidden border border-slate-700/60">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="glass-pill-dark inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sky-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Verified Client Endorsements</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Customer Testimonials
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Read firsthand how Pleco Solutions partners with global enterprises to modernize Oracle planning
              systems, resolve intricate architectural bottlenecks, and deliver ahead of schedule.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm font-semibold text-sm transition-all shadow-sm"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-8 mb-20">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-3xl p-8 lg:p-12 shadow-sm relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Client Credential */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pleco-ice/90 border border-blue-200 text-pleco-blue text-xs font-bold uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{t.industry}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {t.clientName}
                  </h3>

                  <div className="text-sm font-semibold text-slate-700">
                    {t.role}
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/80 text-xs text-slate-600 space-y-1">
                    <div className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                      Outcome Spotlight:
                    </div>
                    <div className="font-medium text-pleco-blue">{t.metrics}</div>
                  </div>
                </div>

                {/* Right Side: Full Verbatim Quote */}
                <div className="lg:col-span-8 lg:border-l lg:border-slate-100 lg:pl-8 space-y-6">
                  <Quote className="w-10 h-10 text-blue-200" />
                  
                  <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed italic font-normal">
                    "{t.quote}"
                  </blockquote>

                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{t.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Bottom Banner */}
        <div className="bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy rounded-3xl text-white p-8 lg:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl border border-slate-700/60">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to achieve similar results?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Schedule a technical discovery session with our Oracle Value Chain Planning specialists.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-blue-500/25 shrink-0"
          >
            <span>Contact Pleco Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
