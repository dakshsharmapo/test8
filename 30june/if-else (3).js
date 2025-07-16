// var prompt = require('prompt-sync')();
// let age = prompt('enter your age : ')
// age = parseInt(age)
// if(age> 18){
//     console.log('adult')

// }
// else{
//     console.log('minor')

// }




//1. Write a program that takes a number as input and checks whether it is even or odd using if-else.



// var prompt = require('prompt-sync')();
// let a = prompt('enter a number : ')
// if(a%2==0){
//     console.log('even')
// }
// else{
//     console.log('odd')
// }





// 2. Write a program that takes a number as input and determines if it is positive, negative, or zero.


// var prompt = require('prompt-sync')();
// let a = prompt('enter a number : ')
// if(a > 0){
//     console.log('positive')

// }
// else if(a<0) {
//     console.log('negative')
// }
// else if(a == 0){console.log('zer0)}
// else{
//     console.log('enter valid number')

// }







// 3 gratest among 2 no.


// var prompt = require('prompt-sync')();
// let a = parseInt(prompt("Enter first number:"));
// let b = parseInt(prompt("Enter second number:"));

// if (a > b) {
//     console.log(a+ " is greater than " +b);
// } else {
//     console.log(b+ " is greater than " +a);
// }







// voting


// var prompt = require('prompt-sync')();
// let age = parseInt(prompt("Enter your age:"));

// if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not eligible to vote.");
// }








// divisibility by 5 and 11


// var prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter a number:"));

// if (num % 5 == 0 && num % 11 == 0) {
//     console.log(num + " is divisible by both 5 and 11.");
// } else {
//     console.log(num + " is not divisible by both 5 and 11.");
// }








// leap year


// var prompt = require('prompt-sync')();
// let year = parseInt(prompt("Enter a year:"));

// if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }







// PASS OR FAIL



// var prompt = require('prompt-sync')();

// let marks = parseInt(prompt("Enter marks:"));

// if (marks >= 33) {
//     console.log("You passed.");
// } else {
//     console.log("You failed.");
// }







// ALPHABET

// var prompt = require('prompt-sync')();
// let ch = prompt("Enter a single character:");

// if (ch >= 'A' && ch <= 'Z') {
//     console.log("It is an uppercase letter.");
// } else if (ch >= 'a' && ch <= 'z') {
//     console.log("It is a lowercase letter.");
// } else {
//     console.log("It is not an alphabet character.");
// }





// day


// var prompt = require('prompt-sync')();

// let day = parseInt(prompt("Enter a number (1 to 7):"));

// if (day == 1) {
//     console.log("Monday");
// } else if (day == 2) {
//     console.log("Tuesday");
// } else if (day == 3) {
//     console.log("Wednesday");
// } else if (day == 4) {
//     console.log("Thursday");
// } else if (day == 5) {
//     console.log("Friday");
// } else if (day == 6) {
//     console.log("Saturday");
// } else if (day == 7) {
//     console.log("Sunday");
// } else {
//     console.log(" Please enter number between 1 to 7.");
// }






//check type 


var prompt = require('prompt-sync')();
// let c = prompt("Enter a character:");

// if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
//     console.log("It is an alphabet.");
// } else if (c >= '0' && c <= '9') {
//     console.log("It is a digit.");
// } else {
//     console.log("It is a special character.");
// }


// let num = prompt("Enter a number:");

// num = Number(num);

// if (num >= 100 && num <= 999 || num <= -100 && num >= -999) {
//   console.log(num + " is a 3-digit number.");
// } else {
//   console.log(num + " is NOT a 3-digit number.");
// }

// var prompt = require('prompt-sync')();
// let n = parseInt(prompt('enter a no b/w 1-12'))
// switch (n) {
//   case 1:
//     console.log('january')
//     break;
//      case 2:
//     console.log('february')
//     break;
//      case 3:
//     console.log('march')
//     break;
//      case 4:
//     console.log('april')
//     break;
//      case 5:
//     console.log('may')
//     break;
//      case 6:
//     console.log('june')
//     break;
//      case 7:
//     console.log('july')
//     break;
//      case 8:
//     console.log('august')
//     break;
//      case 9:
//     console.log('september')
//     break;
//      case 10:
//     console.log('october')
//     break;
//      case 11:
//     console.log('november')
//     break;
//      case 12:
//     console.log('december')
//     break;

