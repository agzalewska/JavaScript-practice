// my age in human years
const myAge = 30;

// The first two years of a dog’s life count as 10.5 dog years each. Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
let earlyYears = 2;
earlyYears *= 10.5;

// Since we already accounted for the first two years, we can take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;

laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Agnieszka'.toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
