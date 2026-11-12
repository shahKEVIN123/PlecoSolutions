/**
 * Authoritative Specification Oracle for Pleco Solutions
 * Derived strictly from ORIGINAL_REQUEST.md, PROJECT.md, and spec_miner_survey_1/handoff.md.
 * 
 * This oracle serves as the single source of ground truth for all E2E test tiers.
 */

export const COMPANY_METADATA = {
  name: 'PLECO SOLUTIONS',
  shortName: 'Pleco',
  siteTitle: 'Pleco | Oracle SCM Planning Cloud | Demantra ASCP GOP S&OP VCP',
  metaDescription: 'Pleco Solutions is a niche company providing end to end consulting services to implement Oracle SCM Planning Cloud and Oracle Value chain planning on-premise (VCP - Demantra, ASCP, GOP and S&OP Analytics) business solutions.',
  copyright: '© 2015 by PLECO SOLUTIONS',
  email: 'Info@plecosolutions.com',
  mailtoUri: 'mailto:Info@plecosolutions.com',
  phone: '+1 (650) 533-6649',
  telUri: 'tel:+16505336649',
  headquarters: {
    street: '3044 Old Denton Rd #111-163',
    city: 'Carrollton',
    state: 'TX',
    zip: '75007',
    country: 'USA',
    fullAddress: '3044 Old Denton Rd #111-163, Carrollton, TX 75007, USA'
  }
};

export const CANONICAL_ROUTES = [
  {
    path: '/',
    id: 'home',
    title: 'Home',
    pageTitle: 'Pleco | Oracle SCM Planning Cloud | Demantra ASCP GOP S&OP VCP',
    primaryHeading: 'About Pleco',
    ctaPrimary: 'Explore Solutions',
    ctaSecondary: 'Contact Us',
    navGroup: 'root'
  },
  {
    path: '/solutions',
    id: 'solutions',
    title: 'Solutions',
    pageTitle: 'Solutions | Pleco Solutions',
    primaryHeading: 'Comprehensive Enterprise Solutions',
    navGroup: 'solutions-hub'
  },
  {
    path: '/demand-planning',
    id: 'demand-planning',
    title: 'Demand Planning',
    pageTitle: 'Demand Planning | Pleco Solutions',
    primaryHeading: 'Demand Planning Solutions',
    navGroup: 'solutions-sub',
    parentPath: '/solutions'
  },
  {
    path: '/supply-planning',
    id: 'supply-planning',
    title: 'Supply Planning',
    pageTitle: 'Supply Planning | Pleco Solutions',
    primaryHeading: 'Advanced Supply Planning Solutions',
    navGroup: 'solutions-sub',
    parentPath: '/solutions'
  },
  {
    path: '/integrated-business-planning',
    id: 'integrated-business-planning',
    title: 'Integrated Business Planning',
    pageTitle: 'Integrated Business Planning | Pleco Solutions',
    primaryHeading: 'Integrated Business Planning (IBP)',
    navGroup: 'solutions-sub',
    parentPath: '/solutions'
  },
  {
    path: '/network-planning',
    id: 'network-planning',
    title: 'Network Planning',
    pageTitle: 'Network Planning | Pleco Solutions',
    primaryHeading: 'Network Planning & Supply Chain Design',
    navGroup: 'solutions-sub',
    parentPath: '/solutions'
  },
  {
    path: '/production-planning',
    id: 'production-planning',
    title: 'Production Planning',
    pageTitle: 'Production Planning | Pleco Solutions',
    primaryHeading: 'Production Planning & Detailed Scheduling',
    navGroup: 'solutions-sub',
    parentPath: '/solutions'
  },
  {
    path: '/order-fulfillment',
    id: 'order-fulfillment',
    title: 'Order Fulfillment',
    pageTitle: 'Order Fulfillment | Pleco Solutions',
    primaryHeading: 'Order Fulfillment & Real-Time Promising',
    navGroup: 'solutions-sub',
    parentPath: '/solutions'
  },
  {
    path: '/services',
    id: 'services',
    title: 'Services',
    pageTitle: 'Services | Pleco Solutions',
    primaryHeading: 'End-to-End Consulting Services',
    navGroup: 'primary'
  },
  {
    path: '/about',
    id: 'about',
    title: 'About us',
    pageTitle: 'About Us | Pleco Solutions',
    primaryHeading: 'About Pleco',
    navGroup: 'about-hub'
  },
  {
    path: '/customers',
    id: 'customers',
    title: 'Customer Testimonials',
    pageTitle: 'Customer Testimonials | Pleco Solutions',
    primaryHeading: 'Customer Testimonials',
    navGroup: 'about-sub',
    parentPath: '/about'
  },
  {
    path: '/careers',
    id: 'careers',
    title: 'Career',
    pageTitle: 'Careers | Pleco Solutions',
    primaryHeading: 'Join Our Team',
    navGroup: 'about-sub',
    parentPath: '/about'
  },
  {
    path: '/contact',
    id: 'contact',
    title: 'Contact us',
    pageTitle: 'Contact Us | Pleco Solutions',
    primaryHeading: 'Get in Touch',
    navGroup: 'about-sub',
    parentPath: '/about'
  }
];

