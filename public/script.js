
function openLetter() {
  const letter = document.getElementById("letter");

  letter.classList.toggle("show");
}

function toggleMusic() {
  const music = document.getElementById("music");

  if (music.paused) {
    music.play().catch(() => {
      alert("Please add your music file first.");
    });
  } else {
    music.pause();
  }
}

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize =
    (15 + Math.random() * 25) + "px";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 400);
