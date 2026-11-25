// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuToggle.textContent = navLinks.classList.contains("active")
    ? "✕"
    : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// Product details modal
const productModal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");
const modalDone = document.getElementById("modalDone");

const productDescriptions = {
  "Noir Élixir":
    "A bold blend of warm amber and woody notes. A captivating fragrance for unforgettable evenings.",

  "Rose Veil":
    "A beautiful floral fragrance with delicate rose and soft musk. Elegant, romantic and timeless.",

  "Golden Hour":
    "A fresh and radiant blend of citrus and musk. Effortlessly refined for every moment."
};

document.querySelectorAll(".details-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;

    modalTitle.textContent = product;
    document.getElementById("modalDescription").textContent =
      productDescriptions[product];

    productModal.classList.add("show");
    productModal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  productModal.classList.remove("show");
  productModal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);
modalDone.addEventListener("click", closeModal);

productModal.addEventListener("click", event => {
  if (event.target === productModal) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Newsletter demo form
const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();

  formMessage.textContent =
    "Thank you for your interest in VELORA! This is a demo form.";

  newsletterForm.reset();
});