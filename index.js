import { songDetails } from "./song-details.js";

const songTitleElement = document.querySelector(".js-song-title");
const songArtistElement = document.querySelector(".js-song-artist");
const songAudioElement = document.querySelector(".js-song-audio");
const songSourceElement = document.querySelector(".js-song-source");

function getSongDetails() {
  const songIndex = Math.floor(Math.random() * songDetails.length);
  const song = songDetails[songIndex];

  songTitleElement.textContent = song.songTitle;
  songArtistElement.textContent = song.artist;
  songAudioElement.src = song.audioSrc;
  songSourceElement.href = song.audioSrc;

  if (song.audioSrc) {
    songAudioElement.play();
  } else {
    console.warn("No audio source available for this song.");
  }
}

getSongDetails();
setInterval(getSongDetails, 30000);
