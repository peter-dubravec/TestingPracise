const primeFactors = (() => {
  _checkIfPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };

  const generate = (number) => {
    let result;
    let arr = [];
    let helperNumber = number;

    if (number === 1) {
      return arr;
    }

    for (i = 2; i <= number; i++) {
      helperNumber = number;
      if (number != i) {
        while (helperNumber % i === 0 && _checkIfPrime(i)) {
          helperNumber = helperNumber / i;
          arr.push(i);
          result = arr.reduce((prev, curr) => prev * curr);
          if (result === number) {
            return arr;
          }
        }
      } else {
        if (arr.length == 0) {
          arr.push(number);
          return arr;
        }
      }
    }
  };

  return { generate };
})();

module.exports = primeFactors;
