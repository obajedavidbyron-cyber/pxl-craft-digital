import { ServiceItem, PortfolioProject } from '../types';

export const AGENCY_CONFIG = {
  name: 'PixelCraft Digital',
  tagline: 'We Build Digital Experiences That Move Businesses Forward.',
  headline: 'Your Business Deserves a Better Website.',
  description: 'We design and build modern digital experiences that help businesses stand out, reach customers, and grow.',
  email: 'pxlcraftdigital@gmail.com',
  phone: '+254740561931',
  phoneDisplay: '0740 561 931',
  whatsappRaw: '254740561931',
  nairobiCoordinates: {
    lat: -1.286389,
    lng: 36.817223,
    addressDisplay: 'Nairobi, Kenya (Service-Area Hub)',
  },
  operatingHours: 'Monday – Friday, 8:00 AM – 6:00 PM EAT (Available for global clients across time zones)',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  domainAudit: {
    statusNote: 'PixelCraft Digital operates as a registered digital design & development brand. For domain registration, we recommend securing pixelcraftdigital.co.ke via KeNIC accredited registrars in Kenya and pixelcraftdigital.com via ICANN registrars.',
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-website',
    title: 'Business Websites',
    tagline: 'Credible, fast, and structured for customer conversion.',
    shortDescription: 'Custom corporate and SME websites designed to establish authority, communicate services clearly, and drive qualified inquiries.',
    fullDescription: 'We build corporate and SME websites that combine architectural elegance with technical speed. Every page is hand-crafted with modern semantic markup, blazing-fast asset loading, and persuasive content hierarchy that turns casual visitors into booked consultations.',
    deliverables: [
      'Tailored UI/UX design (No cookie-cutter templates)',
      'Fully responsive layouts for all device sizes',
      'SEO foundational architecture & meta setup',
      'Contact & inquiry forms with instant notifications',
      'CMS or simple content updating workflow',
      'Fast loading speed optimized under 1.5 seconds'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Headless CMS'],
    timeline: '2 – 3 weeks',
    startingPriceKES: 'KES 65,000',
    startingPriceUSD: '$500',
    idealFor: 'Law firms, consultancies, healthcare clinics, logistics, construction, and established SMEs.'
  },
  {
    id: 'landing-page',
    title: 'High-Converting Landing Pages',
    tagline: 'Laser-focused single-purpose campaign pages that sell.',
    shortDescription: 'Performance-engineered landing pages built for marketing campaigns, product launches, event registrations, and lead generation.',
    fullDescription: 'A great landing page has one job: get the visitor to take action. We design focused, persuasive landing pages with clear value propositions, zero distracting links, clear call-to-actions, and integrated analytics to maximize return on ad spend.',
    deliverables: [
      'Conversion-centered visual hierarchy and copy framing',
      'A/B test ready layout structure',
      'Lead capture form with webhook / CRM integration',
      'WhatsApp direct inquiry click-to-chat triggers',
      'Google Analytics 4 & Meta Pixel event tracking setup',
      'Sub-second page load times on 3G/4G networks'
    ],
    techStack: ['React', 'Tailwind CSS', 'Motion', 'Vite'],
    timeline: '5 – 8 days',
    startingPriceKES: 'KES 35,000',
    startingPriceUSD: '$280',
    idealFor: 'Product launches, marketing campaigns, webinar registrations, real estate developments, and promotions.'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Websites',
    tagline: 'Frictionless shopping experiences that turn browsers into buyers.',
    shortDescription: 'Scalable online stores with localized checkout including M-Pesa Daraja, credit cards, inventory control, and cart recovery.',
    fullDescription: 'From artisan coffee roasters to fashion brands and equipment suppliers, we build custom e-commerce stores designed for high sales conversion. We seamlessly integrate Kenyan mobile money (M-Pesa, Airtel Money) alongside global card payments (Stripe, PayPal) to serve both domestic and international buyers.',
    deliverables: [
      'Custom storefront UI tailored to your brand identity',
      'M-Pesa STK Push & Daraja API payment gateway',
      'International credit card checkout (Stripe / Pesapal)',
      'Product catalog, inventory tracking, and order management',
      'Automated SMS & email order notifications',
      'Cart abandonment recovery features'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'M-Pesa API', 'Stripe'],
    timeline: '3 – 5 weeks',
    startingPriceKES: 'KES 110,000',
    startingPriceUSD: '$850',
    idealFor: 'Retailers, specialty coffee & agriculture, apparel brands, electronics vendors, and direct-to-consumer businesses.'
  },
  {
    id: 'web-application',
    title: 'Custom Web Applications',
    tagline: 'Bespoke web software engineered to automate your business operations.',
    shortDescription: 'Tailored portals, client dashboards, booking engines, and internal tools with robust security and database backends.',
    fullDescription: 'When off-the-shelf software doesn’t fit your unique business workflows, we build bespoke web applications from the ground up. Whether you need a customer booking portal, an internal operations dashboard, or a specialized SaaS product, we deliver reliable, secure full-stack software.',
    deliverables: [
      'Role-based access control and secure authentication',
      'Custom relational database schemas and real-time state',
      'REST & GraphQL API design and 3rd party integrations',
      'Interactive dashboards, charts, and reporting exports',
      'Comprehensive automated testing and code documentation',
      'Cloud deployment on scalable infrastructure'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    timeline: '4 – 8 weeks',
    startingPriceKES: 'KES 180,000',
    startingPriceUSD: '$1,400',
    idealFor: 'Tech startups, logistics dispatchers, healthcare booking portals, financial services, and membership organizations.'
  },
  {
    id: 'redesign',
    title: 'Website Redesigns',
    tagline: 'Revitalize your online presence for modern standards.',
    shortDescription: 'Transform outdated, slow, or low-performing websites into sleek, high-performing engines that represent your current brand.',
    fullDescription: 'Has your business outgrown its 5-year-old website? We audit your existing site, preserve hard-earned SEO rankings through careful 301 redirects, eliminate code bloat, and rebuild your user interface to look modern, clean, and unmistakably authoritative.',
    deliverables: [
      'Comprehensive UX audit of current user drop-off points',
      'Brand refresh and modern visual style system',
      'SEO audit and URL mapping to preserve search authority',
      'Performance overhaul targeting 90+ Google PageSpeed scores',
      'Mobile optimization for seamless smartphone browsing',
      'Zero-downtime migration to modern hosting'
    ],
    techStack: ['Modern React', 'Vite', 'Tailwind CSS', 'Performance Optimization'],
    timeline: '2 – 4 weeks',
    startingPriceKES: 'KES 55,000',
    startingPriceUSD: '$420',
    idealFor: 'Businesses with slow, outdated, non-mobile friendly sites looking to improve credibility and inbound leads.'
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance & Support',
    tagline: 'Peace of mind with proactive security, backups, and updates.',
    shortDescription: 'Ongoing technical care, security patching, uptime monitoring, content updates, and continuous speed optimization.',
    fullDescription: 'A website is a living digital asset. Our maintenance plans ensure your site stays secure, lightning-fast, and up to date without taking you away from running your business. We monitor uptime, run cloud backups, and handle routine updates.',
    deliverables: [
      '24/7 uptime monitoring and incident response',
      'Weekly automated cloud backups with 1-click restore',
      'Security patching, vulnerability scans, and SSL renewals',
      'Monthly dedicated developer hours for content updates',
      'Performance monitoring and speed maintenance',
      'Monthly performance and health reports'
    ],
    techStack: ['Cloudflare', 'GitHub CI/CD', 'Server Monitoring', 'Automated Backups'],
    timeline: 'Monthly Retainer',
    startingPriceKES: 'KES 18,000 / mo',
    startingPriceUSD: '$140 / mo',
    idealFor: 'Any business that relies on its website for daily leads and cannot afford downtime or broken links.'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'jungle-lane-safaris',
    title: 'Jungle Lane Safaris',
    client: 'Jungle Lane Safaris Ltd',
    category: 'web-application',
    categoryLabel: 'Safari & Tour Travel Platform',
    summary: 'A bespoke tour and travel booking platform for Jungle Lane Safaris (junglelanesafaris.co.ke), organizing custom road and air safari packages, wildlife viewing, and beach holidays across Kenya, Uganda, and Tanzania.',
    challenge: 'Jungle Lane Safaris needed a high-performance, mobile-optimized digital presence with fast safari itinerary previews, destination details for East African wildlife circuits, and direct conversion channels for global travelers.',
    solution: 'Designed and engineered an immersive, fast-loading travel website with interactive package selectors (Maasai Mara, Serengeti, Bwindi Gorilla trekking), instant booking inquiry funnels, and integrated WhatsApp consultation.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'SEO Architecture'],
    image: '/src/assets/images/portfolio_jungle_lane_safaris_1792735289462.jpg',
    liveUrl: 'https://junglelanesafaris.co.ke',
    featured: true,
    year: '2025',
    deliverables: [
      'Interactive multi-country safari package selector',
      'Maasai Mara, Amboseli, Serengeti & Bwindi itineraries',
      'Mobile-optimized inquiry & booking lead capture',
      'Sub-second page load speeds on mobile networks'
    ]
  },
  {
    id: 'mara-expeditions',
    title: 'Serengeti & Mara Expeditions',
    client: 'Serengeti Luxury Safaris',
    category: 'web-application',
    categoryLabel: 'Custom Web Application & Booking',
    summary: 'A bespoke safari booking platform with interactive lodge reservation calendars, seasonal migration tracking, and multi-currency checkout.',
    challenge: 'The client relied on slow email quote chains that lost high-net-worth international travelers who wanted instant dates, lodge availability, and itinerary pricing.',
    solution: 'Designed and engineered an immersive, photo-forward web platform with real-time lodge availability, interactive itinerary builders, and automated deposit payments.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Booking Engine API'],
    image: '/src/assets/images/portfolio_safari_expeditions_1792693349575.jpg',
    liveUrl: 'https://junglelanesafaris.co.ke',
    featured: true,
    year: '2025',
    deliverables: [
      'Interactive safari itinerary builder',
      'Real-time date availability checker',
      'Dual currency pricing (USD & KES)',
      'Automated PDF itinerary generator'
    ]
  },
  {
    id: 'equatorial-brew',
    title: 'Equatorial Brew Specialty Coffee',
    client: 'Equatorial Coffee Roasters Kenya',
    category: 'ecommerce',
    categoryLabel: 'Specialty E-Commerce Store',
    summary: 'High-performance direct-to-consumer online store for single-origin Mount Kenya and Nyeri coffee with M-Pesa STK push and international shipping.',
    challenge: 'Existing website took 6.2 seconds to load on mobile devices in Kenya, causing a 68% cart abandonment rate, and lacked native M-Pesa mobile money checkout.',
    solution: 'Engineered a modern headless e-commerce experience with sub-second page loads, automated M-Pesa Daraja payment prompt, and international Stripe card processing.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'M-Pesa Daraja API', 'Stripe'],
    image: '/src/assets/images/portfolio_artisan_coffee_1792693349745.jpg',
    liveUrl: '#',
    featured: true,
    year: '2025',
    deliverables: [
      'Instant M-Pesa STK push checkout',
      'Single-origin tasting notes filter',
      'Recurring coffee subscription engine',
      'Sub-second mobile loading speed'
    ]
  },
  {
    id: 'medicare-connect',
    title: 'MediCare Connect Telehealth Portal',
    client: 'MediCare Health Group',
    category: 'web-application',
    categoryLabel: 'Healthcare Web Portal',
    summary: 'Secure clinician dashboard and patient booking portal for virtual consultations, lab result access, and prescription tracking.',
    challenge: 'Patients in remote Kenyan counties struggled to schedule specialist consultations in Nairobi without traveling long distances or waiting in crowded queues.',
    solution: 'Built a lightweight, HIPAA-conscious web application supporting low-bandwidth video appointments, SMS appointment reminders, and digital health records.',
    technologies: ['React', 'TypeScript', 'WebRTC', 'Tailwind CSS', 'Encrypted DB'],
    image: '/src/assets/images/portfolio_telemed_health_1792693350255.jpg',
    liveUrl: '#',
    featured: true,
    year: '2025',
    deliverables: [
      'Clinician scheduling calendar',
      'Patient vitals tracking dashboard',
      'Automated SMS appointment reminders',
      'Lightweight low-bandwidth video consultation room'
    ]
  },
  {
    id: 'finsync-merchant',
    title: 'FinSync Merchant Hub',
    client: 'FinSync Payments Africa',
    category: 'business-website',
    categoryLabel: 'Fintech Product & Analytics Showcase',
    summary: 'A clean developer-focused marketing site and interactive merchant integration portal showcasing African multi-rail payment APIs.',
    challenge: 'FinSync needed to present complex multi-country API capabilities (M-Pesa, MTN MoMo, Airtel, Visa) to both corporate CFOs and software developers.',
    solution: 'Crafted a sleek, high-contrast dark-mode interface with live code snippets, interactive payment simulation widgets, and structured documentation.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    image: '/src/assets/images/portfolio_fintech_portal_1792693349878.jpg',
    liveUrl: '#',
    featured: true,
    year: '2026',
    deliverables: [
      'Interactive multi-currency fee calculator',
      'Live code playground for developer integration',
      'Merchant onboarding lead funnel',
      'Ultra-responsive mobile preview'
    ]
  }
];

export const WORK_PROCESS = [
  {
    step: '01',
    name: 'Discovery & Strategy',
    description: 'We unpack your business goals, target audience, customer pain points, and competitors to define an exact functional scope.'
  },
  {
    step: '02',
    name: 'Wireframing & UI/UX Design',
    description: 'We draft clear page architectures and visual prototypes. You review interactive layouts before a single line of backend code is committed.'
  },
  {
    step: '03',
    name: 'Clean Code Development',
    description: 'We build your application using modern React, TypeScript, and clean semantic markup. No bloated visual page builders or sluggish plugins.'
  },
  {
    step: '04',
    name: 'Testing, Speed & SEO QA',
    description: 'We rigorously test across iPhone, Android, tablets, and desktop browsers, verify forms, check mobile money flows, and audit page speed.'
  },
  {
    step: '05',
    name: 'Launch & Handoff',
    description: 'We configure DNS, deploy to high-availability CDNs, connect domain SSL, and deliver complete documentation so you are in full control.'
  }
];

export const AGENCY_BENEFITS = [
  {
    title: 'Hand-Crafted Performance',
    description: 'We write clean, modular React and Tailwind code. Your website loads in under 1.5 seconds, even on mobile networks.'
  },
  {
    title: 'Localized & Global Commerce',
    description: 'Native integration with Kenya’s M-Pesa Daraja API, Airtel Money, and international Stripe/Pesapal for frictionless sales.'
  },
  {
    title: 'Direct Senior Developer Access',
    description: 'No layers of junior account executives. You speak directly with the engineers and designers building your digital product.'
  },
  {
    title: 'Transparent Milestones & Pricing',
    description: 'Detailed written proposals with firm deliverables, clear schedules, and no hidden maintenance surprises.'
  }
];

export const FAQS = [
  {
    question: 'How long does it take to build a website with PixelCraft Digital?',
    answer: 'Standard business websites take 2 to 3 weeks from discovery to launch. High-converting landing pages can be delivered in 5 to 8 business days. Complex custom web applications or large e-commerce platforms typically require 4 to 8 weeks depending on custom feature requirements.'
  },
  {
    question: 'Can you integrate M-Pesa payments for Kenyan customers?',
    answer: 'Yes! We specialize in direct M-Pesa Daraja API integrations including STK Push (where customers receive an automatic prompt on their phone to enter their PIN), C2B Paybill, and Buy Goods lipa na M-Pesa. We also integrate credit card gateways (Stripe, Pesapal, Flutterwave) so you can receive payments from anywhere in the world.'
  },
  {
    question: 'Where is PixelCraft Digital based, and do you work with international clients?',
    answer: 'Our primary service-area reference hub is based in Nairobi, Kenya. We work seamlessly with clients across all 47 counties of Kenya and internationally across the UK, Europe, North America, and the Middle East via structured async communication and video conferences.'
  },
  {
    question: 'What do you require from me to get started?',
    answer: 'To begin, we schedule a quick 20-minute discovery discussion to understand your business objectives. Once we define your project scope, we need your brand guidelines (or logo), any draft text or photos you already have, and access to your domain provider if you already own one.'
  },
  {
    question: 'Do I own the code and website after completion?',
    answer: '100% yes. Upon project completion and final settlement, you own full intellectual property, source code, design assets, and domain ownership. We provide full repository access and deployment documentation.'
  }
];
