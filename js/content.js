const CONTENT = {
  de: {
    nav: [
      { label: "Über mich", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Werdegang", href: "#work" },
      { label: "Projekte", href: "#projects" },
      { label: "Kontakt", href: "#contact" },
    ],
    role: "Softwareentwickler & Elektroplaner",
    tagline:
      "Strom trifft Code: Ich plane Elektroprojekte und baue die Software dazu. Die gleiche Neugier, mit der ich am Wasser auf den Anbiss warte, steckt in jeder Zeile, die ich schreibe.",
    ctaWork: "Projekte ansehen",
    ctaContact: "Kontakt",
    photoBadge: "Hallo!",
    cvLabel: "Lebenslauf",
    cvHref: "assets/Lebenslauf-Veljko-Ivic-DE.pdf",

    h_about: "Über mich",
    aboutLead:
      "Zwei Welten, eine Denkweise: die Präzision der Elektroplanung und die Kreativität der Softwareentwicklung.",
    aboutBody:
      "Strukturierte, lernbereite Persönlichkeit mit Leidenschaft für sauberen Code und durchdachte Lösungen. Erfahrung als Junior Projektleiter, DevOps für CAD-/BIM-Tools und ein solides Fundament aus der Elektrotechnik — ich verbinde beide Welten in jedem Projekt.",
    facts: [
      { big: "7+", label: "Jahre Erfahrung in der Technik", color: "#ff5436" },
      { big: "3", label: "Projekte, die ich umgesetzt habe", color: "#7c5cff" },
      { big: "Sprachen", label: "Deutsch · Serbisch · Englisch · Japanisch", color: "#1fd97a" },
      { big: "DevOps", label: "für CAD-/BIM-Tools — Automatisierung & Standards", color: "#e0a800" },
    ],

    hobbiesTitle: "Mehr als Code & Pläne",
    hobbiesBody:
      "Ich brauche den Ausgleich zum Bildschirm — am liebsten draussen in der Natur, am Wasser oder unterwegs. Neugier, Disziplin und die Freude am Lernen ziehen sich durch alles, was ich neben der Arbeit mache.",
    hobbies: [
      { num: "01", icon: "🌍", title: "Reisen", note: "Neue Orte, Kulturen und Perspektiven entdecken.", tint: "rgba(255,84,54,.14)", color: "#ff5436" },
      { num: "02", icon: "🎣", title: "Fischen", note: "Ruhe und Geduld am Wasser — mein liebster Ausgleich.", tint: "rgba(124,92,255,.14)", color: "#7c5cff" },
      { num: "03", icon: "📷", title: "Fotografie", note: "Licht und Momente festhalten, mit Auge fürs Detail.", tint: "rgba(31,217,122,.14)", color: "#1fd97a" },
      { num: "04", icon: "🏃", title: "Marathon & Fitness", note: "Disziplin im Training — aktuell auf die 42 km hin.", tint: "rgba(255,210,63,.16)", color: "#e0a800" },
      { num: "05", icon: "🍳", title: "Kochen", note: "Gerne experimentieren und für Freunde kochen.", tint: "rgba(255,84,54,.14)", color: "#ff5436" },
      { num: "06", icon: "日", title: "Japanisch", note: "Lerne die Sprache aktuell auf Niveau N5 — aus reiner Neugier.", tint: "rgba(124,92,255,.14)", color: "#7c5cff" },
      { num: "07", icon: "👨‍👩‍👧", title: "Familie", note: "Zeit mit den Menschen, die zählen — mein Rückhalt und meine Energiequelle.", tint: "rgba(31,217,122,.14)", color: "#1fd97a" },
      { num: "08", icon: "💻", title: "Coden & Tüfteln", note: "Eigene Ideen in kleinen Side-Projects umsetzen — einfach, weil es Spass macht.", tint: "rgba(255,210,63,.16)", color: "#e0a800" },
    ],

    h_stack: "Stack & Werkzeuge",
    stack: [
      { title: "Software", icon: "⌘", tint: "rgba(255,84,54,.14)", color: "#ff5436", items: ["C#", "Java", "JavaScript", "HTML5", "CSS", "MS SQL", "Linux"] },
      { title: "Planung & BIM", icon: "◈", tint: "rgba(124,92,255,.14)", color: "#7c5cff", items: ["Revit", "ePlan", "Trimble Nova", "Messerli", "BIMCollab", "EBC", "ISO/IEC 27001"] },
    ],

    h_work: "Werdegang",
    h_jobs: "Berufserfahrung",
    h_edu: "Ausbildung",
    work: [
      { period: "2025 — Jetzt", role: "Junior Projektleiter", org: "Amstein + Walthert AG", desc: "Projektleitung und Fachplanung von Elektroprojekten. DevOps für CAD-/BIM-Tools (u.a. Revit) sowie Betreuung von Lernenden." },
      { period: "2023 — 2024", role: "Elektroplaner", org: "HKG Engineering AG", desc: "Erstellung technischer Pläne und Schemas, projektbezogene Kundenkommunikation sowie Mitarbeit in Planung und Koordination." },
      { period: "2021 — 2023", role: "Elektroinstallateur EFZ", org: "Eglin AG · Swisspro AG · Melcom AG", desc: "Installation, Service und Wartung elektrischer Anlagen sowie Neu- und Umbauten in Wohn- und Gewerbeobjekten. Lösungsorientierte Fehlersuche, saubere Verdrahtung nach Schema und technische Kundenberatung direkt vor Ort." },
    ],
    education: [
      { period: "Geplant", role: "Bachelor of Science in Informatik", org: "ZHAW — Zürcher Hochschule für Angewandte Wissenschaften", desc: "Geplantes Bachelorstudium zur weiteren Vertiefung in Software Engineering und Informatik." },
      { period: "2024 — 2027", role: "Dipl. Informatiker HF", org: "Professional Bachelor in Computer Science", desc: "Breite Ausbildung mit Führungsfokus: Softwareentwicklung, Datenbanken und Architektur ebenso wie Projektmanagement, Betriebswirtschaft, Marketing und Mitarbeiterführung." },
      { period: "2017 — 2021", role: "Elektroinstallateur EFZ", org: "Berufliche Grundbildung (Lehre)", desc: "Vierjährige Grundbildung: Installation, Wartung und Reparatur elektrischer Anlagen, Montage von Schaltkästen, Grundlagen der Steuerungs- und Gebäudetechnik sowie das Lesen technischer Zeichnungen." },
    ],

    h_projects: "Projekte",
    cols: [
      { key: "live", title: "Live · Fertig", color: "#1fd97a" },
      { key: "progress", title: "In Arbeit", color: "#e0a800" },
      { key: "planned", title: "Geplant", color: "#7c5cff" },
    ],
    projects: [
      { cat: "live", name: "Fishertechservice", mark: "FT", color: "#1fd97a", desc: "Firmen-Website für einen Technik-Servicebetrieb — Konzept, Design und Umsetzung.", tags: ["Web", "Design", "UX"], href: "https://www.fishertechservice.ch", target: "_blank", arrow: "↗" },
      { cat: "progress", name: "Fishertechservice Dashboard", mark: "DB", color: "#ff5436", desc: "Internes Management-Tool zur Verwaltung von Material, Kunden und Arbeitszeit.", tags: ["C#", "Web", "MS SQL"], href: "https://github.com/VeljkoIvic/FischerTechService-Dashboard", target: "_blank", arrow: "↗" },
      { cat: "progress", name: "Chess Game", mark: "♞", color: "#1fd97a", desc: "Ein Schachspiel in C# — mit vollständiger Zuglogik und Spielregeln. Aktuell in Entwicklung.", tags: ["C#", ".NET", "OOP"], href: "https://github.com/VeljkoIvic/ChessGame", target: "_blank", arrow: "↗" },
      { cat: "planned", name: "Filmmaker Portfolio", mark: "FR", color: "#7c5cff", desc: "Portfolio-Website für einen befreundeten Filmregisseur — Fokus auf Bewegtbild und Storytelling.", tags: ["Web", "Motion", "Design"], href: "#contact", target: "_self", arrow: "→" },
    ],

    h_contact: "Kontakt",
    contactLead: "Lass uns etwas bauen.",
    footer: "Brüttisellen, Schweiz",
  },

  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Experience", href: "#work" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    role: "Software Developer & Electrical Engineer",
    tagline:
      "Where current meets code: I plan electrical projects and build the software for them. The same patience I bring to the water waiting for a bite goes into every line I write.",
    ctaWork: "View work",
    ctaContact: "Get in touch",
    photoBadge: "Hi!",
    cvLabel: "Résumé",
    cvHref: "assets/Lebenslauf-Veljko-Ivic-EN.pdf",

    h_about: "About",
    aboutLead:
      "Two worlds, one mindset: the precision of electrical planning and the creativity of software development.",
    aboutBody:
      "A structured, eager-to-learn person with a passion for clean code and well-thought-out solutions. Experience as a junior project lead, DevOps for CAD/BIM tools and a solid foundation in electrical engineering — I bring both worlds together in every project.",
    facts: [
      { big: "7+", label: "Years of experience in tech", color: "#ff5436" },
      { big: "3", label: "Projects I’ve delivered", color: "#7c5cff" },
      { big: "Languages", label: "German · Serbian · English · Japanese", color: "#1fd97a" },
      { big: "DevOps", label: "for CAD/BIM tools — automation & standards", color: "#e0a800" },
    ],

    hobbiesTitle: "More than code & plans",
    hobbiesBody:
      "I need a counterbalance to the screen — ideally outdoors in nature, by the water or on the road. Curiosity, discipline and the joy of learning run through everything I do outside of work.",
    hobbies: [
      { num: "01", icon: "🌍", title: "Travelling", note: "Discovering new places, cultures and perspectives.", tint: "rgba(255,84,54,.14)", color: "#ff5436" },
      { num: "02", icon: "🎣", title: "Fishing", note: "Calm and patience by the water — my favourite reset.", tint: "rgba(124,92,255,.14)", color: "#7c5cff" },
      { num: "03", icon: "📷", title: "Photography", note: "Capturing light and moments with an eye for detail.", tint: "rgba(31,217,122,.14)", color: "#1fd97a" },
      { num: "04", icon: "🏃", title: "Marathon & Fitness", note: "Discipline in training — currently working towards 42 km.", tint: "rgba(255,210,63,.16)", color: "#e0a800" },
      { num: "05", icon: "🍳", title: "Cooking", note: "Love to experiment and cook for friends.", tint: "rgba(255,84,54,.14)", color: "#ff5436" },
      { num: "06", icon: "日", title: "Japanese", note: "Currently learning the language at N5 level — out of pure curiosity.", tint: "rgba(124,92,255,.14)", color: "#7c5cff" },
      { num: "07", icon: "👨‍👩‍👧", title: "Family", note: "Time with the people who matter — my anchor and my source of energy.", tint: "rgba(31,217,122,.14)", color: "#1fd97a" },
      { num: "08", icon: "💻", title: "Coding & Tinkering", note: "Turning my own ideas into small side projects — simply because it’s fun.", tint: "rgba(255,210,63,.16)", color: "#e0a800" },
    ],

    h_stack: "Stack & Tools",
    stack: [
      { title: "Software", icon: "⌘", tint: "rgba(255,84,54,.14)", color: "#ff5436", items: ["C#", "Java", "JavaScript", "HTML5", "CSS", "MS SQL", "Linux"] },
      { title: "Planning & BIM", icon: "◈", tint: "rgba(124,92,255,.14)", color: "#7c5cff", items: ["Revit", "ePlan", "Trimble Nova", "Messerli", "BIMCollab", "EBC", "ISO/IEC 27001"] },
    ],

    h_work: "Experience",
    h_jobs: "Work experience",
    h_edu: "Education",
    work: [
      { period: "2025 — Now", role: "Junior Project Lead", org: "Amstein + Walthert AG", desc: "Project management and specialist planning of electrical projects. DevOps for CAD/BIM tools (incl. Revit) and mentoring apprentices." },
      { period: "2023 — 2024", role: "Electrical Planner", org: "HKG Engineering AG", desc: "Creating technical plans and schematics, project-based client communication, and contributing to planning and coordination." },
      { period: "2021 — 2023", role: "Electrician EFZ", org: "Eglin AG · Swisspro AG · Melcom AG", desc: "Installation, service and maintenance of electrical systems plus new builds and conversions in residential and commercial properties. Solution-oriented fault finding, clean wiring to schematic and on-site technical client advice." },
    ],
    education: [
      { period: "Planned", role: "Bachelor of Science in Computer Science", org: "ZHAW — Zurich University of Applied Sciences", desc: "Planned bachelor’s degree to further deepen software engineering and computer science." },
      { period: "2024 — 2027", role: "Dipl. Informatiker HF", org: "Professional Bachelor in Computer Science", desc: "A broad, leadership-focused programme: software development, databases and architecture alongside project management, business administration, marketing and people leadership." },
      { period: "2017 — 2021", role: "Electrician EFZ", org: "Vocational education (apprenticeship)", desc: "Four-year apprenticeship: installation, maintenance and repair of electrical systems, assembly of control cabinets, fundamentals of control and building technology, and reading technical drawings." },
    ],

    h_projects: "Projects",
    cols: [
      { key: "live", title: "Live · Done", color: "#1fd97a" },
      { key: "progress", title: "In progress", color: "#e0a800" },
      { key: "planned", title: "Planned", color: "#7c5cff" },
    ],
    projects: [
      { cat: "live", name: "Fishertechservice", mark: "FT", color: "#1fd97a", desc: "Company website for a technical service business — concept, design and build.", tags: ["Web", "Design", "UX"], href: "https://www.fishertechservice.ch", target: "_blank", arrow: "↗" },
      { cat: "progress", name: "Fishertechservice Dashboard", mark: "DB", color: "#ff5436", desc: "Internal management tool for tracking materials, clients and working hours.", tags: ["C#", "Web", "MS SQL"], href: "https://github.com/VeljkoIvic/FischerTechService-Dashboard", target: "_blank", arrow: "↗" },
      { cat: "progress", name: "Chess Game", mark: "♞", color: "#1fd97a", desc: "A chess game built in C# — with full move logic and game rules. Currently in development.", tags: ["C#", ".NET", "OOP"], href: "https://github.com/VeljkoIvic/ChessGame", target: "_blank", arrow: "↗" },
      { cat: "planned", name: "Filmmaker Portfolio", mark: "FR", color: "#7c5cff", desc: "Portfolio website for a filmmaker friend — focused on moving image and storytelling.", tags: ["Web", "Motion", "Design"], href: "#contact", target: "_self", arrow: "→" },
    ],

    h_contact: "Contact",
    contactLead: "Let's build something.",
    footer: "Brüttisellen, Switzerland",
  },
};

/* Sprachunabhängige Daten (gleich in DE & EN) */
const SHARED = {
  email: "ivic-veljko@hotmail.ch",
  socials: [
    { label: "GitHub", icon: "◆", href: "https://github.com/VeljkoIvic" },
    { label: "LinkedIn", icon: "▣", href: "https://www.linkedin.com/in/veljko-ivic/" },
    { label: "Instagram", icon: "◉", href: "https://instagram.com/ivxveljko" },
    { label: "fishertechservice.ch", icon: "↗", href: "https://www.fishertechservice.ch" },
  ],
};
