const stringCalculator = require("./stringCalculator");

describe("Testing add method in stringCalculator", () => {
  const calcObj = stringCalculator();

  test("Empty string returns 0", () => {
    expect(calcObj.add("")).toBe(0);
  });

  test("String with single number returns that number", () => {
    expect(calcObj.add("5")).toBe(5);
  });

  test("String with 2 numbers returns sum of those numbers", () => {
    expect(calcObj.add("2, 5")).toBe(7);
  });

  test("Two numbers, new line delimetered, returns the sum", () => {
    expect(calcObj.add("1\n2")).toBe(3);
  });
  test("Multiple number delimitered by new line, returns the sum", () => {
    expect(calcObj.add("1\n2,3\n4")).toBe(10);
  });
  test("Don't allow negative numbers", () => {
    expect(calcObj.add("-1,2,-3")).toBe("Negatives are not allowed -1,-3");
  });
});
