// js/musicPlayer.js
export function setupMusicPlayer() {
  const audioElement = document.createElement("audio");
  audioElement.id = "background-music";
  audioElement.src = "picture/cherry.mp3";
  audioElement.loop = true;
  document.body.appendChild(audioElement);

  const playPauseButton = document.getElementById("play-pause-btn");
  const muteUnmuteButton = document.getElementById("mute-unmute-btn");
  const restartButton = document.getElementById("restart-btn");
  const seekBar = document.getElementById("seek-bar");
  const currentTimeElem = document.getElementById("current-time");

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
  }

  function updateSeekBar() {
    seekBar.value =
      (audioElement.currentTime / audioElement.duration) * 100 || 0;
    currentTimeElem.textContent = formatTime(audioElement.currentTime);
  }

  audioElement.addEventListener("timeupdate", updateSeekBar);

  seekBar.addEventListener("input", (event) => {
    const seekTo = (event.target.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTo;
  });

  playPauseButton.addEventListener("click", () => {
    if (audioElement.paused) {
      audioElement
        .play()
        .then(() => {
          playPauseButton.innerHTML = `<i class="fa-solid fa-pause text-2xl text-white"></i>`;
        })
        .catch((error) => {
          console.log("Playback failed:", error);
        });
    } else {
      audioElement.pause();
      playPauseButton.innerHTML = `<i class="fa-solid fa-play text-2xl text-white"></i>`;
    }
  });

  muteUnmuteButton.addEventListener("click", () => {
    audioElement.muted = !audioElement.muted;
    muteUnmuteButton.innerHTML = audioElement.muted
      ? `<i class="fa-solid fa-volume-off"></i>`
      : `<i class="fa-solid fa-volume-high"></i>`;
  });

  restartButton.addEventListener("click", () => {
    audioElement.currentTime = 0;
    if (audioElement.paused) {
      audioElement
        .play()
        .then(() => {
          playPauseButton.innerHTML = `<i class="fa-solid fa-pause text-2xl text-white"></i>`;
        })
        .catch((error) => {
          console.log("Playback failed:", error);
        });
    }
  });
}
