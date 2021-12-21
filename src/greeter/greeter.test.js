const greeter = require("./greeter");

describe("Testing Greeter object methods", () => {
  let date;
  let john;
  
  beforeEach(() => {
    date = new Date();
    date.setHours(14);
    john = greeter(date);
  });

  test("Method returns Hello <name>", () => {
    expect(john.greet("John")).toBe("Hello John");
  });

  test("Greet trims the input", () => {
    expect(john.greet("  John")).toBe("Hello John");
  });

  test("Capitalize first letter", () => {
    expect(john.greet("john")).toBe("Hello John");
  });

  test("Returns Good morning <name> when time is between 6:00 - 12:00", () => {
    date = date.setHours(8);
    expect(john.greet("John")).toBe("Good morning John");
  });

  test("Returns Good evening <name> when time is between 18:00 - 22:00", () => {
    date = date.setHours(19);
    expect(john.greet("John")).toBe("Good evening John");
  });

  test("Returns Good night <name> when time is between 22:00 - 6", () => {
    date = date.setHours(3);
    expect(john.greet("John")).toBe("Good night John");
  });
});
