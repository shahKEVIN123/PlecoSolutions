import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  TrendingUp,
  Layers,
  Cpu,
  Network,
  Clock,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Phone,
  BarChart3,
  Factory,
  Package,
  Pill,
  Briefcase,
  FileCheck,
  Quote,
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function Home() {
  const metrics = [
    { value: '24/7', label: 'Managed Services & Support', detail: 'Round-the-clock help desk' },
    { value: '12', label: 'Planning Cloud & Edge Modules', detail: 'Comprehensive ecosystem' },
    { value: '100%', label: 'Cloud & On-Premise Scope', detail: 'Demantra, ASCP & SCM Cloud' },
    { value: '3', label: 'Global Industry Verticals', detail: 'Hi-Tech, Mfg & Life Sciences' },
  ];

  const servicesPreview = [
    {
      title: 'Strategy & Optimization',
      tag: 'Strategic Blueprint',
      desc: 'Translating high-level corporate strategies into scalable business processes, functional designs, and enterprise configurations.',
      icon: TrendingUp,
      link: '/services',
    },
    {
      title: 'Roadmap Planning for Oracle Planning',
      tag: 'Phased Adoption',
      desc: 'In-depth analyses of existing enterprise challenges, legacy constraints, and phased migration pathways across SCM Cloud.',
      icon: Layers,
      link: '/services',
    },
    {
      title: 'Implementation & Upgrades',
      tag: 'End-to-End Delivery',
      desc: 'Methodology-driven execution spanning scoping, integrations, hardware sizing, migrations, testing, and role-based training.',
      icon: Cpu,
      link: '/services',
    },
    {
      title: 'Mentoring & Managed Services',
      tag: 'Risk Mitigation',
      desc: 'Flexible, cost-effective 24x7 help desk support, patch testing, continuous database maintenance, and performance tuning.',
      icon: Clock,
      link: '/services',
    },
  ];

  const solutionsPreview = [
    {
      title: 'Demand Planning',
      code: 'DM / AFDM / SPF',
      desc: 'Oracle Demantra DM, Advanced Forecasting, and legacy ODP-to-Demantra migration.',
      route: '/demand-planning',
      icon: TrendingUp,
    },
    {
      title: 'Supply Planning',
      code: 'ASCP / RP / IO',
      desc: 'Multi-tier constraint-based planning across suppliers, plants, and distribution centers.',
      route: '/supply-planning',
      icon: Layers,
    },
    {
      title: 'Integrated Business Planning',
      code: 'SIMPLE Framework / S&OP',
      desc: 'Strategic SIMPLE framework, Demantra Real-Time S&OP, and APCC one-number forecast.',
      route: '/integrated-business-planning',
      icon: Cpu,
    },
    {
      title: 'Network Planning',
      code: 'SNO / CP',
      desc: 'Strategic Network Optimization, multi-tier simulation, and Collaborative Planning.',
      route: '/network-planning',
      icon: Network,
    },
    {
      title: 'Production Planning',
      code: 'Production Scheduling (PS)',
      desc: 'Constraint-based finite scheduling workbench, setup minimization, and sequencing.',
      route: '/production-planning',
      icon: Clock,
    },
    {
      title: 'Order Fulfillment',
      code: 'GOP / DOO',
      desc: '24x7 real-time ATP/CTP/CTD promising, fair-share allocation, and multi-system integration.',
      route: '/order-fulfillment',
      icon: CheckCircle2,
    },
  ];

  const verticals = [
    {
      title: 'Hi-Tech | Consumer Packaged Goods (CPG)',
      desc: 'Accelerated forecast cycles, configure-to-order (CTO) allocation, and rapid demand shaping.',
      icon: Package,
      badge: 'High Velocity',
    },
    {
      title: 'Industrial Manufacturing | Distribution',
      desc: 'Multi-echelon finite capacity scheduling, bottleneck elimination, and raw material optimization.',
      icon: Factory,
      badge: 'Discrete & Process',
    },
    {
      title: 'Life Sciences | Pharma | Process industry',
      desc: 'Strict batch control, shelf-life constraint planning, cold-chain synchronization, and regulatory compliance.',
      icon: Pill,
      badge: 'Strict Compliance',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* =========================================================================
          HERO SECTION: Modern Executive Command Center
         ========================================================================= */}
      <section className="relative bg-gradient-to-b from-pleco-navy-dark via-navy-900 to-pleco-navy-dark text-white py-24 lg:py-32 overflow-hidden">
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

        {/* Ambient Subtle Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Oracle Specialized Partner Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/90 border border-slate-700/80 text-sky-300 text-xs sm:text-sm font-semibold mb-8 shadow-sm backdrop-blur-sm"
            >
              <Award className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Oracle Specialized Value Chain Planning Partner</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]"
            >
              Strategic Oracle Value Chain Planning &amp; SCM Cloud Consulting
            </motion.h1>

            {/* Verbatim Sub-Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal max-w-3xl"
            >
              Pleco is a Business consulting firm primarily focused on providing most comprehensive and
              cost-effective Oracle Value Chain Planning and Oracle Edge Product solutions to the customers
              across various industry verticals.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-16"
            >
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-base transition-all duration-200 shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </div>

          {/* Live Enterprise Metrics Strip */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800/80"
          >
            {metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                variants={fadeInUp}
                custom={idx}
                className="p-5 rounded-2xl bg-slate-800/40 border border-slate-800 backdrop-blur-sm hover:border-slate-700/80 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-300 tracking-tight mb-1">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-0.5">
                  {m.label}
                </div>
                <div className="text-xs text-slate-400">
                  {m.detail}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SPOTLIGHT 1: About Pleco (Editorial Split Composition)
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading & Verbatim Paragraphs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pleco-ice border border-blue-200/60 text-pleco-blue text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-pleco-blue" />
                <span>Corporate Overview &amp; Partnership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                About Pleco
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                <p>
                  Pleco is a Business consulting firm primarily focused on providing most comprehensive and
                  cost-effective Oracle Value Chain Planning and Oracle Edge Product solutions to the customers
                  across various industry verticals.
                </p>
                <p>
                  We partner with Oracle in bringing best and proven standard business practices as well as our
                  extensive experience in various industry segments enable us to deliver a robust solution.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow group"
                >
                  <span>More Info</span>
                  <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Highlights Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <div className="w-12 h-12 rounded-2xl bg-pleco-blue text-white flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Oracle Edge &amp; VCP Practice</div>
                    <div className="text-xs text-slate-500">Certified Domain Specialists</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pleco-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Proven Standard Methodologies</div>
                      <div className="text-xs text-slate-600">Standardized, battle-tested deployment frameworks minimizing risk.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pleco-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Multi-Vertical Experience</div>
                      <div className="text-xs text-slate-600">Cross-industry knowledge across Hi-Tech, CPG, Mfg, and Pharma.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pleco-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">End-to-End Delivery &amp; Support</div>
                      <div className="text-xs text-slate-600">Strategy, execution, upgrades, and post-go-live Managed Services.</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span>Want to learn more about our firm?</span>
                  <Link to="/about" className="font-semibold text-pleco-blue hover:underline">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SPOTLIGHT 2: Consulting Services (4-Pillar Bento Grid)
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-pleco-blue text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <TrendingUp className="w-4 h-4 text-pleco-blue" />
              <span>Full-Lifecycle Consulting</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Services
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                Pleco provides comprehensive services in Value Chain Planning and Oracle® Edge product areas that
                enables business to “achieve most” from their consulting partners.
              </p>
              <p>
                Our core area of focus is in Value Chain Planning Thought Leadership, Strategy and Implementation as well
                as post-implementation risk mitigation via Pleco’s Managed Services.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {servicesPreview.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.title}
                  className="group p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-pleco-ice group-hover:bg-pleco-blue text-pleco-blue group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-200">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-pleco-blue block mb-2">
                      {service.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-pleco-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-pleco-blue transition-colors"
                    >
                      <span>Explore Pillar</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 shadow-md group"
            >
              <span>More Info</span>
              <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SPOTLIGHT 3: Solutions Portfolio & Industry Verticals
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pleco-ice border border-blue-200/60 text-pleco-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-4 h-4 text-pleco-blue" />
              <span>Comprehensive Planning Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Solutions
            </h2>
            {/* Verbatim Paragraph containing all 12 modules without omission */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8">
              Pleco serve customers to enhance processes for Integrated Business Planning, Demand Planning, Supply Planning,
              Sales &amp; Operations Planning, Production Planning, Network Planning, Order Promising, Service Parts Planning,
              Logististics Optimization,Business Intelligence, Product Value Chain and Hyperion planning.
            </p>
          </div>

          {/* 6 Core Solutions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {solutionsPreview.map((sol) => {
              const IconComp = sol.icon;
              return (
                <Link
                  key={sol.title}
                  to={sol.route}
                  className="group p-7 rounded-2xl bg-white border border-slate-200 hover:border-pleco-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-pleco-blue group-hover:text-white flex items-center justify-center transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {sol.code.split('/')[0].trim()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-pleco-blue transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-pleco-blue">
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Industry Verticals Section */}
          <div className="pt-12 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Pleco has extensive experience in various verticals
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Tailored Oracle Planning deployments aligned to specific regulatory, distribution, and manufacturing models.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {verticals.map((v) => {
                const IconComp = v.icon;
                return (
                  <div
                    key={v.title}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-pleco-blue shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {v.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {v.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 shadow-md group"
              >
                <span>More Info</span>
                <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SPOTLIGHT 4: Featured Testimonial (Executive Quotation)
         ========================================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-pleco-navy-dark to-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Quote className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verified Enterprise Client Endorsement</span>
            </div>

            {/* Verbatim Qualcomm Quote */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl italic text-slate-200 leading-relaxed font-normal mb-8">
              "A highly valued asset during the implementation phase of Demantra. The product knowledge PLECO brought to the team  helped resolve various customization activities within the module. Team was often challenged to provide solutions on  various complex business needs. They quickly resolved all scenarios and often exceeded expectations. I strongly  recommend this team for similiar efforts"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
              <div>
                {/* Verbatim Author */}
                <div className="text-base font-bold text-white">
                  Demand Manager Lead, Hi-Tech
                </div>
                <div className="text-xs text-slate-400">
                  Qualcomm, Inc.
                </div>
              </div>

              <Link
                to="/customers"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 font-semibold text-xs sm:text-sm border border-slate-700 transition-colors group"
              >
                <span>Testimonials</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING SECTION: Enterprise Roadmap Consultation Callout
         ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Take the Next Step in Your Supply Chain Transformation
            </h3>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Whether migrating legacy Oracle ODP to Demantra, deploying ASCP Rapid Planning, or architecting a complete Oracle SCM Planning Cloud roadmap, our senior specialists are ready to assist.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-pleco-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-blue-500/25"
              >
                <span>Schedule an Initial Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-all shadow-xs"
              >
                <span>Explore All Consulting Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
