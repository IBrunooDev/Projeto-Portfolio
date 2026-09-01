/**
 * main.js — Loading, reveal no scroll e player de música
 */

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);

  const overlay = document.createElement("div");
  overlay.id = "loading-overlay";
  overlay.innerHTML = `
    <div class="loader">
      <div class="loader-bar"></div>
      <p>carregando</p>
    </div>
  `;
  document.body.appendChild(overlay);

  const hideOverlay = () => overlay.classList.add("fade-out");
  window.addEventListener("load", hideOverlay);
  setTimeout(hideOverlay, 700);

  const reveal = () => {
    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.classList.add("is-visible");
      }
    });
  };

  window.addEventListener("scroll", reveal, { passive: true });
  reveal();

  const player = document.createElement("div");
  player.className = "music-player";
  player.innerHTML = `
    <div class="player-info">
      <span class="player-label">Áudio</span>
      <span class="music-name">TKANDZ — Now or Never</span>
    </div>
    <button id="play-pause" class="play-btn" aria-label="Tocar música">▶</button>
    <audio id="bg-audio" loop>
      <source src="src/audio/TKANDZ - NOW OR NEVER.mp3" type="audio/mpeg">
    </audio>
  `;
  document.body.appendChild(player);

  const audio = document.getElementById("bg-audio");
  const playBtn = document.getElementById("play-pause");
  const savedTime = localStorage.getItem("musicTime") || 0;
  const shouldPlay = localStorage.getItem("musicPlaying") === "true";

  audio.currentTime = parseFloat(savedTime);

  const syncButton = () => {
    playBtn.textContent = audio.paused ? "▶" : "❚❚";
  };

  if (shouldPlay) {
    audio.play().catch(() => localStorage.setItem("musicPlaying", "false"));
  }
  syncButton();

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      localStorage.setItem("musicPlaying", "true");
    } else {
      audio.pause();
      localStorage.setItem("musicPlaying", "false");
    }
    syncButton();
  });

  setInterval(() => {
    if (!audio.paused) {
      localStorage.setItem("musicTime", audio.currentTime);
    }
  }, 1000);
});