export const HOMEPAGE_SECTIONS = {
  aboutSpotlight: {
    heading: 'About Pleco',
    paragraphs: [
      'Pleco is a Business consulting firm primarily focused on providing most comprehensive and cost-effective Oracle Value Chain Planning and Oracle Edge Product solutions to the customers across various industry verticals.',
      'We partner with Oracle in bringing best and proven standard business practices as well as our extensive experience in various industry segments enable us to deliver a robust solution.'
    ],
    ctaText: 'More Info',
    ctaLink: '/about'
  },
  servicesSpotlight: {
    heading: 'Services',
    paragraphs: [
      'Pleco provides comprehensive services in Value Chain Planning and Oracle® Edge product areas that enables business to “achieve most” from their consulting partners.',
      'Our core area of focus is in Value Chain Planning Thought Leadership, Strategy and Implementation as well as post-implementation risk mitigation via Pleco’s Managed Services.'
    ],
    ctaText: 'More Info',
    ctaLink: '/services'
  },
  solutionsSpotlight: {
    heading: 'Solutions',
    paragraphs: [
      'Pleco serve customers to enhance processes for Integrated Business Planning, Demand Planning, Supply Planning, Sales & Operations Planning, Production Planning, Network Planning, Order Promising, Service Parts Planning, Logististics Optimization,Business Intelligence, Product Value Chain and Hyperion planning.'
    ],
    subheading: 'Pleco has extensive experience in various verticals',
    verticals: [
      'Hi-Tech | Consumer Packaged Goods (CPG)',
      'Industrial Manufacturing | Distribution',
      'Life Sciences | Pharma | Process industry'
    ],
    ctaText: 'More Info',
    ctaLink: '/solutions'
  },
  testimonialSpotlight: {
    quote: 'A highly valued asset during the implementation phase of Demantra. The product knowledge PLECO brought to the team  helped resolve various customization activities within the module. Team was often challenged to provide solutions on  various complex business needs. They quickly resolved all scenarios and often exceeded expectations. I strongly  recommend this team for similiar efforts',
    author: 'Demand Manager Lead, Hi-Tech',
    ctaText: 'Testimonials',
    ctaLink: '/customers'
  }
};

export const CONSULTING_SERVICES = [
  {
    id: 'strategy-optimization',
    title: 'Strategy & Optimization',
    focus: 'Developing strategic business plans to maximize ROI and streamline operational workflows.',
    deliverables: [
      'Translating high-level corporate strategies into functional designs',
      'Scalable business processes',
      'Enterprise system configurations'
    ]
  },
  {
    id: 'roadmap-planning',
    title: 'Roadmap Planning for Oracle Planning',
    focus: 'Conducting in-depth analyses of existing enterprise challenges, IT legacy constraints, and organizational goals.',
    deliverables: [
      'Phased adoption and upgrade roadmaps',
      'Coverage across Oracle SCM Cloud and on-premise application portfolios'
    ]
  },
  {
    id: 'implementation-upgrades',
    title: 'Implementation & Upgrades',
    focus: 'End-to-end project management and technical execution delivered by veteran Oracle specialists using standard, proven methodologies.',
    deliverables: [
      'Systems design and architecture',
      'Project scoping and third-party integrations',
      'Hardware sizing, installation, module configuration, migrations, testing, and performance tuning',
      'Role-based end-user training',
      'Commitment to on-time and within-budget delivery'
    ]
  },
  {
    id: 'managed-services',
    title: 'Mentoring & Managed Services',
    focus: 'Providing flexible, cost-effective functional and technical help desk support (including 24x7 options) for Oracle planning applications.',
    deliverables: [
      'Seamless onboarding of new and existing staff',
      'Post-implementation risk mitigation',
      'Patch testing and database maintenance',
      'Continuous performance tuning'
    ]
  }
];

