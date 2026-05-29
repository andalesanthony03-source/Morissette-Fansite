// UPCOMING EVENTS
document.addEventListener("DOMContentLoaded", () => {

 const events = [
  {
    day: "13",
    month: "JUN",

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
  month: "SEPTEMBER",

  title: "Notebook The Musical",

  location: "Samsung Performing Arts Theater, Circuit Makati",

  description: "Morissette stars in Notebook The Musical with 18 shows running from September 03 to 20, 2026.",

  image: "../Images/NTMMCover.jpg",

  status: "ON SALE",

  ticketLink: "https://example.com/tickets",

  fullDetails: "Notebook The Musical will run from September 03 to September 20, 2026 at Samsung Performing Arts Theater in Circuit Makati. The production includes 18 performances and tickets are now officially on sale."
}
];

  const container = document.getElementById("eventsContainer");

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
      text: "🔥 EMBER – SOLD OUT SHOW • Morissette is set to perform live at Cache Creek Casino Resort in Brooks, California on June 13, 2026 at 8:00 PM. The show EMBER is officially SOLD OUT, confirming strong demand and overwhelming fan support. This performance at 14455 CA-16 promises an unforgettable night of music and artistry."
    },
    {
      text: "🎭 NOTEBOOK THE MUSICAL – NOW ON SALE • Morissette returns to the stage in Notebook The Musical, running from September 03 to September 20, 2026 at the Samsung Performing Arts Theater in Circuit Makati. The production features 18 live shows, delivering a heartfelt and powerful theatrical experience. Tickets are now officially ON SALE for one of her most anticipated musical roles."
    }
  ];

  const container = document.getElementById("updatesContainer");

  updates.forEach(update => {
    const item = document.createElement("div");
    item.classList.add("update-item");

    item.innerHTML = `
      <p class="update-text">${update.text}</p>
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