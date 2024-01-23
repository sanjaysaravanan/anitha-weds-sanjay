let count = 0;

const h1Element = document.querySelector('h1');

h1Element.innerHTML = count;

function decrease() {
  count--;
  h1Element.innerHTML = count;
}

function increase() {
  count++;
  h1Element.innerHTML = count;
}


function Sample() {
  var i = 10;

  a = ++i;
  b = i-- + a++;

  console.log('a', a); // 12
  console.log('b', b); // 22
}