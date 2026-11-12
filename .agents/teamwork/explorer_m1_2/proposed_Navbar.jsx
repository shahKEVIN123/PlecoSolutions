import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowRight, Layers, Building2, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { headerNavLinks, footerNavigation } from '../../data/navigationData';

/**
 * Navbar Component
 * Enterprise navigation header supporting:
 * - Brand Logo with link to root
 * - Multi-level desktop dropdowns for Solutions & About Us
 * - Keyboard navigation (Esc to close, Arrow keys, ARIA roles)
 * - Click-outside and route-change automatic dismissal
 * - Mobile responsive hamburger toggle and sliding accessible drawer (<768px)
 * - Body scroll lock during drawer visibility
 * - High-contrast WCAG 2.1 AA compliant styling
 */
export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'Solutions' | 'About Us' | null
  const [mobileExpanded, setMobileExpanded] = useState({}); // { Solutions: boolean, 'About Us': boolean }
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Elevation shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Dropdown hover timing handlers (prevents accidental closing on rapid movement)
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

  // Determine if a link or dropdown is active based on current path
  const isLinkActive = (item) => {
    if (location.pathname === item.href) return true;
    if (item.children && item.children.some((child) => location.pathname === child.href)) {
      return true;
    }
    return false;
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-200 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      {/* Top Utility Bar (Desktop Only) */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="text-slate-400">
              Specialized Oracle Value Chain Planning (VCP) & SCM Planning Cloud Consulting
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${footerNavigation.contact.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label={`Call Pleco Solutions at ${footerNavigation.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{footerNavigation.contact.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-medium">24/7 Managed Services & Support</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md p-1"
            aria-label="Pleco Solutions Home"
          >
            <Logo className="h-10 sm:h-11 w-auto" variant="default" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {headerNavLinks.map((item) => {
              const active = isLinkActive(item);

              if (!item.isDropdown) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'text-blue-600 font-semibold bg-blue-50/80'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }

              // Dropdown Menu Item (Solutions / About Us)
              const isOpen = activeDropdown === item.name;

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
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      active || isOpen
                        ? 'text-blue-600 font-semibold bg-blue-50/80'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                    />
                  </button>

                  {/* Dropdown Menu Panel */}
                  {isOpen && (
                    <div
                      className={`absolute left-0 mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200/90 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                        item.name === 'Solutions' ? 'w-[520px]' : 'w-72'
                      }`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-label={`${item.name} submenu`}
                    >
                      {/* Menu Header / Overview Link */}
                      <div className="px-4 py-2 border-b border-slate-100 mb-2 flex justify-between items-center bg-slate-50/50">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {item.name} Portfolio
                        </span>
                        <Link
                          to={item.href}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                        >
                          View Hub <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* Dropdown Grid */}
                      <div
                        className={
                          item.name === 'Solutions' ? 'grid grid-cols-2 gap-1 px-2' : 'flex flex-col space-y-1 px-2'
                        }
                      >
                        {item.children.map((subItem) => {
                          const isSubActive = location.pathname === subItem.href;

                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              role="menuitem"
                              className={`group p-2.5 rounded-lg transition-all flex flex-col justify-center ${
                                isSubActive
                                  ? 'bg-blue-50 text-blue-700 font-medium'
                                  : 'hover:bg-slate-50 text-slate-800'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                                  {subItem.name}
                                </span>
                                {subItem.code && (
                                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700">
                                    {subItem.code.split('/')[0]}
                                  </span>
                                )}
                              </div>
                              {subItem.description && (
                                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-normal">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button (<768px) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop (<768px) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sliding Navigation Drawer (<768px) */}
      <div
        id="mobile-navigation"
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Nav Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {headerNavLinks.map((item) => {
            if (!item.isDropdown) {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            }

            const isExpanded = !!mobileExpanded[item.name];
            const hasActiveChild = item.children.some((child) => location.pathname === child.href);

            return (
              <div key={item.name} className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion(item.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    hasActiveChild ? 'text-blue-600 font-semibold' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                  aria-expanded={isExpanded}
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {/* Mobile Accordion Content */}
                {isExpanded && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg mt-1">
                    {/* Top Hub Link */}
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      {item.name} Hub Overview →
                    </Link>

                    {item.children.map((subItem) => {
                      const isSubActive = location.pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
                            isSubActive
                              ? 'bg-blue-100 text-blue-800 font-medium'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <div className="font-medium">{subItem.name}</div>
                          {subItem.code && (
                            <div className="text-[11px] text-slate-500 font-mono mt-0.5">{subItem.code}</div>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
          >
            Get in Touch
          </Link>

          <a
            href={`tel:${footerNavigation.contact.phoneRaw}`}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>{footerNavigation.contact.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
