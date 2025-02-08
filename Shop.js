// Example: Update Cart Count
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Function to update cart count
function updateCartCount() {
  cartCount++;
  cartCountElement.textContent = cartCount;
}

// Add event listener to cart icon
document.querySelector('.cart-icon').addEventListener('click', (e) => {
  e.preventDefault();
  updateCartCount();
});

// Search functionality
document.getElementById('search-button').addEventListener('click', () => {
  const searchQuery = document.getElementById('search-input').value;
  if (searchQuery) {
    alert(`You searched for: ${searchQuery}`);
  } else {
    alert('Please enter a search term.');
  }
});
// Example: Add interactivity to the CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
  e.preventDefault();
  alert('You clicked the "Shop Now" button!');
});

// Example: Add interactivity to category buttons
document.querySelectorAll('.category-button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`You clicked the "${e.target.previousElementSibling.textContent}" button!`);
  });
});
// Update Price Range Value
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');

priceRange.addEventListener('input', () => {
  priceValue.textContent = priceRange.value;
});

// Clear Filters
document.getElementById('clear-filters').addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => (checkbox.checked = false));
  priceRange.value = 250;
  priceValue.textContent = 250;
});

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('h3').textContent;
    alert(`Added ${productName} to your cart!`);
  });
});
// Example: Add interactivity to "Read More" links
document.querySelectorAll('.read-more').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`You clicked the "${e.target.previousElementSibling.textContent}" link!`);
  });
});

// Example: Add interactivity to the CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
  e.preventDefault();
  alert('You clicked the "Shop Now" button!');
});