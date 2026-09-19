(() => {
  const data = window.MC_DATA;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function categoryName(id) {
    return data.categories.find(item => item.id === id)?.name || "资源";
  }

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[char]));
  }

  function imageBlock(resource, className = "") {
    if (resource.image) {
      return `<img class="card-image ${className}" src="${escapeHTML(resource.image)}" alt="${escapeHTML(resource.title)}" loading="lazy">`;
    }
    return `
      <div class="card-image placeholder ${className}" aria-label="${escapeHTML(resource.title)}">
        <span class="placeholder-cube">◆</span>
        <span>${escapeHTML(categoryName(resource.category))}</span>
      </div>
    `;
  }

  function resourceCard(resource) {
    return `
      <article class="resource-card reveal">
        ${imageBlock(resource)}
        <div class="card-body">
          <div class="eyebrow">${escapeHTML(categoryName(resource.category))} · ${escapeHTML(resource.version)}</div>
          <h3>${escapeHTML(resource.title)}</h3>
          <p>${escapeHTML(resource.description)}</p>
          <div class="tags">
            ${resource.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}
          </div>
          <div class="card-actions">
            <a class="button primary small" href="${resource.download}">下载</a>
            <a class="button ghost small" href="${resource.tutorial}">查看教程</a>
          </div>
        </div>
      </article>
    `;
  }

  function tutorialCard(item) {
    return `
      <a class="tutorial-card reveal" href="${item.url || `tutorials.html#${item.id}`}">
        <div class="tutorial-icon">↗</div>
        <div>
          <div class="eyebrow">${escapeHTML(item.category)} · ${escapeHTML(item.time)}</div>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.description)}</p>
        </div>
      </a>
    `;
  }

  function renderGlobal() {
    const header = $("#site-header");
    if (header) {
      header.innerHTML = `
        <div class="container nav-wrap">
          <a class="brand" href="/index.html" aria-label="返回首页">
            <span>${escapeHTML(data.site.shortName)}</span>
          </a>
          <button class="menu-button" type="button" aria-label="打开菜单" aria-expanded="false">☰</button>
          <nav class="nav" aria-label="主导航">
            <a href="/index.html">首页</a>
            <a href="/launchers.html">启动器</a>
            <a href="/modpacks.html">整合包</a>
            <a href="/resources.html">全部资源</a>
            <a href="/tutorials.html">图文教程</a>
            <a href="/about/we.html">关于</a>
          </nav>
        </div>
      `;
    }

    const footer = $("#site-footer");
    if (footer) {
      footer.innerHTML = `
        <div class="container footer-grid">
          <div>
            <div class="brand footer-brand"><span class="brand-mark">◆</span><span>${escapeHTML(data.site.shortName)}</span></div>
            <p>给朋友与社群玩家准备的 Minecraft 资源与教程站</p>
          </div>
          <div>
            <h4>快速入口</h4>
            <a href="launchers.html">启动器</a>
            <a href="modpacks.html">整合包</a>
            <a href="tutorials.html">教程</a>
          </div>
          <div>
            <h4>站点</h4>
            <a href="resources.html">全部资源</a>
            <a href="index.html#about">关于本站</a>
          </div>
        </div>
        <div class="container footer-bottom">
          <span>© ${new Date().getFullYear()} ${escapeHTML(data.site.name)}</span>
          <span>静态站点 · v${escapeHTML(data.site.version)}</span>
        </div>
      `;
    }

    const menuButton = $(".menu-button");
    const nav = $(".nav");
    if (menuButton && nav) {
      menuButton.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(open));
      });
    }
  }

  function renderHome() {
    const featured = $("#featured-resources");
    if (featured) {
      featured.innerHTML = data.resources.filter(item => item.featured).slice(0, 3).map(resourceCard).join("");
    }

    const tutorialList = $("#featured-tutorials");
    if (tutorialList) {
      tutorialList.innerHTML = data.tutorials.filter(item => item.featured).slice(0, 3).map(tutorialCard).join("");
    }

    const categoryGrid = $("#category-grid");
    if (categoryGrid) {
      categoryGrid.innerHTML = data.categories.map(item => `
        <a class="category-card reveal" href="${item.id === "launcher" ? "launchers.html" : item.id === "modpack" ? "modpacks.html" : "resources.html?category=" + item.id}">
          <span class="category-icon">${item.icon}</span>
          <span>
            <strong>${escapeHTML(item.name)}</strong>
            <small>${escapeHTML(item.description)}</small>
          </span>
          <span class="arrow">→</span>
        </a>
      `).join("");
    }
  }

  function renderListing() {
    const mount = $("#resource-list");
    if (!mount) return;

    const params = new URLSearchParams(location.search);
    const requestedCategory = document.body.dataset.category || params.get("category");

    let resources = data.resources;
    if (requestedCategory) {
      resources = resources.filter(item => item.category === requestedCategory);
    }

    const count = $("#result-count");
    if (count) count.textContent = `${resources.length} 个资源`;

    mount.innerHTML = resources.length
      ? resources.map(resourceCard).join("")
      : `<div class="empty-state">暂时还没有这个分类的资源。</div>`;

    const filter = $("#category-filter");
    if (filter) {
      filter.value = requestedCategory || "all";
      filter.addEventListener("change", () => {
        const value = filter.value;
        location.href = value === "all" ? "resources.html" : `resources.html?category=${encodeURIComponent(value)}`;
      });
    }
  }

  function renderTutorials() {
    const mount = $("#tutorial-list");
    if (!mount) return;
    mount.innerHTML = data.tutorials.map(tutorialCard).join("");
  }

  function setupReveal() {
    const elements = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach(el => observer.observe(el));
  }

  function setActiveNav() {
    const page = location.pathname.split("/").pop() || "index.html";
    $$(".nav a").forEach(link => {
      const target = link.getAttribute("href").split("?")[0];
      if (target === page || (page === "" && target === "index.html")) {
        link.classList.add("active");
      }
    });
  }

  // ===== 新增：渲染 tutorials/ 下独立教程页面的函数 =====
  function renderTutorialDetailPage() {
    const tutorialId = document.body.dataset.tutorialId;
    if (!tutorialId) return;

    const detailData = data.tutorialDetails?.[tutorialId];
    if (!detailData) return;

    const breadcrumbEl = $("#tutorial-breadcrumb-name");
    const titleEl = $("#tutorial-title");
    const subtitleEl = $("#tutorial-subtitle");

    if (breadcrumbEl) breadcrumbEl.textContent = detailData.breadcrumb || detailData.title;
    if (titleEl) titleEl.textContent = detailData.title;
    if (subtitleEl && detailData.subtitle) subtitleEl.textContent = detailData.subtitle;

    const container = $("#tutorial-steps-container");
    if (container && Array.isArray(detailData.steps)) {
      container.innerHTML = detailData.steps.map((step, index) => {
        const stepNum = step.stepNumber || String(index + 1).padStart(2, '0');
        
        const downloadBtnHtml = step.downloadUrl ? `
          <div class="tutorial-step-action">
            <a class="button primary" href="${escapeHTML(step.downloadUrl)}" target="_blank" rel="noopener">
              ${escapeHTML(step.downloadText || "下载相关资源")}
            </a>
          </div>
        ` : '';

        return `
          <article class="tutorial-step-card reveal">
            <div class="tutorial-step-media">
              <img src="${escapeHTML(step.image)}" alt="${escapeHTML(step.title)}" loading="lazy">
            </div>
            <div class="tutorial-step-content">
              <div>
                <span class="step-badge">STEP ${escapeHTML(stepNum)}</span>
              </div>
              <div class="tutorial-step-header">
                <h3>${escapeHTML(step.title)}</h3>
              </div>
              <p>${escapeHTML(step.description)}</p>
              ${downloadBtnHtml}
            </div>
          </article>
        `;
      }).join("");
      setupReveal();
    }
  }

  renderGlobal();
  renderHome();
  renderListing();
  renderTutorials();
  setActiveNav();
  setupReveal();
  renderTutorialDetailPage();
})();
