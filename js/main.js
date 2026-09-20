const navLinks = [...document.querySelectorAll(".site-nav-links a")];
const sectionLinks = navLinks.filter((link) => link.hash);

function setActive(hash) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", Boolean(hash) && link.hash === hash);
  });
}

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => setActive(link.hash));
});

const observed = sectionLinks
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);

if (observed.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActive(`#${visible.target.id}`);
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0.15, 0.35] }
  );

  observed.forEach((section) => observer.observe(section));
}

if (location.hash) setActive(location.hash);
