const celebrateBtn = document.getElementById('celebrateBtn');
const musicBtn = document.getElementById('musicBtn');
const messageBtn = document.getElementById('messageBtn');
const music = document.getElementById('bgMusic');

// Confetti
celebrateBtn.onclick = () => {
  for (let i = 0; i < 100; i++) createConfetti();
}

function createConfetti() {
  const el = document.createElement('div');
  el.classList.add('confetti');
  el.style.left = Math.random() * window.innerWidth + 'px';
  el.style.backgroundColor = randomColor();
  el.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 5000);
}

function randomColor() {
  const colors = ['#ff4f81', '#ffd700', '#42e695', '#00ffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Music Toggle
musicBtn.onclick = () => {
  if (music.paused) music.play();
  else music.pause();
}

// Popup
messageBtn.onclick = () => {
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

// Gallery Slider
let index = 0;
const images = document.querySelectorAll('.gallery img');

setInterval(() => {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 3000);
