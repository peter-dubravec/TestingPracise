function generateFizzBuzz(size, mode) {
  let initialArray = [...Array(size + 1).keys()];
  initialArray.splice(0, 1);
  fizzBuzzArray = initialArray.map((element) => {
    if (element % 7 === 0 && element % 11 === 0) {
      return "FooBoo";
    } else if (element % 3 === 0 && element % 5 === 0) {
      return "FTW";
    } else if (element % 11 === 0) {
      return "Boo";
    } else if (element % 7 === 0) {
      return "Foo";
    } else if (element % 5 === 0 && mode === "normal") {
      return "Buzz";
    } else if (element % 5 === 0 && mode === "switched") {
      return "Fizz";
    } else if (element % 3 === 0 && mode === "normal") {
      return "Fizz";
    } else if (element % 3 === 0 && mode === "switched") {
      return "Buzz";
    } else if (element < 16) {
      return "Small";
    } else if (element > 95) {
      return "Big";
    } else {
      return element;
    }
  });

  return fizzBuzzArray;
}

module.exports = generateFizzBuzz;
