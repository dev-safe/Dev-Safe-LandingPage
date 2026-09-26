import type { Component } from 'svelte';
import { Code2, ShieldCheck, Palette, Lock, MapPin, Users, Rocket, Mail, Globe, Boxes } from '@lucide/svelte';
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
    portraitAlt: (name: string, role: string) => `Portrait de ${name}, ${role} chez DevSafe`
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
      'Nous créons des sites web et des applications, et nous auditons vos systèmes, pour les écoles, les églises et les entreprises. La même équipe conçoit et exploite ses propres produits, dont BookBridge.',
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
      { icon: Rocket as unknown as Component, title: 'En production', text: 'Eventra, une plateforme de billetterie et de paiement en ligne' },
      { icon: Boxes as unknown as Component, title: 'Bâtisseurs de produits', text: 'Nous créons et exploitons notre propre produit, BookBridge' },
      { icon: ShieldCheck as unknown as Component, title: 'Vérifié en sécurité', text: 'Chaque projet est contrôlé contre les vulnérabilités avant la livraison' },
      { icon: MapPin as unknown as Component, title: 'Basés à Yaoundé', text: 'Équipe locale, tarifs locaux, aucune sous-traitance' }
    ],
    stack: {
      label: 'Conçu avec',
      items: ['SvelteKit', 'Rust', 'Go', 'gRPC', 'Flutter', 'Tailwind CSS']
    }
  },

  services: {
    heading: 'Services de l’agence',
    subtitle:
      'Des services logiciels modernes, fiables et sécurisés pour votre organisation — par l’équipe qui conçoit nos propres produits.',
    process: {
      heading: 'Notre méthode',
      steps: [
        { title: 'Découverte', text: 'Une consultation gratuite pour comprendre vos besoins et votre budget.' },
        { title: 'Conception & développement', text: 'Vous suivez l’avancement pendant le projet, pas seulement à la fin.' },
        { title: 'Revue de sécurité', text: 'Nous recherchons les vulnérabilités avant la livraison.' },
        { title: 'Lancement & support', text: 'Nous déployons, livrons et vous accompagnons ensuite.' }
      ]
    },
    items: [
      {
        icon: ShieldCheck as unknown as Component,
        title: 'Services de cybersécurité',
        description:
          'Nous auditons vos systèmes, les testons comme le ferait un attaquant et protégeons vos données et vos clients. Vous recevez un rapport clair, sans jargon, et un plan priorisé pour corriger l’essentiel en premier.',
        tags: ['Tests d’intrusion', 'Audits de sécurité', 'Évaluation des vulnérabilités', 'Protection des données'],
        accentColor: '#3B82F6',
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
        description:
          'Sites web, applications mobiles et plateformes web sur mesure, adaptés à vos besoins. Propres, rapides et faciles à gérer.',
        tags: ['Sites web', 'Applications mobiles', 'Plateformes web'],
        accentColor: '#22D3EE',
        visual: { type: 'pipeline', steps: ['développement', 'revue de sécurité', 'déploiement'] }
      },
      {
        icon: Palette as unknown as Component,
        title: 'Design & identité visuelle',
        description:
          'Du logo à l’identité de marque complète, nous donnons à votre institution une image professionnelle et mémorable.',
        tags: ['Création de logo', 'UI/UX', 'Identité de marque'],
        accentColor: '#34D399',
        visual: { type: 'palette', swatches: ['#0B1120', '#1D4ED8', '#22D3EE', '#34D399', '#F8FAFC'] }
      }
    ]
  },

  whyDevSafe: {
    heading: 'Pourquoi nos clients font confiance à DevSafe',
    items: [
      {
        icon: Lock as unknown as Component,
        title: 'La sécurité avant tout',
        description:
          'Chaque produit que nous livrons est vérifié contre les vulnérabilités. Vos données et celles de vos clients sont protégées.'
      },
      {
        icon: MapPin as unknown as Component,
        title: 'Local & abordable',
        description:
          'Nous connaissons le marché camerounais. Nos tarifs sont pensés pour les institutions locales, pas pour les budgets des multinationales.'
      },
      {
        icon: Users as unknown as Component,
        title: 'Une équipe complète',
        description:
          'Frontend, backend, design et stratégie : une seule équipe. Pas de sous-traitance, pas d’intermédiaires.'
      },
      {
        icon: Rocket as unknown as Component,
        title: 'Des bâtisseurs de produits, pas de simples prestataires',
        description:
          'Nous créons et exploitons nos propres produits : nous savons ce qu’il faut pour lancer et maintenir un logiciel. Nos clients en profitent directement.'
      }
    ]
  },

  clientWork: {
    eyebrow: 'Agence',
    heading: 'Réalisations clients',
    subtitle: 'Des solutions concrètes conçues pour nos clients, pensées pour un impact local.',
    projects: [
      {
        title: 'Eventra',
        tagline: 'Plateforme de billetterie et de paiement pour événements',
        description:
          'Plateforme complète pour les organisateurs d’événements au Cameroun : billets QR sécurisés, concours de votes payants et réservation de services, avec retraits Mobile Money (MTN / Orange). Développée avec SvelteKit et Rust/gRPC.',
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
    cta: {
      text: 'Envie de voir ce que nous pouvons créer pour vous ? ',
      link: { text: 'Contactez-nous →', href: '#contact' }
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
          'Application mobile qui aide les élèves et étudiants à trouver, acheter et vendre des manuels près de chez eux, avec paiement sécurisé par séquestre et notation des vendeurs. Développée avec Flutter.',
        statusBadge: 'Bientôt sur le Play Store',
        isLive: false,
        tags: ['Flutter', 'Dart', 'Application mobile', 'Paiement sous séquestre'],
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
    subtitle: 'Une équipe engagée d’experts en sécurité, d’ingénieurs logiciels et de designers au Cameroun.',
    photoAlt: 'Les fondateurs de DevSafe, Verla Berinyuy Ndey et Engon Ken Morel',
    members: [
      {
        name: 'Verla Berinyuy Ndey',
        role: 'Fondateur & PDG',
        description:
          'Spécialisé en cybersécurité, développeur SvelteKit & Flutter et visionnaire produit. Fondateur de DevSafe et architecte principal de BookBridge.',
        initials: 'VB',
        bg: '#1D4ED8',
        borderCyan: false,
        tags: ['SvelteKit', 'Flutter', 'Cybersécurité'],
        image: founderImg
      },
      {
        name: 'Engon Ken Morel',
        role: 'Cofondateur & CTO',
        description:
          'Architecte systèmes et ingénieur backend spécialisé en Rust et Go. Il dirige toute l’infrastructure backend des produits DevSafe.',
        initials: 'KM',
        bg: '#131C31',
        borderCyan: true,
        tags: ['Rust', 'Go', 'gRPC'],
        image: backendImg
      }
    ]
  },

  ctaBanner: {
    badge: 'Consultation gratuite',
    heading: 'Prêt à faire passer votre institution au numérique ?',
    subtext:
      'Faites appel à l’équipe derrière nos propres produits. Lors d’une consultation gratuite, nous évaluons vos besoins et vous disons exactement ce que nous pouvons réaliser pour vous.',
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
      whatsapp: { text: '+237 680 001 677', href: 'https://wa.me/237680001677' },
      github: { text: 'github.com/Dev-Safe' }
    },
    bottom: {
      copyright: `© ${new Date().getFullYear()} DevSafe. Tous droits réservés.`,
      domain: 'devsafe.cm'
    }
  }
};

export default fr;
