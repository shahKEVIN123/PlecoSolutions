/**
 * Global Navigation Data Registry for Pleco Solutions
 * Standardizes route mappings across Navbar, Dropdowns, Mobile Drawer, and Footer.
 * Strictly adheres to the 13 canonical routes established in PROJECT.md and Phase 0 Survey.
 */

export const headerNavLinks = [
  {
    name: 'Home',
    href: '/',
    isDropdown: false,
  },
  {
    name: 'Solutions',
    href: '/solutions',
    isDropdown: true,
    description: 'Comprehensive Oracle SCM Planning Cloud & VCP Modules',
    children: [
      {
        name: 'Demand Planning',
        href: '/demand-planning',
        code: 'DM / AFDM / SPF',
        description: 'Oracle Demantra DM, Advanced Forecasting & Service Parts Planning.',
      },
      {
        name: 'Supply Planning',
        href: '/supply-planning',
        code: 'ASCP / RP / IO',
        description: 'Oracle ASCP, Rapid Planning in-memory engine, and Inventory Optimization.',
      },
      {
        name: 'Integrated Business Planning',
        href: '/integrated-business-planning',
        code: 'SIMPLE Framework / S&OP',
        description: 'Strategic SIMPLE framework, Demantra Real-Time S&OP, and APCC.',
      },
      {
        name: 'Network Planning',
        href: '/network-planning',
        code: 'SNO / CP',
        description: 'Strategic Network Optimization, multi-tier simulation, and Collaborative Planning.',
      },
      {
        name: 'Production Planning',
        href: '/production-planning',
        code: 'Production Scheduling (PS)',
        description: 'Finite capacity scheduling, bottleneck elimination, and sequencing.',
      },
      {
        name: 'Order Fulfillment',
        href: '/order-fulfillment',
        code: 'GOP / DOO',
        description: 'Global Order Promising (ATP/CTP/CTD) and Distributed Order Orchestration.',
      },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    isDropdown: false,
  },
  {
    name: 'About Us',
    href: '/about',
    isDropdown: true,
    description: 'Niche Oracle Consulting Firm & Proven Track Record',
    children: [
      {
        name: 'About Pleco',
        href: '/about',
        description: 'Company overview, Oracle partnership philosophy, and industry verticals.',
      },
      {
        name: 'Customer Testimonials',
        href: '/customers',
        description: 'Verified reviews from Qualcomm, PetSafe, and Cummins Power Generation.',
      },
      {
        name: 'Career Opportunities',
        href: '/careers',
        description: 'Join our elite consulting team as an ASCP or Demantra specialist.',
      },
      {
        name: 'Contact Us',
        href: '/contact',
        description: 'Corporate headquarters, telephone, email, and inquiry form.',
      },
    ],
  },
];

export const footerNavigation = {
  overview: {
    description:
      'Pleco is a Business consulting firm primarily focused on providing most comprehensive and cost-effective Oracle Value Chain Planning and Oracle Edge Product solutions to the customers across various industry verticals.',
    partnerBadge: 'Oracle Specialized Partner',
  },
  solutions: [
    { name: 'Solutions Overview', href: '/solutions' },
    { name: 'Demand Planning', href: '/demand-planning' },
    { name: 'Supply Planning', href: '/supply-planning' },
    { name: 'Integrated Business Planning', href: '/integrated-business-planning' },
    { name: 'Network Planning', href: '/network-planning' },
    { name: 'Production Planning', href: '/production-planning' },
    { name: 'Order Fulfillment', href: '/order-fulfillment' },
  ],
  company: [
    { name: 'Consulting Services', href: '/services' },
    { name: 'About Pleco', href: '/about' },
    { name: 'Customer Testimonials', href: '/customers' },
    { name: 'Career Opportunities', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ],
  contact: {
    companyName: 'PLECO SOLUTIONS',
    address: '3044 Old Denton Rd #111-163, Carrollton, TX 75007, USA',
    phone: '+1 (650) 533-6649',
    phoneRaw: '+16505336649',
    email: 'Info@plecosolutions.com',
    hours: '24/7 Managed Services & Help Desk',
  },
  legal: {
    copyright: '© 2026 by PLECO SOLUTIONS',
    rights: 'All rights reserved.',
    disclaimer:
      'Oracle®, Demantra®, and Hyperion® are registered trademarks of Oracle Corporation and/or its affiliates.',
  },
};
