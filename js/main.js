/**
 * Jinming Shi · Personal Portfolio
 * 主交互脚本（精简版）
 */
(function () {
  'use strict';
  const D = window.SITE_DATA || {};
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ============================================
     1. 注入导航和页脚
     ============================================ */
  function injectNav() {
    const host = $('header.nav');
    if (!host) return;
    const current = host.getAttribute('data-page') || '';
    const items = (D.nav || []).map((it) => {
      const isActive = current === it.label.toLowerCase();
      return `<a class="nav-link${isActive ? ' active' : ''}" href="${it.href}">${it.label}</a>`;
    }).join('');

    host.innerHTML = `
      <div class="nav-inner">
        <a class="nav-brand" href="index.html">${D.name || 'Jinming Shi'}</a>
        <nav class="nav-links" id="navLinks">${items}</nav>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="7"  x2="21" y2="7"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="17" x2="21" y2="17"/>
          </svg>
        </button>
      </div>
    `;

    // 移动端菜单切换
    const toggle = $('#navToggle');
    const links  = $('#navLinks');
    toggle?.addEventListener('click', () => links.classList.toggle('open'));
    $$('.nav-link').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));
  }

  function injectFooter() {
    const host = $('footer.footer');
    if (!host) return;
    host.innerHTML = `
      <div class="footer-inner">
        <div>${D.footer || ''}</div>
        <div>
          <a href="index.html">Home</a> ·
          <a href="about.html">About</a> ·
          <a href="projects.html">Projects</a>
        </div>
      </div>
    `;
  }

  /* ============================================
     2. 主页 (index.html) 渲染
     ============================================ */
  function renderHome() {
    if (!$('main.home')) return;

    // 注入 hero
    const hero = $('#hero');
    if (hero) {
      hero.innerHTML = `
        <div class="container">
          <div class="hero">
            <div class="greeting">// Hello, I'm</div>
            <h1>${D.name}.</h1>
            <div class="role">
              <span class="dot"></span>
              ${D.role || ''} · ${D.location || ''}
            </div>
            <p class="intro">${D.intro || ''}</p>
            <div class="hero-cta">
              <a class="btn btn-primary btn-arrow" href="projects.html">View projects</a>
              <a class="btn" href="contact.html">Get in touch</a>
            </div>
          </div>
        </div>
      `;
    }

    // 注入精选项目
    const featured = $('#featured');
    if (featured) {
      const items = (D.featured || [])
        .map((name) => (D.projects || []).find((p) => p.name === name))
        .filter(Boolean);
      featured.innerHTML = `
        <div class="container">
          <div class="eyebrow">Selected Work</div>
          <div class="grid grid-2">
            ${items.map(projectCardHTML).join('')}
          </div>
          <div style="margin-top: var(--space-8);">
            <a class="btn btn-arrow" href="projects.html">See all projects</a>
          </div>
        </div>
      `;
    }
  }

  function projectCardHTML(p) {
    const stack = (p.stack || []).map((s) => `<span class="project-tag">${s}</span>`).join('');
    return `
      <a class="project" href="${p.link || '#'}" target="_blank" rel="noopener">
        <div class="project-head">
          <div>
            <div class="project-name">${p.name}</div>
            <div class="project-tagline">${p.tagline || ''}</div>
          </div>
          <div class="project-year">${p.year || ''}</div>
        </div>
        <p class="project-desc">${p.desc || ''}</p>
        <div class="project-stack">${stack}</div>
      </a>
    `;
  }

  /* ============================================
     3. About 页面渲染
     ============================================ */
  function renderAbout() {
    if (!$('main.about')) return;

    const bio = $('#about-bio');
    if (bio && D.bio) {
      bio.innerHTML = D.bio.map((p) => `<p>${p}</p>`).join('');
    }

    const skills = $('#about-skills');
    if (skills && D.skills) {
      skills.innerHTML = D.skills.map((g) => `
        <div class="skill-group">
          <div class="skill-group-label">${g.group}</div>
          <div class="skill-list">
            ${g.items.map((i) => `<span class="skill-item">${i}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    const exp = $('#about-experience');
    if (exp && D.experience) {
      exp.innerHTML = D.experience.map((e) => `
        <div class="timeline-item">
          <div class="timeline-period">${e.period}<br><span class="text-faint">${e.place || ''}</span></div>
          <div class="timeline-content">
            <h3>${e.role}</h3>
            <div class="timeline-org">${e.org}</div>
            <p class="timeline-desc">${e.desc}</p>
          </div>
        </div>
      `).join('');
    }
  }

  /* ============================================
     4. Projects 页面渲染
     ============================================ */
  function renderProjects() {
    const list = $('#projects-list');
    if (!list || !D.projects) return;
    list.innerHTML = `
      <div class="container">
        <div class="grid grid-2">
          ${D.projects.map((p) => `
            <div class="project">
              <div class="project-head">
                <div>
                  <div class="project-name">${p.name}</div>
                  <div class="project-tagline">${p.tagline || ''}</div>
                </div>
                <div class="project-year">${p.year || ''}</div>
              </div>
              <p class="project-desc">${p.desc || ''}</p>
              <div class="project-stack">
                ${(p.stack || []).map((s) => `<span class="project-tag">${s}</span>`).join('')}
              </div>
              <div style="margin-top: var(--space-4); display: flex; justify-content: space-between; align-items: center;">
                <span class="project-status ${p.status || ''}">${p.status || ''}</span>
                <a class="text-faint text-mono" href="${p.link || '#'}" target="_blank" rel="noopener">${p.repo || 'View →'}</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* ============================================
     5. Blog 页面渲染
     ============================================ */
  function renderBlog() {
    const list = $('#blog-list');
    if (!list || !D.posts) return;
    list.innerHTML = `
      <div class="container">
        <div class="post-list">
          ${D.posts.map((p) => `
            <a class="post-item fade-in" href="#">
              <div class="post-meta">
                <span>${p.date}</span>
                <span>·</span>
                <span class="post-tag">${p.tag}</span>
                <span>·</span>
                <span>${p.readTime} min read</span>
              </div>
              <h3 class="post-title">${p.title}</h3>
              <p class="post-excerpt">${p.excerpt}</p>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* ============================================
     6. Contact 页面渲染
     ============================================ */
  function renderContact() {
    const list = $('#contact-list');
    if (!list || !D.socials) return;
    const initial = (s) => (s[0] || '').toUpperCase();
    list.innerHTML = `
      <div class="container">
        <div class="contact-grid">
          ${D.socials.map((s) => `
            <a class="contact-item" href="${s.url}" target="_blank" rel="noopener">
              <div class="contact-label">
                <div class="contact-icon">${initial(s.name)}</div>
                <span>${s.name}</span>
              </div>
              <span class="contact-handle">${s.handle}</span>
            </a>
          `).join('')}
        </div>
        <p class="contact-note">
          无论是项目合作、技术讨论，还是单纯想打声招呼 —— 欢迎随时联系。
          我通常在 24 小时内回复。
        </p>
      </div>
    `;
  }

  /* ============================================
     7. 滚动揭示
     ============================================ */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      $$('.fade-in').forEach((el) => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    setTimeout(() => $$('.fade-in').forEach((el) => io.observe(el)), 50);
  }

  /* ============================================
     启动
     ============================================ */
  function boot() {
    injectNav();
    injectFooter();
    renderHome();
    renderAbout();
    renderProjects();
    renderBlog();
    renderContact();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
