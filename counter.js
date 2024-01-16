let count = 0;

const h1Element = document.querySelector("h1");

h1Element.innerText = count;

const inc = () => {
  count++;
  h1Element.innerText = count;
};

const dec = () => {
  count--;
  h1Element.innerText = count;
};
