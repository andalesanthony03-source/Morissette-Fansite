// Toggle
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












// albums

const albums = {

  phoenix: [
    "PhoenixCollection/Phoenix2.jpg",
    "PhoenixCollection/Phoenix3.jpg",
    "PhoenixCollection/Phoenix4.jpg",
    "PhoenixCollection/IMG_20260527_125858_194.jpg",
    "PhoenixCollection/IMG_20260527_130050_567.jpg",
    "PhoenixCollection/IMG_20260527_130051_612.jpg",
    "PhoenixCollection/Phoenix1.jpg"
  ],

signature: [
  "SignatureCollection/IMG_20260527_125844_451.jpg",
  "SignatureCollection/IMG_20260527_125908_807.jpg",
  "SignatureCollection/IMG_20260527_125819_354.jpg",
  "SignatureCollection/IMG_20260527_125825_569.jpg",
  "SignatureCollection/IMG_20260527_125830_585.jpg"
],

  archive: [
  "PhotoArchive/IMG_20260527_130201_617.jpg",
  "PhotoArchive/IMG_20260527_130205_977.jpg",
  "PhotoArchive/IMG_20260527_130212_159.jpg",
  "PhotoArchive/IMG_20260527_130214_606.jpg",
  "PhotoArchive/IMG_20260527_125807_287.jpg",
  "PhotoArchive/IMG_20260527_125815_466.jpg",
  "PhotoArchive/IMG_20260527_125925_785.jpg",
  "PhotoArchive/IMG_20260527_125935_420.jpg",
  "PhotoArchive/IMG_20260527_125940_026.jpg",
  "PhotoArchive/IMG_20260527_125946_998.jpg",
  "PhotoArchive/IMG_20260527_125952_585.jpg",
  "PhotoArchive/IMG_20260527_130003_053.jpg",
  "PhotoArchive/IMG_20260527_130007_568.jpg",
  "PhotoArchive/IMG_20260527_130013_024.jpg",
  "PhotoArchive/IMG_20260527_130015_494.jpg",
  "PhotoArchive/IMG_20260527_130020_789.jpg",
  "PhotoArchive/IMG_20260527_130123_959.jpg",
  "PhotoArchive/IMG_20260527_130132_174.jpg",
  "PhotoArchive/IMG_20260527_130134_056.jpg",
  "PhotoArchive/IMG_20260527_130139_785.jpg",
  "PhotoArchive/IMG_20260527_130143_486.jpg",
  "PhotoArchive/IMG_20260527_130200_294.jpg"
],

  concerts: [
   "MorissetteIsMade/IMG_20260531_144332_122.jpg",
"MorissetteIsMade/IMG_20260531_144334_693.jpg",
"MorissetteIsMade/IMG_20260531_144338_233.jpg",
"MorissetteIsMade/IMG_20260531_144339_436.jpg",
"MorissetteIsMade/IMG_20260531_144353_475.jpg",
"MorissetteIsMade/IMG_20260531_144509_805.jpg",
"MorissetteIsMade/IMG_20260531_144531_753.jpg",
"MorissetteIsMade/IMG_20260531_145347_322.jpg",
"MorissetteIsMade/IMG_20260531_145348_486.jpg",
  ],
  
  adrian: [
     
    "Adrian/IMG_20260531_144721_799.jpg",
    "Adrian/IMG_20260531_145000_772.jpg",
    "Adrian/IMG_20260531_145129_181.jpg",
    "Adrian/IMG_20260531_145147_480.jpg",
    "Adrian/IMG_20260531_145240_906.jpg",
    "Adrian/20260531_163042.jpg",
"Adrian/20260531_162906.jpg",
"Adrian/20260531_162856.jpg",
"Adrian/20260531_162830.jpg",
"Adrian/IMG_20260531_145234_220.jpg",
  ],

  photoshoot: [
    "OfficialPhotoshoot/IMG_20260531_145000_772.jpg",
    "OfficialPhotoshoot/IMG_20260531_145002_298.jpg",
    "OfficialPhotoshoot/IMG_20260531_145022_474.jpg",
    "OfficialPhotoshoot/IMG_20260531_145023_784.jpg",
    "OfficialPhotoshoot/IMG_20260531_145026_229.jpg",
    "OfficialPhotoshoot/IMG_20260531_145029_042.jpg",
    "OfficialPhotoshoot/IMG_20260531_145030_529.jpg",
    "OfficialPhotoshoot/IMG_20260531_145046_111.jpg",
    "OfficialPhotoshoot/IMG_20260531_145048_123.jpg",
    "OfficialPhotoshoot/IMG_20260531_145049_657.jpg",
    "OfficialPhotoshoot/IMG_20260531_145052_010.jpg",
    "OfficialPhotoshoot/IMG_20260531_145054_182.jpg",
    "OfficialPhotoshoot/IMG_20260531_145056_248.jpg",
    "OfficialPhotoshoot/IMG_20260531_145059_205.jpg",
    "OfficialPhotoshoot/IMG_20260531_145111_110.jpg",
    "OfficialPhotoshoot/IMG_20260531_145219_079.jpg",
    "OfficialPhotoshoot/IMG_20260531_145221_165.jpg",
    "OfficialPhotoshoot/IMG_20260531_145225_172.jpg",
    "OfficialPhotoshoot/IMG_20260531_145226_799.jpg",
    "OfficialPhotoshoot/IMG_20260531_145230_026.jpg",
    "OfficialPhotoshoot/IMG_20260531_145232_566.jpg",
    "OfficialPhotoshoot/IMG_20260531_145234_220.jpg",
    "OfficialPhotoshoot/IMG_20260531_145240_906.jpg",
    "OfficialPhotoshoot/IMG_20260531_145243_948.jpg",
    "OfficialPhotoshoot/IMG_20260531_145246_547.jpg",
    "OfficialPhotoshoot/IMG_20260531_145249_222.jpg",
    "OfficialPhotoshoot/IMG_20260531_145251_049.jpg",
    "OfficialPhotoshoot/IMG_20260531_145254_463.jpg",
    "OfficialPhotoshoot/IMG_20260531_145255_363.jpg",
    "OfficialPhotoshoot/IMG_20260531_145258_140.jpg",
    "OfficialPhotoshoot/IMG_20260531_145259_970.jpg",
    "OfficialPhotoshoot/IMG_20260531_145304_646.jpg",
    "OfficialPhotoshoot/IMG_20260531_145305_151.jpg",
    "OfficialPhotoshoot/IMG_20260531_145307_214.jpg",
    "OfficialPhotoshoot/IMG_20260531_145353_151.jpg",
    "OfficialPhotoshoot/IMG_20260531_145354_675.jpg",
    "OfficialPhotoshoot/IMG_20260531_145356_177.jpg",
    "OfficialPhotoshoot/IMG_20260531_145400_160.jpg",
    "OfficialPhotoshoot/IMG_20260531_145403_432.jpg",
    "OfficialPhotoshoot/IMG_20260531_145405_159.jpg",
    "OfficialPhotoshoot/IMG_20260531_145406_961.jpg",
    "OfficialPhotoshoot/IMG_20260531_145423_747.jpg",
    "OfficialPhotoshoot/IMG_20260531_145443_748.jpg",
    "OfficialPhotoshoot/IMG_20260531_145457_870.jpg",
    "OfficialPhotoshoot/20260531_162856.jpg",
    "OfficialPhotoshoot/20260531_162900.jpg",
    "OfficialPhotoshoot/20260531_162902.jpg",
    "OfficialPhotoshoot/20260531_162906.jpg",
    "OfficialPhotoshoot/20260531_162909.jpg",
    "OfficialPhotoshoot/IMG_20260531_145129_181.jpg",
    "OfficialPhotoshoot/IMG_20260531_145132_752.jpg"
]
};



