var prompt = require('prompt-sync')();
//Write a program that takes a number as input and checks whether it is even or odd using if-else
// let number=prompt()
// if(number%2==0){
// console.log(' given number is even ')
// }
// else{
//     console.log('given number is odd')
// }

//Write a program that takes a number as input and determines if it is positive, negative, or zero.
// let num=prompt('given num is :')
// parseInt(num)
// if(num==0){
//     console.log('given num is zero')
// }else{
//     if(num>0){
//     console.log('given num is positive')
//     }
//     else{
//         console.log('given num is negavitive')
//     }
// }


//Write a program that takes two numbers and prints which one is greater using if-else.
// let a=prompt('first number is')
// let b=prompt('second number is')
// if(a>b){
//     console.log('first number is greater than second' )
// }
// else{
//     console.log('second number is greater than first')
// }

//Write a program that takes age as input and checks if the person is eligible to vote (age ≥ 18).
// let age=prompt('given age is :')
// parseInt(age)
// if(age>=18){
//     console.log('person is eligible to vote')
// }
// else{
//     console.log('person is not eligible to vote')
// }
//Write a program that takes a number and checks whether it is divisible by 5 and 11.
// let number=prompt('given number is' )
// parseInt(number)
// if(number%5==0){
//     console.log('given number is divisible by 5')
// }
// else{
//     if(number%11==0){
//         console.log('given number is divisible by 11')
// }
// else{
//     console.log('given number is not divisible by 5 and 11')
// }}

//Write a program that takes marks as input and checks if the student passed (passing marks: 33 or above).
//  let marks = parseInt(prompt('enter marks'));

// if (marks >= 33){
//     console.log('you pass')
//  }
//  else {
//     console.log('you fail')
//  }

//Write a program that takes a single character input and checks whether it is uppercase or lowercase.
let character=prompt('enter the single character')
if (character>= 'A' && character<='Z'){
    console.log('uppercase')
}
else{
    console.log('lowercase')
}
