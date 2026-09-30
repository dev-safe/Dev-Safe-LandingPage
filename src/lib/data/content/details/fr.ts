import type { DetailContent } from '../types';

// Version française de details/en.ts : mêmes faits, aucun chiffre inventé.
const details: DetailContent = {
  ui: {
    home: 'Accueil',
    services: 'Services',
    work: 'Projets clients',
    products: 'Produits',
    learnMore: 'En savoir plus',
    readCaseStudy: 'Voir l’étude de cas',
    bookConsultation: 'Réserver une consultation gratuite',
    otherServices: 'Nos autres services',
    faqHeading: 'Questions fréquentes',
    recognitionHeading: 'Distinctions',
    ownedProduct: 'Produit DevSafe',
    clientProject: 'Projet client',
    caseStudies: 'Études de cas',
    moreWork: 'Nos autres réalisations'
  },

  services: {
    cybersecurity: {
      seoTitle: 'Tests d’intrusion et audits de sécurité au Cameroun | DevSafe',
      seoDescription:
        'Audits de sécurité et tests d’intrusion depuis Yaoundé. Nous testons vos systèmes comme un attaquant, puis livrons un rapport clair et un plan de correction priorisé.',
      h1: 'Audits de sécurité et tests d’intrusion au Cameroun',
      lead: 'Nous testons vos systèmes comme le ferait un attaquant, puis vous remettons un rapport en langage clair et un plan priorisé pour corriger l’essentiel en premier.',
      formService: 'security',
      includes: {
        heading: 'Ce que couvre un audit',
        items: [
          { title: 'Authentification et contrôle d’accès', text: 'Qui peut se connecter, ce que chaque compte peut atteindre, et si un utilisateur peut voir ou modifier les données d’un autre.' },
          { title: 'Protection et chiffrement des données', text: 'Comment les données sensibles sont stockées et transmises, et si elles restent protégées en cas de fuite.' },
          { title: 'API et validation des entrées', text: 'Si vos formulaires et vos API rejettent les entrées malveillantes au lieu de leur faire confiance.' },
          { title: 'Configuration serveur et hébergement', text: 'Services exposés, réglages par défaut et secrets qui ne devraient jamais être publics.' },
          { title: 'Plan de correction priorisé', text: 'Des résultats classés par niveau de risque et expliqués simplement, pour savoir quoi corriger en premier.' }
        ]
      },
      process: {
        heading: 'Comment ça se passe',
        steps: [
          { title: 'Consultation gratuite', text: 'Décrivez vos systèmes. Nous répondons sous 24 heures avec un plan clair et un pré-audit de sécurité gratuit.' },
          { title: 'Périmètre et confidentialité', text: 'Nous fixons le périmètre dans une proposition écrite. Votre projet reste confidentiel : la plupart de nos clients travaillent avec nous sous NDA.' },
          { title: 'Tests', text: 'Nous éprouvons vos systèmes comme le ferait un attaquant, sur tous les points ci-dessus.' },
          { title: 'Rapport et plan de correction', text: 'Vous recevez un rapport en langage clair et un plan priorisé pour corriger l’essentiel en premier.' }
        ]
      },
      audience: {
        heading: 'Pour qui',
        items: [
          'Les entreprises qui gèrent des données clients ou de paiement',
          'Les écoles et universités qui proposent des services en ligne',
          'Les institutions qui numérisent leurs services',
          'Les équipes sur le point de lancer un site ou une application'
        ]
      },
      faq: [
        {
          q: 'Combien coûte un audit de sécurité ?',
          a: 'Cela dépend de ce que nous testons. Nos tarifs sont pensés pour les institutions locales, pas pour les budgets des multinationales, et vous recevez une proposition écrite sous 24 heures après la consultation gratuite.'
        },
        {
          q: 'Nos résultats restent-ils confidentiels ?',
          a: 'Oui. La confidentialité est notre règle par défaut et la plupart de nos clients travaillent avec nous sous NDA. Nous protégeons votre activité comme nous protégeons vos données.'
        },
        {
          q: 'Que recevons-nous à la fin ?',
          a: 'Un rapport en langage clair sur ce que nous avons trouvé et un plan priorisé pour corriger l’essentiel en premier.'
        },
        {
          q: 'Pouvez-vous auditer des systèmes que DevSafe n’a pas construits ?',
          a: 'Oui. Nous auditons vos sites, applications et API existants, quel que soit leur développeur.'
        }
      ]
    },

    'software-development': {
      seoTitle: 'Développement web et mobile sécurisé au Cameroun | DevSafe',
      seoDescription:
        'Sites web, applications mobiles et plateformes développés à Yaoundé avec SvelteKit, Rust et Flutter, et vérifiés contre les vulnérabilités avant livraison.',
      h1: 'Sites web, applications mobiles et plateformes sécurisés',
      lead: 'Des sites web, applications mobiles et plateformes rapides, faciles à gérer et revus en sécurité avant le lancement, par l’équipe qui lance ses propres produits.',
      formService: 'software',
      includes: {
        heading: 'Ce que nous développons',
        items: [
          { title: 'Sites web', text: 'Des sites rapides, prêts pour le bilingue, faciles à gérer et bien référencés.' },
          { title: 'Applications mobiles', text: 'Des applications Android en Flutter, comme notre produit BookBridge.' },
          { title: 'Plateformes web et API', text: 'Des services Rust avec des API gRPC et ConnectRPC typées, derrière des interfaces SvelteKit.' },
          { title: 'Bases de données sécurisées', text: 'PostgreSQL avec sécurité au niveau des lignes : chaque utilisateur n’accède qu’à ses propres données.' },
          { title: 'Paiements Mobile Money', text: 'Des parcours MTN et Orange Mobile Money, comme dans Eventra et BookBridge.' }
        ]
      },
      process: {
        heading: 'Notre méthode',
        steps: [
          { title: 'Planifier', text: 'Une consultation gratuite, un schéma d’architecture sur mesure et une proposition écrite sous 24 heures.' },
          { title: 'Développer', text: 'La sécurité dès le premier jour : données chiffrées, accès au moindre privilège et secrets protégés.' },
          { title: 'Revue de sécurité', text: 'Tout ce que nous développons est vérifié contre les vulnérabilités avant la livraison.' },
          { title: 'Livrer', text: 'Nous déployons et vous remettons un produit que votre équipe peut faire vivre.' }
        ]
      },
      audience: {
        heading: 'Pour qui',
        items: [
          'Les entreprises qui ont besoin d’un site, d’une application ou d’une plateforme interne',
          'Les écoles et institutions qui passent au numérique',
          'Les organisateurs d’événements et places de marché qui encaissent par Mobile Money',
          'Les fondateurs qui veulent une première version sécurisée de leur produit'
        ]
      },
      stack: {
        heading: 'Nos technologies',
        items: ['SvelteKit', 'Rust', 'Flutter', 'PostgreSQL', 'ConnectRPC', 'gRPC', 'FastAPI']
      },
      faq: [
        {
          q: 'Pouvez-vous intégrer MTN et Orange Mobile Money ?',
          a: 'Oui. Eventra, que nous avons développé pour un client, reverse les fonds aux organisateurs via MTN et Orange Mobile Money, et notre CTO a construit le circuit de paiement mobile multipartite automatisé de BookBridge.'
        },
        {
          q: 'Développez-vous des applications Android ?',
          a: 'Oui. Nous développons des applications mobiles en Flutter ; notre produit BookBridge est une application Android légère, pensée pour consommer peu de données.'
        },
        {
          q: 'Comment sécurisez-vous ce que vous développez ?',
          a: 'La sécurité est intégrée dès le premier jour, et tout ce que nous développons est vérifié contre les vulnérabilités avant la livraison.'
        },
        {
          q: 'Comment démarrer ?',
          a: 'Réservez une consultation gratuite. Nous répondons sous 24 heures avec un plan clair, un pré-audit de sécurité gratuit et une proposition écrite.'
        }
      ]
    },

    'design-branding': {
      seoTitle: 'Logo, UI/UX et identité de marque au Cameroun | DevSafe',
      seoDescription:
        'Logos, interfaces et identités de marque qui donnent une image professionnelle à votre institution, conçus à Yaoundé par l’équipe qui développe aussi vos logiciels.',
      h1: 'Création de logo, UI/UX et identité de marque',
      lead: 'Des logos, interfaces et identités de marque qui donnent une image professionnelle à votre institution, conçus par l’équipe qui développe et sécurise vos logiciels.',
      formService: 'branding',
      includes: {
        heading: 'Ce que nous concevons',
        items: [
          { title: 'Création de logo', text: 'Un logo lisible sur une enseigne, un écran de téléphone comme en favicon.' },
          { title: 'Design UI/UX', text: 'Des interfaces de sites et d’applications que l’on comprend du premier coup d’œil.' },
          { title: 'Identité de marque', text: 'Couleurs, typographies et règles d’usage pour que tout ce que vous publiez reste cohérent.' }
        ]
      },
      process: {
        heading: 'Notre méthode',
        steps: [
          { title: 'Consultation gratuite', text: 'Parlez-nous de votre institution et de votre public. Nous répondons sous 24 heures.' },
          { title: 'Proposition', text: 'Une proposition écrite sous 24 heures, avec des tarifs pensés pour les institutions locales.' },
          { title: 'Conception', text: 'Nous concevons votre identité et vos interfaces avec vous.' },
          { title: 'Livraison prête à développer', text: 'Comme nous développons aussi des logiciels, vos maquettes sont prêtes à devenir un vrai site ou une vraie application.' }
        ]
      },
      audience: {
        heading: 'Pour qui',
        items: [
          'Les institutions qui veulent une image professionnelle en ligne',
          'Les nouvelles entreprises qui ont besoin d’un logo et d’une identité',
          'Les équipes qui préparent un site ou une application à l’interface claire'
        ]
      },
      faq: [
        {
          q: 'Pouvez-vous aussi développer l’application ?',
          a: 'Oui. La même équipe la conçoit, la développe et la sécurise : rien ne se perd entre le design et le développement.'
        },
        {
          q: 'Où est basée DevSafe ?',
          a: 'À Yaoundé, au Cameroun. Nos tarifs sont pensés pour les institutions locales, pas pour les budgets des multinationales.'
        },
        {
          q: 'Comment démarrer ?',
          a: 'Réservez une consultation gratuite : nous répondons sous 24 heures avec un plan clair et une proposition écrite.'
        }
      ]
    }
  },

  projects: {
    bookbridge: {
      seoTitle: 'BookBridge : marketplace de manuels entre étudiants | DevSafe',
      seoDescription:
        'BookBridge aide les étudiants camerounais à acheter et vendre des manuels près de chez eux, avec séquestre Mobile Money et notes vendeurs. Une app primée signée DevSafe.',
      kind: 'product',
      story: {
        heading: 'Pourquoi nous l’avons créé',
        paragraphs: [
          'Après ses examens du GCE, notre fondateur avait une pile de manuels dont il n’avait plus besoin, et aucun moyen de joindre les élèves qui en cherchaient.',
          'Les livres existaient, les étudiants aussi. Il manquait la confiance : un moyen sûr de se trouver, de s’accorder sur un prix et de payer.'
        ]
      },
      features: {
        heading: 'Ce que fait l’application',
        items: [
          { title: 'Des livres près de chez vous', text: 'Recherche par titre, auteur ou niveau, et filtres par université, niveau et filière.' },
          { title: 'Discuter et se rencontrer en sécurité', text: 'Messagerie avec les vendeurs et point de rencontre sûr sur le campus.' },
          { title: 'Paiement sous séquestre', text: 'Les paiements Mobile Money sont conservés sous séquestre pour protéger acheteurs et vendeurs.' },
          { title: 'Notes vendeurs vérifiées', text: 'Les notes aident les étudiants à savoir à qui ils ont affaire.' },
          { title: 'Pensée pour peu de données', text: 'Une application Android légère, conçue pour les petits forfaits internet.' },
          { title: 'Suivi de l’impact social', text: 'Le suivi en temps réel de l’impact des livres transmis à d’autres étudiants.' }
        ]
      },
      build: {
        heading: 'Comment nous l’avons construit',
        items: [
          'Application Android en Flutter',
          'Circuit de paiement mobile multipartite automatisé, construit par notre CTO',
          'Code source ouvert sur GitHub'
        ]
      },
      links: [
        { text: 'Visiter le site de BookBridge', href: 'https://book-bridge-three.vercel.app/' },
        { text: 'Code source sur GitHub', href: 'https://github.com/DCT-Berinyuy/book-bridge' }
      ]
    },

    eventra: {
      seoTitle: 'Eventra : billetterie et paiements Mobile Money | DevSafe',
      seoDescription:
        'Eventra est une plateforme événementielle pour les organisateurs au Cameroun : billets QR sécurisés, votes payants et réservations, reversés via MTN et Orange Money.',
      kind: 'client',
      features: {
        heading: 'Ce que fait la plateforme',
        items: [
          { title: 'Billets QR sécurisés', text: 'Les participants reçoivent des billets QR que les organisateurs contrôlent à l’entrée.' },
          { title: 'Concours à vote payant', text: 'Les organisateurs peuvent lancer des concours où le public vote en payant.' },
          { title: 'Réservation de services', text: 'Des réservations de services événementiels, gérées sur la même plateforme.' },
          { title: 'Reversements Mobile Money', text: 'Les organisateurs sont payés via MTN et Orange Mobile Money.' }
        ]
      },
      build: {
        heading: 'Comment nous l’avons construit',
        items: ['Application web SvelteKit', 'Backend en Rust', 'API gRPC', 'Intégration MTN et Orange Mobile Money']
      }
    }
  }
};

export default details;
