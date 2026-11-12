import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUp, ArrowRight, ShieldCheck, ChevronRight, Award } from 'lucide-react';
import Logo from './Logo';
import { footerNavigation } from '../../data/navigationData';

/**
 * Enterprise Footer Component
 * Architectural Highlights:
 * - Pre-footer Consultative Engagement Banner
 * - 4-Column Enterprise Information Architecture
 * - Verbatim Copyright '© 2026 by PLECO SOLUTIONS' and Trademark Disclaimers
 * - WCAG 2.1 AA High-Contrast Typography
 * - Uses semantic Tailwind tokens: bg-pleco-navy-dark and bg-navy-950 (no arbitrary hex)
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-pleco-navy-dark text-slate-300 border-t border-slate-800 antialiased" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pleco Solutions Corporate Footer
      </h2>

      {/* Main 4-Column Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Overview & Brand (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md p-1" aria-label="Pleco Solutions Home">
              <Logo className="h-10 w-auto" variant="white" />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {footerNavigation.overview.description}
            </p>

            {/* Oracle Specialized Partner Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/70 text-blue-300 text-xs font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{footerNavigation.overview.partnerBadge}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Oracle Planning Solutions (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Planning Solutions
            </div>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Consulting & Company (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </div>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate Headquarters & Contact (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Corporate Headquarters
            </div>
            <address className="not-italic space-y-3 text-sm text-slate-400">
              {/* Company Name */}
              <div className="font-semibold text-white tracking-wide">
                {footerNavigation.contact.companyName}
              </div>

              {/* Physical Street Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{footerNavigation.contact.address}</span>
              </div>

              {/* Direct Telephone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${footerNavigation.contact.phoneRaw}`}
                  className="hover:text-white transition-colors text-slate-300 font-medium"
                  aria-label={`Call ${footerNavigation.contact.phone}`}
                >
                  {footerNavigation.contact.phone}
                </a>
              </div>

              {/* Email Address */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${footerNavigation.contact.email}`}
                  className="hover:text-white transition-colors text-slate-300"
                  aria-label={`Email ${footerNavigation.contact.email}`}
                >
                  {footerNavigation.contact.email}
                </a>
              </div>

              {/* Hours / Managed Services */}
              <div className="flex items-center gap-2.5 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{footerNavigation.contact.hours}</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Sub-Footer & Legal Bar */}
      <div className="border-t border-slate-800/80 bg-navy-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Exact Verbatim Copyright as required */}
          <div className="text-xs text-slate-400 text-center md:text-left space-y-1">
            <p className="font-medium text-slate-300">
              {footerNavigation.legal.copyright}
            </p>
            <p className="text-[11px] text-slate-400">
              {footerNavigation.legal.disclaimer}
            </p>
          </div>

          {/* Back to Top Smooth Trigger */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
