function stringCalculator() {
  _arrFunctions = (arr) => {
    let negNumArr = arr.filter((n) => n < 0);
    if (negNumArr.length > 0) {
      negNumString = negNumArr.join(",");
      return `Negatives are not allowed ${negNumString}`;
    }

    result = arr
      .map((value) => parseInt(value))
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);
    return result;
  };

  const add = (string) => {
    if (string.length === 0) {
      return 0;
    }

    if (!isNaN(string)) {
      return parseInt(string);
    }

    if (string.includes(",") || string.includes("\n")) {
      let arr = string.split(/,|\n/);
      let result = _arrFunctions(arr);
      return result;
    }
  };

  return { add };
}

module.exports = stringCalculator;
