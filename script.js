const button = document.getElementById('celebrateBtn');
const container = document.getElementById('confetti-container');

button.addEventListener('click', () => {
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
});

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.backgroundColor = randomColor();
  confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';

  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

function randomColor() {
  const colors = ['#ff4f81', '#ffd700', '#7fff00', '#00ffff', '#ff7eb3'];
  return colors[Math.floor(Math.random() * colors.length)];
}
