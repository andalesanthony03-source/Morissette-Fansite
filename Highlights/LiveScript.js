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

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("show");
    document.querySelector(".menu-toggle").textContent = "☰";
  });
});

  const button = document.querySelectorAll(".toggle-btn");

  button.forEach(btn => {
    btn.addEventListener("click", () => {

      const targetId = btn.dataset.target;
      const target = document.getElementById(targetId);

      if (!target) {
        console.log("Target not found:", targetId);
        return;
      }

      target.classList.toggle("hidden");
      btn.classList.toggle("active");

    });
  })





















document.addEventListener("DOMContentLoaded", () => {
const performances = {

ember: [
    {
      title: "Gusto Ko Nang Bumitaw (EMBER Live in Araneta)",
      videoId: "dyHxJCSJ5KE",
      description: "EMBER Live in Araneta"
    },
    {
      title: "Panaginip x Throwback (EMBER Live in Araneta)",
      videoId: "0zWBrx-YB8Y",
      description: "EMBER performance mashup"
    },
     {
    title: "Imagine More (EMBER Live in Araneta)",
    videoId: "yykQzOTvrAY",
    description: "EMBER Live in Araneta"
  },
  {
    title: "Will You Stay (EMBER Live in Araneta)",
    videoId: "1Ha6vU09j6Q",
    description: "EMBER Live in Araneta"
  },
  {
    title: "Pangarap Ko Ang Ibigin Ka x Diamante (EMBER Live in Araneta)",
    videoId: "Mh7cRpRSAd0",
    description: "EMBER Live in Araneta"
  },
  {
    title: "Ang Paghuwat (EMBER Live in Araneta)",
    videoId: "Rnrjk_ygxhc",
    description: "EMBER Live in Araneta"
  },
  {
    title: "Secret Love Song (EMBER Live in Araneta)",
    videoId: "nemgWi1FCFg",
    description: "EMBER Live in Araneta"
  },
  {
    title: "Wishing Well (EMBER Live in Araneta)",
    videoId: "Fq21uo71iHg",
    description: "EMBER Live in Araneta"
  },
  {
    title: "Best of My Love x Lil Boo Thang (EMBER Live in Araneta)",
    videoId: "BOfTVGdWnr8",
    description: "EMBER Live in Araneta"
  },
  {
    title: "Halik x Ang Huling El Bimbo (EMBER Live in Araneta)",
    videoId: "msi9KeBmUis",
    description: "EMBER Live in Araneta"
  }
  ],

  signature: [
      {
    title: "Love You Still (Sunset Version)",
    videoId: "VpeD3hXK_Jc",
    description: "Sunset Version"
  },
    
  {
    title: "Love You Still (Music Video)",
    videoId: "wi6J69NaLkA",
    description: "Music Video"
  },
  {
    title: "Phoenix (Music Video)",
    videoId: "RJ8Hrl0uqkQ",
    description: "Music Video"
  },
  {
    title: "Trophy (Live Performance)",
    videoId: "OZtcIE-qmJ0",
    description: "Live Performance"
  },
   {
    title: "Mirror (Live)",
    videoId: "izlk7SsKwuA",
    description: "Live Performance"
  },
  {
    title: "Love You Still (Live)",
    videoId: "kpoKV1kzQUY",
    description: "Live Performance"
  },
  {
    title: "Will You Stay (Live)",
    videoId: "wDz6QflAEU4",
    description: "Live Performance"
  },
  {
    title: "Phoenix (Live)",
    videoId: "CA0H4fD0kG4",
    description: "Live Performance"
  },
  {
    title: "Trophy (Lyric Visualizer)",
    videoId: "sakq41ZEYEo",
    description: "Lyric Visualizer"
  },
  {
    title: "Mirror (Lyric Visualizer)",
    videoId: "LYh4MKmljv0",
    description: "Lyric Visualizer"
  },
  {
    title: "Will You Stay (Lyric Visualizer)",
    videoId: "dz4qs7dvAIQ",
    description: "Lyric Visualizer"
  },
  {
    title: "Love You Still (Lyric Video)",
    videoId: "_TjrsMIXAJY",
    description: "Lyric Video"
  },

  ],

  wishbus: [
    {
      title: "Akin Ka Na Lang",
      videoId: "p2FXQgtmPDw",
      description: "One of Morissette’s most iconic Wish Bus performances."
    },
    {
      title: "Against All Odds",
      videoId: "KTSKIGeqk0s",
      description: "A stunning live cover showing her vocal control and range."
    },
       {
      title: "Secret Love Song (Little Mix cover) - Wish 107.5 Bus",
      videoId: "vqcxM7dSJtw",
      description: "Live on Wish 107.5 Bus"
    },
     {
      title: "Shine",
      videoId: "JiKlVfrF79c",
      description: "A heartfelt emotional performance with signature vocals."
    },
      {
    title: "Di Mapaliwanag",
    videoId: "zyOW0v0IQps",
    description: "Live Performance"
  },
  {
    title: "Gusto Ko Nang Bumitaw",
    videoId: "cpytykThPdQ",
    description: "Live Performance"
  },
  {
    title: "Never Enough",
    videoId: "fjn7X6ywq90",
    description: "Live Performance"
  },
  {
    title: "Panaginip",
    videoId: "C__dmRFiuvY",
    description: "Live Performance"
  },
  {
    title: "Naririnig Mo Ba",
    videoId: "nrQym0NsSRA",
    description: "Live Performance"
  },
  {
    title: "You and I",
    videoId: "kPu8g93EuNc",
    description: "Live Performance"
  },
  {
    title: "Mahal Naman Kita",
    videoId: "yu3n-fMqHTY",
    description: "Live Performance"
  },
  {
    title: "Chandelier",
    videoId: "oA5oZ-8HFhQ",
    description: "Live Performance"
  },
  {
    title: "Throwback",
    videoId: "Ba05VvQM8wM",
    description: "Live Performance"
  },
  {
    title: "A Whole New World",
    videoId: "jG-ZIQCQvEI",
    description: "Live Performance"
  },
  {
    title: "Finally Found Someone",
    videoId: "HnWTGckONtQ",
    description: "Live Performance"
  }
 
     
  ],

  broadway: [
      {
    title: "My Days",
    videoId: "pyQv3KUWNU8",
    description: "Live Performance"
  },
    {
    title: "Home (Diana Ross cover)",
    videoId: "bFgP4-YhdyA",
    description: "Live on Stages Sessions"
  },
  {
    title: "Memory (Barbra Streisand cover)",
    videoId: "YQ8bJv7P3zQ",
    description: "Live on Stages Sessions"
  },
  {
    title: "Someone Like You (Frank Wildhorn cover)",
    videoId: "xkEi7bJ2brI",
    description: "Live on Stages Sessions"
  },
  {
    title: "She Used To Be Mine (Sara Bareilles cover)",
    videoId: "CCoUfT_oXko",
    description: "Live on Stages Sessions"
  },
  {
    title: "I'd Give My Life For You (Lea Salonga cover)",
    videoId: "DJbCze67eQc",
    description: "Live on Stages Sessions"
  },
  {
    title: "Defying Gravity (Idina Menzel cover)",
    videoId: "vuxU4ROGxRk",
    description: "Live on Stages Sessions"
  }

  ],

  pandemiCovers: [
    {
      title: "Akin Ka Na Lang",
      videoId: "xyp6fZ3gJVA",
      description: "Wish Bus Performance"
    },
    {
      title: "Never Enough",
      videoId: "ie5mrbJannA",
      description: "Live Cover Performance"
    },

  ],

  viral: [
    {
      title: "Akin Ka Na Lang",
      videoId: "xyp6fZ3gJVA",
      description: "Wish Bus Performance"
    },
    {
      title: "Never Enough",
      videoId: "ie5mrbJannA",
      description: "Live Cover Performance"
    },

  ]

};




/* FLATTEN ALL VIDEOS (IMPORTANT FIX) */
const allVideos = Object.values(performances).flat();

const slideshow = document.getElementById("slideshow");
const dotsContainer = document.getElementById("dots");

/* CREATE SLIDES */
allVideos.forEach((perf, i) => {

  slideshow.innerHTML += `
    <a href="https://www.youtube.com/watch?v=${perf.videoId}"
       target="_blank"
       class="perf-slide fade ${i === 0 ? "active" : ""}">

      <img src="https://img.youtube.com/vi/${perf.videoId}/maxresdefault.jpg">

      <div class="video-title">
        <h3>${perf.title}</h3>
      </div>
    </a>
  `;


});




const slides = document.querySelectorAll(".perf-slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateDots(i) {
  dots.forEach(dot => dot.classList.remove("active"));

  const total = slides.length;

  let activeDot;

  if (i === 0) {
    activeDot = document.querySelector('[data-pos="start"]');
  } 
  else if (i === total - 1) {
    activeDot = document.querySelector('[data-pos="end"]');
  } 
  else {
    activeDot = document.querySelector('[data-pos="middle"]');
  }

  if (activeDot) activeDot.classList.add("active");
}

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");

  updateDots(i);
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 4000);

showSlide(index);








/* RENDER FUNCTION */
function renderList(containerId, list) {
  const container = document.getElementById(containerId);

  container.innerHTML = list.map(item => `
    <a href="https://www.youtube.com/watch?v=${item.videoId}"
       target="_blank"
       class="performance-item">

      <img 
        src="https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg"
        alt="${item.title}"
        onerror="this.src='https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg'"
      >

      <div class="performance-info">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>

    </a>
  `).join("");
}

/* LOAD BOTH SECTIONS */
renderList("ember-list", performances.ember);
renderList("wishbus-list", performances.wishbus);
renderList("signature-list", performances.signature);
renderList("viral-list", performances.viral);
renderList("broadway-list", performances.broadway);
renderList("pandemiCovers-list", performances.pandemiCovers);








/* =========================
   SWIPE (MOBILE)
========================= */
let startX = 0;
let endX = 0;

slideshow.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slideshow.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  let diff = startX - endX;

  if (diff > 50) {
    nextSlide(); // swipe left
  }

  if (diff < -50) {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index); // swipe right
  }
});


});



























