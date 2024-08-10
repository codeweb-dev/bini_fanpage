// js/main.js
import { setupMenu } from "./menu.js";
import { setupCarousel } from "./carousel.js";
import { setupMusicPlayer } from "./musicPlayer.js";
import { setupCarouselDisco } from "./discography.js";
import { setupEvents } from "./events.js";
import { setupGallery } from "./gallery.js";

window.onload = function () {
  setupMenu();
  setupCarousel();
  setupCarouselDisco();
  setupMusicPlayer();
  setupEvents();
  setupGallery();
};
