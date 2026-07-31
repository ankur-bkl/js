// inside same variable is different from outside one

let x=10
if (true)
{
    let x=12
    console.log("Inside: "+x)
}
console.log("Outside: "+x)