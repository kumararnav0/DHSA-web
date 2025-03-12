const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".gallery-item img");
let currentIndex;

images.forEach((img, index) => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = index;
    };
});

document.querySelector(".close").onclick = function () {
    modal.style.display = "none";
};

document.querySelector(".prev").onclick = function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
};

document.querySelector(".next").onclick = function () {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
};

// Zoom functionality
let zoomLevel = 1;

modalImg.onclick = function () {
    zoomLevel = zoomLevel === 1 ? 2 : 1; // Toggle between 1x and 2x zoom
    modalImg.style.transform = `scale(${zoomLevel})`;
};

modalImg.onwheel = function (event) {
    event.preventDefault();
    if (event.deltaY < 0) {
        zoomLevel = Math.min(zoomLevel + 0.1, 3); // Zoom in, max 3x
    } else {
        zoomLevel = Math.max(zoomLevel - 0.1, 1); // Zoom out, min 1x
    }
    modalImg.style.transform = `scale(${zoomLevel})`;
};