import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUp, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { footerNavigation } from '../../data/navigationData';

/**
 * Footer Component
 * Enterprise 4-column layout supporting:
 * - Column 1: Brand Wordmark, Corporate Mission & Oracle Partner badge
 * - Column 2: Oracle Planning Solutions directory (7 links)
 * - Column 3: Quick Links / Consulting & Company directory (5 links)
 * - Column 4: Headquarters address, phone, email, and 24/7 operations info
 * - Sub-Footer: Exact verbatim copyright '© 2015 by PLECO SOLUTIONS' and trademark notices
 * - Smooth Back-to-Top scroll trigger
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-slate-800 antialiased" aria-labelledby="footer-heading">
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

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
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
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Planning Solutions
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all mr-1.5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links / Company & Services (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all mr-1.5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Operations (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact Us
            </h3>
            <address className="not-italic space-y-3.5 text-sm text-slate-400">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>{footerNavigation.contact.address}</span>
              </div>

              {/* Telephone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${footerNavigation.contact.phoneRaw}`}
                  className="hover:text-white transition-colors"
                  aria-label={`Call ${footerNavigation.contact.phone}`}
                >
                  {footerNavigation.contact.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${footerNavigation.contact.email}`}
                  className="hover:text-white transition-colors"
                  aria-label={`Email ${footerNavigation.contact.email}`}
                >
                  {footerNavigation.contact.email}
                </a>
              </div>

              {/* Hours / Managed Services */}
              <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{footerNavigation.contact.hours}</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Sub-Footer & Legal Bar */}
      <div className="border-t border-slate-800/80 bg-[#071324] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Exact Verbatim Copyright as required */}
          <div className="text-xs text-slate-400 text-center md:text-left space-y-1">
            <p className="font-medium text-slate-300">
              {footerNavigation.legal.copyright}
            </p>
            <p className="text-[11px] text-slate-500">
              {footerNavigation.legal.disclaimer}
            </p>
          </div>

          {/* Back to Top Smooth Trigger */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
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
