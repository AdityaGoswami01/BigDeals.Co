document.addEventListener("DOMContentLoaded", () => {
  // Toggle Mobile Menu
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.querySelector(".navbar");

  if (mobileMenu && navbar) {
    mobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      navbar.classList.toggle("active");
    });
  }

  // Smooth Scroll for CTA Buttons
  document.querySelectorAll(".hero-cta a, .category-cta").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = button.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Add to Cart Functionality
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productCard = button.closest(".product-card");
      if (productCard) {
        const productTitle = productCard.querySelector(".product-title")?.textContent || "Unknown Product";
        alert(`Added "${productTitle}" to your cart!`);
      }
    });
  });

  // Countdown Timer
  const countdownElement = document.querySelector(".banner-subheadline");
  if (countdownElement) {
    const countdownDate = new Date("2025-12-31T23:59:59").getTime(); // Updated future date

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = countdownDate - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
          Don't miss out on our biggest sale of the season. Shop now and save big!<br>
          <strong>Time left: ${days}d ${hours}h ${minutes}m ${seconds}s</strong>
        `;
      } else {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "The sale has ended. Stay tuned for our next promotion!";
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  }

  // Carousel Functionality (Fixed for Mobile)
  const carousel = document.querySelector(".testimonials-carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  let currentIndex = 0;
  const updateCarousel = () => {
    if (carousel) {
      const offset = -currentIndex * 100;
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(${offset}%)`;
    }
  };

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : testimonialCards.length - 1;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = currentIndex < testimonialCards.length - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });
  }

  // Newsletter Form Submission
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.querySelector(".email-input");
      if (emailInput) {
        const email = emailInput.value.trim();
        if (email) {
          alert(`Thank you for subscribing! We'll send updates to ${email}.`);
          emailInput.value = ""; // Clear the input field
        } else {
          alert("Please enter a valid email address.");
        }
      }
    });
  }

  // Smooth Scroll for Footer Links
  document.querySelectorAll(".footer-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if (targetId === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
