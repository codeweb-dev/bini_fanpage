// js/menu.js
import { socialMediaIcons, menuInformation } from "./details.js";

export function setupMenu() {
  const menuBtn = document.getElementById("menu_btn");
  const menuText = document.getElementById("menu_text");
  const menuCard = document.getElementById("menuCard");
  const overlay = document.getElementById("overlay");

  menuBtn.addEventListener("click", () => {
    toggleMenu();
  });

  createMenuCard();
}

function toggleMenu() {
  const menuBtn = document.getElementById("menu_btn");
  const menuText = document.getElementById("menu_text");
  const menuCard = document.getElementById("menuCard");
  const overlay = document.getElementById("overlay");

  // Ensure any fadeOut animation is removed before toggling
  menuCard.classList.remove("animate-fadeOut");

  menuBtn.classList.remove("animate-fadeIn");
  overlay.classList.remove("animate-fadeIn");
  menuText.classList.remove("animate-fadeIn");
  void menuBtn.offsetWidth;

  if (menuCard.classList.contains("hidden")) {
    menuBtn.innerHTML =
      '<i class="fa-solid fa-xmark text-2xl text-white cursor-pointer"></i>';
    menuBtn.classList.add("animate-fadeIn");
    menuCard.classList.remove("hidden");
    menuCard.classList.add("animate-rightToLeft");
    overlay.classList.remove("hidden");
    overlay.classList.add("block");
    overlay.classList.add("animate-fadeIn");
    menuText.textContent = "Close";
    menuText.classList.add("animate-fadeIn");
  } else {
    menuBtn.innerHTML =
      '<i class="fa-solid fa-bars text-2xl text-white cursor-pointer"></i>';
    menuBtn.classList.add("animate-fadeIn");
    menuCard.classList.add("hidden");
    menuCard.classList.add("animate-fadeIn");
    overlay.classList.add("hidden");
    overlay.classList.add("none");
    overlay.classList.add("animate-fadeIn");
    menuText.textContent = "Open";
    menuText.classList.add("animate-fadeIn");
  }
}

function createMenuCard() {
  const card = document.getElementById("menuCard");
  const cardMenu = `
    <ul class="flex gap-4 flex-col">
      ${Object.values(menuInformation)
        .map(
          (information) => `
            <li class="transition-all duration-300 ease-in-out cursor-pointer hover:ml-5" data-section="${information.url}">
              ${information.name}<i class="fa-solid fa-arrow-right-long text-sm ml-5"></i>
            </li>`
        )
        .join("")}
    </ul>
    <div class="bg-gray-100 rounded-xl shadow-lg p-4 flex items-center gap-4 w-full max-w-md mt-5">
      <img src="picture/mobile_bg_view.webp" alt="Album Art" class="w-[100px] h-[100px] object-cover rounded-lg">
      <div class="flex flex-col flex-grow">
        <p class="text-xs text-gray-500">BINI ph</p>
        <h2 id="textMusicInfo" class="text-lg font-bold text-gray-900">Cherry On Top</h2>
        <div class="flex items-center gap-2 mt-2">
          <span id="current-time" class="text-xs text-gray-500 w-[50px]">00:00</span>
          <input id="seek-bar" type="range" class="flex-grow appearance-none bg-gray-300 h-1 rounded-full" value="0">
        </div>
        <div class="flex items-center justify-between mt-4">
          <button id="restart-btn" class="text-gray-500 hover:text-gray-900">
            <i class="fa-solid fa-arrow-rotate-left"></i>
          </button>
          <button id="mute-unmute-btn" class="text-gray-500 hover:text-gray-900">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-5 mt-10">
      ${Object.values(socialMediaIcons)
        .map(
          (iconClass) => `
            <div class="w-10 h-10 border border-black rounded-full flex items-center justify-center">
              <a href="https://www.facebook.com/BINIph.official" target="_blank">
                <i class="${iconClass} text-xl text-black cursor-pointer"></i>
              </a>
            </div>`
        )
        .join("")}
    </div>
  `;
  card.innerHTML = cardMenu;

  // Add event listeners to each menu item for navigation
  const menuItems = card.querySelectorAll("li[data-section]");
  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const sectionId = event.currentTarget.getAttribute("data-section");
      if (sectionId) {
        document
          .getElementById(sectionId)
          .scrollIntoView({ behavior: "smooth" });

        // Animate card removal
        card.classList.add("animate-fadeOut");
        setTimeout(() => {
          toggleMenu(); // Close the menu after a short delay
        }, 300); // Delay should match the duration of the fadeOut animation
      }
    });
  });
}
