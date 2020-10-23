const feedbackButton = document.querySelector(".button-feedback");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const nameField = feedbackPopup.querySelector(".feedback-field-name");
const emailField = feedbackPopup.querySelector(".feedback-field-email");
const messageField = feedbackPopup.querySelector(".feedback-field-message");

const mapLink = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

let storageName = localStorage.getItem("name");
let storageEmail = localStorage.getItem("email");
let storageMessage = localStorage.getItem("message");

let isStorageSupport = true;

try {
  storageName = localStorage.getItem("name");
  let storageEmail = localStorage.getItem("email");
  let storageMessage = localStorage.getItem("message");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function () {
  feedbackPopup.classList.add("modal-show");
  if (storageName) {
    nameField.value = storageName;
  } 
  if (storageEmail) {
    emailField.value = storageEmail;
  }
  if (storageMessage) {
    messageField.value = storageMessage;
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackClose.classList.remove("modal-error");
});


feedbackForm.addEventListener("submit", function (evt) {
  if (!nameField.value || !emailField.value || !messageField.value) {
    evt.preventDefault(messageField.value);
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", emailField.value);
      localStorage.setItem("message", messageField.value);
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackForm.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

// Слайдер

const slides = document.querySelectorAll(".features-slider-item");
const dots = document.querySelectorAll(".features-slider-dot");
const sliderDots = document.querySelectorAll(".features-slider-dot");
const arrowRight = document.querySelector(".features-slider-arrow-right");
const arrowLeft = document.querySelector(".features-slider-arrow-left");
let count = 1;

arrowRight.addEventListener("click", function (evt) {
  dots[count].classList.remove("active");
  slides[count].classList.remove("active-slide");
  count++;
  if (count >= slides.length) {
    count = 0;
  }
  dots[count].classList.add("active");
  slides[count].classList.add("active-slide");
});

arrowLeft.addEventListener("click", function (evt) {
  dots[count].classList.remove("active");
  slides[count].classList.remove("active-slide");
  if (count <= 0) {
    count = slides.length;
  }
  count--;
  dots[count].classList.add("active");
  slides[count].classList.add("active-slide");
});

// Добавление товара в корзину и в закладки

const addLinks = document.querySelectorAll(".catalog-button-buy");
const bookmarkCount = document.querySelector(".bookmark-count");
const cartCount = document.querySelector(".cart-count");
const bookmarkLinks = document.querySelectorAll(".catalog-button-bookmark");
const cartLink = document.querySelector(".cart");

for (let addLink of addLinks) {
  addLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartCount.innerText++;
    if (!cartLink.classList.contains("cart-active") && (cartCount.innerText > 0)) { 
      cartLink.classList.add("cart-active");
    }
  });
}

for (let bookmarkLink of bookmarkLinks) {
  bookmarkLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookmarkCount.innerText++;
  });
}
