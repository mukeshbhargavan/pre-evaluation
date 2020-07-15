/*
There is an array of numbers from 1 to 100 which are not in order. Sort the array in O(N) complexity
*/

function sortArray(inputArray, length) {
    for (let i = 0; i < length; i++) {
        inputArray[i] = i+1;
    }
    return inputArray;
}

let inputArray = [10, 7, 9, 2, 8, 3, 5, 4, 6, 1];
let length = inputArray.length;
let output = sortArray(inputArray, length);

document.getElementById('sort').innerHTML = JSON.stringify(output);
