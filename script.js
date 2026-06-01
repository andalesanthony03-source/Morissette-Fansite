//Toggle

function toggleMenu(){
  const nav = document.querySelector(".nav-links");
  const toggle = document.querySelector(".menu-toggle");

  nav.classList.toggle("show");

  // change icon
  if(nav.classList.contains("show")){
    toggle.textContent = "✕";
  } else {
    toggle.textContent = "☰";
  }
}

// Hide menu when a nav link is clicked (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("show");
    document.querySelector(".menu-toggle").textContent = "☰";
  });
});

// Reveal

function reveal(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(reveal => {

    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementBottom = reveal.getBoundingClientRect().bottom;

    const visible = 120;

    if(
      elementTop < windowHeight - visible &&
      elementBottom > visible
    ){
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }

  });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// 

history.scrollRestoration = "manual";

window.onload = () => {
  window.scrollTo(0,0);
};



// Preloader 

const preloader = document.getElementById("preloader");
const video = document.getElementById("introVideo");
const soundBtn = document.getElementById("soundBtn");




let preloadCount =
  Number(localStorage.getItem("preloadCount")) || 0;

/* SHOW PRELOADER AGAIN EVERY 2 REFRESHES */
if (preloadCount >= 1) {

  localStorage.setItem("preloadCount", 0);

  // preloader WILL show here → DO NOTHING YET

} else {

  preloader.style.display = "none";
  document.querySelector(".hero").classList.add("show");

  localStorage.setItem(
    "preloadCount",
    preloadCount + 1
  );


}



/* ENABLE SOUND */

soundBtn.addEventListener("click", () => {

  video.muted = false;
  video.volume = 0.2;

  video.play();

  soundBtn.textContent = "Skip Intro";

});

/* ========================================
   PRELOADER CONTROLS
======================================== */

let introStarted = false;

/* BUTTON */

soundBtn.addEventListener("click", () => {

  /* FIRST CLICK = PLAY WITH SOUND */
  if(!introStarted){

    video.muted = false;
    video.volume = 0.2;

    video.play();

    soundBtn.textContent = "Skip Intro";
    soundBtn.classList.add("skip-mode");

    introStarted = true;

  }

  /* SECOND CLICK = SKIP */
  else{

    closePreloader();

  }

});

/* CLOSE FUNCTION */

function closePreloader() {

  video.pause();
  video.currentTime = 0;

  preloader.style.display = "none";

  document.querySelector(".hero").classList.add("show");

     // ✅ PUT IT HERE (THIS IS CORRECT PLACE)
  setTimeout(() => {
    showBirthdayModalIfNeeded();
  }, 300);

}



/* ========================================
   DOUBLE TAP MOBILE
======================================== */

let lastTap = 0;

preloader.addEventListener("touchend", (e) => {

  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;

  if(tapLength < 300 && tapLength > 0){
    closePreloader();
  }

  lastTap = currentTime;

});

/* ========================================
   DOUBLE CLICK DESKTOP
======================================== */

preloader.addEventListener("dblclick", () => {
  closePreloader();
});

/* ========================================
   AUTO CLOSE WHEN VIDEO ENDS
======================================== */

video.addEventListener("ended", () => {
  closePreloader();
});



/* ========================================
   MODAL + CONFETTI SYSTEM
======================================== */




function showBirthdayModalIfNeeded() {

  const modal = document.getElementById("birthdayModal");
  const container = document.querySelector(".confetti-container");

  if (!modal || !container) return;

  const today = new Date();

  const isBirthday =
    today.getFullYear() === 2026 &&
    today.getMonth() === 5 &&
    today.getDate() === 2;

  if (isBirthday) {
    modal.classList.add("show");
    startConfetti(container);
  }
}


let confettiInterval = null;


/* ELEMENTS (safe inside DOM ready) */
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("birthdayModal");
  const closeBtn = document.querySelector(".birthday-close");
  const celebrateBtn = document.querySelector(".birthday-btn");
  const container = document.querySelector(".confetti-container");

  function openModal() {
    modal.classList.add("show");
    startConfetti(container);
  }

  function closeModal() {
    modal.classList.remove("show");
    stopConfetti();
  }

  closeBtn?.addEventListener("click", closeModal);
  celebrateBtn?.addEventListener("click", openModal);

});



