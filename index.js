function push(arr, item) {
  const number = arr.length;
  arr[number] = item;
  console.log(arr.length);
  return arr.length;
}

function pop(arr) {
  arr.length = arr.length - 1;
  return arr.length;
}

function shift(arr) {
  const number = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return number;
}

function unshift(arr, item) {
  arr.length = arr.length + 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = item;

  return arr.length;
}

function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.i) {
      return true;
    } else {
      arr.i = 1;
    }
  }
}

module.exports = { push, shift, unshift, pop, hasDuplicates };

// Read element by index | `const number = arr[i]`
// Set element by index | `arr[i] = arr[i + 1]`
// Read array length | `for(let i = 0; i < arr.length; i++) {`
// Set array length | `arr.length = arr.length - 1`
