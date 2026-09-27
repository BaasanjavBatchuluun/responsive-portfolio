(function () {
  "use strict";


  const progressBar = document.querySelector(".scroll-progress");

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));

  const typedTarget = document.getElementById("typedText");
  const fullText =
    "Computer Science student at the University of Debrecen — learning to build the web, one project at a time.";
  let charIndex = 0;

  function typeNext() {
    if (charIndex <= fullText.length) {
      typedTarget.textContent = fullText.slice(0, charIndex);
      charIndex++;
      setTimeout(typeNext, 22);
    }
  }

  typeNext();
})();
