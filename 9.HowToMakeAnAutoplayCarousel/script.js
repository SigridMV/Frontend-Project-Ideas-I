const carousel = document.querySelector(".carousel");
const carouselSlides = document.querySelector(".carousel-slides");
const slides = document.querySelectorAll(".carousel img");

let currentSlide = 0;
const slideWidth = carousel.clientWidth; // Ancho de un slide

function showSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  carouselSlides.style.transition = "transform 0.8s ease-in-out";
  carouselSlides.style.transform = `translateX(-${
    currentSlide * slideWidth
  }px)`;
}

setInterval(showSlide, 3000);

carousel.addEventListener("transitionend", () => {
  if (currentSlide === slides.length - 1) {
    carouselSlides.style.transition = "none";
    currentSlide = -1; // Para que la próxima transición se muestre en el índice 0
    carouselSlides.style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;
  }
});
