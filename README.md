# Veljko Ivic — Portfolio

Persönliche Portfolio-Website. Statische Seite, ohne Framework und ohne Build-Schritt — einfach im Browser öffnen.

🌐 **Live:** [veljkoivic.ch](https://veljkoivic.ch)

## Features
- Zweisprachig **Deutsch / Englisch** (Umschalter, Wahl wird gespeichert)
- **Dark- / Light-Mode** (Wahl wird gespeichert)
- Responsive Layout
- Scroll-Reveal-Animationen, aktiver Navigationspunkt beim Scrollen
- Eigener, animierter Maus-Cursor

## Projektstruktur
```
site/
├─ index.html        Struktur / Markup
├─ css/
│  └─ style.css      Gesamtes Styling (Theme über [data-theme])
├─ js/
│  ├─ content.js     Alle Texte & Daten (DE/EN) — hier Inhalte bearbeiten
│  └─ main.js        Logik: Rendering, Sprache, Theme, Cursor, Scroll
└─ assets/
   ├─ veljko.jpg
   ├─ Lebenslauf_Veljko-Ivic_DE.pdf
   └─ Cover-Letter_Veljko-Ivic_EN.pdf
```

## Inhalte bearbeiten
Texte, Projekte, Werdegang usw. stehen alle in **`js/content.js`** (getrennt nach `de` und `en`).
Du musst dafür den restlichen Code nicht anfassen.

## Lokal starten
Einfach `index.html` im Browser öffnen.
Empfohlen für die Entwicklung: VS Code mit der Erweiterung **Live Server** → Rechtsklick auf `index.html` → *Open with Live Server*.

## Deployment
Die Seite ist rein statisch und läuft auf jedem Webspace oder bei:
- **GitHub Pages** — Repo → Settings → Pages → Branch wählen
- **Netlify** / **Cloudflare Pages** — Ordner `site/` hochladen

## Technik
Reines HTML, CSS und JavaScript (Vanilla, keine Abhängigkeiten).

## Kontakt
- E-Mail: ivic-veljko@hotmail.ch
- GitHub: [@VeljkoIvic](https://github.com/VeljkoIvic)
- LinkedIn: [veljko-ivic](https://www.linkedin.com/in/veljko-ivic/)
