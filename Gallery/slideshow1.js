// slideshow.js

document.addEventListener('DOMContentLoaded', () => {

  const imagePaths = [
"RANDOM/STB.jpg",
"RANDOM/Phoenix4.jpg",
"RANDOM/Phoenix3.jpg",
"RANDOM/Phoenix2.jpg",
"RANDOM/Phoenix1.jpg",
"RANDOM/hero.jpg",
"RANDOM/ember.jpg",
"RANDOM/newmusic.jpg",
  // add more images here
];

  const container = document.querySelector('.slideshow-container');

  // Dynamically create slide elements
  imagePaths.forEach(src => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide', 'fade');

    const img = document.createElement('img');
    img.src = src;
    img.alt = ""; // optional: add alt text if you want

    slideDiv.appendChild(img);
    container.appendChild(slideDiv);
  });

  // Now select slides and dots
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
      slide.classList.add('fade');
    });

    if (index === 0) {
      dots[0].classList.add('active');
      dots[1].classList.remove('active');
      dots[2].classList.remove('active');
    } else if (index === totalSlides - 1) {
      dots[0].classList.remove('active');
      dots[1].classList.remove('active');
      dots[2].classList.add('active');
    } else {
      dots[0].classList.remove('active');
      dots[1].classList.add('active');
      dots[2].classList.remove('active');
    }
  }

  showSlide(currentSlide);

  container.addEventListener('click', e => {
    const clickX = e.clientX;
    const mid = container.getBoundingClientRect().left + container.offsetWidth / 2;

    if (clickX < mid) {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    } else {
      currentSlide = (currentSlide + 1) % totalSlides;
    }

    showSlide(currentSlide);
  });

});