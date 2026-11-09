const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce) {
  const nodes = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
  );
  nodes.forEach((node) => io.observe(node));
} else {
  document.querySelectorAll(".reveal").forEach((node) => node.classList.add("in-view"));
}
