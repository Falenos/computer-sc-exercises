/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/
import snapshot from "../../src/sort-visualizer";

function bubbleSort(nums) {
  var iterations = 0;
  var didWeSwap = false;

  function iterate() {
    didWeSwap = false;
    for (var i = 1; i < nums.length - iterations; i++) {
      snapshot(nums);
      if (nums[i - 1] > nums[i]) {
        didWeSwap = true;
        const temp = nums[i];
        nums[i] = nums[i - 1];
        nums[i - 1] = temp;
      }
    }

    if (didWeSwap) {
      iterations++;
      iterate();
    }
  }

  iterate();
  console.log("Iterations:", iterations);
  console.log("soted nums:", nums);
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
