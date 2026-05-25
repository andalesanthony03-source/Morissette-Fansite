let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
  // show only current slide
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
    slide.classList.add('fade');
  });

  // update 3-dot indicator
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

// initial display
showSlide(currentSlide);

// tap/click navigation
const container = document.querySelector('.slideshow-container');
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