//     default:
//       console.log('enter valid no')

var prompt=require('prompt-sync')();
// ////Input marks in 5 subjects, calculate the average and print grade using if-else.  A (≥90), B (≥75), C (≥60), D (≥40), F (<40).
// let eng=parseInt(prompt("Enter the  marks of English: "));
// let maths=parseInt(prompt("Enter the marks of maths: "));
// let Phy=parseInt(prompt("Enter the marks of Physics: "));
// let Chem=parseInt(prompt("Enter the narks of Chemistry: "));
// let Bio=parseInt(prompt("Enter the marks of Bio: "));

// let sum=eng+maths+Phy+Chem+Bio;
// let avg;
// avg=sum/5;
// console.log("Average marks: ",avg);
// if(avg>=90 && avg<=100){
//     console.log("Grade A");
// }
// if(avg>=75 && avg<90){
//     console.log("Grade B");
// }
// if(avg>=60&& avg<75){
//     console.log("Grade C");
// }
// if(avg>=40 && avg<60){
//     console.log("Grade D");
// }
// if (avg<40 && avg>0){
//     console.log("Grade F");
// }

////Take a number and check if it's divisible by either 3 or 5 but not both.
// let n =parseInt(prompt("Enter the number: "));
// if((n%3===0 || n%5===0) &&(n%15!==0)){
//     console.log("The number is either divisible by 3 or 5");
// }
// else if(n%3===0 && n%5===0){
//     console.log("The number is divisible by 3 and 5 both");
// }
// else console.log("Number is not divisible by 3 or 5");

//////Input a number and check if it is a palindrome number (e.g., 121).
// let n=parseInt(prompt("Enter the number: "));
// let t=n;
//  let rev=0;
// while(n>0){
//     let ld=n%10;
//     rev=rev*10+ld;
//     n=parseInt(n/10);
// }
// if(rev==t){
// console.log("The number is palindrome");
// }
// else console.log("The number is not palidrome");


//////Input a number and check if the sum of its digits is even or odd.
// let n=parseInt(prompt("Enter the number: "));
// let sum=0;
// while(n>0){
//      let ld=n%10;
//     sum+=ld;
//    n=parseInt(n/10);
// }
// console.log("The sum of digit is: "+sum);


////Input hours worked and calculate overtime pay. Overtime is paid for >40 hours at Rs. 12/hr.
// let n=parseInt(prompt("Enter the hours worked: "));
// if(n>40){
//     let OverTimeHours=n-40;
//     let OverTimePayment=OverTimeHours*12;
//     console.log("Ovetime hours is:",OverTimeHours);
//     console.log("Overtime payement is:",OverTimePayment);
// }
// else{
//     console.log("No Overtime hours worked is under 40 hours");
// }

////Create a mini login system: input username and password, and check if both match stored values.
    // const storedUsername="dark" ;
    // const storedPassword="7742";

    // let username=prompt("Enter the username:");
    // let userpass=prompt("Enter the password:");
    // if(username==storedUsername && userpass==storedPassword){
    //     console.log("✅ Login Successful!");
    // }
    // else{
    //     console.log("❌Invalid username or password");
    // }

    //////Input month number and print number of days in that month.
    // let n=parseInt(prompt("Enter the month: "));
    // if(n===1||n===3||n===5||n===7||n===8||n===10||n===12){
    //     console.log("31 days");
    // }
    // else if(n===4||n===6||n===9||n===11 ){
    //     console.log("30 days");
    // }
    // else if(n===2){
    //     console.log("Either 28 days or 29 days ");
    // }
    // else {
    //     console.log("❌ Invalid month number");
    // }


    //////Take a password as input and check if it is strong (length ≥8, includes digit and special character).
    // let n=prompt("Enter the password: ");
    // let x=/[0-9]/.test(n)
    // let y=/[!@#$%^&*(),.?":{}|<>]/.test(n);
    // if(n.length>=8 && x && y){
    //     console.log("Password is strong");
    // }
    // else console.log("Password is weak ");

