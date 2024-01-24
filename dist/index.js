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

const formElement = document.querySelector("form");

const sendRsvp = async (payload) => {
  return fetch("/api/send-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });
};

const overlayLoader = document.querySelector(".overlay-loader");

const toastParent = document.querySelector(".toast-container");
const toastElement = document.querySelector(".toast");

const showMsg = (isError, msg = "") => {
  toastParent.classList.add("show");

  toastElement.innerText = msg;

  if (isError) {
    toastElement.classList.add("error-bg");
  } else {
    toastElement.classList.add("success-bg");
  }
  setTimeout(() => {
    toastParent.classList.remove("show");
    toastElement.classList.remove("error-bg");
    toastElement.classList.remove("success-bg");
  }, 3000);
};

const onSumbit = async (e) => {
  e.preventDefault();
  overlayLoader.style.display = "flex";
  const data = {};

  Array.from(e.target.elements).forEach((element) => {
    if (element.nodeName === "INPUT" && element.type === "text") {
      data[element.name] = element.value;
    } else if (
      element.nodeName === "INPUT" &&
      element.type === "radio" &&
      element.checked
    ) {
      data[element.name] = element.value;
    }
  });
  try {
    const response = await sendRsvp(data);
    console.log(response);
    showMsg(false, "Thank You !!!");
  } catch (err) {
    console.log("Error", err);
    showMsg(true, "Oops, Something wrong...");
  } finally {
    overlayLoader.style.display = "none";
    e.target.reset();
  }
};

formElement.addEventListener("submit", onSumbit);

const obsCallback = (delay) => (entries) => {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.add("showElement");
    entry.target.style.transitionDelay = `${0.4 * delay}s`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const elements = [1,2,3,4,5,6].map((val) => {
    return document.getElementById(`${val}`);
  });

  elements.forEach((element, i) => {
    if (element) {
      const observer = new IntersectionObserver(obsCallback(i));
      observer.observe(element);
    }
  });

  const elementsSetTwo = [7,8,9,10,11,12,13, 14, 15, 16, 17].map((val) => {
    return document.getElementById(`${val}`);
  });

  elementsSetTwo.forEach((element, i) => {
    if (element) {
      const delay = i <= 5 ? i : 0;
      const observer = new IntersectionObserver(obsCallback(i));
      observer.observe(element);
    }
  });

  const elementsSetFour = [18, 19, 20, 21, 22, 23].map((val) => {
    return document.getElementById(`${val}`);
  });

  elementsSetFour.forEach((element, i) => {
    if (element) {
      const delay = i <= 2 ? i : 0;
      const observer = new IntersectionObserver(obsCallback(delay));
      observer.observe(element);
    }
  });

  const elementsSetFive = [24, 25].map((val) => {
    return document.getElementById(`${val}`);
  });

  elementsSetFive.forEach((element, i) => {
    if (element) {
      const observer = new IntersectionObserver(obsCallback(i));
      observer.observe(element);
    }
  });
});
