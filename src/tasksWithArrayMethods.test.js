import {
  sortArray,
  filterStringsArray,
  sumNumbersInArray,
  filterAndExtendArrayItems,
  mergeArraysWithoutDuplicates
} from "./tasksWithArrayMethods";

describe("should test tasksWithArrayMethods", () => {
  it("should test sortArray", () => {
    const arNum = [11, 2, 101, 3, 4, 5, 1, 6];
    const output = [1, 2, 3, 4, 5, 6, 11, 101];

    expect(sortArray(arNum)).toEqual(output);
  });

  it("should test filterStringsArray", () => {
    const stringsArray = [
      "one-test",
      "cat",
      "parrot",
      "banana",
      "test-dog",
      "dog"
    ];
    const output = ["cat", "parrot", "banana", "dog"];

    expect(filterStringsArray(stringsArray)).toEqual(output);
  });

  it("should test sumNumbersInArray", () => {
    const arNum = [11, 2, 101, 3, 4, 5, 1, 6];
    const output = 133;

    expect(sumNumbersInArray(arNum)).toEqual(output);
  });

  it("should test filterAndExtendArrayItems", () => {
    const inputArray = [
      { a: 7, b: 5 },
      { a: 10, b: 3 },
      { a: 2, b: 3 },
      { a: 0, b: 3 }
    ];

    const outputArray = [
      { a: 7, b: 5, sum: 12 },
      { a: 10, b: 3, sum: 13 }
    ];

    expect(filterAndExtendArrayItems(inputArray)).toEqual(outputArray);
  });

  it("should test mergeArraysWithoutDuplicates", () => {
    const arNum = [1, 2, 3, 4, 5, 6];
    const arNum2 = [15, 6, 3, 20, 11];
    const output = [1, 2, 3, 4, 5, 6, 15, 20, 11];

    expect(mergeArraysWithoutDuplicates(arNum, arNum2)).toEqual(output);
  });
});
