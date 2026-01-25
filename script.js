let currentSlide = 0;

function nextSlide() {
  currentSlide++;
  document.getElementById('slider').style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function reveal(id) {
  const all = document.querySelectorAll(".heart-content");
  all.forEach(el => el.classList.add("hidden"));

  document.getElementById(id).classList.remove("hidden");
}




function unlock() {
  const pass = document.getElementById('password').value;
  if (pass === '12:17') {
    document.getElementById('secretMessage').classList.remove('hidden');
  } else {
    alert('Wrong password 💔');
  }
}

// Ensure music plays after user interaction (mobile safe)
document.body.addEventListener('click', () => {
  const music = document.getElementById('bgMusic');
  if (music.paused) music.play();
});
















