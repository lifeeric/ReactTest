// Write a function in Typescript, which receives an integer number and has the next logic:
// a) it prints "candy" if number is divisible by 2;
// b) it prints "bar" if number is divisible by 11;
// c) it prints "candybar" if number is divisible by 22;
// d) it prints the value of number for all other cases;
// note: number is a positive integer number;

const gotInt = (num: number): string | number => {
  if (num % 2 === 0) return "candy";
  else if (num % 11 === 0) return "bar";
  else if (num % 22 === 0) return "candybar";
  else return num;
};

console.log(gotInt(23));
