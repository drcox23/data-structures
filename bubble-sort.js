arr = [3, 2, 6, 8, 10, 15, 22, 100, 4];

swapper = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

bubbleSort = arr => {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        swapper(arr, j - 1, j);
      }
    }
  }
  console.log(arr);
  return arr;
};

console.log(bubbleSort(arr));
