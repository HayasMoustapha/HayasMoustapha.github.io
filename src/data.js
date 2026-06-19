const GH = "https://github.com/HayasMoustapha";

// Real client projects (private repos) — anonymized, demo-data screenshots.
export const cases = [
  {
    sector: "Secteur public",
    title: "Plateforme d'état civil",
    img: "/cases/civilcert.png",
    problem: "Dématérialiser déclarations et certificats d'état civil à l'échelle d'une administration, avec fiabilité et traçabilité.",
    result: "Architecture microservices (déclaration, certification, portail public, super-admin), messagerie RabbitMQ en cluster, déploiement Docker. Audit technique et manuel de test livrés.",
    stack: ["Next.js", "Python", "RabbitMQ", "Docker"],
    metrics: [{ v: "338", l: "commits" }, { v: "8+", l: "services" }],
  },
  {
    sector: "Éducation · SaaS",
    title: "SaaS multi-tenant",
    img: "/cases/umatic.png",
    problem: "Gérer et mettre en réseau des dizaines de centres, données isolées, sur web et mobile.",
    result: "Plateforme multi-tenant : services backend (auth, notifications), application mobile, design-system partagé, déploiement Docker de production. Support i18n / RTL.",
    stack: ["Multi-tenant", "Microservices", "Mobile", "Docker"],
    metrics: [{ v: "127", l: "commits" }, { v: "web+mobile", l: "" }],
  },
  {
    sector: "Événementiel",
    title: "Application de gestion d'événements",
    img: "/cases/eventflow.png",
    problem: "Planifier et coordonner des événements, connexion sécurisée, interface fidèle à une maquette Figma.",
    result: "Application full-stack : API backend, frontend, authentification Google OAuth, intégration soignée de la maquette en code.",
    stack: ["Full-stack", "Google OAuth", "Figma → code"],
    metrics: [{ v: "full-stack", l: "" }, { v: "OAuth", l: "sécurité" }],
  },
  {
    sector: "Design · ERP",
    title: "Thème Odoo sur-mesure",
    img: "/cases/odoo-bao.png",
    problem: "Donner à un ERP Odoo une interface moderne et cohérente (achats, stock, produits) sans casser le standard.",
    result: "Thèmes Odoo packagés (manifest + assets) : interface modernisée, cohérente et réutilisable sur plusieurs déploiements.",
    stack: ["Odoo", "CSS", "Design system"],
    metrics: [{ v: "module", l: "packagé" }, { v: "réutilisable", l: "" }],
  },
];

// Public, deployed mini-products
export const labs = [
  { title: "La Maison Jungle", tag: "E-commerce", slug: "start-react-with-plant-store-project", desc: "Boutique de plantes : catalogue, panier animé." },
  { title: "Shiny", tag: "Web app", slug: "shiny-agency", desc: "Mise en relation freelance, questionnaire → reco." },
  { title: "Time Tracking", tag: "Dashboard", slug: "time-tracking-dashboard", desc: "Suivi du temps, chiffres animés." },
  { title: "Lumen", tag: "Landing", slug: "sign-up-form", desc: "Waitlist, validation en direct." },
  { title: "Analytics", tag: "Widget", slug: "stats-preview", desc: "KPIs animés, sparkline, périodes." },
  { title: "Audit présence", tag: "Composant", slug: "summary", desc: "Score de présence en ligne." },
];

export const stack = ["React", "Next.js", "Node.js", "Python", "TypeScript", "Tailwind", "PostgreSQL", "RabbitMQ", "Docker", "Odoo"];

export const links = { gh: GH, studio: "https://governor-studio.vercel.app", email: "governor-studio@gmail.com", demo: "https://hayasmoustapha.github.io" };