export const SOLUTIONS_PORTFOLIO = [
  {
    id: 'demand-planning',
    title: 'Demand Planning',
    route: '/demand-planning',
    coreTechnologies: [
      'Oracle Demantra Demand Management (DM)',
      'Oracle Demantra Advanced Forecasting & Demand Modeling (AFDM)',
      'Legacy ODP-to-Demantra Migration'
    ],
    keyCapabilities: [
      'Multidimensional Data Modeling',
      'Automated Forecast Analytics',
      'Real-Time Forecast Capabilities',
      'Product Lifecycle Management & Phase-Out',
      'Web-Based Collaboration & Exception Management'
    ],
    benefits: [
      'Increase on-time customer order fulfillment and service levels',
      'Elevate sales revenue through improved product availability',
      'Boost customer satisfaction and brand loyalty',
      'Substantially decrease inventory carrying and distribution logistics costs'
    ]
  },
  {
    id: 'supply-planning',
    title: 'Supply Planning',
    route: '/supply-planning',
    coreTechnologies: [
      'Oracle Advanced Supply Chain Planning (ASCP)',
      'Oracle Rapid Planning (RP)',
      'Oracle Inventory Optimization (IO)'
    ],
    keyCapabilities: [
      'Multi-tier supply chain planning across suppliers, plants, distribution centers, and customers',
      'Supports unconstrained, material-constrained, resource-constrained, and fully cost-optimized planning modes',
      'High-speed, fast in-memory incremental planning engine',
      'Time-phased optimal safety stock and inventory targets across multi-echelon network'
    ]
  },
  {
    id: 'integrated-business-planning',
    title: 'Integrated Business Planning',
    route: '/integrated-business-planning',
    framework: {
      acronym: 'SIMPLE',
      fullName: 'Smart Integrated Market-driven PLanning & Execution',
      motto: 'From Plan to Performance to Profit',
      alignedFunctions: ['Sales', 'Marketing', 'Operations', 'Finance']
    },
    coreTechnologies: [
      'Oracle Demantra Real-Time Sales & Operations Planning (RTSOP)',
      'Oracle Advanced Planning Command Center (APCC)'
    ],
    keyCapabilities: [
      'Strategic "What-If" Scenario Modeling',
      'Operational & Financial Convergence',
      'Single consensus one-number forecast'
    ]
  },
  {
    id: 'network-planning',
    title: 'Network Planning',
    route: '/network-planning',
    coreTechnologies: [
      'Oracle Strategic Network Optimization (SNO)',
      'Oracle Collaborative Planning (CP)'
    ],
    keyCapabilities: [
      'Comprehensive supply chain network modeling accounting for all facilities, nodes, lanes, costs, and limits',
      'Strategic what-if simulation (single vs multi-sourcing, inventory pre-build vs overtime, tariffs, M&A)',
      'Robust contingency planning against unplanned interruptions and natural disasters',
      'Vendor Managed Inventory (VMI) programs for strategic trading partners'
    ]
  },
  {
    id: 'production-planning',
    title: 'Production Planning',
    route: '/production-planning',
    coreTechnologies: [
      'Oracle Production Scheduling (PS)'
    ],
    keyCapabilities: [
      'Resource & Bottleneck Optimization',
      'Constraint-Based Finite Scheduling',
      'Minimization of sequence-dependent changeover/setup times',
      'Interactive drag-and-drop scheduling workbench',
      'What-If Simulation Workbenches before dispatching work orders'
    ]
  },
  {
    id: 'order-fulfillment',
    title: 'Order Fulfillment',
    route: '/order-fulfillment',
    coreTechnologies: [
      'Oracle Global Order Promising (GOP)',
      'Oracle Distributed Order Orchestration (DOO)'
    ],
    keyCapabilities: [
      '24x7 Customer Order Promising with zero downtime',
      'Constraint-Aware Promising',
      'Available to Promise (ATP)',
      'Capable to Promise (CTP)',
      'Capable to Deliver (CTD)',
      'Fair-Share Supply Allocation for strategic accounts',
      'Complex Configure-to-Order (CTO) Architecture',
      'Enterprise Multi-System Integration'
    ]
  }
];

