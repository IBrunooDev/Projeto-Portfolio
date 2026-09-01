/**
 * navbar.js — Menu mobile e estado ativo da navegação
 */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const current = document.body.dataset.page;

  document.querySelectorAll(".site-nav a[data-nav]").forEach((link) => {
    if (link.dataset.nav === current) {
      link.classList.add("is-active");
    }
  });

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
    });
  });
});
