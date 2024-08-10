import { events } from "./details.js";

export function setupEvents() {
  createSetUpTable();
}

function createSetUpTable() {
  const eventsMain = document.getElementById("eventsMain");

  eventsMain.innerHTML = events
    .map(
      (info) => `
        <div class="grid grid-cols-1 md:grid-cols-[1fr,3fr,2fr,auto] gap-4 py-4 border-b border-gray-400 md:mt-3">
          <div class="text-center md:text-left text-sm text-gray-500">${info.date}</div>
          <div class="text-center md:text-left text-lg font-semibold text-gray-800">${info.title}</div>
          <div class="text-center md:text-left text-sm text-gray-500">${info.location}</div>
          <div class="text-center">
            <button class="bg-black text-white text-sm py-2 px-4 rounded-full hover:opacity-70 transition-all duration-500 font-black">
              See Details
            </button>
          </div>
        </div>
      `
    )
    .join("");
}
