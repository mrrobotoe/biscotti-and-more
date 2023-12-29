document.querySelectorAll("nav a").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("nav-active");
    link.setAttribute("aria-current", "page");
  }
});