export const ENTERPRISE_TESTIMONIALS = [
  {
    id: 'qualcomm',
    clientName: 'Qualcomm, Inc.',
    role: 'Demand Manager Lead, Hi-Tech (Qualcomm, Inc.)',
    industry: 'Hi-Tech',
    quote: 'A highly valued asset during the implementation phase of Demantra. The product knowledge PLECO brought to the team helped resolve various customization activities within the module. Team was often challenged to provide solutions on various complex business needs. They quickly resolved all scenarios and often exceeded expectations. I strongly recommend this team for similiar efforts'
  },
  {
    id: 'petsafe',
    clientName: 'PetSafe',
    role: 'ERP Manager, Petsafe',
    industry: 'Pet Products / CPG',
    quote: 'Pleco worked as consulting partner for our Demantra Demand Management implementation project in August 2011. In just 2 weeks we had fully functional VCP proof-of-the-concept - something that previous implementation partner couldn\'t deliver in 2 months using handful of consultants. Few more weeks for couple of extensions and conversion - and we went live with project that was previously estimated to take half-year. . That\'s what distinguishes prime consultancy from sub-prime!'
  },
  {
    id: 'cummins',
    clientName: 'Cummins Power Generation',
    role: 'Business Planning & Analysis Manager, Cummins Power Generation',
    industry: 'Industrial Manufacturing',
    quote: '...[PLECO] supported Cummins Power Generation BP&A launched ODP migration to Oracle Demantra application. With his assistance, the whole project was finished on time and helped shorten the forecast cycle. ...[PLECO] good team players, very responsible, not only identify issues but also provide solutions. It\'s my pleasure to work with ...[PLECO].'
  }
];

export const CAREER_OPENINGS = [
  {
    id: 'ascp-consultant',
    title: 'Oracle Advanced Supply Chain Planning (ASCP) Consultant',
    minExperienceYears: 4,
    requiredSkills: [
      'Oracle ASCP system configuration and utilization',
      'Supply-based scheduling',
      'Demand/Supply Planning balancing',
      'Manufacturing process connectivity',
      'Stakeholder facilitation and interpersonal communication'
    ],
    preferredCertifications: ['APICS', 'IBF', 'Oracle Certified Specialist'],
    applicationEmail: 'Info@plecosolutions.com'
  },
  {
    id: 'demantra-consultant',
    title: 'Oracle Demantra Consultant',
    minExperienceYears: 4,
    requiredSkills: [
      'Oracle Demantra suite implementation and configuration',
      'Demand Planning and Sales & Operations Planning (S&OP) processes',
      'Demand shaping and consensus forecasting',
      'Supply/demand reconciliation',
      'Stakeholder facilitation and verbal/written communication'
    ],
    preferredCertifications: ['APICS (CPIM/CSCP)', 'IBF (CPF)', 'Oracle Demantra Implementation Specialist'],
    applicationEmail: 'Info@plecosolutions.com'
  }
];

export const CONTACT_FORM_CONTRACT = {
  fields: {
    name: {
      type: 'text',
      required: true,
      minLength: 2,
      label: 'Name'
    },
    email: {
      type: 'email',
      required: true,
      regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
      label: 'Email'
    },
    subject: {
      type: 'text',
      required: false,
      minLength: 3,
      label: 'Subject'
    },
    message: {
      type: 'textarea',
      required: true,
      minLength: 10,
      label: 'Message'
    }
  },
  submitAction: 'simulate affirmative notification card without external backend',
  accessibility: {
    errorAssociationAttr: 'aria-describedby',
    invalidAttr: 'aria-invalid',
    minTouchTargetPx: 44
  }
};

export const DESIGN_TOKENS = {
  colors: {
    executiveNavy: '#0A192F',
    executiveNavyDark: '#0F2744',
    primaryBlue: '#2563EB',
    techCyan: '#0284C7',
    slateScale: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      600: '#475569',
      900: '#0F172A'
    }
  },
  typography: {
    fontFamily: ['Inter', 'system-ui', 'sans-serif'],
    contrastTarget: 'WCAG 2.1 AA'
  },
  breakpoints: {
    mobile: 375,
    tablet: 768,
    laptop: 1024,
    desktop: 1280
  }
};
