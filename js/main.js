(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const longSrc = (slug) => `assets/long/${slug}.webp`;
  const shotSrc = (slug, i) => `assets/shots/${slug}-${i}.webp`;
  const shotCount = (slug) => (IMAGES[slug] ? IMAGES[slug].shots : 1);
  const ratio = (slug) => (IMAGES[slug] ? IMAGES[slug].ratio : 1);

  // Featured (live brand) projects first, original order otherwise
  const ordered = PROJECTS
    .map((p, i) => ({ p, i }))
    .sort((a, b) => (b.p.featured === true) - (a.p.featured === true) || a.i - b.i)
    .map((x) => x.p);

  let activeFilter = "all";
  let visible = ordered.slice();

  /* ---------------- Theme ---------------- */
  const root = document.documentElement;
  function storedTheme() {
    try { return localStorage.getItem("aa-theme"); } catch (e) { return null; }
  }
  const saved = storedTheme();
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  $("#themeToggle").addEventListener("click", () => {
    const current = root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("aa-theme", next); } catch (e) { /* storage unavailable */ }
  });

  /* ---------------- Header border on scroll ---------------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Facts ---------------- */
  $("#factProjects").textContent = PROJECTS.length;
  $("#factIndustries").textContent = Object.keys(CATEGORIES).length;
  $("#year").textContent = new Date().getFullYear();

  /* ---------------- Hero wall ---------------- */
  function buildWall() {
    const wall = $("#wall");
    const picks = ordered.filter((p) => p.featured);
    const cols = [[], [], []];
    picks.forEach((p, i) => cols[i % 3].push(p));
    const speeds = ["95s", "120s", "105s"];
    cols.forEach((list, c) => {
      const col = document.createElement("div");
      col.className = "wall-col";
      const track = document.createElement("div");
      track.className = "wall-track";
      track.style.setProperty("--speed", speeds[c]);
      // duplicate the list so the loop is seamless
      [...list, ...list].forEach((p, k) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "wall-item";
        b.setAttribute("aria-label", `Open ${p.name}`);
        if (k >= list.length) { b.tabIndex = -1; b.setAttribute("aria-hidden", "true"); }
        b.innerHTML = `<div class="bar"><i></i><i></i><i></i></div>`;
        const img = new Image();
        img.src = longSrc(p.slug);
        img.alt = "";
        img.decoding = "async";
        img.width = 800;
        img.height = Math.round(800 * ratio(p.slug));
        b.appendChild(img);
        b.addEventListener("click", () => openProject(p.slug));
        track.appendChild(b);
      });
      col.appendChild(track);
      wall.appendChild(col);
    });
  }

  /* ---------------- Filters ---------------- */
  function buildFilters() {
    const list = $("#filters");
    const entries = [["all", { label: "All projects" }], ...Object.entries(CATEGORIES)];
    entries.forEach(([key, cat]) => {
      const count = key === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === key).length;
      if (!count) return;
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.dataset.filter = key;
      btn.setAttribute("aria-pressed", key === activeFilter ? "true" : "false");
      btn.innerHTML =
        (key === "all" ? "" : `<span class="dot" data-cat="${key}"></span>`) +
        `<span>${cat.label}</span><span class="count">${count}</span>`;
      btn.addEventListener("click", () => setFilter(key));
      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  function setFilter(key, scroll) {
    activeFilter = key;
    $$("#filters .chip").forEach((c) => c.setAttribute("aria-pressed", c.dataset.filter === key ? "true" : "false"));
    visible = ordered.filter((p) => key === "all" || p.category === key);
    $$("#grid .project").forEach((card) => {
      card.hidden = !(key === "all" || card.dataset.cat === key);
    });
    const label = key === "all" ? "all industries" : CATEGORIES[key].label.toLowerCase();
    $("#resultLine").textContent = `Showing ${visible.length} ${visible.length === 1 ? "project" : "projects"} in ${label}`;
    const chip = $(`#filters .chip[data-filter="${key}"]`);
    if (chip) {
      const list = $("#filters");
      const left = chip.offsetLeft - list.offsetLeft;
      if (left < list.scrollLeft || left + chip.offsetWidth > list.scrollLeft + list.clientWidth) {
        list.scrollTo({ left: Math.max(0, left - 16), behavior: "smooth" });
      }
    }
    if (scroll) $("#work").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  $$("[data-jump]").forEach((b) => b.addEventListener("click", () => setFilter(b.dataset.jump, true)));

  /* ---------------- Grid ---------------- */
  function tagsHTML(p) {
    const tags = [];
    if (p.featured) tags.push(`<span class="tag tag-live">Live brand</span>`);
    tags.push(`<span class="tag"><span class="dot" data-cat="${p.category}"></span>${CATEGORIES[p.category].label}</span>`);
    tags.push(`<span class="tag">${p.lang}</span>`);
    (p.stack || []).forEach((s) => tags.push(`<span class="tag">${s}</span>`));
    return tags.join("");
  }

  function buildGrid() {
    const grid = $("#grid");
    ordered.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project";
      card.dataset.cat = p.category;
      card.dataset.slug = p.slug;
      card.innerHTML = `
        <div class="frame">
          <div class="frame-bar" aria-hidden="true"><i></i><i></i><i></i><span>${p.name}</span></div>
          <div class="viewport">
            <img src="${longSrc(p.slug)}" alt="Homepage of ${p.name}" loading="lazy" decoding="async" width="800" height="${Math.round(800 * ratio(p.slug))}">
            <span class="scroll-hint">Scrolling the page</span>
          </div>
        </div>
        <div class="project-meta">
          <div class="project-title-row">
            <h3><button class="project-open" type="button">${p.name}</button></h3>
          </div>
          <p class="project-kind">${p.summary}</p>
          <div class="tags">${tagsHTML(p)}</div>
        </div>`;
      card.querySelector(".project-open").addEventListener("click", () => openProject(p.slug));
      grid.appendChild(card);
    });
    sizePreviews();
  }

  // How far each preview scrolls on hover, and how long it takes
  function sizePreviews() {
    $$("#grid .project").forEach((card) => {
      const vp = card.querySelector(".viewport");
      const w = vp.clientWidth;
      const h = vp.clientHeight;
      if (!w) return;
      const imgH = w * ratio(card.dataset.slug);
      const travel = Math.max(0, imgH - h);
      card.style.setProperty("--travel", `-${travel}px`);
      card.style.setProperty("--dur", `${Math.min(14, Math.max(2.5, travel / 380)).toFixed(2)}s`);
    });
  }
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(sizePreviews, 120);
  });

  /* ---------------- Project dialog ---------------- */
  const dlg = $("#projectDialog");
  let current = null;
  let shot = 1;

  function renderShot() {
    const total = shotCount(current.slug);
    const img = $("#stageImg");
    img.src = shotSrc(current.slug, shot);
    img.alt = `${current.name}, section ${shot} of ${total}`;
    $("#stageCount").textContent = `${shot} / ${total}`;
    $$("#thumbs .thumb").forEach((t, i) => t.setAttribute("aria-current", i + 1 === shot ? "true" : "false"));
    const single = total < 2;
    $("#shotPrev").hidden = single;
    $("#shotNext").hidden = single;
    // warm the next image
    if (shot < total) { const pre = new Image(); pre.src = shotSrc(current.slug, shot + 1); }
  }

  function setView(view) {
    $$(".viewer-tabs .chip").forEach((c) => c.setAttribute("aria-pressed", c.dataset.view === view ? "true" : "false"));
    $("#viewSections").hidden = view !== "sections";
    $("#viewFull").hidden = view !== "full";
    if (view === "full") {
      const full = $("#fullImg");
      if (!full.getAttribute("src") || !full.src.endsWith(longSrc(current.slug))) full.src = longSrc(current.slug);
      $("#viewFull").scrollTop = 0;
    }
  }

  function fillDialog(p) {
    current = p;
    shot = 1;
    $("#dlgDot").dataset.cat = p.category;
    $("#dlgCat").textContent = CATEGORIES[p.category].label;
    $("#dlgTitle").textContent = p.name;
    $("#dlgKind").textContent = p.kind;
    $("#dlgDesc").textContent = p.description;
    $("#dlgHighlights").innerHTML = p.highlights.map((h) => `<li>${h}</li>`).join("");

    const rows = [
      ["Industry", `<span class="dot" data-cat="${p.category}"></span>${CATEGORIES[p.category].label}`],
      ["Language", p.lang]
    ];
    if (p.stack && p.stack.length) rows.push(["Built with", p.stack.join(", ")]);
    if (p.featured) rows.push(["Status", "Live brand website"]);
    $("#dlgDetails").innerHTML = rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");

    const actions = [];
    if (p.url) actions.push(`<a class="btn btn-primary" href="${p.url}" target="_blank" rel="noopener">Visit live site</a>`);
    actions.push(`<a class="btn btn-ghost" href="#contact" data-close>Ask for a site like this</a>`);
    $("#dlgActions").innerHTML = actions.join("");
    $("#dlgActions [data-close]").addEventListener("click", () => closeProject());

    const thumbs = $("#thumbs");
    thumbs.innerHTML = "";
    const total = shotCount(p.slug);
    thumbs.hidden = total < 2;
    for (let i = 1; i <= total; i++) {
      const t = document.createElement("button");
      t.type = "button";
      t.className = "thumb";
      t.setAttribute("aria-label", `Show section ${i}`);
      t.innerHTML = `<img src="${shotSrc(p.slug, i)}" alt="" loading="lazy">`;
      t.addEventListener("click", () => { shot = i; renderShot(); });
      thumbs.appendChild(t);
    }
    $("#fullImg").removeAttribute("src");
    $("#fullImg").alt = `Full homepage of ${p.name}`;
    setView("sections");
    renderShot();
    $(".dialog-body").scrollTop = 0;
  }

  function openProject(slug) {
    const p = PROJECTS.find((x) => x.slug === slug);
    if (!p) return;
    fillDialog(p);
    if (!dlg.open) dlg.showModal();
    document.body.style.overflow = "hidden";
    if (location.hash !== `#${slug}`) {
      try { history.replaceState(null, "", `#${slug}`); } catch (e) { /* ignore */ }
    }
  }

  function closeProject() {
    if (dlg.open) dlg.close();
  }

  dlg.addEventListener("close", () => {
    document.body.style.overflow = "";
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { /* ignore */ }
    if (current) {
      const card = $(`#grid .project[data-slug="${current.slug}"] .project-open`);
      if (card && !card.closest("[hidden]")) card.focus({ preventScroll: true });
    }
  });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeProject(); });
  $("#dlgClose").addEventListener("click", closeProject);

  function stepProject(dir) {
    const list = visible.length ? visible : ordered;
    let idx = list.findIndex((p) => p.slug === current.slug);
    if (idx === -1) idx = 0;
    const next = list[(idx + dir + list.length) % list.length];
    openProject(next.slug);
  }
  $("#dlgPrev").addEventListener("click", () => stepProject(-1));
  $("#dlgNext").addEventListener("click", () => stepProject(1));

  function stepShot(dir) {
    const total = shotCount(current.slug);
    shot = ((shot - 1 + dir + total) % total) + 1;
    renderShot();
  }
  $("#shotPrev").addEventListener("click", () => stepShot(-1));
  $("#shotNext").addEventListener("click", () => stepShot(1));
  $$(".viewer-tabs .chip").forEach((c) => c.addEventListener("click", () => setView(c.dataset.view)));

  dlg.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea")) return;
    if (e.key === "ArrowRight") { e.preventDefault(); e.shiftKey ? stepProject(1) : stepShot(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); e.shiftKey ? stepProject(-1) : stepShot(-1); }
  });

  // Swipe between sections on touch screens
  let touchX = null;
  const stage = $(".stage");
  stage.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) stepShot(dx < 0 ? 1 : -1);
    touchX = null;
  });

  // Deep links: #slug opens that project
  function fromHash() {
    const slug = decodeURIComponent(location.hash.slice(1));
    if (slug && PROJECTS.some((p) => p.slug === slug)) openProject(slug);
  }
  window.addEventListener("hashchange", fromHash);

  /* ---------------- Contact ---------------- */
  const toast = $("#toast");
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }
  $("#copyEmail").addEventListener("click", () => {
    const email = $("#emailLink").textContent.trim();
    const fallback = () => {
      const r = document.createRange();
      r.selectNodeContents($("#emailLink"));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      showToast("Email selected, press Ctrl+C to copy");
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => showToast("Email copied"), fallback);
    } else fallback();
  });

  /* ---------------- Init ---------------- */
  buildWall();
  buildFilters();
  buildGrid();
  setFilter("all");
  fromHash();
})();