function openAlbum(albumName){

  const modal = document.getElementById("albumModal");
  const grid = document.getElementById("popupGrid");
  const title = document.getElementById("albumTitle");

  grid.innerHTML = "";

  title.innerText =
    albumName.charAt(0).toUpperCase() + albumName.slice(1);

  albums[albumName].forEach(image => {

    const img = document.createElement("img");

    img.src = image;

    grid.appendChild(img);

  });

  modal.classList.add("active");

  document.body.style.overflow = "hidden";

}



function closeAlbum(){

  document.getElementById("albumModal")
    .classList.remove("active");

  document.body.style.overflow = "auto";

}






// =========================
// FEATURED SLIDESHOW
// =========================
  const featuredImages = [
    ...albums.phoenix,
    ...albums.signature,
    ...albums.archive,
    ...albums.concerts
  ];


const slider = document.querySelector(".featured-slider");

featuredImages.forEach((image, index) => {

  const slide = document.createElement("div");
  slide.classList.add("featured-slide");

  slide.innerHTML = `<img src="${image}">`;

  slider.appendChild(slide);
});

const slides = document.querySelectorAll(".featured-slide");

let current = 0;

function showSlide(index){

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

}

function nextSlide(){
  current = (current + 1) % slides.length;
  showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 4000);



// =========================
// COLLAPSIBLE ALBUMS
// =========================

const wrappers =
  document.querySelectorAll(".album-wrapper");

wrappers.forEach(wrapper => {

  const card =
    wrapper.querySelector(".album-card");

  const content =
    wrapper.querySelector(".album-content");

  card.addEventListener("click", () => {

    const albumName =
      card.dataset.album;

    const images =
      albums[albumName];

    // TOGGLE
    wrapper.classList.toggle("active");

    // LOAD ONLY ONCE
    if(content.innerHTML === ""){

      images.forEach(image => {

        const img =
          document.createElement("img");

        img.src = image;

        content.appendChild(img);

      });

    }

  });

});