//////Input the side lengths of a triangle and check if it is valid, isosceles, equilateral, or scalene.
// let a=parseInt(prompt("Enter the first side of triangle: "));
// let b=parseInt(prompt("Enter the second side of triangle: "));
// let c=parseInt(prompt("Enter the third side of triangle: "));
  
// if((a+b+c)===180){
//     console.log("Valid triangle");
//    if(a===b &&b===c){
//     console.log("Equilateral Triangle");
//    }
//    else if(a===b ||b===c||a===c){
//     console.log("Isosceles Triangle");
//    }
//    else{
//     console.log("Its is Scalene triangle");
//    }

// }
// else {
//     console.log("Invalid triangle");
// }


//////Input basic salary and calculate net salary based on conditions:
//HRA = 20%, DA = 50% if basic < 10000; else HRA = 30%, DA = 80%.

// let n=parseInt(prompt("Enter the basic salary: "));
// let hra,da,netSalary;
// if(n<10000){
//     hra=0.20*n;
//     da=0.50*n;
// }
// else{
//     hra=0.30*n;
//     da=0.80*n;

// }
// netSalary=n+hra+da;
// console.log("NetSalary: "+netSalary);





var prompt = require('prompt-sync')();

////Take a number and check if it's even or odd.
// let n=parseInt(prompt("Enter a number: "));
// if(n%2===0){
//     console.log('Even no');
// }
// else{ console.log('Odd no');}

////Input a number and check if it is positive, negative, or zero.
// let n=parseInt(prompt("Enter a number: "));
// if(n<0){
//     console.log("Number is negaive");
// }
// else if(n>0){
//     console.log("Number is Positive");
// }
// else console.log("Number is zero");


////Take two numbers and print the greater one.
// let n=parseInt(prompt("Enter a first number: "));
// let y=parseInt(prompt("Enter a second number "));
// if(n>y){
//     console.log(n+" is greater");
// }
// else{
//     console.log(y+" is greater");
// }


///Input a number and check if it's divisible by 3 or not.
// let n=parseInt(prompt("Enter a number: "));
// if(n%3===0){console.log("Number is divisible by 3");}
// else console.log("Number is not divisible by 3");


////Input a number and check if it’s a multiple of 7 or not.
// let n=parseInt(prompt("Enter a number: "));
// if(n%7===0){console.log("Number is multiple of 7");}
// else console.log("Number is not multiple of 7");


////// Input a character and check whether it's a vowel or consonant (assume lowercase).
// let ch=prompt("Enter the lower case character: ");
// if(ch.length!==1||ch<'a'||ch>'z'){
//     console.log("Invalid input.Please enter lowercase character ownly");
// }
// else if(ch==='a'|| ch==='e'||ch==='i'||ch==='o'||ch==='u'){
//     console.log("Vowel");
// }
// else console.log("consonant");

//////Input a number and check if it is between 10 and 50.
// let n=parseInt(prompt("Enter the number: "));
// if(n>10&&n<50){
//     console.log("Number lies between 10 and 50");
// }
// else console.log("Number doesnt lies between 10 and 50



////Input a number and check if it is a 3-digit number.
// let n=parseInt(prompt("Enter the number: "));
// if(n>99&& n<1000){
//     console.log("The number is three digit number");
// }
// else console.log("It is not a three digit number");


////Input age and check if the person is eligible for voting (≥18).
// let n=parseInt(prompt("Enter your age: "));
// if(n>=18){
//     console.log("The person is eligible for voting");
// }
// else("The person is not eligible for voting");


////Input a temperature and print if it's Hot (>30), Moderate (15–30), or Cold (<15).
// let n=parseInt(prompt("Enter the temperature: "));
// if(n>30){
//     console.log("Hot temperature");
// }
// else if(n>=15 &&n<=30){
//     console.log("Moderate Temperature");
// }
// else console.log("Cold Temperature");


