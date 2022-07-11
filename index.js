function push(arr, item) {
  const number = arr.length + 1;
  console.log(number);
  arr[number] = item;
  return arr.length;
}

function shift(arr) {
  const number = arr[0];

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return number;
}

function unshift(arr, item) {
  const number = arr[0];
  arr.length = arr.length + 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    arr[i] = arr[i - 1];
    console.log(arr[i]);
  }

  arr[0] = item;

  return arr.length;
}

module.exports = { push, shift, unshift };

// Read element by index | `const number = arr[i]`
// Set element by index | `arr[i] = arr[i + 1]`
// Read array length | `for(let i = 0; i < arr.length; i++) {`
// Set array length | `arr.length = arr.length - 1`
