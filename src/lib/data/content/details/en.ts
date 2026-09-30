import type { DetailContent } from '../types';

// Long-form copy for /services/[slug] and /work/[slug].
// Every statement here must be true: reuse facts already published on the site
// or on the product's own website, never invent figures.
const details: DetailContent = {
  ui: {
    home: 'Home',
    services: 'Services',
    work: 'Client work',
    products: 'Products',
    learnMore: 'Learn more',
    readCaseStudy: 'Read the case study',
    bookConsultation: 'Book a free consultation',
    otherServices: 'Other services',
    faqHeading: 'Frequently asked questions',
    recognitionHeading: 'Recognition',
    ownedProduct: 'Owned by DevSafe',
    clientProject: 'Client project',
    caseStudies: 'Case studies',
    moreWork: 'More of our work'
  },

  services: {
    cybersecurity: {
      seoTitle: 'Penetration Testing & Security Audits in Cameroon | DevSafe',
      seoDescription:
        'Security audits and penetration testing from Yaoundé. We test your systems like an attacker, then give you a plain-language report and a prioritised fix plan.',
      h1: 'Security audits and penetration testing in Cameroon',
      lead: 'We test your systems the way an attacker would, then hand you a plain-language report and a prioritised plan to fix what matters first.',
      formService: 'security',
      includes: {
        heading: 'What an audit covers',
        items: [
          { title: 'Authentication & access control', text: 'Who can log in, what each account can reach, and whether one user can see or change another user’s data.' },
          { title: 'Data protection & encryption', text: 'How sensitive data is stored and transmitted, and whether it stays protected if something leaks.' },
          { title: 'API & input validation', text: 'Whether your forms and APIs reject malicious input instead of trusting it.' },
          { title: 'Server & hosting configuration', text: 'Exposed services, default settings and secrets that should never be public.' },
          { title: 'Prioritised fix plan', text: 'Findings ranked by risk, explained in plain language, so your team knows what to fix first.' }
        ]
      },
      process: {
        heading: 'How it works',
        steps: [
          { title: 'Free consultation', text: 'Tell us what you run. We reply within 24 hours with a clear plan and a free security pre-audit.' },
          { title: 'Scope & confidentiality', text: 'We agree on what to test in a written proposal. Your work stays confidential: most of our clients work with us under NDA.' },
          { title: 'Testing', text: 'We probe your systems the way an attacker would, across the areas listed above.' },
          { title: 'Report & fix plan', text: 'You receive a plain-language report and a prioritised plan to fix what matters first.' }
        ]
      },
      audience: {
        heading: 'Who it’s for',
        items: [
          'Businesses that handle customer or payment data',
          'Schools and universities running online services',
          'Institutions moving their services online',
          'Teams about to launch a website or app'
        ]
      },
      faq: [
        {
          q: 'How much does a security audit cost?',
          a: 'It depends on what we test. Our pricing is built for local institutions, not multinational budgets, and you get a written proposal within 24 hours of your free consultation.'
        },
        {
          q: 'Will our findings stay confidential?',
          a: 'Yes. We are confidential by default and most of our clients work with us under NDA. We protect your business the way we protect your data.'
        },
        {
          q: 'What do we receive at the end?',
          a: 'A plain-language report of what we found and a prioritised plan to fix what matters first.'
        },
        {
          q: 'Can you audit systems DevSafe didn’t build?',
          a: 'Yes. We audit your existing websites, apps and APIs, whoever built them.'
        }
      ]
    },

    'software-development': {
      seoTitle: 'Secure Web & Mobile App Development in Cameroon | DevSafe',
      seoDescription:
        'Websites, mobile apps and web platforms built in Yaoundé with SvelteKit, Rust and Flutter, and checked for vulnerabilities before handover.',
      h1: 'Secure websites, mobile apps and web platforms',
      lead: 'Websites, mobile apps and web platforms that are fast, easy to manage and security-reviewed before launch, from the team that ships its own products.',
      formService: 'software',
      includes: {
        heading: 'What we build',
        items: [
          { title: 'Websites', text: 'Fast, bilingual-ready sites that are easy to manage and rank well on search engines.' },
          { title: 'Mobile apps', text: 'Android apps built with Flutter, like our own BookBridge.' },
          { title: 'Web platforms & APIs', text: 'Rust services with typed gRPC and ConnectRPC APIs behind SvelteKit front ends.' },
          { title: 'Secure databases', text: 'PostgreSQL with row-level security, so each user only reaches their own data.' },
          { title: 'Mobile Money payments', text: 'MTN and Orange Mobile Money flows, as in Eventra and BookBridge.' }
        ]
      },
      process: {
        heading: 'How we work',
        steps: [
          { title: 'Plan', text: 'A free consultation, a custom architecture diagram and a written proposal within 24 hours.' },
          { title: 'Build', text: 'Security designed in from day one: encrypted data, least-privilege access and protected secrets.' },
          { title: 'Security review', text: 'Everything we build is checked for vulnerabilities before handover.' },
          { title: 'Ship', text: 'We deploy and hand over a product your team can run.' }
        ]
      },
      audience: {
        heading: 'Who it’s for',
        items: [
          'Businesses that need a website, app or internal platform',
          'Schools and institutions taking their services digital',
          'Event organisers and marketplaces that take Mobile Money payments',
          'Founders who need a secure first version of their product'
        ]
      },
      stack: {
        heading: 'Our stack',
        items: ['SvelteKit', 'Rust', 'Flutter', 'PostgreSQL', 'ConnectRPC', 'gRPC', 'FastAPI']
      },
      faq: [
        {
          q: 'Can you integrate MTN and Orange Mobile Money?',
          a: 'Yes. Eventra, which we built for a client, pays organisers out through MTN and Orange Mobile Money, and our CTO built BookBridge’s automated multi-party mobile payment pipeline.'
        },
        {
          q: 'Do you build Android apps?',
          a: 'Yes. We build mobile apps with Flutter; our own product BookBridge is a lightweight Android app designed for low data use.'
        },
        {
          q: 'How do you keep what you build secure?',
          a: 'Security is designed in from day one, and everything we build is checked for vulnerabilities before handover.'
        },
        {
          q: 'How do we get started?',
          a: 'Book a free consultation. We reply within 24 hours with a clear plan, a free security pre-audit and a written proposal.'
        }
      ]
    },

    'design-branding': {
      seoTitle: 'Logo, UI/UX & Brand Identity Design in Cameroon | DevSafe',
      seoDescription:
        'Logos, interfaces and brand identities that make your institution look professional, designed in Yaoundé by the team that also builds your software.',
      h1: 'Logo, UI/UX and brand identity design',
      lead: 'Logos, interfaces and brand identities that make your institution look professional, designed by the same team that builds and secures your software.',
      formService: 'branding',
      includes: {
        heading: 'What we design',
        items: [
          { title: 'Logo design', text: 'A clear mark that works on a sign, a phone screen and a favicon.' },
          { title: 'UI/UX design', text: 'Interfaces for websites and apps that people understand at first glance.' },
          { title: 'Brand identity', text: 'Colours, type and usage rules so everything you publish looks consistent.' }
        ]
      },
      process: {
        heading: 'How we work',
        steps: [
          { title: 'Free consultation', text: 'Tell us about your institution and your audience. We reply within 24 hours.' },
          { title: 'Proposal', text: 'A written proposal within 24 hours, with pricing built for local institutions.' },
          { title: 'Design', text: 'We design your identity and interfaces with you.' },
          { title: 'Build-ready handover', text: 'Because we also build software, your designs are ready to become a real website or app.' }
        ]
      },
      audience: {
        heading: 'Who it’s for',
        items: [
          'Institutions that want to look professional online',
          'New businesses that need a logo and identity',
          'Teams planning a website or app that needs a clear interface'
        ]
      },
      faq: [
        {
          q: 'Can you design and build the app too?',
          a: 'Yes. The same team designs, builds and secures it, so nothing gets lost between design and development.'
        },
        {
          q: 'Where is DevSafe based?',
          a: 'In Yaoundé, Cameroon. Our pricing is built for local institutions, not multinational budgets.'
        },
        {
          q: 'How do we get started?',
          a: 'Book a free consultation and we reply within 24 hours with a clear plan and a written proposal.'
        }
      ]
    }
  },

  projects: {
    bookbridge: {
      seoTitle: 'BookBridge: Peer-to-Peer Textbook Marketplace | DevSafe',
      seoDescription:
        'BookBridge helps Cameroonian students buy and sell textbooks nearby with Mobile Money escrow and seller ratings. An award-winning Android app built by DevSafe.',
      kind: 'product',
      story: {
        heading: 'Why we built it',
        paragraphs: [
          'After his GCE exams, our founder had a pile of textbooks he no longer needed and no way to reach the students who did.',
          'The books existed and the students existed. The missing piece was trust: a safe way to find each other, agree on a price and pay.'
        ]
      },
      features: {
        heading: 'What it does',
        items: [
          { title: 'Find books nearby', text: 'Search by title, author or university level, and filter by university, level and major.' },
          { title: 'Chat and meet safely', text: 'Message sellers in the app and agree on a safe meeting spot on campus.' },
          { title: 'Escrow payments', text: 'Mobile Money payments are held in escrow, protecting buyers and sellers.' },
          { title: 'Verified seller ratings', text: 'Ratings help students know who they are dealing with.' },
          { title: 'Built for low data', text: 'A lightweight Android app designed for students on limited data plans.' },
          { title: 'Social impact tracking', text: 'Real-time tracking of the impact of books passed on to other students.' }
        ]
      },
      build: {
        heading: 'How we built it',
        items: [
          'Flutter Android app',
          'Automated multi-party mobile payment pipeline, built by our CTO',
          'Open source on GitHub'
        ]
      },
      links: [
        { text: 'Visit the BookBridge website', href: 'https://book-bridge-three.vercel.app/' },
        { text: 'Source code on GitHub', href: 'https://github.com/DCT-Berinyuy/book-bridge' }
      ]
    },

    eventra: {
      seoTitle: 'Eventra: Event Ticketing & Mobile Money Payments | DevSafe',
      seoDescription:
        'Eventra is an event platform for organisers in Cameroon: secure QR tickets, paid voting contests and bookings with MTN and Orange Mobile Money payouts.',
      kind: 'client',
      features: {
        heading: 'What it does',
        items: [
          { title: 'Secure QR tickets', text: 'Attendees get QR tickets that organisers can check at the door.' },
          { title: 'Paid voting contests', text: 'Organisers can run contests where the public votes by paying.' },
          { title: 'Service bookings', text: 'Bookings for event services, handled on the same platform.' },
          { title: 'Mobile Money payouts', text: 'Organisers are paid out through MTN and Orange Mobile Money.' }
        ]
      },
      build: {
        heading: 'How we built it',
        items: ['SvelteKit web app', 'Rust backend', 'gRPC APIs', 'MTN and Orange Mobile Money integration']
      }
    }
  }
};

export default details;
