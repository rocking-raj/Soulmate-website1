let currentSlide = 0;

function nextSlide() {
  currentSlide++;
  document.getElementById('slider').style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function reveal(id) {
  // Hide all heart content first
  const all = ["h1", "h2", "h3", "h4", "h5"];
  all.forEach(x => {
    document.getElementById(x).classList.add("hidden");
  });

  // Show only the clicked one
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














