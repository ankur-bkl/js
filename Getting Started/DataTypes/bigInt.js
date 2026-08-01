let n1 =Number.MAX_SAFE_INTEGER //syntac for finding maximum largest integer

console.log(n1)

console.log(n1+1 === n1+2) //precision loss the +1 and +2 is getting rejected

console.log(n1+1n === n1+2n) //throws an error coz n1 is not bigInt number even though it is


let n2=9007199254740991n
console.log(n2+1n === n2+2n) //no precision loss

console.log(n2+1n === n2+1n) 