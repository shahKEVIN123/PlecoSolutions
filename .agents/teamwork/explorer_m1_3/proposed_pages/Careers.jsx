import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import { Briefcase, Mail, CheckCircle2, MapPin, Clock } from 'lucide-react';

/**
 * Milestone 1 Placeholder: Careers Page (Route: `/careers`)
 * Features the 2 active consultant postings: Oracle ASCP Consultant & Oracle Demantra Consultant.
 */
export default function Careers() {
  const jobs = [
    {
      title: 'Oracle ASCP Consultant',
      type: 'Full-Time / Consulting',
      location: 'Carrollton, TX & Client Locations',
      description:
        'Seeking experienced Oracle Advanced Supply Chain Planning (ASCP) consultants to lead enterprise implementation, constrained supply optimization, and client transformation projects.',
      responsibilities: [
        'Lead ASCP architecture, configuration, constraint setup, and pegging analysis',
        'Analyze complex bill of materials (BOM), routings, and supplier capacity constraints',
        'Collaborate with client supply chain leaders to design custom exception handling',
      ],
      subject: 'Application: Oracle ASCP Consultant',
    },
    {
      title: 'Oracle Demantra Consultant',
      type: 'Full-Time / Consulting',
      location: 'Carrollton, TX & Client Locations',
      description:
        'Seeking skilled Oracle Demantra consultants specialized in Demand Management (DM), Advanced Forecasting and Demand Modeling (AFDM), and Sales & Operations Planning (S&OP).',
      responsibilities: [
        'Design and tune multi-dimensional analytical forecasting engines and causal models',
        'Configure Demantra series, client worksheets, workflows, and integration interfaces',
        'Facilitate consensus planning workflows between sales, operations, and executive leadership',
      ],
      subject: 'Application: Oracle Demantra Consultant',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Careers' }]} />

        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Join Our Team
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Career Opportunities
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At Pleco Solutions, we are constantly looking for talented Oracle Value Chain Planning and SCM Cloud
            professionals who thrive on solving complex supply chain challenges for global organizations.
          </p>
        </div>

        {/* Job Openings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-sky-50 text-sky-700">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{job.type}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-3">{job.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{job.description}</p>

                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-800 mb-3">
                  Key Responsibilities:
                </h3>
                <ul className="space-y-2 mb-8">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href={`mailto:Info@plecosolutions.com?subject=${encodeURIComponent(job.subject)}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-semibold text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Apply via Email (Info@plecosolutions.com)</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Callout */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Don't see an exact match?</h2>
          <p className="text-sm text-slate-600 mb-6">
            We are always interested in connecting with seasoned Oracle SCM Cloud, Demantra, and ASCP
            architects. Send your credentials directly to our recruitment team.
          </p>
          <a
            href="mailto:Info@plecosolutions.com?subject=General%20Inquiry%20-%20Oracle%20Consultant"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Send Resume to Info@plecosolutions.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
