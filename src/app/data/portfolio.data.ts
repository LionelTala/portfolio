export interface PortfolioData {
    profile: {
        name: string;
        firstName: string;
        fullName: string;
        email: string;
        phone: string;
        location: string;
        website: string;
        github: string;
        linkedin: string;
    };
    content: {
        fr: {
            nav: { home: string; parcours: string; skills: string; projects: string; contact: string };
            hero: { badge: string; desc: string; roles: string[]; btnContact: string; btnCv: string };
            titles: { parcours: string; skills: string; projects: string; contact: string };
            footer: { rights: string };
        };
        en: {
            nav: { home: string; parcours: string; skills: string; projects: string; contact: string };
            hero: { badge: string; desc: string; roles: string[]; btnContact: string; btnCv: string };
            titles: { parcours: string; skills: string; projects: string; contact: string };
            footer: { rights: string };
        };
    };
    parcours: Array<{
        period: string;
        title: string;
        institution: string;
        description: string;
        descriptionEn?: string;
    }>;
    skills: Array<{
        name: string;
        level: number;
        icon: string;
    }>;
    projects: Array<{
        title: string;
        description: string;
        descriptionEn?: string;
        emoji: string;
        technologies: string[];
        url: string;
    }>;
}

export const PORTFOLIO_DATA: PortfolioData = {
    profile: {
        name: "SIKALI TALA",
        firstName: "Francis Lionel",
        fullName: "SIKALI TALA Francis Lionel",
        email: "lioneltala93230@gmail.com",
        phone: "+237 659 666 110",
        location: "Douala, Cameroun",
        website: "https://lionelsikali.pythonanywhere.com",
        github: "https://github.com/LionelTala",
        linkedin: "https://www.linkedin.com/in/lionel-sikali-tala-0490b7304/"
    },
    content: {
        fr: {
            nav: {
                home: "Accueil",
                parcours: "Parcours",
                skills: "Compétences",
                projects: "Projets",
                contact: "Contact"
            },
            hero: {
                badge: "Étudiant en Data Science • Dev Mobile & Web",
                desc: "Étudiant passionné par la Data Science, le développement mobile (Flutter, React Native) et le web moderne. Je combine une double compétence en Génie Logiciel et en Data Science pour concevoir des solutions innovantes avec Laravel, Angular et les librairies ML. Plusieurs de mes projets sont déployés en production.",
                roles: ["Data Scientist 📊", "Développeur Full Stack 💻", "Expert Laravel ⚡", "Angular Developer 🅰️", "Créateur de solutions IA 🤖"],
                btnContact: "Me contacter",
                btnCv: "Télécharger CV"
            },
            titles: {
                parcours: "Mon Parcours Académique",
                skills: "Mes Compétences",
                projects: "Mes Projets",
                contact: "Contactez-moi"
            },
            footer: {
                rights: "Tous droits réservés."
            }
        },
        en: {
            nav: {
                home: "Home",
                parcours: "Background",
                skills: "Skills",
                projects: "Projects",
                contact: "Contact"
            },
            hero: {
                badge: "Data Science Student • Mobile & Web Dev",
                desc: "Student passionate about Data Science, mobile development (Flutter, React Native) and modern web development. I combine dual expertise in Software Engineering and Data Science to build innovative solutions with Laravel, Angular and ML libraries. Several of my projects are deployed in production.",
                roles: ["Data Scientist 📊", "Full Stack Developer 💻", "Laravel Expert ⚡", "Angular Developer 🅰️", "AI Solution Builder 🤖"],
                btnContact: "Contact Me",
                btnCv: "Download CV"
            },
            titles: {
                parcours: "Academic Background",
                skills: "My Skills",
                projects: "My Projects",
                contact: "Get in Touch"
            },
            footer: {
                rights: "All rights reserved."
            }
        }
    },
    parcours: [
        {
            period: "2025 - Présent",
            title: "Master 1 en Data Science et Intelligence Artificielle",
            institution: "Polytechnique de Douala",
            description: "Formation avancée en Data Science et IA, couvrant les domaines clés de la modélisation statistique, du machine learning (Scikit-learn, TensorFlow) et du deep learning. Acquisition de compétences pratiques en traitement de données massives, en conception d'architectures de données et en déploiement de modèles prédictifs. Réalisation de projets concrets en collaboration avec des entreprises locales.",
            descriptionEn: "Advanced training in Data Science and AI, covering key areas of statistical modeling, machine learning (Scikit-learn, TensorFlow) and deep learning. Practical skills in big data processing, data architecture design and predictive model deployment. Hands-on projects with local companies."
        },
        {
            period: "2025 - Présent",
            title: "Formation Développement Web - Angular",
            institution: "Orange Digital Center, Douala",
            description: "Formation intensive en développement web moderne avec Angular. Acquisition de compétences avancées en développement d'applications web dynamiques, gestion d'état (NgRx), routage, formulaires réactifs et intégration d'APIs REST. Réalisation de projets concrets en équipe.",
            descriptionEn: "Intensive training in modern web development with Angular. Advanced skills in dynamic web applications, state management (NgRx), routing, reactive forms and REST API integration. Team-based hands-on projects."
        },
        {
            period: "2024 - 2025",
            title: "Licence en Data Science et Intelligence Artificielle",
            institution: "Polytechnique de Douala",
            description: "Formation fondamentale en Data Science couvrant les bases de la programmation Python, l'analyse de données, la visualisation, les statistiques et l'initiation au machine learning. Projets pratiques en analyse de données et en modélisation prédictive.",
            descriptionEn: "Foundational training in Data Science covering Python programming, data analysis, visualization, statistics and introduction to machine learning. Hands-on projects in data analysis and predictive modeling."
        },
        {
            period: "Avril - Juin 2024",
            title: "Développeur Web Full Stack (Stagiaire)",
            institution: "Legion Web, Yaoundé",
            description: "Expérience professionnelle en entreprise dans le développement d'applications web dynamiques avec Laravel et React. Conception d'interfaces utilisateur responsive, optimisation des requêtes MySQL, intégration de fonctionnalités avancées. Participation aux réunions Agile (Scrum) et rédaction de documentation technique.",
            descriptionEn: "Professional experience in dynamic web application development using Laravel and React. Responsive user interface design, MySQL query optimization, integration of advanced features. Participation in Agile (Scrum) meetings and technical documentation."
        },
        {
            period: "2021 - 2024",
            title: "DUT en Génie Logiciel",
            institution: "IUT Fotso Victor de Bandjoun",
            description: "Formation fondamentale en ingénierie logicielle couvrant l'algorithmique avancée, la programmation orientée objet (Java, C++), les bases de données (SQL), le développement web (HTML/CSS/PHP), les réseaux et la sécurité informatique. Acquisition d'une solide culture en méthodes agiles et en gestion de projets.",
            descriptionEn: "Fundamental training in software engineering covering advanced algorithms, object-oriented programming (Java, C++), databases (SQL), web development (HTML/CSS/PHP), networks and computer security. Strong grounding in agile methods and project management."
        },
        {
            period: "2021",
            title: "Baccalauréat Scientifique",
            institution: "Cameroun",
            description: "Diplôme d'études secondaires obtenu, spécialité Mathématiques et Sciences Physiques. Acquisition d'une base solide en sciences fondamentales constituant le socle de mes études en informatique et data science.",
            descriptionEn: "Secondary school diploma, specializing in Mathematics and Physical Sciences. Solid grounding in fundamental sciences forming the foundation for my studies in computer science and data science."
        }
    ],
    skills: [
        { name: "Python (Data Science & ML)", level: 85, icon: "fab fa-python" },
        { name: "Laravel (PHP)", level: 85, icon: "fab fa-laravel" },
        { name: "Angular (TypeScript)", level: 80, icon: "fab fa-angular" },
        { name: "Flutter / React Native", level: 75, icon: "fas fa-mobile-alt" },
        { name: "React", level: 75, icon: "fab fa-react" },
        { name: "Tailwind CSS / Bootstrap", level: 90, icon: "fas fa-paint-brush" },
        { name: "MySQL / PostgreSQL", level: 80, icon: "fas fa-database" },
        { name: "Git & GitHub", level: 80, icon: "fab fa-git-alt" },
        { name: "Machine Learning / Scikit-learn", level: 70, icon: "fas fa-brain" }
    ],
    projects: [
        {
            title: "Cab Informatique",
            description: "Plateforme web et e-learning complète pour le centre de formation Cab Informatique. Permet la gestion de formations en ligne, le suivi des cours, des devoirs et des épreuves. Chaque étudiant dispose d'un espace personnel où il consulte ses cours, devoirs et épreuves. Intégration d'un tableau de bord administrateur et de statistiques en temps réel.",
            descriptionEn: "Complete web and e-learning platform for Cab Informatique training center. Manages online courses, lessons, assignments and exams. Each student has a personal space to access courses, assignments and exams. Features include admin dashboard and real-time statistics.",
            emoji: "🎓",
            technologies: ["Laravel", "React", "Tailwind CSS", "MySQL"],
            url: "https://cabinformatique.com"
        },
        {
            title: "YannShop",
            description: "Application e-commerce moderne pour la boutique en ligne Yannshop. Exposition des produits avec système innovant de notification instantanée des commandes via WhatsApp. Interface utilisateur fluide, gestion de panier et suivi des commandes en temps réel.",
            descriptionEn: "Modern e-commerce application for Yannshop online store. Product showcasing with innovative instant order notification via WhatsApp. Smooth user interface, cart management and real-time order tracking.",
            emoji: "🛍️",
            technologies: ["Laravel", "React", "Tailwind CSS", "SQLite"],
            url: "https://yannshop.com"
        },
        {
            title: "ShelbyCampus",
            description: "Solution robuste de gestion de centre de formation automatisant la génération de documents administratifs sécurisés par codes QR. Gestion des étudiants, enseignants, classes, emplois du temps, relevés de notes, reçus de paiement et fiches d'inscription. Garantit l'authenticité des documents via QR Code.",
            descriptionEn: "Robust training center management solution automating QR code-secured administrative documents. Manages students, teachers, classes, schedules, transcripts, payment receipts and registration forms. Guarantees document authenticity via QR codes.",
            emoji: "🏫",
            technologies: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
            url: "https://shelbycampus.alwaysdata.net"
        },
        {
            title: "DataCollect",
            description: "Plateforme collaborative de collecte et d'ingestion de données pour data scientists et analystes. Permet l'import, le nettoyage, la visualisation et l'export de données dans différents formats. Outil idéal pour les projets de recherche, d'analyse et de data mining.",
            descriptionEn: "Collaborative data collection and ingestion platform for data scientists and analysts. Enables import, cleaning, visualization and export of data in different formats. Ideal for research, analysis and data mining projects.",
            emoji: "📊",
            technologies: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
            url: "https://datacollect.alwaysdata.net"
        },
        {
            title: "Institut Gamaliel",
            description: "Vitrine web institutionnelle et dynamique pour le centre de formation Gamaliel. Présentation des programmes de formation, des enseignants, des événements et des actualités. Interface moderne et responsive avec gestion de contenu par l'administration.",
            descriptionEn: "Dynamic institutional web showcase for Gamaliel training center. Presentation of training programs, teachers, events and news. Modern responsive interface with admin content management.",
            emoji: "🏛️",
            technologies: ["Laravel", "React", "Tailwind CSS", "MySQL"],
            url: "https://institutgamaliel.com"
        },
        {
            title: "Portfolio Personnel (Django)",
            description: "Portfolio professionnel développé avec Django, intégrant un système de gestion de contenu, des statistiques dynamiques, un système de traduction FR/EN, un mode sombre/clair, des animations avancées (GSAP, Typed.js) et une interface utilisateur moderne avec Tailwind CSS. Déployé sur PythonAnywhere.",
            descriptionEn: "Professional portfolio built with Django, featuring content management, dynamic statistics, FR/EN translation, dark/light mode, advanced animations (GSAP, Typed.js) and modern UI with Tailwind CSS. Deployed on PythonAnywhere.",
            emoji: "🚀",
            technologies: ["Django", "Tailwind CSS", "JavaScript", "SQLite"],
            url: "https://lionelsikali.pythonanywhere.com"
        }
    ]
};