/* ========================================
   CONFETTI
======================================== */
function startConfetti(container) {

  if (!container) return;
  if (confettiInterval) return;

  const colors = ["#FFD700", "#FFA500", "#FF4500", "#FF0000"];

  confettiInterval = setInterval(() => {

    for (let i = 0; i < 5; i++) {

      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      const size = Math.random() * 8 + 6;

      confetti.style.width = size + "px";
      confetti.style.height = size + "px";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.top = "-50px";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = (Math.random() * 3 + 3) + "s";

      container.appendChild(confetti);

      confetti.addEventListener("animationend", () => {
        confetti.remove();
      });

    }

  }, 200);
}

function stopConfetti() {

  clearInterval(confettiInterval);
  confettiInterval = null;

  if (confettiContainer) {
    confettiContainer.innerHTML = "";
  }
}



//slideshow

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const totalSlides = slides.length;

let autoSlide;

/* SHOW SLIDE */
function showSlide(index){

  slides.forEach(slide => {
    slide.classList.remove("active", "prev", "next");
  });

  /* ACTIVE */
  slides[index].classList.add("active");

  /* PREVIOUS */
  const prevIndex =
    (index - 1 + totalSlides) % totalSlides;

  slides[prevIndex].classList.add("prev");

  /* NEXT */
  const nextIndex =
    (index + 1) % totalSlides;

  slides[nextIndex].classList.add("next");

  /* DOTS */
  dots.forEach(dot => dot.classList.remove("active"));

  if(index === 0){
    dots[0].classList.add("active");
  }

  else if(index === totalSlides - 1){
    dots[2].classList.add("active");
  }

  else{
    dots[1].classList.add("active");
  }

}

/* NEXT */
function nextSlide(){

  currentSlide =
    (currentSlide + 1) % totalSlides;

  showSlide(currentSlide);

}

/* AUTO SLIDE */
function startAutoSlide(){

  autoSlide = setInterval(() => {
    nextSlide();
  }, 3500);

}

/* RESET TIMER AFTER CLICK */
function resetAutoSlide(){

  clearInterval(autoSlide);
  startAutoSlide();

}

/* INITIAL */
showSlide(currentSlide);
startAutoSlide();

/* TAP LEFT / RIGHT */
const container =
  document.querySelector(".slideshow-container");

container.addEventListener("click", e => {

  const mid =
    container.getBoundingClientRect().left +
    container.offsetWidth / 2;

  if(e.clientX < mid){

    currentSlide =
      (currentSlide - 1 + totalSlides) % totalSlides;

  } else {

    currentSlide =
      (currentSlide + 1) % totalSlides;

  }

  showSlide(currentSlide);

  /* restart timer */
  resetAutoSlide();

});


/* ALL ACCORDION BUTTONS */
const accordionButtons =
  document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

  button.addEventListener("click", () => {

    /* current clicked accordion */
    const currentCard =
      button.closest(".accordion-card");

    /* close others */
    document.querySelectorAll(".accordion-card")
      .forEach(card => {

        if(card !== currentCard){
          card.classList.remove("active");
        }

      });

    /* toggle current */
    currentCard.classList.toggle("active");

  });

});



// IMAGE DATABASE
const slideshows = {

  "performance-slideshow": [
    "Images/STB.jpeg",
  ],

  "music-slideshow": [
    "Images/newmusic.jpeg",
    "Images/AhonMV.jpg",
  ],

  "events-slideshow": [
    "Images/ember.jpg",
    "Images/NTMCover.jpg",
  ]

};


// CREATE SLIDESHOWS
Object.keys(slideshows).forEach(id => {

  const container = document.getElementById(id);

  const images = slideshows[id];

  images.forEach((src, index) => {

    const img = document.createElement("img");

    img.src = src;

    img.classList.add("highlight-slide");

    if(index === 0){
      img.classList.add("active");
    }

    container.appendChild(img);

  });

const slides = container.querySelectorAll(".highlight-slide");

  let current = 0;

  setInterval(() => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

  }, 3000);

});
