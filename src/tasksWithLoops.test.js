import {
  sumNumsInArrays,
  printEvenNumbers,
  reverseArrayItems,
  sumNumsSamePosition,
  sumNums,
  filterArrayWithStrings,
  factorial
} from "./tasksWithLoops";

describe("should test tasksWithArrayMethods", () => {
  it("should test sumNumsInArrays", () => {
    const arrayNums1 = [7, 101, 3, 1, 9, 11, 100, 111]; // 343
    const arrayNums2 = [90, 101, 3, 1, 69, 11, 10, 111]; // 396
    const output = 739;

    expect(sumNumsInArrays(arrayNums1, arrayNums2)).toEqual(output);
  });

  it("should test sortArray", () => {
    const n = 22;
    const output = "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22";

    expect(printEvenNumbers(n)).toEqual(output);
  });

  it("should test reverseArrayItems", () => {
    const array = [43, "what", 9, true, "cannot", false, "be", 3, true];
    const output = [true, 3, "be", false, "cannot", true, 9, "what", 43];

    expect(reverseArrayItems(array)).toEqual(output);
  });

  it("should test sumNumsSamePosition", () => {
    const array1 = [4, 6, 7, 10];
    const array2 = [8, 1, 9, 20];
    const output = [12, 7, 16, 30];

    expect(sumNumsSamePosition(array1, array2)).toEqual(output);
  });

  it("should test sumNums", () => {
    const array = [4, 6, 7, 10];
    const output = 27;

    expect(sumNums(array)).toEqual(output);
  });

  it("should test filterArrayWithStrings", () => {
    const array = [
      "error01",
      "in a galaxy",
      "start-error",
      "far far",
      "away",
      "0994-error"
    ];
    const output = ["in a galaxy", "far far", "away"];

    expect(filterArrayWithStrings(array)).toEqual(output);
  });

  it("should test factorial 3", () => {
    expect(factorial(3)).toEqual(6);
  });

  it("should test factorial 5", () => {
    expect(factorial(5)).toEqual(120);
  });
});
