// UPCOMING EVENTS
document.addEventListener("DOMContentLoaded", () => {

 const events = [
  {
  day: "05",
  month: "JUL",
   year: "2026",
   date: "2026-07-05",

  title: "PHILIPPINE SUMMER FESTIVAL LONDON",

  location: "New River Sport & Fitness Centre, London, N22 5QW, United Kingdom",

  description: "Morissette will headline Day 2 of the Philippine Summer Festival London on July 5, 2026, alongside Bailey May, celebrating Filipino music, culture, and food.",

  image: "../Images/philippineSummerFestivalLondon.jpg",

  status: "ON SALE",

  ticketLink: "https://empireevents.uk/events/philippines-summer-festival-2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnCqWfkkYWjNqCeleO9XAqiz4wkFuXVEuxqPk5b8luRlpq8rWlfp7oQAli4oU_aem_m4sFfD6HChHz-cavTFLRcg",

  fullDetails: "Philippine Summer Festival London will take place on July 4–5, 2026 at New River Sport & Fitness Centre in London. Morissette headlines Day 2 on July 5 alongside Bailey May, Kim Last, and other special guests. The festival features live concerts, traditional Filipino games (Palaro), and a Vendor Village offering authentic Filipino food. Ticket prices start at £5 for children, £15 for General Admission, and £80 for the VIP Experience."
},
  {
    day: "13",
    month: "JUN",
   year: "2026",
   date: "2026-06-13",

    title: "EMBER",

    location: "Cache Creek Casino Resort, 14455 CA-16, Brooks, CA 95606, USA",

    description: "Morissette will be performing live at Cache Creek Casino Resort on June 13, 2026 at 8PM.",

    image: "../Images/emberPoster.jpg",

    status: "SOLD OUT",

    ticketLink: "#",

    fullDetails: "EMBER will be held on Saturday, June 13, 2026 at 8PM at Cache Creek Casino Resort in Brooks, California. The event is officially sold out."
  },

  {
  day: "03",
  month: "SEP",
   year: "2026",
    date: "2026-09-03",

  title: "Notebook The Musical",

  location: "Samsung Performing Arts Theater, Circuit Makati",

  description: "Morissette stars in Notebook The Musical with 18 shows running from September 03 to 20, 2026.",

  image: "../Images/NTMMCover.jpg",

  status: "ON SALE",

  ticketLink: "https://premier.ticketworld.com.ph/shows/show.aspx?sh=NOTEBOOK26",

  fullDetails: "Notebook The Musical will run from September 03 to September 20, 2026 at Samsung Performing Arts Theater in Circuit Makati. The production includes 18 performances and tickets are now officially on sale."
}
];


  const container = document.getElementById("eventsContainer");

events.sort((a, b) => new Date(b.date) - new Date(a.date));
  events.forEach(event => {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
      <div class="event-date">
        <span class="day">${event.day}</span>
        <span class="month">${event.month}</span>
      </div>

      <div class="event-details">
        <h3>${event.title}</h3>
        <p class="location">${event.location}</p>

        <span class="status ${event.status.toLowerCase().replace(" ", "-")}">
          ${event.status}
        </span>

        <button class="btn view-btn">View Details</button>
      </div>
    `;

    card.querySelector(".view-btn").addEventListener("click", () => {
      openModal(event);
    });

    container.appendChild(card);
  });

});

// UPDATES
document.addEventListener("DOMContentLoaded", () => {

  const updates = [
    {
      icon: "🔥",
      title: "EMBER RETURNS — AND IT'S ALREADY SOLD OUT!",
      date: "June 13, 2026",
      content: "Morissette's beloved self-produced Araneta concert, EMBER, is making its way to Cache Creek Casino Resort in Brooks, California on June 13, 2026. With acclaimed musical director Troy Laureta returning to the production, excitement soared as the show officially SOLD OUT just weeks after its announcement. Fans are set to relive the magic of one of Morissette's most celebrated concert experiences."
    },
    {
      icon: "🎭",
      title: "THEATER COMEBACK: NOTEBOOK THE MUSICAL",
      date: "September 03–20, 2026",
      content: "After nearly a decade away from musical theater, Morissette returns to the stage as Middle Allie in Notebook The Musical at the Samsung Performing Arts Theater in Circuit Makati. The highly anticipated production marks her first major theater role in years and showcases a new side of her artistry. Fans also got a first glimpse into the musical journey with the release of her heartfelt rendition of 'My Days.'"
    }
  ];

  const container = document.getElementById("updatesContainer");

  updates.forEach(update => {

    const item = document.createElement("div");
    item.classList.add("update-item");

    item.innerHTML = `
      <div class="update-header">
        <span class="update-icon">${update.icon}</span>
        <h3>${update.title}</h3>
      </div>

      <span class="update-date">${update.date}</span>

      <p class="update-text">
        ${update.content}
      </p>
    `;

    container.appendChild(item);

  });

});
// MODAL

function openModal(event) {

  document.getElementById("modalImage").src = event.image;

  document.getElementById("modalTitle").textContent = event.title;

  document.getElementById("modalDate").textContent =
    `${event.month} ${event.day}`;

  document.getElementById("modalLocation").textContent = event.location;

  document.getElementById("modalDescription").textContent = event.description;

  document.getElementById("modalFullDetails").textContent = event.fullDetails;

  const status = document.getElementById("modalStatus");
  status.textContent = event.status;
  status.className = "status " + event.status.toLowerCase().replace(" ", "-");

  const ticket = document.getElementById("modalTicket");

  if (event.status === "SOLD OUT") {
    ticket.textContent = "Sold Out";
    ticket.style.pointerEvents = "none";
    ticket.style.opacity = "0.5";
  } else {
    ticket.textContent = "Buy Tickets";
    ticket.href = event.ticketLink;
  }

  document.getElementById("eventModal").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("eventModal");

  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
