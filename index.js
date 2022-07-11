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

    arr.length = arr.length -1;


    return number;
  }

module.exports = { push, shift };

// Read element by index | `const number = arr[i]`
// Set element by index | `arr[i] = arr[i + 1]`
// Read array length | `for(let i = 0; i < arr.length; i++) {`
// Set array length | `arr.length = arr.length - 1`
