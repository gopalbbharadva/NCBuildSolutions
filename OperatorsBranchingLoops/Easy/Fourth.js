// const findMax = (num1, num2, num3) => {
//   if (num1 > num2) {
//     if (num1 > num3) return num1;
//     else return num2;
//   } else {
//     if (num2 > num3) return num2;
//     else return num3;
//   }
// };
// console.log(findMax(8, 23, 17));

const findMax = (n1, n2, n3) =>
  n1 > n2 ? (n1 > n2 ? n1 : n2) : n2 > n3 ? n2 : n3;
console.log(findMax(48, 23, 57));
