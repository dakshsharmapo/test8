// while, do while, for
// start , end , updation
// let i = 1;
// while(i<11){
//     // code
//     console.log('hello')
//     i++
// }
// FOR LOOP
// for(let i = 100;i >1;i--){
//     console.log(i)
// }





// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// let i = 2; 
// while(i <= 20) {
//   console.log(i);
//   i += 2
// }

// let i = 1
// while(i <= 30){
//     console.log(i)
//     i += 2
// }

// let i = 5
// while(i <= 50){
//     console.log(i)
//     i+=5
// }
    
// let sum = 0
// let i = 1
// while(i<101){
//     sum+=i
//     i++
// }
// console.log(sum)

// let pro = 1
// let i = 1
// while(i<=10){
//     pro *= i
//     i++
// }
// console.log

// let count = 0;
// let m = 1;
// while (m <= 100) {
//   if (m % 3 == 0 && m % 5 == 0) count++;
//   m++;
// }
// console.log("Count divisible by 3  and 5 =", count)

// DO WHILE

// let i = 1
// do{
//     console.log(i)
//     i++
// }while(i <11)

// Print numbers 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print numbers 10 to 1 using a while loop
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Print numbers 1 to 5 using a do...while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);



// Even numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) console.log(i);
}

// Odd numbers between 20 and 50
for (let i = 21; i <= 50; i += 2) {
  console.log(i);
}

// Numbers divisible by 3 from 1 to 30
for (let i = 3; i <= 30; i += 3) {
  console.log(i);
}



// Sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum 1-100:", sum);

// Product of numbers from 1 to 10
let product = 1;
for (let i = 1; i <= 10; i++) {
  product *= i;
}
console.log("Product 1-10:", product);

// Sum of even numbers 1 to 50
let evenSum = 0;
for (let i = 2; i <= 50; i += 2) {
  evenSum += i;
}
console.log("Sum of even numbers 1-50:", evenSum);

// Sum of squares 1² + 2² + ... + 10²
let squareSum = 0;
for (let i = 1; i <= 10; i++) {
  squareSum += i * i;
}
console.log("Sum of squares 1-10:", squareSum);


// Print 1 to 20, skipping multiples of 4
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) continue;
  console.log(i);
}

// Print 1 to 10, stop at 7
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}

// Count numbers between 1 and 100 divisible by both 3 and 5
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) count++;
}
console.log("Count divisible by 3 and 5:", count);




// Print pairs (i,j) with i,j from 1 to 3
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i}, ${j})`);
  }
}

// Find pairs (a,b) with 1 ≤ a,b ≤ 4 and a + b = 5
for (let a = 1; a <= 4; a++) {
  for (let b = 1; b <= 4; b++) {
    if (a + b === 5) {
      console.log(`(${a}, ${b})`);
    }
  }
}



// Check if a number is prime
let number = 13;
let isPrime = true;
if (number <= 1) isPrime = false;
else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(number, isPrime ? "is prime" : "is not prime");

// Factorial of a number
let n = 6;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`${n}! = ${factorial}`);

// Reverse a number
let num = 1234;
let reverse = 0;
let temp = num;
while (temp > 0) {
  reverse = reverse * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}
console.log("Reversed:", reverse);

// Count digits
let countDigits = 0;
temp = num;
while (temp > 0) {
  countDigits++;
  temp = Math.floor(temp / 10);
}
console.log("Number of digits:", countDigits);

// Check if number is palindrome
let original = 12121;
let rev = 0;
temp = original;
while (temp > 0) {
  rev = rev * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}
if (original === rev) {
  console.log(original, "is a palindrome");
} else {
  console.log(original, "is not a palindrome");
}



