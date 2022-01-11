let min, max;
const findMaxMin = (num1, num2) => {
  num1 > num2 ? ((max = num1), (min = num2)) : ((max = num2), (min = num1));
};
findMaxMin(129, 251);
console.log(`Minimum number is ${min} and Maximum number is ${max}`);
