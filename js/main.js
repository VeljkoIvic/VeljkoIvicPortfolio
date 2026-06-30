(function () {
  "use strict";

  /* ---------- kleine DOM-Helfer ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const setText = (sel, text) => { const n = $(sel); if (n) n.textContent = text; };

  // Erzeugt ein Element aus Tag, Attributen und Kindern.
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k === "style") node.setAttribute("style", v);
      else node.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children])
      .filter(Boolean)
      .forEach((c) => node.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
    return node;
  }

  /* ---------- Zustand ---------- */
  const STORE = { theme: "vi_theme", lang: "vi_lang" };
  let lang = "de";
  let active = "top";

  function read(key, allowed, fallback) {
    try {
      const v = localStorage.getItem(STORE[key]);
      return allowed.includes(v) ? v : fallback;
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(STORE[key], value); } catch (e) {}
  }

  /* ---------- Render: Navigation ---------- */
  function renderNav(t) {
    const wrap = $("#navLinks");
    wrap.innerHTML = "";
    t.nav.forEach((n) => {
      const id = n.href.slice(1);
      const link = el("a", { class: "nav__link", href: n.href, "data-target": id }, [
        el("span", { class: "nav__dot" }),
        n.label,
      ]);
      if (id === active) link.classList.add("is-active");
      wrap.appendChild(link);
      if (n.href === "#contact") {
        wrap.appendChild(
          el("a", { class: "nav__link", href: t.cvHref, download: "", target: "_blank", rel: "noopener" }, [
            el("span", { class: "nav__dot" }),
            t.cvLabel,
          ])
        );
      }
    });
  }

  /* ---------- Render: Hero ---------- */
  function renderHero(t) {
    setText("#heroRole", t.role);
    setText("#heroTagline", t.tagline);
    setText("#heroBadge", t.photoBadge);
    setText("#ctaWork", t.ctaWork + " →");
    setText("#ctaContact", t.ctaContact);
    const cv = $("#ctaCv");
    cv.textContent = t.cvLabel + " ↓";
    cv.href = t.cvHref;
  }

  /* ---------- Render: About ---------- */
  function renderAbout(t) {
    setText("#aboutNum", "(01)");
    setText("#aboutHead", t.h_about);
    setText("#aboutLead", t.aboutLead);
    setText("#aboutBody", t.aboutBody);

    const facts = $("#facts");
    facts.innerHTML = "";
    t.facts.forEach((f) => {
      facts.appendChild(
        el("div", { class: "fact" }, [
          el("span", { class: "fact__dot", style: `background:${f.color}` }),
          el("div", { class: "fact__big", style: `color:${f.color}`, text: f.big }),
          el("div", { class: "fact__rule" }),
          el("div", { class: "fact__label", text: f.label }),
        ])
      );
    });

    setText("#hobbiesTitle", t.hobbiesTitle);
    setText("#hobbiesBody", t.hobbiesBody);
    const grid = $("#hobbies");
    grid.innerHTML = "";
    t.hobbies.forEach((h) => {
      grid.appendChild(
        el("article", { class: "hobby" }, [
          el("span", { class: "hobby__num", style: `color:${h.color}`, text: h.num }),
          el("span", { class: "hobby__icon", style: `background:${h.tint}`, text: h.icon }),
          el("h4", { class: "hobby__title", text: h.title }),
          el("p", { class: "hobby__note", text: h.note }),
        ])
      );
    });
  }

  /* ---------- Render: Stack ---------- */
  function renderStack(t) {
    setText("#stackNum", "(02)");
    setText("#stackHead", t.h_stack);
    const grid = $("#stackGrid");
    grid.innerHTML = "";
    t.stack.forEach((g) => {
      const tags = el("div", { class: "tags" });
      g.items.forEach((it) => {
        const tag = el("span", { class: "tag", text: it });
        tag.addEventListener("mouseenter", () => { tag.style.borderColor = g.color; tag.style.color = g.color; });
        tag.addEventListener("mouseleave", () => { tag.style.borderColor = ""; tag.style.color = ""; });
        tags.appendChild(tag);
      });
      grid.appendChild(
        el("div", { class: "stack-card" }, [
          el("div", { class: "stack-card__head" }, [
            el("span", { class: "stack-card__icon", style: `background:${g.tint};color:${g.color}`, text: g.icon }),
            el("h3", { class: "stack-card__title", text: g.title }),
          ]),
          tags,
        ])
      );
    });
  }

  /* ---------- Render: Werdegang ---------- */
  function buildEntry(w, accent) {
    return el("div", { class: "entry" }, [
      el("span", { class: "entry__period", style: `color:${accent}`, text: w.period }),
      el("div", { class: "entry__role-row" }, [el("h4", { class: "entry__role", text: w.role })]),
      el("p", { class: "entry__org", text: w.org }),
      el("p", { class: "entry__desc", text: w.desc }),
    ]);
  }

  function renderWork(t) {
    setText("#workNum", "(03)");
    setText("#workHead", t.h_work);

    setText("#jobsTitle", t.h_jobs);
    const jobs = $("#jobs");
    jobs.innerHTML = "";
    t.work.forEach((w) => jobs.appendChild(buildEntry(w, "var(--accent)")));

    setText("#eduTitle", t.h_edu);
    const edu = $("#education");
    edu.innerHTML = "";
    t.education.forEach((w) => edu.appendChild(buildEntry(w, "var(--violet)")));
  }

  /* ---------- Render: Projekte ---------- */
  function renderProjects(t) {
    setText("#projectsNum", "(04)");
    setText("#projectsHead", t.h_projects);
    const grid = $("#projectsGrid");
    grid.innerHTML = "";

    t.cols.forEach((c) => {
      const items = t.projects.filter((p) => p.cat === c.key);
      const cards = items.map((p) => {
        const card = el("a", { class: "proj-card", href: p.href, target: p.target, rel: p.target === "_blank" ? "noopener" : null }, [
          el("div", { class: "proj-card__top" }, [
            el("span", { class: "proj-card__mark", style: `background:${c.color}1f;color:${p.color}`, text: p.mark }),
            el("span", { class: "proj-card__arrow", text: p.arrow }),
          ]),
          el("h4", { class: "proj-card__name", text: p.name }),
          el("p", { class: "proj-card__desc", text: p.desc }),
          el("div", { class: "proj-card__tags" }, p.tags.map((tg) => el("span", { class: "proj-tag", text: tg }))),
        ]);
        // Hover-Rand in der Projektfarbe
        card.addEventListener("mouseenter", () => (card.style.borderColor = p.color));
        card.addEventListener("mouseleave", () => (card.style.borderColor = ""));
        return card;
      });

      const col = el("div", { class: "proj-col" }, [
        el("div", { class: "proj-col__head", style: `border-color:${c.color}` }, [
          el("span", { class: "proj-col__dot", style: `background:${c.color}` }),
          el("span", { class: "proj-col__title", text: c.title }),
          el("span", { class: "proj-col__count", style: `color:${c.color}`, text: String(items.length) }),
        ]),
        ...cards,
      ]);
      grid.appendChild(col);
    });
  }

  /* ---------- Render: Kontakt ---------- */
  function renderContact(t) {
    setText("#contactNum", "(05)");
    setText("#contactHead", t.h_contact);
    setText("#contactLead", t.contactLead);
    const mail = $("#contactMail");
    mail.textContent = SHARED.email;
    mail.href = "mailto:" + SHARED.email;

    const socials = $("#socials");
    socials.innerHTML = "";
    SHARED.socials.forEach((s) => {
      socials.appendChild(
        el("a", { class: "social", href: s.href, target: "_blank", rel: "noopener" }, [
          el("span", { class: "social__icon", text: s.icon }),
          s.label,
        ])
      );
    });
    setText("#footerRight", t.footer);
  }

  /* ---------- Sprache & Theme ---------- */
  function renderAll() {
    const t = CONTENT[lang];
    document.documentElement.lang = lang;
    document.title = "Veljko Ivic — " + t.role;
    renderNav(t);
    renderHero(t);
    renderAbout(t);
    renderStack(t);
    renderWork(t);
    renderProjects(t);
    renderContact(t);
    updateLangButton();
  }

  function updateLangButton() {
    $("#langDe").classList.toggle("is-on", lang === "de");
    $("#langEn").classList.toggle("is-on", lang === "en");
  }

  function setLang(next) {
    lang = next;
    save("lang", lang);
    renderAll();
  }

  function setTheme(next) {
    document.documentElement.setAttribute("data-theme", next);
    $("#themeIcon").textContent = next === "dark" ? "☀" : "☾";
    save("theme", next);
  }

  /* ---------- Scroll-Reveal ---------- */
  function initReveal() {
    const targets = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((node) => io.observe(node));
  }

  /* ---------- Scroll-Spy (aktiver Nav-Punkt) ---------- */
  function initScrollSpy() {
    const ids = ["top", "about", "stack", "work", "projects", "contact"];
    const onScroll = () => {
      const mid = window.innerHeight * 0.32;
      let cur = "top";
      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= mid) cur = id;
      });
      if (cur !== active) {
        active = cur;
        document.querySelectorAll(".nav__link[data-target]").forEach((a) => {
          a.classList.toggle("is-active", a.getAttribute("data-target") === active);
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobiles Menü (Hamburger) ---------- */
  function initMenu() {
    const burger = $("#navBurger");
    const links = $("#navLinks");
    if (!burger || !links) return;

    function close() {
      links.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Menü öffnen");
    }
    function toggle() {
      const open = links.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    }

    burger.addEventListener("click", toggle);

    // Nach Klick auf einen Navigations-Link schließen
    links.addEventListener("click", (e) => {
      if (e.target.closest(".nav__link")) close();
    });

    // Klick außerhalb der Navigation schließt das Menü
    document.addEventListener("click", (e) => {
      if (links.classList.contains("is-open") && !e.target.closest(".nav")) close();
    });

    // Escape schließt das Menü
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    // Beim Wechsel auf Desktop-Breite immer zurücksetzen
    if (window.matchMedia) {
      const desktop = window.matchMedia("(min-width: 961px)");
      const onChange = () => { if (desktop.matches) close(); };
      if (desktop.addEventListener) desktop.addEventListener("change", onChange);
      else if (desktop.addListener) desktop.addListener(onChange);
    }
  }

  /* ---------- Eigener Cursor (Strom-Thema) ---------- */
  function initCursor() {
    if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot = el("div", { class: "cursor-dot" });
    const ring = el("div", { class: "cursor-ring" }, [el("div", { class: "cursor-ring__inner" })]);
    const inner = ring.firstChild;
    document.body.append(dot, ring);
    document.body.classList.add("has-custom-cursor");

    let mx = -100, my = -100, rx = -100, ry = -100, px = -100, py = -100;
    let hue = 14, glow = 0;

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
    }, { passive: true });

    function spawnSpark(x, y, col, speed) {
      const s = el("div", { class: "cursor-spark" });
      const ang = Math.random() * Math.PI * 2;
      const d = 5 + Math.random() * speed * 0.5;
      s.style.background = col;
      s.style.boxShadow = "0 0 6px " + col;
      s.style.transform = `translate(${x}px,${y}px)`;
      s.style.transition = "transform .45s cubic-bezier(.2,.8,.2,1), opacity .45s ease-out";
      document.body.appendChild(s);
      requestAnimationFrame(() => {
        s.style.transform = `translate(${x + Math.cos(ang) * d}px,${y + Math.sin(ang) * d}px) scale(.2)`;
        s.style.opacity = "0";
      });
      setTimeout(() => s.remove(), 480);
    }

    (function loop() {
      rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
      const speed = Math.min(Math.hypot(mx - px, my - py), 60);
      px = mx; py = my;
      hue = (hue + speed * 0.9) % 360;
      glow += (speed - glow) * 0.15;
      const col = `hsl(${Math.round(hue)}, 85%, 60%)`;
      dot.style.background = col;
      dot.style.color = col;
      inner.style.color = col;
      inner.style.boxShadow = `0 0 ${glow * 0.7}px ${col}`;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      if (speed > 7 && Math.random() < 0.65) spawnSpark(mx, my, col, speed);
      requestAnimationFrame(loop);
    })();

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button")) ring.classList.add("is-hot");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button")) ring.classList.remove("is-hot");
    });
  }

  /* ---------- Start ---------- */
  function init() {
    lang = read("lang", ["de", "en"], "de");
    setTheme(read("theme", ["dark", "light"], "dark"));
    renderAll();

    $("#langToggle").addEventListener("click", () => setLang(lang === "de" ? "en" : "de"));
    $("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });

    initReveal();
    initScrollSpy();
    initMenu();
    initCursor();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
