function greeter(date) {
  _getGreeting = () => {
    if (date.getHours() >= 18 && date.getHours() <= 22) {
      return "Good evening";
    }

    if (date.getHours() > 22 || date.getHours() < 6) {
      return "Good night";
    }

    if (date.getHours() >= 6 && date.getHours() <= 12) {
      return "Good morning";
    }

    return "Hello";
  };

  const greet = (name) => {
    console.log(`Greeted ${name}`);
    name = name.trim();
    name = name.charAt(0).toUpperCase() + name.slice(1);

    const greeting = _getGreeting();
    return `${greeting} ${name}`;
  };

  return { greet };
}

module.exports = greeter;
