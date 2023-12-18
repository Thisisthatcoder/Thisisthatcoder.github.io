const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;
let slideIndex = 0;

nextBtn.addEventListener('click', () => {
  if (slideIndex < slides.children.length - 1) {
    slideIndex++;
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }
});