const quotes = [
  { q: "harus semangat terus jangan males-males pokoknya! 💪", sub: "✦jangan suka ngeyel✦" },
];

let lastIdx = -1;

function showQuote(e) {
  let idx;
  do { idx = Math.floor(Math.random() * quotes.length); } while (idx === lastIdx);
  lastIdx = idx;

  const card = document.getElementById('quoteCard');
  card.classList.remove('show');
  void card.offsetWidth; // trigger reflow untuk restart animasi
  document.getElementById('quoteText').textContent = quotes[idx].q;
  document.getElementById('quoteSub').textContent = quotes[idx].sub;
  card.classList.add('show');

  spawnHearts(e.clientX, e.clientY);
}

function triggerUpload() {
  document.getElementById('gifInput').click();
}

function loadGif(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    const img = document.getElementById('gifPreview');
    img.src = ev.target.result;
    img.style.display = 'block';
    document.getElementById('gifPlaceholder').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function spawnHearts(x, y) {
  const emojis = ['💖', '✨', '🌸', '💕', '⭐', '🌺', '🦋'];
  for (let i = 0; i < 8; i++) {
    const el = document.createElement('div');
    el.className = 'burst';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = (x + (Math.random() - 0.5) * 100) + 'px';
    el.style.top  = (y + (Math.random() - 0.5) * 80)  + 'px';
    el.style.animationDelay = (Math.random() * 0.25) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }
}

// Floating petals
const petalBox   = document.getElementById('petals');
const petalEmojis = ['🌸', '✿', '🌺', '💮', '🌷'];

for (let i = 0; i < 12; i++) {
  const p = document.createElement('div');
  p.className   = 'petal';
  p.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
  p.style.left            = Math.random() * 100 + 'vw';
  p.style.animationDuration = (7 + Math.random() * 8) + 's';
  p.style.animationDelay    = -(Math.random() * 10) + 's';
  p.style.fontSize          = (0.8 + Math.random() * 0.8) + 'rem';
  petalBox.appendChild(p);
}
