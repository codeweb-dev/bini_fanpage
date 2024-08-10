import { discography } from "./details.js";

let currentIndex = 0;

export function setupCarouselDisco() {
  createDiscoCards();
  showDisco(currentIndex);

  document
    .getElementById("prev-disco-button")
    .addEventListener("click", function () {
      currentIndex =
        currentIndex > 0 ? currentIndex - 1 : discography.length - 1;
      showDisco(currentIndex);
    });

  document
    .getElementById("next-disco-button")
    .addEventListener("click", function () {
      currentIndex =
        currentIndex < discography.length - 1 ? currentIndex + 1 : 0;
      showDisco(currentIndex);
    });
}

function createDiscoCards() {
  const albumCarousel = document.getElementById("albumCarousel");
  albumCarousel.innerHTML = discography
    .map(
      (info, index) =>
        `
        <div class="artist-card relative flex justify-center flex-col lg:flex-row w-full ${
          index !== currentIndex ? "hidden" : ""
        }" id="artist-card-${index}">
            
          <div class="relative">
            <img
              src="${info.img}"
              class="transition-transform duration-500 w-full lg:w-[300px] lg:rounded-tl-lg lg:rounded-bl-lg w-auto rounded-tr-lg rounded-tl-lg lg:rounded-tr-none"
              alt="${info.title}"
            >
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 group lg:hidden transition-all duration-500">
            <a href="https://www.facebook.com/BINIph.official" target="_blank">
              <button class="bg-white text-black text-sm py-2 px-4 rounded-full group-hover:opacity-90 font-black">
                Stream Now
              </button>
            </a>
            </div>
          </div>

          <div class="lg:hidden p-4 bg-white rounded-b-lg">
            <h2 class="text-xl font-semibold text-[#219ebc]">${info.title}</h2>
            <div class="flex items-center justify-between w-full">
              <div class="text-gray-700 mb-4 mt-1">${info.career} • ${
          info.year
        } • <span class="text-sm text-gray-400">${info.songs}</span>
              </div>
              <a href="https://www.facebook.com/BINIph.official" target="_blank">
                <button class="bg-black text-white text-sm py-2 px-4 rounded-full hover:opacity-90 font-black mt-5">
                  More Music
                </button>
              </a>
            </div>
          </div>
            
            <div class="artist-info bg-white rounded-r-lg text-black p-6 w-full max-w-lg hidden lg:block w-[30rem] relative">
                <h2 class="text-2xl font-bold text-[#219ebc] mb-2">${
                  info.title
                }</h2>
                <div class="text-gray-700 mb-4 mt-1">${info.career} • ${
          info.year
        } • <span class="text-sm text-gray-400">${info.songs}</span></div>
            <div class="flex gap-2 items-center absolute bottom-10 right-10 ">
              <a href="https://www.facebook.com/BINIph.official" target="_blank">
                <button class="bg-black text-white text-sm py-2 px-4 rounded-full hover:opacity-70 transition-all duration-500 font-black">
                  Stream Now
                </button>
              </a>
              <a href="https://www.facebook.com/BINIph.official" target="_blank">
                <button class="bg-black text-white text-sm py-2 px-4 rounded-full hover:opacity-70 transition-all duration-500 font-black">
                  More Music 
                </button>
              </a>
            </div>
            </div>
        </div>
    `
    )
    .join("");
}

function showDisco(index) {
  const carousel = document.getElementById("albumCarousel");
  Array.from(carousel.children).forEach((card, i) => {
    card.classList.toggle("hidden", i !== index);
  });

  document.getElementById("countedIndexDisco").textContent = `${index + 1} / ${
    discography.length
  }`;
}
