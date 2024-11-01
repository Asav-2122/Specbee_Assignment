const prevButton = document.querySelector(".speakers__carousel-control--prev");
const nextButton = document.querySelector(".speakers__carousel-control--next");
const cardsContainer = document.querySelector(".speakers__cards");

let currentIndex = 0;
const maxVisibleCards = 4;
const totalCards = cardsContainer.children.length;

// Function to update the carousel position
function updateCarousel() {
  const cardWidth = cardsContainer.children[0].offsetWidth + 16; // Card width + gap
  const offset = -(currentIndex * cardWidth);
  cardsContainer.style.transform = `translateX(${offset}px)`;
}

// Function to scroll the carousel
function scrollCarousel(direction) {
  if (direction === "next") {
    currentIndex = Math.min(currentIndex + 1, totalCards - maxVisibleCards); // Prevent overflow
  } else if (direction === "prev") {
    currentIndex = Math.max(currentIndex - 1, 0); // Prevent underflow
  }
  updateCarousel();
}

// Event listeners for carousel controls
prevButton.addEventListener("click", () => scrollCarousel("prev"));
nextButton.addEventListener("click", () => scrollCarousel("next"));

// Handle resizing to recalculate cardWidth
window.addEventListener("resize", updateCarousel);

// Select modal elements
const modal = document.getElementById("speakerModal");
const closeModalButton = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPosition = document.getElementById("modalPosition");
const modalCompany = document.getElementById("modalCompany");
const modalDescription = document.getElementById("modalDescription");

// Sample speaker data (replace with dynamic data if available)
const speakersData = [
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./style/images/speaker1.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence...",
  },
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./style/images/speaker2.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence...",
  },
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./style/images/speaker3.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence...",
  },
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./style/images/speaker4.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence...",
  },
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./style/images/speaker1.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence...",
  },
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./style/images/speaker2.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence...",
  },
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./style/images/speaker3.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence...",
  },
  {
    name: "John Doe",
    position: "Chief Marketing Officer",
    company: "Acme Corp",
    image: "./style/images/speaker4.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence...",
  },
  // Add other speaker data here
];

// Function to open modal with specific speaker data
function openModal(speakerIndex) {
  const speaker = speakersData[speakerIndex];
  modalImage.src = speaker.image;
  modalName.textContent = speaker.name;
  modalPosition.textContent = speaker.position;
  modalCompany.textContent = speaker.company;
  modalDescription.textContent = speaker.description;

  modal.classList.add("modal--visible");
}

// Function to close modal
function closeModal() {
  modal.classList.remove("modal--visible");
}

// Add event listeners to each speaker card
const speakerCards = document.querySelectorAll(".speakers__card");
speakerCards.forEach((card, index) => {
  card.addEventListener("click", () => openModal(index));
});

// Close modal on close button click
closeModalButton.addEventListener("click", closeModal);

// Optional: Close modal on outside click
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
