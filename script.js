
const typedText = document.getElementById("typedText");
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

const phrases = [
  "Estudante de ADS",
  "Desenvolvedor em formação",
  "Entusiasta de tecnologia"
];

let phraseIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
  const phrase = phrases[phraseIndex];

  typedText.textContent = phrase.substring(0, letterIndex);

  if (!deleting) {
    letterIndex++;

    if (letterIndex > phrase.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    letterIndex--;

    if (letterIndex < 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      letterIndex = 0;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();
