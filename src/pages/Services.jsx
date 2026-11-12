import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { Compass, Map, Server, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Milestone 1 Placeholder: Services Page (Route: `/services`)
 * Details the 4 core consulting pillars: Strategy, Roadmap, Implementation, and Managed Services.
 */
export default function Services() {
  const pillars = [
    {
      title: 'Strategy & Optimization',
      icon: Compass,
      description:
        'Aligning supply chain operations with business goals, eliminating operational friction, and extracting maximum ROI from Oracle VCP and SCM Cloud investments.',
    },
    {
      title: 'Roadmap Planning for Oracle Planning',
      icon: Map,
      description:
        'Evaluating challenges, architectural constraints, and business goals to chart an actionable, risk-free migration and implementation roadmap.',
    },
    {
      title: 'Implementation & Upgrades',
      icon: Server,
      description:
        'End-to-end full lifecycle architecture, configuration, integration, and performance tuning delivered on-time and within budget.',
    },
    {
      title: 'Mentoring & Managed Services',
      icon: Headphones,
      description:
        '24/7 technical and functional help desk support, proactive system monitoring, knowledge transfer, and lower ongoing total cost of ownership (TCO).',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Consulting Practice
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Consulting Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
            Pleco provides comprehensive services in Value Chain Planning and Oracle® Edge product areas that
            enables business to "achieve most" from their consulting partners.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our core area of focus is in Value Chain Planning Thought Leadership, Strategy and Implementation
            as well as post-implementation risk mitigation via Pleco’s Managed Services.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-sky-50 text-brand-primary-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{pillar.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary-600 hover:text-brand-primary-800"
                  >
                    <span>Request Pillar Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Managed Services Commitment */}
        <div className="bg-brand-primary-900 text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">24/7 Managed Services &amp; Risk Mitigation</h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Our dedicated support team provides continuous post-go-live care, ensuring your planning systems
              operate with maximum reliability, minimal downtime, and rapid resolution of operational issues.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all"
            >
              <span>Connect with our Managed Services Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
