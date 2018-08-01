let array = [2, 5, 6, 8, 3, 10, 100, 80];

//function to breakdown the array by splitting it in half

mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    // console.log("left: ", left);
    // console.log("right: ", right);
    let right = arr.slice(middle, arr.length);
    debugger;
    return merge(mergeSort(left), mergeSort(right)); // this is a recursive call.
  }
};

merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

console.log(mergeSort(array));

module.exports = {
  mergeSort
};
