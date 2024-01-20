// Write your algorithm here
function hasTargetSum(nums, target) {
  const visitedNumbers = new Set();

  for (const num of nums) {
    const complement = target - num;

    if (visitedNumbers.has(complement)) {
      return true;
    }

    visitedNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(n) where n is the number of elements in the array.

/* 
  Add your pseudocode here
*/
/*
  - Create an empty set to store visited numbers.
  - For each number in the array:
    - Calculate the complement (target - current number).
    - Check if the complement is in the set of visited numbers.
      - If yes, return true (pair found).
      - If no, add the current number to the set of visited numbers.
  - If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
*/
/*
  The function `hasTargetSum` uses a set to keep track of visited numbers. It iterates through the input array, calculating the complement for each number (target - current number). If the complement is found in the set of visited numbers, it means a pair of numbers that add up to the target has been found, and the function returns true. If the loop completes without finding a pair, the function returns false. This approach ensures a time complexity of O(n) where n is the number of elements in the array and a space complexity of O(n).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
