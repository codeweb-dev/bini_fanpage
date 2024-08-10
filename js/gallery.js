// js/gallery.js

export function setupGallery() {
  document.querySelectorAll(".gallery-img").forEach((img) => {
    img.addEventListener("click", (e) => {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImage");
      modalImg.src = e.target.src;
      modal.style.display = "flex";
    });
  });

  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("imageModal").style.display = "none";
  });
}
