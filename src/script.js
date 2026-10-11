const cartButton = document.querySelector(".cart-button");
const cartMessage = document.querySelector(".cart-message");

cartButton.addEventListener("click", () => {
  cartMessage.textContent = "Product added to cart!";
});