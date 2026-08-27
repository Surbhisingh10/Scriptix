document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("hidden") === false;
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.querySelector(".material-symbols-outlined").textContent = isOpen ? "close" : "menu";
    });
  }

  // Core Capabilities tabs. First tab/panel renders visible by default in
  // the HTML, so this only handles switching, not initial visibility.
  document.querySelectorAll(".capability-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".capability-tab").forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      const target = tab.dataset.tab;
      document.querySelectorAll(".capability-panel").forEach((panel) => {
        panel.classList.toggle("hidden", panel.dataset.panel !== target);
      });
    });
  });

  // Blog listing: category filter + pagination (3 posts per page).
  // Every card ships visible in the HTML, so a JS failure just means no
  // filtering/paging rather than a blank page.
  const blogGrid = document.getElementById("blog-grid");
  const blogPagination = document.getElementById("blog-pagination");
  if (blogGrid && blogPagination) {
    const PER_PAGE = 3;
    const cards = Array.from(blogGrid.querySelectorAll("[data-category]"));
    const filterButtons = Array.from(document.querySelectorAll(".blog-filter-btn"));
    let activeFilter = "all";
    let currentPage = 1;

    function filteredCards() {
      return activeFilter === "all" ? cards : cards.filter((c) => c.dataset.category === activeFilter);
    }

    function renderPagination(totalPages) {
      blogPagination.innerHTML = "";
      if (totalPages <= 1) return;

      const prev = document.createElement("button");
      prev.type = "button";
      prev.className = "blog-page-btn";
      prev.setAttribute("aria-label", "Previous page");
      prev.disabled = currentPage === 1;
      prev.innerHTML = '<span class="material-symbols-outlined">arrow_back</span>';
      prev.addEventListener("click", () => {
        currentPage = Math.max(1, currentPage - 1);
        render();
      });
      blogPagination.appendChild(prev);

      for (let page = 1; page <= totalPages; page++) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "blog-page-btn" + (page === currentPage ? " is-active" : "");
        if (page === currentPage) btn.setAttribute("aria-current", "page");
        btn.textContent = String(page);
        btn.addEventListener("click", () => {
          currentPage = page;
          render();
        });
        blogPagination.appendChild(btn);
      }

      const next = document.createElement("button");
      next.type = "button";
      next.className = "blog-page-btn";
      next.setAttribute("aria-label", "Next page");
      next.disabled = currentPage === totalPages;
      next.innerHTML = '<span class="material-symbols-outlined">arrow_forward</span>';
      next.addEventListener("click", () => {
        currentPage = Math.min(totalPages, currentPage + 1);
        render();
      });
      blogPagination.appendChild(next);
    }

    function render() {
      const matches = filteredCards();
      const totalPages = Math.max(1, Math.ceil(matches.length / PER_PAGE));
      if (currentPage > totalPages) currentPage = totalPages;
      const start = (currentPage - 1) * PER_PAGE;
      const visible = new Set(matches.slice(start, start + PER_PAGE));

      cards.forEach((card) => {
        card.classList.toggle("hidden", !visible.has(card));
      });

      renderPagination(totalPages);
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        currentPage = 1;
        filterButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
        render();
      });
    });

    render();
  }

  // Scroll-reveal animation, progressively enhanced.
  // Content is visible by default (see input.css); only once we know
  // IntersectionObserver works do we switch to the animate-in state.
  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal-item").forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index, 4) * 0.1}s`;
      observer.observe(item);
    });

    const timelineLine = document.getElementById("timeline-line");
    if (timelineLine) observer.observe(timelineLine);
  }
});
