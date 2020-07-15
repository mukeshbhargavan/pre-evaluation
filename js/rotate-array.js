/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example:
Input: [1,2,7,8,9] & k=3 (3 steps)
Output: [7,8,9,1,2]
*/

let rotateArrayInput = [1, 2, 7, 8, 9];
let k = 3 //

const rotateArray = (inputArray, rotationCount) => {
    for (i = 0; i < rotationCount; i++) {
      inputArray.unshift(inputArray.pop());
    }
    return inputArray;
}

let outputArray = rotateArray(rotateArrayInput, k);

document.getElementById('rotateArray').innerHTML = JSON.stringify(outputArray);
