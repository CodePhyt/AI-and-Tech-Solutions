import { Cpu, Globe, Server, Smartphone, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type ServicePrice = {
    amount: number;
    currency: string;
    label: string;
    details: string;
};

export type ProcessPhase = {
    title: string;
    description: string;
    duration: string;
};

export type ServiceFAQ = {
    question: string;
    answer: string;
};

export type TechService = {
    slug: string;
    title: string;
    shortDescription: string;
    shortDescriptionDE: string;
    shortDescriptionEN: string;
    fullDescription: string;
    fullDescriptionDE: string;
    fullDescriptionEN: string;
    scopeNote?: string; // Legal / scope disclaimer (DE)
    icon: LucideIcon;
    imageUrl: string;
    category: string;
    price: ServicePrice;
    features: string[];
    processDetails: ProcessPhase[];
    faqs: ServiceFAQ[];
    techStack: string[];
};

export const SERVICES: Record<string, TechService> = {
    'ai-software': {
        slug: 'ai-software',
        title: 'Sovereign AI & Software',
        // — Bilingual short descriptions
        shortDescription: 'Agentic Workflows, RAG Pipelines, and Local LLM Deployment.',
        shortDescriptionDE: 'Agentenbasierte Automatisierung, RAG-Pipelines und lokale KI-Modelle.',
        shortDescriptionEN: 'Agentic Workflows, RAG Pipelines, and Local LLM Deployment.',
        // — Bilingual full descriptions
        fullDescription: 'We architect sovereign AI systems that you own. No API dependencies on Big Tech. From local LLM inference clusters to autonomous agent swarms managing your entire business workflow — deployed in hours, not months.',
        fullDescriptionDE: 'Wir entwickeln souveräne KI-Systeme, die Ihnen gehören. Keine API-Abhängigkeiten von Big-Tech-Konzernen. Von lokalen LLM-Clustern bis hin zu autonomen Agenten-Schwärmen, die Ihre gesamten Geschäftsprozesse steuern — in Stunden deployt, nicht in Monaten.',
        fullDescriptionEN: 'We architect sovereign AI systems that you own. No API dependencies on Big Tech. From local LLM inference clusters to autonomous agent swarms managing your entire business workflow — deployed in hours, not months.',
        icon: Cpu,
        imageUrl: '/images/services/ai-software.svg',
        category: 'Artificial Intelligence',
        price: { amount: 5000, currency: '€', label: 'Starting Access', details: 'Pilot Implementation' },
        features: [
            'Local LLM Deployment (Ollama / vLLM)',
            'RAG Knowledge Bases',
            'Autonomous Agentic Workflows',
            'Custom Chatbots & Voice Interfaces',
            'AI-Powered Process Automation',
            'Daily Model Tracking (ArXiv + HuggingFace)',
        ],
        techStack: ['Python', 'LangChain', 'LangGraph', 'Ollama', 'FastAPI', 'Next.js', 'PostgreSQL'],
        processDetails: [
            { title: 'Data Audit', description: 'Analyzing your data architecture and sovereignty posture.', duration: '1 Week' },
            { title: 'Model Selection', description: 'Selecting the best open-weights model released this week.', duration: '2 Days' },
            { title: 'Agent Engineering', description: 'Building and fine-tuning your agent swarm.', duration: '2–4 Weeks' },
            { title: 'Deployment', description: 'On-premise or sovereign cloud setup.', duration: '1 Week' },
        ],
        faqs: [
            { question: 'Do I own the model?', answer: 'Yes. We build on open-weights models — you own the fine-tuned weights.' },
            { question: 'Is my data private?', answer: 'Absolutely. Zero-trust, local-first architecture by default.' },
            { question: 'How current is your tech?', answer: 'We track ArXiv daily papers, HuggingFace releases, and GitHub trends every morning. If there is a better model released today, we evaluate it today.' },
        ],
    },

    'smart-home': {
        slug: 'smart-home',
        title: 'Smart Home Lab',
        shortDescription: 'HomeAssistant, Zigbee & Private IoT Networks. Systemintegration only.',
        shortDescriptionDE: 'HomeAssistant, Zigbee & private IoT-Netzwerke. Reine Systemintegration – kein Handwerk.',
        shortDescriptionEN: 'HomeAssistant, Zigbee & private IoT networks. System integration, not trade work.',
        fullDescription: 'Transform your physical space into a responsive, fully private organism. All data stays local. We specialize in Home Assistant ecosystems — surveillance, automation, energy management, and mesh IoT networks.',
        fullDescriptionDE: 'Verwandeln Sie Ihren Lebensraum in einen intelligenten, vollständig privaten Organismus. Alle Daten bleiben lokal. Wir spezialisieren uns auf Home-Assistant-Ökosysteme — Überwachung, Automatisierung, Energiemanagement und IoT-Mesh-Netzwerke.\n\n⚠️ Wichtiger Hinweis: Unsere Leistung umfasst ausschließlich die Softwarekonfiguration und Systemintegration. Kein Handwerk, keine Elektroinstallation.',
        fullDescriptionEN: 'Transform your physical space into a responsive, fully private organism. All data stays local. We specialize in Home Assistant ecosystems — surveillance, automation, energy management, and mesh IoT networks.\n\nNote: Our service covers software configuration and system integration only. No trade or electrical installation work.',
        scopeNote: 'Reine Systemintegration & Softwarekonfiguration. Kein Handwerk, keine Elektroinstallation.',
        icon: Smartphone,
        imageUrl: '/images/services/smart-home.svg',
        category: 'IoT & Automation',
        price: { amount: 2500, currency: '€', label: 'Core System', details: 'Server + Basic Sensors' },
        features: [
            'Local Voice Control (no cloud)',
            'Energy Dashboard & Monitoring',
            'Secure Local CCTV',
            'Automated Climate & Lighting',
            'Zigbee / Z-Wave / MQTT Mesh',
            'ESPHome custom sensors',
        ],
        techStack: ['HomeAssistant', 'ESPHome', 'Zigbee2MQTT', 'Node-RED', 'MQTT'],
        processDetails: [
            { title: 'Site Recon', description: 'Mapping physical infrastructure and WiFi topology.', duration: '2 Days' },
            { title: 'Hardware Config', description: 'Server setup and sensor integration.', duration: '3–5 Days' },
            { title: 'Automation Logic', description: 'Custom automations, scenes, and dashboards.', duration: '1 Week' },
        ],
        faqs: [
            { question: 'Does it work without internet?', answer: 'Yes. Local-only operation is the core requirement.' },
            { question: 'Do you install hardware?', answer: 'We do system integration only — no Handwerk (electrical installation). Hardware must be pre-installed.' },
        ],
    },

    'global-trade': {
        slug: 'global-trade',
        title: 'Global Trade One',
        shortDescription: 'Zero Group Partner. Tech Sourcing, Import/Export & Logistics Intelligence.',
        shortDescriptionDE: 'Zero Group Partner. Tech-Sourcing, Import/Export & digitale Logistik. Vermittlung & Sourcing.',
        shortDescriptionEN: 'Zero Group Partner. Tech sourcing, import/export & logistics intelligence. Brokerage & sourcing.',
        fullDescription: 'We bridge digital systems with physical trade flows. Custom ERPs, logistics connectors, and supply-chain intelligence tools for DE↔TR corridors and beyond. As a Zero Group partner, we connect you to verified hardware suppliers globally.',
        fullDescriptionDE: 'Wir verbinden digitale Systeme mit realen Handelsströmen. Maßgeschneiderte ERP-Systeme, Logistik-Konnektoren und Supply-Chain-Intelligence für DE↔TR-Korridore. Als Zero Group Partner verbinden wir Sie mit verifizierten Hardware-Lieferanten weltweit.\n\nWichtig: Wir erbringen Vermittlungs- und Sourcingdienstleistungen. Kein physischer Versand durch uns.',
        fullDescriptionEN: 'We bridge digital systems with physical trade flows. Custom ERPs, logistics connectors, and supply-chain intelligence for DE↔TR corridors and beyond. As a Zero Group partner, we connect you to verified hardware suppliers globally.\n\nNote: We provide brokerage and sourcing services. No physical shipping handled by us.',
        scopeNote: 'Vermittlung & Sourcing. Kein physischer Warenversand durch Osman Kadir KI Lösungen.',
        icon: Globe,
        imageUrl: '/images/services/global-trade.svg',
        category: 'Logistics Tech',
        price: { amount: 8000, currency: '€', label: 'System V1', details: 'Custom ERP Module' },
        features: [
            'Zero Group Partner Access',
            'Custom ERP & Inventory Systems',
            'Supply Chain Tracking',
            'Multi-Currency Ledger',
            'Automated Customs Documentation',
            'DE ↔ TR Trade Corridor Intelligence',
        ],
        techStack: ['PostgreSQL', 'Python', 'React', 'Docker', 'FastAPI'],
        processDetails: [
            { title: 'Workflow Mapping', description: 'Digitizing your physical supply chain flow.', duration: '2 Weeks' },
            { title: 'System Build', description: 'Core ERP development.', duration: '4–8 Weeks' },
            { title: 'Field Testing', description: 'Real-world logistics integration run.', duration: '2 Weeks' },
        ],
        faqs: [
            { question: 'Can it integrate with legacy systems?', answer: 'Yes, we specialize in legacy wrappers and API bridges.' },
            { question: 'Do you handle physical shipping?', answer: 'No — we are a brokerage and tech platform. Physical logistics is handled by verified partner carriers.' },
        ],
    },

    'consulting': {
        slug: 'consulting',
        title: 'Tactical Consulting',
        shortDescription: 'CTO-as-a-Service. Architecture audits and bleeding-edge tech advisory.',
        shortDescriptionDE: 'CTO-as-a-Service. Architektur-Audits und Beratung zu aktuellster Technologie.',
        shortDescriptionEN: 'CTO-as-a-Service. Architecture audits and bleeding-edge tech advisory.',
        fullDescription: 'Direct access to Osman Kadir for high-level architectural decisions. We review your stack, your security posture, and your scaling strategy — equipped with knowledge from this morning\'s ArXiv papers and GitHub trending.',
        fullDescriptionDE: 'Direkter Zugang zu Osman Kadir für hochrangige Architekturentscheidungen. Wir prüfen Ihren Stack, Ihre Sicherheitslage und Ihre Skalierungsstrategie — ausgestattet mit dem aktuellsten Wissen von ArXiv und GitHub Trending.',
        fullDescriptionEN: 'Direct access to Osman Kadir for high-level architectural decisions. We review your stack, your security posture, and your scaling strategy — equipped with knowledge from this morning\'s ArXiv papers and GitHub trending.',
        icon: Server,
        imageUrl: '/images/services/consulting.svg',
        category: 'Strategic Advisory',
        price: { amount: 350, currency: '€', label: 'Hourly Rate', details: 'Minimum 10 Hour Block' },
        features: [
            'Architecture Deep-Dive',
            'Security Audit',
            'AI Stack Selection (Today\'s Best Models)',
            'Code Review & Refactor Plan',
            'Scaling Strategy',
            'NDA Standard',
        ],
        techStack: ['All stacks covered'],
        processDetails: [
            { title: 'Discovery', description: 'Initial deep-dive session.', duration: '2 Hours' },
            { title: 'Audit', description: 'Codebase and infrastructure review.', duration: '1 Week' },
            { title: 'Report', description: 'Strategic roadmap delivery.', duration: '1 Day' },
        ],
        faqs: [
            { question: 'Do you sign NDAs?', answer: 'Always. Standard procedure before any engagement.' },
            { question: 'What makes your advice different?', answer: 'We track AI/tech developments daily. Our recommendations reflect what was released this week, not what was popular last year.' },
        ],
    },

    'digital-media': {
        slug: 'digital-media',
        title: 'Sovereign Media',
        shortDescription: 'AI-generated video, 3D assets, and brand identity for tech companies.',
        shortDescriptionDE: 'KI-generierte Videos, 3D-Assets und Markenidentität für Tech-Unternehmen.',
        shortDescriptionEN: 'AI-generated video, 3D assets, and brand identity for tech companies.',
        fullDescription: 'We don\'t just build code — we build narratives. AI-powered video production, 3D assets, motion graphics, and full brand storytelling for tech companies that need to look elite.',
        fullDescriptionDE: 'Wir bauen nicht nur Code — wir erschaffen Narrative. KI-gestützte Videoproduktion, 3D-Assets, Motion Graphics und vollständiges Brand-Storytelling für Tech-Unternehmen, die einen erstklassigen Auftritt brauchen.',
        fullDescriptionEN: 'We don\'t just build code — we build narratives. AI-powered video production, 3D assets, motion graphics, and full brand storytelling for tech companies that need to look elite.',
        icon: Zap,
        imageUrl: '/images/services/digital-media.svg',
        category: 'Creative Studio',
        price: { amount: 1500, currency: '€', label: 'Asset Pack', details: 'Video + Graphics' },
        features: [
            'AI Video Generation & Editing',
            '4K Tech Demo Production',
            '3D Product Rendering (Blender)',
            'Brand Identity & Style Guide',
            'Motion Graphics',
            'Multi-Language AI Voiceover (DE/EN/TR)',
        ],
        techStack: ['Stable Diffusion', 'ComfyUI', 'Blender', 'DaVinci Resolve', 'After Effects'],
        processDetails: [
            { title: 'Concept', description: 'Storyboarding and art direction.', duration: '3 Days' },
            { title: 'Production', description: 'AI generation + manual refinement.', duration: '2 Weeks' },
            { title: 'Post-Production', description: 'Editing, VFX, and delivery.', duration: '1 Week' },
        ],
        faqs: [
            { question: 'Do you use AI for the videos?', answer: 'Yes — the latest diffusion models combined with professional post-production tools.' },
            { question: 'Can you do multilingual voiceover?', answer: 'Yes: German, English, and Turkish voices available via AI synthesis.' },
        ],
    },
};
