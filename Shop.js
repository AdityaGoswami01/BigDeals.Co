// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navbar.classList.toggle('active');
});
// Optional: Add any interactive JavaScript functionality here
// Example: Smooth scroll to sections when clicking CTA buttons
document.querySelectorAll('.hero-cta a').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Optional: Add any interactive JavaScript functionality here
// Example: Smooth scroll to sections when clicking category links
document.querySelectorAll('.category-cta').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Optional: Add any interactive JavaScript functionality here
// Example: Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productTitle = button.closest('.product-card').querySelector('.product-title').textContent;
      alert(`Added "${productTitle}" to your cart!`);
    });
  });
  // Optional: Add any interactive JavaScript functionality here
// Example: Countdown timer for the promotion
const countdownDate = new Date("2023-12-31T23:59:59").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.querySelector(".banner-subheadline").innerHTML = `
    Don't miss out on our biggest sale of the season. Shop now and save big on your favorite items.<br>
    <strong>Time left: ${days}d ${hours}h ${minutes}m ${seconds}s</strong>
  `;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".banner-subheadline").innerHTML = "The sale has ended. Stay tuned for our next promotion!";
  }
};

const countdownInterval = setInterval(updateCountdown, 1000);
// Carousel Functionality
const carousel = document.querySelector('.testimonials-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const testimonialCards = document.querySelectorAll('.testimonial-card');

let currentIndex = 0;

const updateCarousel = () => {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
};

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialCards.length - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < testimonialCards.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});
// Form Submission Handling
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  const emailInput = document.querySelector('.email-input');
  const email = emailInput.value.trim();

  if (email) {
    alert(`Thank you for subscribing! We'll send updates to ${email}.`);
    emailInput.value = ''; // Clear the input field
  } else {
    alert('Please enter a valid email address.');
  }
});
// Optional: Add any interactive JavaScript functionality here
// Example: Smooth scroll to top when clicking a link
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  
