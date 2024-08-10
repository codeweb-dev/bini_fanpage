// js/carousel.js
import { artists, socialMediaIcons } from "./details.js";

let currentIndex = 0;

export function setupCarousel() {
  createArtistCards();
  showArtist(currentIndex);

  document.getElementById("prev-button").addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : artists.length - 1;
    showArtist(currentIndex);
  });

  document.getElementById("next-button").addEventListener("click", function () {
    currentIndex = currentIndex < artists.length - 1 ? currentIndex + 1 : 0;
    showArtist(currentIndex);
  });
}

function createArtistCards() {
  const carousel = document.getElementById("carousel");
  artists.forEach((artist, index) => {
    const socialIcons = Object.keys(artist.social)
      .map((platform, i) => {
        const iconClass = socialMediaIcons[platform];
        const delay = i * 0.1;
        return `
        <a href="${artist.social[platform]}" target="_blank">
          <div class="w-10 h-10 flex items-center justify-center rounded-full bg-none border-2 border-white lg:border-black lg:border z-50 hover:bg-[#219ebc] hover:border-[#219ebc] transition duration-300 ease-in-out animate-moveUp" style="animation-delay: ${delay}s;">
            <i class="${iconClass} text-xl text-white cursor-pointer lg:text-black"></i>
          </div>
        </a>`;
      })
      .join("");

    const isAbout = artist.name === "About";
    const mikhamot = artist.fullName === "Ang sarap ng kopiko,";
    const mikhamot_dab = artist.dob === "Salamin salamin sa takdang panahon";

    const artistCard = `
    <div class="artist-card relative overflow-hidden flex justify-around w-full lg:px-56 lg:mt-10 ${
      index !== currentIndex ? "hidden" : ""
    } relative" id="artist-card-${index}">
          <img src="${
            artist.image
          }" class="grayscale rounded-xl transition-transform duration-500 hover:scale-110 animate-fadeIn w-full lg:w-[500px] lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-none lg:rounded-br-none" alt="${
      artist.name
    } Picture">
          <div class="absolute top-5 left-2 w-full px-4 transition-transform duration-500 animate-slideInFromTop lg:hidden">
            <h2 class="text-white w-fit underline decoration-sky-500 truncate text-[#219ebc] font-black">
              ${
                isAbout
                  ? `<span>${artist.name}</span>`
                  : `BINI <span class="text-white">${artist.name}</span>`
              }
            </h2>
          </div>
          <div class="absolute bottom-16 left-0 w-full px-4 opacity-0 transition-opacity duration-500 artist-info lg:hidden" id="artist-info-${
            artist.name
          }">
            <div class="text-white lg:text-black">
              ${
                isAbout
                  ? `<p class="text-sm p-2 truncate">${artist.disc}</p>`
                  : mikhamot
                  ? artist.fullName
                  : `<span class="font-black">Full Name : </span>${artist.fullName}`
              }
            </div>
            ${
              isAbout
                ? ""
                : mikhamot_dab
                ? `<span class="text-white">${artist.dob}</span>`
                : `<h2 class="text-white lg:text-black"><span class="font-black">Date of Birth : </span>${artist.dob}</h2>`
            }
          </div>
          <div class="flex items-center gap-3 absolute bottom-5 right-5 lg:hidden">
            ${socialIcons}
          </div>
          <div class="artist-card bg-white lg:rounded-tr-xl lg:rounded-br-xl text-black hidden lg:block w-full p-6 relative">
          <div class="h-[400px] flex flex-col justify-between">
      <div class="artist-header transition-transform duration-500 animate-slideInFromTop p-4">
        <h2 class="artist-name text-3xl w-fit underline decoration-sky-500 truncate text-[#219ebc] font-black">
          ${
            isAbout
              ? `<span>${artist.name}</span>`
              : `BINI <span class="text-black text-gray-400">${artist.name}</span>`
          }
        </h2>
      </div>
      
      <div class="artist-info w-full px-6 py-4 animate-fadeIn transition-opacity duration-500" id="artist-info-${
        artist.name
      }">
        <div class="text-content text-white lg:text-black">
          ${
            isAbout
              ? `<p class="text-sm text-justify">${artist.disc}</p>`
              : mikhamot
              ? artist.fullName
              : `<span class="font-black">Full Name : </span>${artist.fullName}`
          }
        </div>
        ${
          isAbout
            ? ""
            : mikhamot_dab
            ? `<span class="text-white lg:text-black">${artist.dob}</span>`
            : `<h2 class="text-white lg:text-black"><span class="font-black">Date of Birth : </span>${artist.dob}</h2>`
        }
      </div>
      </div>

      <div class="social-icons flex items-center gap-3 absolute bottom-5 right-5">
        ${socialIcons}
      </div>
    </div>
    `;
    carousel.innerHTML += artistCard;
  });
}

function showArtist(index) {
  const carousel = document.getElementById("carousel");
  Array.from(carousel.children).forEach((card, i) => {
    card.classList.toggle("hidden", i !== index);
  });

  document.getElementById("countedIndex").innerHTML = `${currentIndex + 1} / ${
    artists.length
  }`;

  const artistInfo = document.querySelector(
    `#artist-info-${artists[index].name}`
  );
  const artistImage = document.querySelector(`#artist-card-${index} img`);
  const artistName = document.querySelector(`#artist-card-${index} .absolute`);

  artistImage.classList.add("grayscale");
  artistInfo.classList.add("opacity-0");
  artistName.classList.remove("animate-slideInFromTop");

  void artistName.offsetWidth;
  artistName.classList.add("animate-slideInFromTop");

  setTimeout(() => {
    artistImage.classList.remove("grayscale");
    artistInfo.classList.remove("opacity-0");
  }, 500);
}
