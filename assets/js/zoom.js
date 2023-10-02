// JavaScript code to handle image zoom
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".portfolio-image");
  const overlay = document.createElement("div");
  overlay.classList.add("zoomed-image");
  overlay.style.display = "none";
  document.body.appendChild(overlay);

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const zoomedImage = new Image();
      zoomedImage.src = image.src;
      overlay.innerHTML = "";
      overlay.appendChild(zoomedImage);
      overlay.style.display = "flex";

      zoomedImage.addEventListener("click", () => {
        overlay.style.display = "none";
      });
    });
  });
});