var prompt=require('prompt-sync')();

////Input three numbers and find the greatest among them.
// let a=parseInt(prompt("Enter the first number: "));
// let b=parseInt(prompt("Enter the second number: "));
// let c=parseInt(prompt("Enter the third number: "));
// if(a>b){
//     if(a>c){
//         console.log(a+" is greater");
//     }
//     else console.log(c+" is greater");
// }
// if(b>a){
//     if(b>c){
//         console.log(b+" is greater");
//     }
//     else console.log(c+" is greater");
// }


////Input a year and check if it is a leap year.
// let n=parseInt(prompt("Enter the year: "));
//  if((n%4===0 && n%100!==0)||(n%400===0)){
//     console.log(n+" is a leap year");
//  }
//  else console.log(n+" is not a leap year");


////Input a character and check if it's uppercase, lowercase, digit, or special character.
// let n=prompt("Enter a single character: ");
// if(n.length!==1){
//     console.log("Please enter exactly one character")
// }
// else if(n>='A'&&n<='Z'){
//     console.log("It is a upper case charcter");
// }
// else if(n>='a'&&n<='z'){
//     console.log("Its is lower case character");
// }
// else if(n>='0'&&n<='9'){
//     console.log("Its a digit");
// }
// else console.log("Its a special character");


////Input marks of a student (out of 100) and print the grade:  
////A (≥90), B (≥75), C (≥60), D (≥40), F (<40).
// let n=parseInt(prompt("Enter the Marks out of 100: "));
// if(n>100){
//     console.log("Invalid Marks Please enter maeks out of 100");
// }
// if(n>=90 &&n<100){
//  console.log("Grade A");
// }
// if(n>=75 &&n<90){
//  console.log("Grade B");
// }
// if(n>=60 &&n<75){
//  console.log("Grade C");
// }
// if(n>=40 &&n<60){
//  console.log("Grade D");
// }
// if(n<40 && n>0) console.log("Grade F");



//////Input the day number (1–7) and print the corresponding weekday.
// let n=parseInt(prompt("Enter the number (1-7): "));
// if(n>7 || n<1){
//     console.log("Invalid number put number between 1-7");
// }
// else if(n===1) console.log("Monday");
// else if(n===2) console.log("Tuesday");
// else if(n===3) console.log("Wednesday");
// else if(n===4) console.log("Thursday");
// else if(n===5) console.log("Friday");
// else if(n===6) console.log("Saturday");
// else if(n===7) console.log("Sunday");

////Take a number and check whether it is divisible by both 5 and 11.
// let n=parseInt(prompt("Enter the number:"));
// if(n%5===0 && n%11===0){
//     console.log("Number is divisible by 5 and 11 both");
// }
// else console.log("The number is not divisible by 5 and 11 both");


////Input a number and check if it is a prime number (basic logic).
// let n=parseInt(prompt("Enter the number: "));
// let isPrime=true;
// if(n<=1){
//     isPrime=false;
// }
// else{
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             isPrime=false;
//             break;

//         }
//     }
// }
// if(isPrime){
//     console.log(n+" is a prime number");
// }
// else console.log(n+" is not a prime number");

////Input someone's name and age, and check if they can get a driving license (age ≥ 18).
// let name=prompt("Enter your name: ");
// let age=parseInt(prompt("Enter your age: "));
// if(age>=18){
//     console.log(name+ " is eligible fo getting driving license");
// }



//////Take two numbers and check if they are equal, or print which one is greater.
// let x=parseInt(prompt("Enter the first number: "));
// let y=parseInt(prompt("Enter the second number: "));
// if(x===y){
//     console.log("The numbers are equal");
// }
// else if(x>y){
//     console.log(x+" is greater ");
// }
// else console.log(y+" is greater");


/////Input a number and print whether it is even, odd, and also whether it's positive or negative.  
// let n=parseInt(prompt("Enter the number: "));
// if(n%2===0) console.log("Even no ");
//     else console.log("Odd no");
//     if(n>0) console.log("Number is positive");
//     else console.log("Number is negative");
