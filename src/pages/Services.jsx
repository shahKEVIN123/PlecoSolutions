import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  Compass,
  Map,
  Server,
  Headphones,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Cpu,
  Clock,
  ShieldCheck,
  Award,
  Zap,
} from 'lucide-react';

export default function Services() {
  const pillars = [
    {
      id: 'strategy-optimization',
      title: 'Strategy & Optimization',
      tag: 'Pillar 1',
      icon: Compass,
      focus: 'Developing strategic business plans to maximize ROI and streamline operational workflows.',
      deliverables: [
        'Translating high-level corporate strategies into functional designs',
        'Scalable business processes',
        'Enterprise system configurations',
      ],
    },
    {
      id: 'roadmap-planning',
      title: 'Roadmap Planning for Oracle Planning',
      tag: 'Pillar 2',
      icon: Map,
      focus: 'Conducting in-depth analyses of existing enterprise challenges, IT legacy constraints, and organizational goals.',
      deliverables: [
        'Phased adoption and upgrade roadmaps',
        'Coverage across Oracle SCM Cloud and on-premise application portfolios',
      ],
    },
    {
      id: 'implementation-upgrades',
      title: 'Implementation & Upgrades',
      tag: 'Pillar 3',
      icon: Server,
      focus: 'End-to-end project management and technical execution delivered by veteran Oracle specialists using standard, proven methodologies.',
      deliverables: [
        'Systems design and architecture',
        'Project scoping and third-party integrations',
        'Hardware sizing, installation, module configuration, migrations, testing, and performance tuning',
        'Role-based end-user training',
        'Commitment to on-time and within-budget delivery',
      ],
    },
    {
      id: 'managed-services',
      title: 'Mentoring & Managed Services',
      tag: 'Pillar 4',
      icon: Headphones,
      focus: 'Providing flexible, cost-effective functional and technical help desk support (including 24x7 options) for Oracle planning applications.',
      deliverables: [
        'Seamless onboarding of new and existing staff',
        'Post-implementation risk mitigation',
        'Patch testing and database maintenance',
        'Continuous performance tuning',
      ],
    },
  ];

  const lifecyclePhases = [
    {
      step: '01',
      phase: 'Discovery & Readiness Assessment',
      desc: 'Deep audit of existing ERP data models, planning bottlenecks, and business objectives.',
    },
    {
      step: '02',
      phase: 'Architectural Design & Scoping',
      desc: 'Formulating proven standard Oracle business processes and integration blueprints.',
    },
    {
      step: '03',
      phase: 'Implementation & System Configuration',
      desc: 'Rigorous module setup, conversion scripting, conference room pilots, and user training.',
    },
    {
      step: '04',
      phase: 'Post-Go-Live Managed Services',
      desc: '24/7 technical and functional help desk support, ongoing patch testing, and performance tuning.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Hero Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Full-Lifecycle Consulting Practice</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              End-to-End Consulting Services
            </h1>

            {/* Verbatim Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                Pleco provides comprehensive services in Value Chain Planning and Oracle® Edge product areas that
                enables business to “achieve most” from their consulting partners.
              </p>
              <p>
                Our core area of focus is in Value Chain Planning Thought Leadership, Strategy and Implementation as well
                as post-implementation risk mitigation via Pleco’s Managed Services.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Schedule a Services Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#four-pillars"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 font-semibold text-sm transition-all"
              >
                <span>Explore the 4 Pillars</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid Section */}
        <div id="four-pillars" className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Core Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              The Four Pillars of Pleco Consulting
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From high-level strategic alignment to 24/7 post-implementation managed care, our senior consultants deliver measurable value across the entire project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-pleco-ice text-pleco-blue flex items-center justify-center shadow-xs">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue bg-pleco-ice px-3 py-1 rounded-full">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed font-medium mb-6 pb-6 border-b border-slate-100">
                      {pillar.focus}
                    </p>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Key Deliverables &amp; Scope:
                      </div>
                      <ul className="space-y-2.5">
                        {pillar.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-pleco-blue shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-8 border-t border-slate-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-pleco-blue hover:text-blue-700 transition-colors"
                    >
                      <span>Inquire About {pillar.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagement Lifecycle Section */}
        <div className="mb-20 p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Methodology &amp; Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Standardized Delivery Lifecycle
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our structured approach combines Oracle standard methodologies with agile configuration sprints to de-risk implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecyclePhases.map((phase) => (
              <div
                key={phase.step}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-pleco-ice hover:border-blue-200 transition-colors"
              >
                <div className="text-3xl font-extrabold text-pleco-blue mb-2 font-mono">
                  {phase.step}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {phase.phase}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Managed Services Commitment Banner */}
        <div className="bg-pleco-navy-dark text-white rounded-3xl p-8 lg:p-14 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Continuous Care &amp; Risk Mitigation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              24/7 Managed Services &amp; Risk Mitigation
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Our dedicated support team provides continuous post-go-live care, ensuring your planning systems
              operate with maximum reliability, minimal downtime, and rapid resolution of operational issues.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Connect With Support</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
