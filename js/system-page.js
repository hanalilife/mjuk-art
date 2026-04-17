// 平滑滾動，補償固定導覽列高度
  document.querySelectorAll('.tab-nav__item').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      const offset = 80 + 48; // navbar + tab-nav 高度
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // 滾動時自動切換 active
  const sections = [
    { id: 'section-build',  link: '[href="#section-build"]' },
    { id: 'section-search', link: '[href="#section-search"]' },
    { id: 'section-style',  link: '[href="#section-style"]' },
  ];

  function updateActive() {
    const offset = 80 + 48 + 40;
    let current = sections[0].link;
    sections.forEach(({ id, link }) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        current = link;
      }
    });
    document.querySelectorAll('.tab-nav__item').forEach(l => l.classList.remove('active'));
    document.querySelector(current)?.classList.add('active');
  }

  window.addEventListener('scroll', updateActive, { passive: true });