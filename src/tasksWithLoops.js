// Task 1 - find sum of all number in 2 arrays
// const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
// const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
//passed
export function sumNumsInArrays(array1, array2) {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    sum = sum + array1[i] + array2[i];
  }
  return sum;
}

// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

export function printEvenNumbers(n) {
  let result = "";

  for (let i = 2; i <= n; i += 2) {
    if (i === n) {
      result = result + i;
    } else {
      result = result + i + ", ";
    }
  }
  return result;
}

// Task 3 - Using a 'for' loop output the elements in reverse order
// const arr = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
export function reverseArrayItems(array) {
  let newArr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
//passed
export function sumNumsSamePosition(array1, array2) {
  let sum = [];
  for (let i = 0; i < array1.length; i++) {
    sum.push(array1[i] + array2[i]);
  }
  return sum;
}

// Task 5 - find sum of all number in array using 'while' loop
//passed
export function sumNums(array) {
  let n = 0;
  let sum = 0;
  while (n < array.length) {
    sum = sum + array[n];
    n++;
  }
  return sum;
}

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
// const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']
export function filterArrayWithStrings(array) {
  let newStrArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 4 && !array[i].includes("error")) {
      newStrArr.push(array[i]);
    }
  }
  return newStrArr;
}

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
export function factorial(n) {
  let result = n;
  if (n === 0 || n === 1) {
    return 1;
  }

  while (n > 1) {
    n--;
    result = n * result;
  }
  return result;
}
// with for loop
export function factorial1(n) {
  let result = n;

  for (let i = 1; n >= result; i++) {
    result = i * result;
  }
  return result;
}
