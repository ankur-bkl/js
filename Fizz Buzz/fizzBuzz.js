/*

FizzBuzz Problem

div by 3&5 -> FizzBuz
div by 3 -> Fizz
div by 5 -> Buzz
Otherwise -> Number

Write a loop to print this series from 1 to 200

*/

for(let num=1;num<=200;num++){

    if (num%3==0) {
        console.log("Fizz")
    }
    else if (num%5==0) {
        console.log("Buzz")
    }
    else if (num%3==0 && num%5==0) {
        console.log("FizzBuzz")
    }
    else {
        console.log(num)
    }
}