const imgElement = document.querySelector(".img-logo");
const headerElement = document.querySelector(".header-logo");
const mobileNav = document.querySelector(".mobile-nav");
const menuBtn = document.querySelector(".menu");

let isNavOpen = false;

const closeMenu = () => {
  isNavOpen = false;
  mobileNav.style.height = "0px";
};

menuBtn.addEventListener("click", () => {
  if (isNavOpen) {
    isNavOpen = false;
    mobileNav.style.height = "0px";
  } else {
    isNavOpen = true;
    mobileNav.style.height = "166px";
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    imgElement.style.width = "100px";
    headerElement.style.top = "16px";
  } else {
    imgElement.style.width = "auto";
    // headerElement.style.top = "32px";
  }
});

const futureDate = new Date(2024, 1, 19, 0, 0, 0); // January 1, 2024 00:00:00

const daysTag = document.querySelector(".days > h1");
const hoursTag = document.querySelector(".hours > h1");
const minsTag = document.querySelector(".minutes > h1");
const secsTag = document.querySelector(".seconds > h1");

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = futureDate - currentDate;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  daysTag.innerText = days;
  hoursTag.innerText = hours;
  minsTag.innerText = minutes;
  secsTag.innerHTML = seconds;
  console.log("updated", seconds);
}

setInterval(updateCountdown, 1000);
updateCountdown();

const images = ["background-18.png", "image.png", "logo.jpg"];

const imageDiv = document.querySelector("image-div");

const currImage = null;

const loadImages = () => {
  images.forEach((value, i) => {
    const imgElement = document.createElement("img");
    imgElement.src = value;
    imgElement.alt = value;
    imgElement.id = `image-${i}`;
  });
};

const formElement = document.querySelector('form');

const onSumbit = (e) => {
  e.preventDefault();
}

formElement.addEventListener('submit', onSumbit);
