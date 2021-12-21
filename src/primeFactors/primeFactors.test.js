const primeFactors = require("./primeFactors");

describe("Find prime factors", () => {

  beforeEach(() => {
    arr = [];
  });

  test("If we pass 1, we should get empty array", () => {
    const arr = [];
    expect(primeFactors.generate(1)).toMatchObject(arr);
  });

  test("If we pass 2, we should get [2]", () => {
    const arr = [2];
    expect(primeFactors.generate(2)).toMatchObject(arr);
  });

  test("If we pass 3, we should get [3]", () => {
    const arr = [3];
    expect(primeFactors.generate(3)).toMatchObject(arr);
  });

  test("If we pass 4, we should get [2,2]", () => {
    const arr = [2, 2];
    expect(primeFactors.generate(4)).toMatchObject(arr);
  });

  test("5 should return 5", () => {
    const arr = [5];
    expect(primeFactors.generate(5)).toMatchObject(arr);
  });

  test("7 should return 7", () => {
    const arr = [7];
    expect(primeFactors.generate(7)).toMatchObject(arr);
  });

  test("8 should return [2,2,2]", () => {
    const arr = [2, 2, 2];
    expect(primeFactors.generate(8)).toMatchObject(arr);
  });

  test("9 should return [3,3]", () => {
    const arr = [3, 3];
    expect(primeFactors.generate(9)).toMatchObject(arr);
  });
  
  test("4620 should return [2,2,3,5,7,11", () => {
    const arr = [2, 2, 3, 5, 7, 11];
    expect(primeFactors.generate(4620)).toMatchObject(arr);
  });
});
