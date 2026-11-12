import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Layers,
  Cpu,
  Network,
  Clock,
  CheckCircle2,
  Users,
  Briefcase,
  HelpCircle,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import Logo from './Logo';
import { headerNavLinks, footerNavigation } from '../../data/navigationData';

/**
 * Enterprise Navbar Component
 * Features:
 * - Top utility ticker with Oracle Partner status, 24/7 Managed Services indicator & direct phone
 * - Glassmorphic main navigation bar with scroll elevation
 * - Rich interactive mega-dropdowns for Solutions & About Us
 * - Responsive accessible mobile drawer (<768px) with trap focus protection
 * - Automatic window resize and orientation handling
 * - Strict adherence to semantic Tailwind design tokens (zero arbitrary hex)
 */
export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'Solutions' | 'About Us' | null
  const [mobileExpanded, setMobileExpanded] = useState({ Solutions: false, 'About Us': false });
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Elevation & shape transformation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dismiss dropdowns and mobile drawer on route navigation
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener for desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation: Escape key closes menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mobile drawer background scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Viewport resize listener: automatically close mobile drawer on desktop (>=768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dropdown hover timing handlers
  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleDropdownClick = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileAccordion = (name) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const isLinkActive = (item) => {
    if (location.pathname === item.href) return true;
    if (item.children && item.children.some((child) => location.pathname === child.href)) {
      return true;
    }
    return false;
  };

  // Helper icons for mega menu items
  const getSolutionIcon = (index) => {
    const icons = [TrendingUp, Layers, Cpu, Network, Clock, CheckCircle2];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-5 h-5 text-pleco-blue shrink-0 group-hover:text-pleco-azure transition-colors" />;
  };

  const getAboutIcon = (index) => {
    const icons = [ShieldCheck, Users, Briefcase, MessageSquare];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-5 h-5 text-pleco-blue shrink-0 group-hover:text-pleco-azure transition-colors" />;
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none transition-all duration-500 ease-in-out"
    >

      {/* Main Navigation Bar Wrapper - Transforms between floating pill and standard full-width bar */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'px-0 py-0 pointer-events-auto'
            : 'px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 pointer-events-none'
        }`}
      >
        <div
          className={`transition-all duration-500 ease-in-out pointer-events-auto ${
            isScrolled
              ? 'w-full rounded-none bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-900/5 px-4 sm:px-6 lg:px-8'
              : 'max-w-7xl mx-auto rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/5 px-4 sm:px-6 lg:px-8'
          }`}
        >
          <div
            className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
              isScrolled ? 'h-16 sm:h-18' : 'h-16 sm:h-20'
            }`}
          >
            {/* Brand Logo */}
            <Link
              to="/"
              className={`flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-pleco-blue p-1.5 transition-all duration-300 hover:scale-[1.02] ${
                isScrolled ? 'rounded-lg' : 'rounded-full'
              }`}
              aria-label="Pleco Solutions Home"
            >
              <Logo
                className={`w-auto transition-all duration-500 ${isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-10'}`}
                variant="default"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
              {headerNavLinks.map((item) => {
                const active = isLinkActive(item);

                if (!item.isDropdown) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3.5 lg:px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        isScrolled ? 'rounded-lg' : 'rounded-full'
                      } ${
                        active
                          ? 'text-pleco-blue bg-pleco-ice font-bold shadow-xs'
                          : 'text-slate-700 hover:text-pleco-blue hover:bg-slate-100/80'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => toggleDropdownClick(item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      className={`inline-flex items-center gap-1.5 px-3.5 lg:px-4 py-2 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pleco-blue ${
                        isScrolled ? 'rounded-lg' : 'rounded-full'
                      } ${
                        active || activeDropdown === item.name
                          ? 'text-pleco-blue bg-pleco-ice font-bold shadow-xs'
                          : 'text-slate-700 hover:text-pleco-blue hover:bg-slate-100/80'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180 text-pleco-blue' : 'text-slate-400'
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {activeDropdown === item.name && (
                      <div
                        className={`absolute left-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/90 py-4 px-4 z-50 animate-fade-in transition-all duration-300 ${
                          isScrolled ? 'mt-2' : 'mt-3.5'
                        } ${
                          item.name === 'Solutions' ? 'w-[580px] -left-16 lg:-left-12' : 'w-80'
                        }`}
                        role="menu"
                        aria-label={`${item.name} Submenu`}
                      >
                      {item.name === 'Solutions' ? (
                        <div>
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-2">
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue">
                                Oracle Planning Portfolio
                              </span>
                              <p className="text-xs text-slate-500 mt-0.5">
                                End-to-end Value Chain Planning Cloud &amp; On-Premise modules
                              </p>
                            </div>
                            <Link
                              to="/solutions"
                              className="text-xs font-semibold text-pleco-blue hover:text-pleco-navy transition-colors inline-flex items-center gap-1"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span>Overview</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {item.children.map((child, idx) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                role="menuitem"
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200/70"
                              >
                                <div className="p-2 rounded-lg bg-pleco-ice group-hover:bg-pleco-tint transition-colors">
                                  {getSolutionIcon(idx)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-bold text-slate-900 group-hover:text-pleco-blue transition-colors flex items-center justify-between">
                                    <span className="truncate">{child.name}</span>
                                    {child.code && (
                                      <span className="text-[10px] font-mono font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded ml-1 shrink-0">
                                        {child.code.split('/')[0].trim()}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                    {child.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="pb-2 mb-2 border-b border-slate-100 px-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-pleco-blue">
                              Company &amp; Firm Profile
                            </span>
                          </div>
                          {item.children.map((child, idx) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200/70"
                            >
                              <div className="p-2 rounded-lg bg-pleco-ice group-hover:bg-pleco-tint transition-colors">
                                {getAboutIcon(idx)}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 group-hover:text-pleco-blue transition-colors">
                                  {child.name}
                                </div>
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Consultation CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-pleco-blue hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-pleco-blue ${
                isScrolled ? 'rounded-xl' : 'rounded-full'
              }`}
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pleco-blue ${
                isScrolled ? 'rounded-xl' : 'rounded-full'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity pointer-events-auto"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen ? '' : undefined}
        className={`md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-all duration-300 ease-in-out pointer-events-auto ${
          mobileMenuOpen
            ? 'translate-x-0 visible opacity-100 pointer-events-auto'
            : 'translate-x-full invisible opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <Logo className="h-8 w-auto" variant="default" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pleco-blue"
            aria-label="Close mobile menu"
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Nav Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {headerNavLinks.map((item) => {
            const active = isLinkActive(item);

            if (!item.isDropdown) {
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    active ? 'bg-pleco-ice text-pleco-blue' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            }

            const expanded = mobileExpanded[item.name];

            return (
              <div key={item.name} className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion(item.name)}
                  aria-expanded={expanded}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expanded ? 'rotate-180 text-pleco-blue' : ''
                    }`}
                  />
                </button>

                {expanded && (
                  <div className="pl-4 pr-2 py-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        tabIndex={mobileMenuOpen ? 0 : -1}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname === child.href
                            ? 'text-pleco-blue bg-pleco-ice font-bold'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer Contact Action */}
        <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-pleco-blue text-white font-semibold text-sm shadow-md hover:bg-blue-700 transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${footerNavigation.contact.phoneRaw}`}
            tabIndex={mobileMenuOpen ? 0 : -1}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium text-xs hover:bg-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-pleco-blue" />
            <span>{footerNavigation.contact.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
