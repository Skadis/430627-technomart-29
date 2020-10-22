const addPopup = document.querySelector(".modal-add-product");
const addClose = addPopup.querySelector(".modal-close");
const continueButton = addPopup.querySelector(".continue-button");
const addLinks = document.querySelectorAll(".catalog-button-buy");
const bookmarkCount = document.querySelector(".bookmark-count");
const cartCount = document.querySelector(".cart-count");
const bookmarkLinks = document.querySelectorAll(".catalog-button-bookmark");
const cartLink = document.querySelector(".cart");

for (let addLink of addLinks) {
  addLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    addPopup.classList.add("modal-show");
    cartCount.innerText++;
    if (!cartLink.classList.contains("cart-active") && (cartCount.innerText > 0)) { 
      cartLink.classList.add("cart-active");
    }
  });
}

addClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addPopup.classList.remove("modal-show");
});

continueButton.addEventListener("click", function (evt) {
  addPopup.classList.remove("modal-show");
});

for (let bookmarkLink of bookmarkLinks) {
  bookmarkLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmarkCount.innerText++;
  });
}
