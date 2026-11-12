import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import {
  Briefcase,
  Mail,
  CheckCircle2,
  MapPin,
  Clock,
  Award,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

export default function Careers() {
  const jobs = [
    {
      id: 'ascp-consultant',
      title: 'Oracle Advanced Supply Chain Planning (ASCP) Consultant',
      type: 'Full-Time / Senior Consultant',
      location: 'Carrollton, TX & Client Locations',
      experience: 'Minimum 4+ Years Experience',
      description:
        'Seeking veteran Oracle Advanced Supply Chain Planning (ASCP) consultants to lead multi-tier supply chain modeling, constrained supply optimization, and enterprise client transformations.',
      requiredSkills: [
        'Oracle ASCP system configuration and utilization',
        'Supply-based scheduling',
        'Demand/Supply Planning balancing',
        'Manufacturing process connectivity',
        'Stakeholder facilitation and interpersonal communication',
      ],
      preferredCertifications: ['APICS', 'IBF', 'Oracle Certified Specialist'],
      subject: 'Application: Oracle Advanced Supply Chain Planning (ASCP) Consultant',
      applicationEmail: 'Info@plecosolutions.com',
    },
    {
      id: 'demantra-consultant',
      title: 'Oracle Demantra Consultant',
      type: 'Full-Time / Senior Consultant',
      location: 'Carrollton, TX & Client Locations',
      experience: 'Minimum 4+ Years Experience',
      description:
        'Seeking experienced Oracle Demantra specialists with demonstrated mastery in Demand Management (DM), Advanced Forecasting and Demand Modeling (AFDM), and Real-Time S&OP.',
      requiredSkills: [
        'Oracle Demantra suite implementation and configuration',
        'Demand Planning and Sales & Operations Planning (S&OP) processes',
        'Demand shaping and consensus forecasting',
        'Supply/demand reconciliation',
        'Stakeholder facilitation and verbal/written communication',
      ],
      preferredCertifications: ['APICS (CPIM/CSCP)', 'IBF (CPF)', 'Oracle Demantra Implementation Specialist'],
      subject: 'Application: Oracle Demantra Consultant',
      applicationEmail: 'Info@plecosolutions.com',
    },
  ];

  const culturePillars = [
    {
      title: 'High-Impact Enterprise Engagements',
      desc: 'Lead strategic value chain transformations for Fortune 500 and mid-market innovators.',
      icon: Award,
    },
    {
      title: 'Pure Niche Specialization',
      desc: 'Work exclusively alongside senior Oracle VCP and SCM Cloud architects with deep domain expertise.',
      icon: ShieldCheck,
    },
    {
      title: 'Autonomy & Thought Leadership',
      desc: 'Direct access to client executive leadership with freedom to author optimal architectural designs.',
      icon: Users,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Careers' }]} />

        {/* Hero Banner */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-br from-pleco-navy-dark via-navy-900 to-pleco-navy text-white mb-16 shadow-xl relative overflow-hidden border border-slate-700/60">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="glass-pill-dark inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sky-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Join Our Elite Team</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Join Our Team
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              At Pleco Solutions, we are constantly looking for talented Oracle Value Chain Planning and SCM Cloud
              professionals who thrive on solving complex supply chain challenges for global organizations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:Info@plecosolutions.com?subject=General%20Inquiry%20-%20Careers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm font-semibold text-sm transition-all shadow-sm"
              >
                <span>Direct Resume Submission</span>
              </a>
            </div>
          </div>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {culturePillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-7 rounded-2xl glass-card hover:border-pleco-blue transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-pleco-ice/90 border border-blue-100 text-pleco-blue flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Job Openings Grid */}
        <div id="openings" className="space-y-8 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue block mb-1">
              Active Searches
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Featured Consultant Openings
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="glass-card rounded-3xl p-8 lg:p-10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-pleco-ice text-pleco-blue">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{job.type}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.location}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {job.title}
                  </h3>

                  <div className="text-xs font-bold text-emerald-600 mb-4 inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{job.experience}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 pb-6 border-b border-slate-100">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                      Required Skills &amp; Qualifications:
                    </div>
                    <ul className="space-y-2">
                      {job.requiredSkills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-pleco-blue shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Preferred Certifications:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.preferredCertifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <a
                    href={`mailto:${job.applicationEmail}?subject=${encodeURIComponent(job.subject)}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-pleco-blue hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Apply via Email ({job.applicationEmail})</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
