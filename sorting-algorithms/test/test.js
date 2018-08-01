let chai = require("chai");
chai.should();
// let expect = chai.expect;
// let assert = chai.assert;

let bubble = require("../bubble-sort");
let insertion = require("../insertion-sort");
let merge = require("../merge-sort");
let quick = require("../quicksort");
let selection = require("../selection-sort");

let array = [10, 5, 6, 9, 2, 1, 3, 20, 18];

// console.log(bubble);

describe("Bubble Sorting", function() {
  it("should sort the array", function() {
    let result = bubble.bubbleSort(array);
    result.should.deep.equal([1, 2, 3, 5, 6, 9, 10, 18, 20]);
  });
});

describe("Quick Sorting", function() {
  it("should sort the array", function() {
    let result = quick.quickSort(array);
    result.should.deep.equal([1, 2, 3, 5, 6, 9, 10, 18, 20]);
  });
});

describe("Merge Sorting", function() {
  it("should sort the array", function() {
    let result = merge.mergeSort(array);
    result.should.deep.equal([1, 2, 3, 5, 6, 9, 10, 18, 20]);
  });
});

describe("Insertion Sorting", function() {
  it("should sort the array", function() {
    let result = insertion.insertionSort(array);
    result.should.deep.equal([1, 2, 3, 5, 6, 9, 10, 18, 20]);
  });
});

describe("Selection Sorting", function() {
  it("should sort the array", function() {
    let result = selection.selectionSort(array);
    result.should.deep.equal([1, 2, 3, 5, 6, 9, 10, 18, 20]);
  });
});
