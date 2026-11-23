// Ano atual no footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Efeito de digitação leve
(function () {
  const el = document.getElementById("typedText");
  if (!el) return;

  const phrases = [
    "Estudante de ADS",
    "Aprendendo C e Python",
    "Curioso por tecnologia",
    "Em busca de evolução"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeout;

  function type() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === current.length) {
      speed = 1800; // pausa no final
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 400;
    }

    timeout = setTimeout(type, speed);
  }

  // Só inicia se o usuário não preferiu movimento reduzido
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    type();
  } else {
    el.textContent = phrases[0];
  }
})();

// Fecha o menu mobile ao clicar em um link
document.querySelectorAll("#navbarContent .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const collapse = document.getElementById("navbarContent");
    if (collapse && collapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(collapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});
