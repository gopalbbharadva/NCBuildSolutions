let array = [];
for (let i = 1; i <= 100; i++) {
  array.push(i);
}
const fizzBuzz = () => {
  return array.map((number) => {
    if (number % 5 === 0 && number % 3 === 0) return "FizzBuzz";
    else if (number % 3 === 0) return "Fizz";
    else if (number % 5 === 0) return "Buzz";
    else return number;
  });
};
console.log(fizzBuzz());
