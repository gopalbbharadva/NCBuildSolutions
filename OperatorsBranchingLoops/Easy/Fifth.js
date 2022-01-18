// const min = (n1, n2, n3) => {
//   if (n1 < n2) {
//     if (n1 < n3) return n1;
//     else return n3;
//   } else {
//     if (n2 < n3) return n2;
//     else return n3;
//   }
// };
// console.log(min(35, 29, 46));
const min = (n1, n2, n3) => (n1 < n2 ? (n1 < n3 ? n1 : n3) : n2 < n3 ? n2 : n3);

console.log(min(35, 29, 46));
