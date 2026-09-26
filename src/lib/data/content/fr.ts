import type { Component } from 'svelte';
import { Code2, ShieldCheck, Palette, Lock, MapPin, Rocket, Mail, Globe, Trophy, Award, Tv, BriefcaseBusiness, FileLock } from '@lucide/svelte';
import founderImg from '$lib/assets/Founder.jpg';
import backendImg from '$lib/assets/Backend.jpg';
import eventraScreen from '$lib/assets/screens/eventra-home.webp';
import bookbridgeScreen from '$lib/assets/screens/bookbridge-home.webp';
import type { SiteContent } from './en';

const fr: SiteContent = {
  meta: {
    lang: 'fr',
    home: '/fr'
  },

  seo: {
    title: 'Cybersécurité & logiciels sécurisés au Cameroun | DevSafe',
    description:
      'Tests d’intrusion, audits de sécurité, applications web et Flutter sécurisées depuis Yaoundé. Créateurs de BookBridge. Consultation gratuite.',
    keywords: [
      'Agence de cybersécurité Cameroun',
      'Développement logiciel sécurisé',
      'Test d’intrusion Yaoundé',
      'Audit de sécurité Cameroun',
      'Développeurs SvelteKit Rust',
      'Développement d’applications Flutter Cameroun',
      'Application BookBridge',
      'Plateforme de billetterie Eventra'
    ],
    ogImageAlt: 'DevSafe : logiciels sécurisés et cybersécurité au Cameroun'
  },

  ui: {
    logoAlt: 'Logo DevSafe',
    themeToggle: 'Basculer entre le thème clair et sombre',
    menuToggle: 'Ouvrir ou fermer le menu',
    languageSwitch: {
      text: 'EN',
      hreflang: 'en',
      label: 'EN — View the site in English'
    },
    specialty: 'Notre spécialité',
    portraitAlt: (name: string, role: string) => `Portrait de ${name}, ${role} chez DevSafe`,
    profileLabel: (name: string, network: string) => `${name} sur ${network} (nouvel onglet)`
  },

  whatsapp: {
    label: 'Discuter sur WhatsApp',
    short: 'WhatsApp',
    prompt: 'Vous préférez discuter ? Écrivez-nous sur WhatsApp',
    ariaLabel: 'Discuter avec DevSafe sur WhatsApp (nouvel onglet)',
    message: 'Bonjour DevSafe, j’aimerais discuter d’un projet.'
  },

  navigation: {
    logo: {
      textDev: 'DEV',
      textSafe: 'SAFE'
    },
    links: [
      { name: 'Services', href: '#services' },
      { name: 'À propos', href: '#about' },
      { name: 'Réalisations', href: '#work' },
      { name: 'Produits', href: '#products' },
      { name: 'Équipe', href: '#team' },
      { name: 'Contact', href: '#contact' }
    ],
    actions: {
      ghost: { text: 'Nos produits', href: '#products' },
      primary: { text: 'Nous contacter', href: '#contact' }
    }
  },

  hero: {
    badge: 'Agence logicielle & cybersécurité · Yaoundé, Cameroun',
    headline: {
      before: '',
      highlight: 'Logiciels sécurisés',
      after: ' et cybersécurité, conçus au Cameroun.'
    },
    subheadline:
      'Audits de sécurité, tests d’intrusion et applications web & mobiles sécurisées pour les entreprises, écoles et institutions, par l’équipe primée à l’origine de BookBridge.',
    cta: {
      primary: { text: 'Réserver une consultation gratuite →', href: '#contact' },
      secondary: { text: 'Voir nos réalisations', href: '#work' }
    },
    auditPreview: {
      file: 'audit-securite.md',
      label: 'Exemple de rapport',
      title: 'Audit de sécurité du site web',
      target: 'Portail scolaire',
      summary: [
        { level: 'Critique', count: 0, color: 'bg-red-500' },
        { level: 'Élevé', count: 2, color: 'bg-orange-500' },
        { level: 'Moyen', count: 4, color: 'bg-amber-400' },
        { level: 'Faible', count: 3, color: 'bg-slate-400' }
      ],
      labels: {
        target: 'Cible :',
        findings: 'constats',
        severity: { high: 'Élevé', medium: 'Moyen', low: 'Faible' },
        fixed: 'Corrigé',
        inProgress: 'En cours'
      },
      findings: [
        { severity: 'high', title: 'Connexion admin sans limite de tentatives', fixed: true },
        { severity: 'high', title: 'Dossiers des élèves accessibles sans authentification', fixed: true },
        { severity: 'medium', title: 'Redirection HTTPS et en-têtes de sécurité absents', fixed: false }
      ],
      footer: 'Chaque rapport inclut un plan de correction priorisé'
    }
  },

  trustStrip: {
    heading: 'Des preuves, pas des promesses',
    proof: [
      { icon: Trophy as unknown as Component, title: '3e place, ICT for Africa Summit', text: 'Tech Innovation Challenge : 250 000 FCFA pour développer BookBridge' },
      { icon: Award as unknown as Component, title: 'Top 5 à PROMOTE 2026', text: 'BookBridge sélectionné parmi les meilleurs projets' },
      { icon: Tv as unknown as Component, title: 'Présenté sur la CRTV', text: 'BookBridge au journal télévisé national' },
      { icon: BriefcaseBusiness as unknown as Component, title: '4 clients actifs', text: 'Eventra, et 3 autres sous NDA' }
    ]
  },

  services: {
    heading: 'Services de l’agence',
    subtitle: 'Logiciels sécurisés et tests de sécurité, par l’équipe qui lance ses propres produits.',
    items: [
      {
        icon: ShieldCheck as unknown as Component,
        title: 'Services de cybersécurité',
        description:
          'Nous testons vos systèmes comme le ferait un attaquant, puis vous remettons un rapport clair et un plan priorisé pour corriger l’essentiel en premier.',
        tags: ['Tests d’intrusion', 'Audits de sécurité', 'Évaluation des vulnérabilités', 'Protection des données'],
        accentColor: '#E0A020',
        featured: true,
        visual: {
          type: 'checklist',
          heading: 'Ce que couvre un audit',
          items: [
            'Authentification & contrôle d’accès',
            'Protection & chiffrement des données',
            'API & validation des entrées',
            'Configuration serveur & hébergement',
            'Plan de correction priorisé'
          ]
        }
      },
      {
        icon: Code2 as unknown as Component,
        title: 'Développement logiciel',
        description: 'Sites web, applications mobiles et plateformes web : rapides, faciles à gérer et revus en sécurité avant le lancement.',
        tags: ['Sites web', 'Applications mobiles', 'Plateformes web'],
        accentColor: '#D9622B',
        visual: { type: 'pipeline', steps: ['développement', 'revue de sécurité', 'déploiement'] }
      },
      {
        icon: Palette as unknown as Component,
        title: 'Design & identité visuelle',
        description: 'Logos, interfaces et identités de marque qui donnent à votre institution une image professionnelle.',
        tags: ['Création de logo', 'UI/UX', 'Identité de marque'],
        accentColor: '#0E8A5F',
        visual: { type: 'palette', swatches: ['#0F0B07', '#F5B53D', '#D9622B', '#C8102E', '#0E8A5F'] }
      }
    ]
  },

  whyDevSafe: {
    heading: 'Pourquoi nos clients font confiance à DevSafe',
    videoCaption:
      "En arrière-plan : Verla Berinyuy Ndey, notre fondateur, anime un atelier Git & GitHub en tant que Lead Organizer du GDG on Campus de l'ICT University.",
    items: [
      {
        icon: Lock as unknown as Component,
        title: 'La sécurité avant tout',
        description: 'Tout ce que nous livrons est vérifié contre les vulnérabilités avant la remise.'
      },
      {
        icon: FileLock as unknown as Component,
        title: 'Confidentialité par défaut',
        description: 'La plupart de nos clients travaillent avec nous sous NDA. Nous protégeons votre activité comme nous protégeons vos données.'
      },
      {
        icon: MapPin as unknown as Component,
        title: 'Local & abordable',
        description: 'Une équipe à Yaoundé, avec des tarifs pensés pour les institutions locales, pas pour les budgets des multinationales.'
      },
      {
        icon: Rocket as unknown as Component,
        title: 'Bâtisseurs de produits',
        description: 'Nous lançons et exploitons notre propre produit primé : nous savons ce qu’il faut pour faire vivre un logiciel.'
      }
    ]
  },

  clientWork: {
    eyebrow: 'Agence',
    heading: 'Réalisations clients',
    subtitle: 'Quatre projets clients en cours. Voici celui que nous pouvons montrer.',
    projects: [
      {
        title: 'Eventra',
        tagline: 'Plateforme de billetterie et de paiement pour événements',
        description:
          'Plateforme pour les organisateurs d’événements au Cameroun : billets QR sécurisés, concours de votes payants et réservation de services, avec retraits Mobile Money MTN et Orange.',
        statusBadge: 'En ligne',
        isLive: true,
        tags: ['SvelteKit', 'Rust', 'gRPC', 'Mobile Money'],
        screenshot: {
          src: eventraScreen,
          alt: 'Écran d’accueil d’Eventra sur mobile : « Transform your events into power », avec des boutons pour créer un événement ou devenir partenaire',
          width: 540,
          height: 1000,
          caption: 'Eventra · application web sur mobile'
        }
      }
    ],
    confidential: {
      count: '+3',
      title: 'Projets clients actifs sous NDA',
      text: 'Nous gardons le travail de nos clients confidentiel. Parlez-nous de votre besoin lors de la consultation gratuite.',
      link: { text: 'Réserver une consultation →', href: '#contact' }
    }
  },

  products: {
    eyebrow: 'Propriété de DevSafe',
    heading: 'Nos produits',
    subtitle: 'Des produits que nous concevons, développons, possédons et exploitons nous-mêmes.',
    projects: [
      {
        title: 'BookBridge',
        tagline: 'Marketplace de manuels scolaires entre particuliers',
        description:
          'Les élèves et étudiants trouvent, achètent et vendent des manuels près de chez eux, avec paiement protégé par séquestre et notation des vendeurs.',
        highlights: ['3e place · ICT for Africa Summit', 'Top 5 · PROMOTE 2026', 'Présenté sur la CRTV'],
        statusBadge: 'Bientôt sur le Play Store',
        isLive: false,
        tags: ['Flutter', 'Paiement sous séquestre', 'Android'],
        screenshot: {
          src: bookbridgeScreen,
          alt: 'Écran d’accueil de l’application BookBridge : recherche de livres, bannière des livres à proximité, statistiques d’impact social et annonces de manuels en FCFA',
          width: 520,
          height: 1074,
          caption: 'BookBridge · application Android'
        },
        link: { text: 'Visiter le site', href: 'https://book-bridge-three.vercel.app/' }
      }
    ]
  },

  team: {
    heading: 'L’équipe derrière DevSafe',
    subtitle: 'Deux ingénieurs de Yaoundé qui conçoivent, sécurisent et livrent.',
    photoAlt: 'Les fondateurs de DevSafe, Verla Berinyuy Ndey et Engon Ken Morel',
    members: [
      {
        name: 'Verla Berinyuy Ndey',
        role: 'Fondateur & PDG',
        description: 'Bâtisseur en cybersécurité et responsable produit. Il dirige les audits de sécurité de DevSafe et conçoit des applications pour de vrais problèmes africains.',
        highlights: [
          'A mené BookBridge à la 3e place de l’ICT for Africa Summit et au journal national de la CRTV',
          'Finaliste régional du MTN YaMo Pitch, saison 4 : classé 27e sur plus de 400',
          'Lead du GDG on Campus de The ICT University ; fondateur de DCT Lab'
        ],
        initials: 'VB',
        bg: '#1D4ED8',
        borderCyan: false,
        tags: ['Flutter', 'SvelteKit', 'Rust', 'Tests d’intrusion'],
        image: founderImg,
        profiles: {
          linkedin: 'https://www.linkedin.com/in/verla-berinyuy-ndey-15b1262a5/',
          github: 'https://github.com/DCT-Berinyuy'
        }
      },
      {
        name: 'Engon Ken Morel',
        role: 'Cofondateur & CTO',
        description: 'Architecte systèmes derrière les backends de DevSafe : services Rust rapides, bases de données sécurisées et API typées.',
        highlights: [
          'A conçu le pipeline automatisé de paiements mobiles multipartites de BookBridge',
          'Protège les backends contre les IDOR et les failles d’authentification grâce à un contrôle d’accès JWT à plusieurs niveaux',
          'PostgreSQL avec Row-Level Security, ConnectRPC et Protobuf'
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
    badge: 'Consultation gratuite',
    heading: 'Prêt à faire passer votre institution au numérique ?',
    subtext: 'Dites-nous ce dont vous avez besoin. Nous répondons sous 24 heures avec un plan clair et un pré-audit de sécurité gratuit.',
    benefits: ['Pré-audit de cybersécurité gratuit', 'Schéma d’architecture sur mesure', 'Proposition écrite sous 24 heures'],
    action: {
      text: 'Demander une consultation gratuite',
      href: 'mailto:contact@devsafe.cm?subject=Demande de devis DevSafe'
    },
    form: {
      name: { label: 'Votre nom', placeholder: 'Ex. : Verla B.' },
      email: { label: 'Adresse e-mail', placeholder: 'Ex. : contact@devsafe.cm' },
      service: {
        label: 'Service souhaité',
        options: [
          { value: 'software', label: 'Développement logiciel' },
          { value: 'security', label: 'Audit de cybersécurité' },
          { value: 'branding', label: 'Design UI/UX & identité visuelle' },
          { value: 'general', label: 'Diagnostic numérique général' }
        ]
      },
      message: { label: 'Détails du projet', placeholder: 'Décrivez brièvement vos objectifs...' },
      submit: 'Envoyer la demande',
      submitting: 'Envoi sécurisé en cours...',
      errorPrefix: 'Erreur :',
      errorFailed: 'L’envoi a échoué. Veuillez réessayer.',
      errorNetwork: 'Erreur réseau. Vérifiez votre connexion ou écrivez-nous directement.',
      altContact: 'Vous préférez l’e-mail ?'
    },
    success: {
      heading: 'Demande reçue',
      thanks: 'Merci,',
      sent: 'Les détails de votre demande ont bien été envoyés. Nous vous contacterons à',
      within: 'sous 24 heures.',
      again: '← Envoyer un autre message'
    }
  },

  footer: {
    tagline: 'Concevoir. Sécuriser. Protéger.',
    description: 'Une agence logicielle et de cybersécurité au Cameroun qui crée aussi ses propres produits.',
    quickLinks: {
      heading: 'Navigation',
      links: [
        { name: 'Services', href: '#services' },
        { name: 'À propos', href: '#about' },
        { name: 'Réalisations', href: '#work' },
        { name: 'Produits', href: '#products' },
        { name: 'Équipe', href: '#team' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    contact: {
      heading: 'Contactez-nous',
      email: { text: 'contact@devsafe.cm', icon: Mail as unknown as Component },
      website: { text: 'devsafe.cm', icon: Globe as unknown as Component },
      whatsapp: { text: '+237 680 001 677' },
      github: { text: 'github.com/Dev-Safe' }
    },
    bottom: {
      copyright: `© ${new Date().getFullYear()} DevSafe. Tous droits réservés.`,
      domain: 'devsafe.cm',
      pride: 'Fièrement conçu à Yaoundé, au Cameroun, pour l’Afrique.'
    }
  }
};

export default fr;
