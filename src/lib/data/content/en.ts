import type { Component } from 'svelte';
import { Code2, ShieldCheck, Palette, Lock, MapPin, Users, Rocket, Mail, Globe, Boxes } from '@lucide/svelte';
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
    portraitAlt: (name: string, role: string) => `Portrait of ${name}, ${role} at DevSafe`
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
      'We build websites and apps and audit your systems for schools, churches and businesses. The same team builds and runs its own products, including BookBridge.',
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
      { icon: Rocket as unknown as Component, title: 'Shipping in production', text: 'Eventra, a live ticketing & payments platform' },
      { icon: Boxes as unknown as Component, title: 'Product builders', text: 'We build and run our own product, BookBridge' },
      { icon: ShieldCheck as unknown as Component, title: 'Security-reviewed', text: 'Every project is checked for vulnerabilities before handover' },
      { icon: MapPin as unknown as Component, title: 'Based in Yaoundé', text: 'Local team, local pricing, no outsourcing' }
    ],
    stack: {
      label: 'Built with',
      items: ['SvelteKit', 'Rust', 'Go', 'gRPC', 'Flutter', 'Tailwind CSS']
    }
  },

  services: {
    heading: 'Agency Services',
    subtitle:
      'Clean, modern, and secure software services for your organization — built by the same team that ships our own products.',
    process: {
      heading: 'How we work',
      steps: [
        { title: 'Discover', text: 'A free consultation to understand your needs and budget.' },
        { title: 'Design & build', text: 'You review progress as we build, not just at the end.' },
        { title: 'Security review', text: 'We check for vulnerabilities before handover.' },
        { title: 'Launch & support', text: 'We deploy, hand over, and help you run it.' }
      ]
    },
    items: [
      {
        icon: ShieldCheck as unknown as Component,
        title: 'Cybersecurity Services',
        description:
          'We audit your systems, test them the way an attacker would, and protect your data and clients. You get a clear report in plain language and a prioritised plan to fix what matters first.',
        tags: ['Penetration Testing', 'Security Audits', 'Vulnerability Assessment', 'Data Protection'],
        accentColor: '#3B82F6',
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
        description:
          'Custom websites, mobile apps, and web platforms built for your specific needs. Clean, fast, and easy to manage.',
        tags: ['Websites', 'Mobile Apps', 'Web Platforms'],
        accentColor: '#22D3EE',
        visual: { type: 'pipeline', steps: ['build', 'security review', 'deploy'] }
      },
      {
        icon: Palette as unknown as Component,
        title: 'Design & Branding',
        description:
          'From logos to full brand identities — we make sure your institution looks professional and memorable.',
        tags: ['Logo Design', 'UI/UX', 'Brand Identity'],
        accentColor: '#34D399',
        visual: { type: 'palette', swatches: ['#0B1120', '#1D4ED8', '#22D3EE', '#34D399', '#F8FAFC'] }
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
        title: 'Security-First Approach',
        description:
          'Every product we build is reviewed for vulnerabilities before delivery. Your data and your clients are safe.'
      },
      {
        icon: MapPin as unknown as Component,
        title: 'Local & Affordable',
        description:
          'We understand the Cameroonian market. Our pricing is built for local institutions, not multinational budgets.'
      },
      {
        icon: Users as unknown as Component,
        title: 'Full-Stack Team',
        description:
          'Frontend, backend, design, and business strategy — all in one team. No outsourcing, no middlemen.'
      },
      {
        icon: Rocket as unknown as Component,
        title: 'Product Builders, Not Just Contractors',
        description:
          'We build and run our own products, so we know what it takes to launch and maintain software. Our clients benefit from that experience directly.'
      }
    ]
  },

  clientWork: {
    eyebrow: 'Agency',
    heading: 'Client Work',
    subtitle: 'Real-world solutions we have built for clients, designed for local impact.',
    projects: [
      {
        title: 'Eventra',
        tagline: 'Event ticketing & payments platform',
        description:
          'Full-stack platform for event organisers in Cameroon: secure QR tickets, paid voting contests and service bookings, with Mobile Money (MTN / Orange) withdrawals — built with SvelteKit and Rust/gRPC.',
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
    cta: {
      text: 'Want to see what we can build for you? ',
      link: { text: 'Get in touch →', href: '#contact' }
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
          'Mobile app that helps students find, buy and sell textbooks nearby, with escrow-protected payments and seller ratings — built with Flutter.',
        statusBadge: 'Coming to Play Store',
        isLive: false,
        tags: ['Flutter', 'Dart', 'Mobile App', 'Escrow Payments'],
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
    subtitle: 'A dedicated team of security experts, software engineers, and designers in Cameroon.',
    photoAlt: 'DevSafe founders Verla Berinyuy Ndey and Engon Ken Morel',
    members: [
      {
        name: 'Verla Berinyuy Ndey',
        role: 'Founder & CEO',
        description:
          'Cybersecurity major, SvelteKit & Flutter developer, product visionary. Founder of DevSafe and lead architect of BookBridge.',
        initials: 'VB',
        bg: '#1D4ED8',
        borderCyan: false,
        tags: ['SvelteKit', 'Flutter', 'Cybersecurity'],
        image: founderImg
      },
      {
        name: 'Engon Ken Morel',
        role: 'Co-Founder & CTO',
        description:
          "Systems architect and backend engineer specialising in Rust and Go. Leads all backend infrastructure across DevSafe's products.",
        initials: 'KM',
        bg: '#131C31',
        borderCyan: true,
        tags: ['Rust', 'Go', 'gRPC'],
        image: backendImg
      }
    ]
  },

  ctaBanner: {
    badge: 'Free consultation',
    heading: 'Ready to Take Your Institution Digital?',
    subtext:
      "Hire the team behind our own products. Get a free consultation — we'll assess your needs and tell you exactly what we can build for you.",
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
      whatsapp: { text: '+237 680 001 677', href: 'https://wa.me/237680001677' },
      github: { text: 'github.com/Dev-Safe' }
    },
    bottom: {
      copyright: `© ${new Date().getFullYear()} DevSafe. All rights reserved.`,
      domain: 'devsafe.cm'
    }
  }
};

export type SiteContent = typeof en;

export default en;
