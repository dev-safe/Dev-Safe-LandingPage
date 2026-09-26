import type { Component } from 'svelte';
import { 
  Code2, 
  ShieldCheck, 
  Palette, 
  Lock, 
  MapPin, 
  Users, 
  Rocket,
  Mail,
  Globe,
} from '@lucide/svelte';
import founderImg from '$lib/assets/Founder.jpg';
import backendImg from '$lib/assets/Backend.jpg';

export const navigation = {
  logo: {
    textDev: 'DEV',
    textSafe: 'SAFE',
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
};

export const hero = {
  badge: '🛡️ Software Agency & Product Studio',
  headline: {
    before: 'We Build ',
    highlight: 'Secure Software',
    after: ' — For You, and For Ourselves'
  },
  subheadline: 'DevSafe is a Cameroonian software and cybersecurity agency with its own product line. We build websites, apps, and security audits for churches, schools, and businesses — and ship our own products like BookBridge.',
  cta: {
    primary: { text: 'Work With Us →', href: '#contact' },
    secondary: { text: 'Explore Our Products', href: '#products' }
  },
  trustBadges: [
    { text: 'Agency Services, Local Pricing' },
    { text: 'We Build & Run Our Own Products' },
    { text: 'Security-First Approach' }
  ],
  projectCard: {
    status: 'Live',
    label: 'DevSafe Agency',
    project: 'Eventra — Event Platform',
    progress: 71,
    tags: ['SvelteKit', 'Rust', 'Secured ✓']
  }
};

export const services = {
  heading: 'Agency Services',
  subtitle: 'Clean, modern, and secure software services for your organization — built by the same team that ships our own products.',
  items: [
    {
      icon: Code2 as unknown as Component,
      title: 'Software Development',
      description: 'Custom websites, mobile apps, and web platforms built for your specific needs. Clean, fast, and easy to manage.',
      tags: ['Websites', 'Mobile Apps', 'Web Platforms'],
      accentColor: '#00D4FF'
    },
    {
      icon: ShieldCheck as unknown as Component,
      title: 'Cybersecurity Services',
      description: 'We audit your systems, identify vulnerabilities, and protect your data and clients. Prevention before cure.',
      tags: ['Security Audits', 'Vulnerability Assessment', 'Data Protection'],
      accentColor: '#0077FF'
    },
    {
      icon: Palette as unknown as Component,
      title: 'Design & Branding',
      description: 'From logos to full brand identities — we make sure your institution looks professional and memorable.',
      tags: ['Logo Design', 'UI/UX', 'Brand Identity'],
      accentColor: '#10B981'
    }
  ]
};

export const whyDevSafe = {
  heading: 'Why Clients Trust DevSafe',
  items: [
    {
      icon: Lock as unknown as Component,
      title: 'Security-First Approach',
      description: 'Every product we build is reviewed for vulnerabilities before delivery. Your data and your clients are safe.'
    },
    {
      icon: MapPin as unknown as Component,
      title: 'Local & Affordable',
      description: 'We understand the Cameroonian market. Our pricing is built for local institutions, not multinational budgets.'
    },
    {
      icon: Users as unknown as Component,
      title: 'Full-Stack Team',
      description: 'Frontend, backend, design, and business strategy — all in one team. No outsourcing, no middlemen.'
    },
    {
      icon: Rocket as unknown as Component,
      title: 'Product Builders, Not Just Contractors',
      description: 'We build and run our own products, so we know what it takes to launch and maintain software. Our clients benefit from that experience directly.'
    }
  ]
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  statusBadge: string;
  isLive: boolean;
  tags: string[];
  link?: { text: string; href: string };
};

export type ProjectSection = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  projects: Project[];
  cta?: { text: string; link: { text: string; href: string } };
};

export const clientWork: ProjectSection = {
  eyebrow: 'Agency',
  heading: 'Client Work',
  subtitle: 'Real-world solutions we have built for clients, designed for local impact.',
  projects: [
    {
      title: 'Eventra',
      tagline: 'Event ticketing & payments platform',
      description: 'Full-stack platform for event organisers to sell tickets, run paid voting contests, and manage service bookings — built with SvelteKit and Rust/gRPC.',
      statusBadge: 'Live',
      isLive: true,
      tags: ['SvelteKit', 'Rust', 'gRPC', 'Tailwind CSS']
    }
  ],
  cta: {
    text: 'Want to see what we can build for you? ',
    link: { text: 'Get in touch →', href: '#contact' }
  }
};

export const products: ProjectSection = {
  eyebrow: 'Owned by DevSafe',
  heading: 'Our Products',
  subtitle: 'Products we design, build, own, and operate ourselves.',
  projects: [
    {
      title: 'BookBridge',
      tagline: 'Peer-to-peer textbook marketplace',
      description: 'Mobile-first app connecting students to buy and sell textbooks safely, with escrow-protected payments and seller ratings — built with Flutter.',
      statusBadge: 'Coming to Play Store',
      isLive: false,
      tags: ['Flutter', 'Dart', 'Mobile App', 'Escrow Payments'],
      link: { text: 'Visit Website', href: 'https://book-bridge-three.vercel.app/' }
    }
  ]
};

export const team = {
  heading: 'The Team Behind DevSafe',
  subtitle: 'A dedicated team of security experts, software engineers, and designers in Cameroon.',
  members: [
    {
      name: 'Verla Berinyuy Ndey',
      role: 'Founder & CEO',
      description: 'Cybersecurity major, SvelteKit & Flutter developer, product visionary. Founder of DevSafe and lead architect of BookBridge.',
      initials: 'VB',
      bg: '#0077FF',
      borderCyan: false,
      tags: ['SvelteKit', 'Flutter', 'Cybersecurity'],
      image: founderImg
    },
    {
      name: 'Engon Ken Morel',
      role: 'Co-Founder & CTO',
      description: "Systems architect and backend engineer specialising in Rust and Go. Leads all backend infrastructure across DevSafe's products.",
      initials: 'KM',
      bg: '#0D1628',
      borderCyan: true,
      tags: ['Rust', 'Go', 'gRPC'],
      image: backendImg
    }
  ]
};

export const ctaBanner = {
  heading: 'Ready to Take Your Institution Digital?',
  subtext: "Hire the team behind our own products. Get a free consultation — we'll assess your needs and tell you exactly what we can build for you.",
  action: { text: 'Request a Free Consultation', href: 'mailto:contact@devsafe.cm?subject=DevSafe Project Quote Inquiry' }
};

export const footer = {
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
    github: { text: 'github.com/Dev-Safe' },
  },
  bottom: {
    copyright: `© ${new Date().getFullYear()} DevSafe. All rights reserved.`,
    domain: 'devsafe.cm'
  }
};
