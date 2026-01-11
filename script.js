document.addEventListener("DOMContentLoaded", () => {
  initMobileFeatures();
});

let currentSlide = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function updateSlide() {
  slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
  onSlideChange(currentSlide);
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlide();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

// GAME
// NEW HEART GAME (2 TEXT + 3 IMAGES)

// HEART SURPRISE GAME (2 TEXT + 3 IMAGES)

const heartsDiv = document.getElementById("hearts");
// 1. SLIDE LOGIC
let currentSlide = 0;
...
function nextSlide() { ... }
function prevSlide() { ... }

// 2. EFFECTS
function slideHeartBurst() { ... }
function onSlideChange(index) { ... }
function typeText(...) { ... }

// 3. PASSWORD / MUSIC / GAME
function checkPassword() { ... }
function playMusic() { ... }
...

// 4. HEART GAME INIT
if (heartsDiv) {
  ...
}

/* =========================
   📱 SWIPE CODE (ADD HERE)
   VERY BOTTOM OF FILE
========================= */

let startX = 0;
let isSwiping = false;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
  isSwiping = true;
}, { passive: true });

document.addEventListener("touchend", e => {
  if (!isSwiping) return;

  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  isSwiping = false;

  if (Math.abs(diff) > 80) {
    if (diff > 0) {
      nextSlide();   // swipe left
    } else {
      prevSlide();   // swipe right
    }
  }
}, { passive: true });


if (heartsDiv) {
  heartsDiv.innerHTML = ""; // 🔥 removes old hearts completely

  const surprises = [
    { type: "text", content: "💌 You make my world softer." },
    { type: "text", content: "❤️ My favorite place is with you." },
    { type: "image", content: "photos/s1.jpg" },
    { type: "image", content: "photos/s2.jpg" },
    { type: "image", content: "photos/s3.jpg" }
  ];

  // Shuffle order
  surprises.sort(() => Math.random() - 0.5);

  let opened = 0;

surprises.forEach(item => {

    const heart = document.createElement("div");
    heart.className = "heart-box";
    heart.innerHTML = "❤️";

    heart.onclick = () => {
      heart.onclick = null; // open only once
      opened++;
if (opened === surprises.length) {
  alert("💖 You’ve seen all my surprises.");
}


      if (item.type === "text") {
        heart.innerHTML = `<p style="font-size:16px;">${item.content}</p>`;
      } else {
        heart.innerHTML = `<img src="${item.content}">`;
      }
    };

    heartsDiv.appendChild(heart);
  });
}
function checkPassword() {
  const input = document.getElementById("password");
  const secret = document.getElementById("secretMessage");
  const wrong = document.getElementById("wrong");

  if (input.value === "12:17") {
    secret.style.display = "block";
    wrong.innerHTML = "";

    launchFireworks();
    startFloatingHearts();

    // optional auto stop
    setTimeout(stopFireworks, 7000);
    setTimeout(stopFloatingHearts, 7000);
  } else {
    wrong.innerHTML = "Wrong password 😄";
  }
}

let fireworkInterval = null;

function launchFireworks() {
  if (fireworkInterval) return; // prevent double start

  fireworkInterval = setInterval(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5
      }
    });
  }, 600);
}
function stopFireworks() {
  clearInterval(fireworkInterval);
  fireworkInterval = null;
}

let heartInterval = null;

function startFloatingHearts() {
  if (heartInterval) return;

  heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}
function stopFloatingHearts() {
  clearInterval(heartInterval);
  heartInterval = null;
}

function simpleFirework() {
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = "60vh";
    document.body.appendChild(s);

    setTimeout(() => s.remove(), 1500);
  }
}
simpleFirework();
function onSlideChange(index) {
  const lastIndex = document.querySelectorAll(".slide").length - 1;
  if (index === lastIndex) {
    startCelebration();   // fireworks
    startFloatingHearts(); // hearts
  }
}
function startCelebration() {
  for (let i = 0; i < 20; i++) {
    const s = document.createElement("div");
    s.style.position = "fixed";
    s.style.width = "8px";
    s.style.height = "8px";
    s.style.borderRadius = "50%";
    s.style.background = "gold";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.zIndex = "99999";
    document.body.appendChild(s);

    s.animate(
      [
        { transform: "scale(1)", opacity: 1 },
        { transform: "scale(6)", opacity: 0 }
      ],
      { duration: 1200, easing: "ease-out" }
    );

    setTimeout(() => s.remove(), 1200);
  }
}
function onSlideChange(index) {
  const lastIndex = totalSlides - 1;

  if (index === lastIndex) {
    document.body.classList.add("night");
    playMusic();   // 🎶 MUSIC STARTS HERE

    const ft = document.getElementById("finalText");
    if (ft && !ft.dataset.done) {
      ft.dataset.done = "1";
      typeText(ft, "I choose you. Today. Tomorrow. Always. 💍❤️");
    }
  } else {
    document.body.classList.remove("night");
    stopMusic();   // 🔇 MUSIC STOPS HERE
    
    // 🎆 Start fireworks
    startCelebration();

    // ❤️ Start floating hearts
    startFloatingHearts();

  }
}


function updateSlide() {
  const slideWidth = window.innerWidth;
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  slideHeartBurst();
  onSlideChange(currentSlide);
}

function slideHeartBurst() {
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "70vh";
    heart.style.fontSize = "24px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    heart.animate(
      [
        { transform: "translateY(0) scale(1)", opacity: 1 },
        { transform: "translateY(-150px) scale(1.5)", opacity: 0 }
      ],
      {
        duration: 1200,
        easing: "ease-out"
      }
    );

    setTimeout(() => heart.remove(), 1200);
  }
}

function shootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = Math.random() * 40 + "vh";
  star.style.left = "-30vw";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1200);
}
function showProposal() {
  const btn = document.getElementById("proposalBtn");
  if (btn) btn.style.display = "inline-block";
}
setTimeout(showProposal, 3500);
// 🎶 Background Music (SAFE VERSION)

let bgMusic;

document.addEventListener("DOMContentLoaded", () => {
  bgMusic = document.getElementById("bgMusic");
});

function playMusic() {
  if (!bgMusic) return;
  bgMusic.volume = 0.5;
  bgMusic.play().catch(() => {});
}

function stopMusic() {
  if (!bgMusic) return;
  bgMusic.pause();
}
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide(); // swipe left
    } else {
      prevSlide(); // swipe right
    }
  }
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      setTimeout(() => loader.remove(), 600);
    }, 1200);
  }
});

function showProposal() {
  const box = document.getElementById("proposalBox");
  if (box) box.style.display = "block";
}

function sayYes() {
  alert("She said YES 💍❤️");
}
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {
    noBtn.style.left = Math.random() * 100 - 50 + "px";
    noBtn.style.top = Math.random() * 60 - 30 + "px";
  });
}
function initMobileFeatures() {

  /* 📱 SWIPE SUPPORT */
  let startX = 0;

  document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 60) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });

  /* 💍 NO BUTTON ESCAPE */
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.addEventListener("mouseenter", () => {
      noBtn.style.transform =
        `translate(${Math.random() * 100 - 50}px, ${Math.random() * 60 - 30}px)`;
    });
    noBtn.addEventListener("touchstart", () => {
      noBtn.style.transform =
        `translate(${Math.random() * 100 - 50}px, ${Math.random() * 60 - 30}px)`;
    });
  }
}
if (ft && !ft.dataset.done) {
  ft.dataset.done = "1";
  typeText(ft, "I choose you. Today. Tomorrow. Always. 💍❤️");

  setTimeout(showProposal, 3500); // 🔥 REQUIRED
}

















