import type { Component } from 'svelte';
import { Code2, ShieldCheck, Palette, Lock, MapPin, Rocket, Mail, Globe, Trophy, Award, Tv, BriefcaseBusiness, FileLock } from '@lucide/svelte';
import founderImg from '$lib/assets/Founder.jpg';
import backendImg from '$lib/assets/Backend.jpg';
import eventraScreen from '$lib/assets/screens/eventra-home.webp';
import bookbridgeScreen from '$lib/assets/screens/bookbridge-home.webp';
import type { Lang } from '$lib/config/site';
import type { AuditFinding, ProjectSection, ServiceItem, ServiceOption } from './types';

// English is the source of truth: `SiteContent` is inferred from this object and every
// other language must match it exactly (see fr.ts), so a missing translation fails `npm run check`.
const en = {
  meta: {
    lang: 'en' as Lang,
    home: '/'
  },

  seo: {
    title: 'Cybersecurity & Secure Software in Cameroon | DevSafe',
    description:
      'Penetration testing, security audits and secure web & Flutter apps from Yaoundé. Makers of BookBridge. Book a free consultation with DevSafe.',
    keywords: [
      'Cybersecurity agency Cameroon',
      'Secure software development',
      'Penetration testing Yaoundé',
      'Security audit Cameroon',
      'SvelteKit Rust developers',
      'Flutter app development Cameroon',
      'BookBridge app',
      'Eventra ticketing platform'
    ],
    ogImageAlt: 'DevSafe: secure software and cybersecurity in Cameroon'
  },

  ui: {
    logoAlt: 'DevSafe logo',
    themeToggle: 'Toggle light or dark theme',
    menuToggle: 'Toggle menu',
    languageSwitch: {
      text: 'FR',
      hreflang: 'fr' as Lang,
      label: 'FR — Voir le site en français'
    },
    specialty: 'Our specialty',
    portraitAlt: (name: string, role: string) => `Portrait of ${name}, ${role} at DevSafe`,
    profileLabel: (name: string, network: string) => `${name} on ${network} (opens in a new tab)`
  },

  whatsapp: {
    label: 'Chat on WhatsApp',
    short: 'WhatsApp',
    prompt: 'Prefer to chat? Message us on WhatsApp',
    ariaLabel: 'Chat with DevSafe on WhatsApp (opens in a new tab)',
    message: 'Hello DevSafe, I would like to discuss a project.'
  },

  navigation: {
    logo: {
      textDev: 'DEV',
      textSafe: 'SAFE'
    },
    links: [
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Client Work', href: '#work' },
      { name: 'Products', href: '#products' },
      { name: 'Team', href: '#team' },
      { name: 'Contact', href: '#contact' }
    ],
    actions: {
      ghost: { text: 'Our Products', href: '#products' },
      primary: { text: 'Get in Touch', href: '#contact' }
    }
  },

  hero: {
    badge: 'Software & Cybersecurity Agency · Yaoundé, Cameroon',
    headline: {
      before: '',
      highlight: 'Secure software',
      after: ' and cybersecurity, built in Cameroon.'
    },
    subheadline:
      'Security audits, penetration testing and secure web & mobile apps for businesses, schools and institutions, from the award-winning team behind BookBridge.',
    cta: {
      primary: { text: 'Book a Free Consultation →', href: '#contact' },
      secondary: { text: 'See Our Work', href: '#work' }
    },
    auditPreview: {
      file: 'security-audit.md',
      label: 'Sample report',
      title: 'Website Security Audit',
      target: 'School portal',
      summary: [
        { level: 'Critical', count: 0, color: 'bg-red-500' },
        { level: 'High', count: 2, color: 'bg-orange-500' },
        { level: 'Medium', count: 4, color: 'bg-amber-400' },
        { level: 'Low', count: 3, color: 'bg-slate-400' }
      ],
      labels: {
        target: 'Target:',
        findings: 'findings',
        severity: { high: 'High', medium: 'Medium', low: 'Low' },
        fixed: 'Fixed',
        inProgress: 'In progress'
      },
      findings: [
        { severity: 'high', title: 'Admin login allows unlimited attempts', fixed: true },
        { severity: 'high', title: 'Student records reachable without auth', fixed: true },
        { severity: 'medium', title: 'Missing HTTPS redirect & security headers', fixed: false }
      ] as AuditFinding[],
      footer: 'Every report ships with a prioritised fix plan'
    }
  },

  trustStrip: {
    heading: 'Proof, not promises',
    proof: [
      { icon: Trophy as unknown as Component, title: '3rd place, ICT for Africa Summit', text: 'Tech Innovation Challenge: 250,000 FCFA to develop BookBridge' },
      { icon: Award as unknown as Component, title: 'Top 5 at PROMOTE 2026', text: 'BookBridge selected among the top projects' },
      { icon: Tv as unknown as Component, title: 'Featured on CRTV', text: 'BookBridge covered on the national news' },
      { icon: BriefcaseBusiness as unknown as Component, title: '4 active clients', text: 'Eventra, plus 3 more under NDA' }
    ]
  },

  services: {
    heading: 'Agency Services',
    subtitle: 'Secure software and security testing, from the team that ships its own products.',
    items: [
      {
        icon: ShieldCheck as unknown as Component,
        title: 'Cybersecurity Services',
        description:
          'We test your systems the way an attacker would, then hand you a plain-language report and a prioritised plan to fix what matters first.',
        tags: ['Penetration Testing', 'Security Audits', 'Vulnerability Assessment', 'Data Protection'],
        accentColor: '#E0A020',
        featured: true,
        visual: {
          type: 'checklist',
          heading: 'What an audit covers',
          items: [
            'Authentication & access control',
            'Data protection & encryption',
            'API & input validation',
            'Server & hosting configuration',
            'Prioritised fix plan'
          ]
        }
      },
      {
        icon: Code2 as unknown as Component,
        title: 'Software Development',
        description: 'Websites, mobile apps and web platforms: fast, easy to manage and security-reviewed before launch.',
        tags: ['Websites', 'Mobile Apps', 'Web Platforms'],
        accentColor: '#D9622B',
        visual: { type: 'pipeline', steps: ['build', 'security review', 'deploy'] }
      },
      {
        icon: Palette as unknown as Component,
        title: 'Design & Branding',
        description: 'Logos, interfaces and brand identities that make your institution look professional.',
        tags: ['Logo Design', 'UI/UX', 'Brand Identity'],
        accentColor: '#0E8A5F',
        visual: { type: 'palette', swatches: ['#0F0B07', '#F5B53D', '#D9622B', '#C8102E', '#0E8A5F'] }
      }
    ] as ServiceItem[]
  },

  whyDevSafe: {
    heading: 'Why Clients Trust DevSafe',
    videoCaption:
      'In the background: Verla Berinyuy Ndey, our founder, leading a Git & GitHub workshop as GDG on Campus Lead Organizer at ICT University.',
    items: [
      {
        icon: Lock as unknown as Component,
        title: 'Security-First',
        description: 'Everything we build is checked for vulnerabilities before handover.'
      },
      {
        icon: FileLock as unknown as Component,
        title: 'Confidential by Default',
        description: 'Most of our clients work with us under NDA. We protect your business the way we protect your data.'
      },
      {
        icon: MapPin as unknown as Component,
        title: 'Local & Affordable',
        description: 'A Yaoundé team with pricing built for local institutions, not multinational budgets.'
      },
      {
        icon: Rocket as unknown as Component,
        title: 'Product Builders',
        description: 'We launch and run our own award-winning product, so we know what it takes to keep software alive.'
      }
    ]
  },

  clientWork: {
    eyebrow: 'Agency',
    heading: 'Client Work',
    subtitle: 'Four active client projects. Here is the one we can show.',
    projects: [
      {
        title: 'Eventra',
        tagline: 'Event ticketing & payments platform',
        description:
          'Event platform for organisers in Cameroon: secure QR tickets, paid voting contests and service bookings, with MTN and Orange Mobile Money payouts.',
        statusBadge: 'Live',
        isLive: true,
        tags: ['SvelteKit', 'Rust', 'gRPC', 'Mobile Money'],
        screenshot: {
          src: eventraScreen,
          alt: 'Eventra home screen on mobile: "Transform your events into power", with buttons to create an event or become a partner',
          width: 540,
          height: 1000,
          caption: 'Eventra · live web app on mobile'
        }
      }
    ],
    confidential: {
      count: '+3',
      title: 'Active client projects under NDA',
      text: 'We keep client work confidential. Ask us about relevant experience during your free consultation.',
      link: { text: 'Book a consultation →', href: '#contact' }
    }
  } as ProjectSection,

  products: {
    eyebrow: 'Owned by DevSafe',
    heading: 'Our Products',
    subtitle: 'Products we design, build, own, and operate ourselves.',
    projects: [
      {
        title: 'BookBridge',
        tagline: 'Peer-to-peer textbook marketplace',
        description:
          'Students find, buy and sell textbooks nearby, with escrow-protected payments and seller ratings.',
        highlights: ['3rd place · ICT for Africa Summit', 'Top 5 · PROMOTE 2026', 'Featured on CRTV'],
        statusBadge: 'Coming to Play Store',
        isLive: false,
        tags: ['Flutter', 'Escrow payments', 'Android'],
        screenshot: {
          src: bookbridgeScreen,
          alt: 'BookBridge app home screen: book search, a nearby-books banner, social impact stats and nearby textbook listings priced in FCFA',
          width: 520,
          height: 1074,
          caption: 'BookBridge · Android app'
        },
        link: { text: 'Visit Website', href: 'https://book-bridge-three.vercel.app/' }
      }
    ]
  } as ProjectSection,

  team: {
    heading: 'The Team Behind DevSafe',
    subtitle: 'Two engineers from Yaoundé who build, secure and ship.',
    photoAlt: 'DevSafe founders Verla Berinyuy Ndey and Engon Ken Morel',
    members: [
      {
        name: 'Verla Berinyuy Ndey',
        role: 'Founder & CEO',
        description: 'Cybersecurity builder and product lead. Leads DevSafe’s security audits and designs apps for real African problems.',
        highlights: [
          'Led BookBridge to 3rd place at the ICT for Africa Summit and onto CRTV national news',
          'MTN YaMo Pitch Season 4 regional finalist, ranked #27 of 400+',
          'GDG on Campus Lead at The ICT University; founder of DCT Lab'
        ],
        initials: 'VB',
        bg: '#1D4ED8',
        borderCyan: false,
        tags: ['Flutter', 'SvelteKit', 'Rust', 'Pen-testing'],
        image: founderImg,
        profiles: {
          linkedin: 'https://www.linkedin.com/in/verla-berinyuy-ndey-15b1262a5/',
          github: 'https://github.com/DCT-Berinyuy'
        }
      },
      {
        name: 'Engon Ken Morel',
        role: 'Co-Founder & CTO',
        description: 'Systems architect behind DevSafe’s backends: fast Rust services, secure databases and typed APIs.',
        highlights: [
          'Built BookBridge’s automated multi-party mobile payment pipeline',
          'Hardens backends against IDOR and broken auth with layered JWT access control',
          'PostgreSQL with Row-Level Security, ConnectRPC and Protobuf'
        ],
        initials: 'KM',
        bg: '#131C31',
        borderCyan: true,
        tags: ['Rust', 'PostgreSQL', 'ConnectRPC', 'FastAPI'],
        image: backendImg,
        profiles: {
          linkedin: 'https://www.linkedin.com/in/engon-morel-8ba00a296/',
          github: 'https://github.com/ken-morel'
        }
      }
    ]
  },

  ctaBanner: {
    badge: 'Free consultation',
    heading: 'Ready to Take Your Institution Digital?',
    subtext: "Tell us what you need. We'll reply within 24 hours with a clear plan and a free security pre-audit.",
    benefits: ['Free cybersecurity pre-audit', 'Custom architecture diagram', 'Written proposal within 24 hours'],
    action: {
      text: 'Request a Free Consultation',
      href: 'mailto:contact@devsafe.cm?subject=DevSafe Project Quote Inquiry'
    },
    form: {
      name: { label: 'Your name', placeholder: 'E.g. Verla B.' },
      email: { label: 'Email address', placeholder: 'E.g. contact@devsafe.cm' },
      service: {
        label: 'Service you need',
        options: [
          { value: 'software', label: 'Software development' },
          { value: 'security', label: 'Cybersecurity audit' },
          { value: 'branding', label: 'UI/UX & brand design' },
          { value: 'general', label: 'General digital assessment' }
        ] as { value: ServiceOption; label: string }[]
      },
      message: { label: 'Project details', placeholder: 'Briefly describe your goals...' },
      submit: 'Send consultation request',
      submitting: 'Sending securely...',
      errorPrefix: 'Error:',
      errorFailed: 'Submission failed. Please try again.',
      errorNetwork: 'Network error. Please check your connection or email us directly.',
      altContact: 'Prefer email?'
    },
    success: {
      heading: 'Request received',
      thanks: 'Thank you,',
      sent: 'Your consultation details have been sent. We will contact you at',
      within: 'within 24 hours.',
      again: '← Send another message'
    }
  },

  footer: {
    tagline: 'Build. Secure. Protect.',
    description: 'A software and cybersecurity agency in Cameroon that also builds its own products.',
    quickLinks: {
      heading: 'Navigation',
      links: [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Client Work', href: '#work' },
        { name: 'Products', href: '#products' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    contact: {
      heading: 'Get In Touch',
      email: { text: 'contact@devsafe.cm', icon: Mail as unknown as Component },
      website: { text: 'devsafe.cm', icon: Globe as unknown as Component },
      whatsapp: { text: '+237 680 001 677' },
      github: { text: 'github.com/Dev-Safe' }
    },
    bottom: {
      copyright: `© ${new Date().getFullYear()} DevSafe. All rights reserved.`,
      domain: 'devsafe.cm',
      pride: 'Proudly built in Yaoundé, Cameroon, for Africa.'
    }
  }
};

export type SiteContent = typeof en;

export default en;
