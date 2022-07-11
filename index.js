function push(arr, item) {
  const number = arr.length + 1;
  console.log(number);
  arr[number] = item;
  return arr;
}

module.exports = { push };

// Read element by index | `const number = arr[i]`
// Set element by index | `arr[i] = arr[i + 1]`
// Read array length | `for(let i = 0; i < arr.length; i++) {`
// Set array length | `arr.length = arr.length - 1`
