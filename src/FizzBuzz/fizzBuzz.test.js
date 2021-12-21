const generateFizzBuzz = require("./fizzBuzz");

describe("FizzBuzz tests", () => {
  test("Test elements in FizzBuzz array", () => {
    let fizzBuzzArr = generateFizzBuzz(100, "normal");
    expect(fizzBuzzArr[0]).toBe("Small");
    expect(fizzBuzzArr[2]).toBe("Fizz");
    expect(fizzBuzzArr[6]).toBe("Foo");
    expect(fizzBuzzArr[10]).toBe("Boo");
    expect(fizzBuzzArr[29]).toBe("FTW");
    expect(fizzBuzzArr[22]).toBe(23);
    expect(fizzBuzzArr[24]).toBe("Buzz");
    expect(fizzBuzzArr[35]).toBe("Fizz");
    expect(fizzBuzzArr[76]).toBe("FooBoo");
    expect(fizzBuzzArr[96]).toBe("Big");
  });

  test("Change rules, multiplies of 3 return 'Buzz' and multiplies of 5 returns 'Fizz'", () => {
    let fizzBuzzArr = generateFizzBuzz(100, "switched");
    expect(fizzBuzzArr[2]).toBe("Buzz");
    expect(fizzBuzzArr[49]).toBe("Fizz");
  });
});
