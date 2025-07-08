// script.js
const whispers = [
  "Your name dances in the stars tonight.",
  "Every silence between us speaks volumes.",
  "The moon remembers your touch.",
  "In another life, I would still find you.",
  "Love is the poetry of the universe."
];

function newWhisper() {
  const quote = document.getElementById("quote");
  const random = whispers[Math.floor(Math.random() * whispers.length)];
  quote.textContent = random;
}
// script.js ထဲမှာ ဒီ function ကိုထပ်ထည့်ပါ
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
