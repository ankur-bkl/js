{
    let name ="Ankur"
    let age = 20
    console.log("Inside Block!")
    console.log("My name is "+name+" and age is "+age)

    // can be reassigned
    name = "Halala" 
    console.log("New name is "+name)
    
    // cannot be redeclared throws an error
    let name = "new name"

}

console.log("Outside Block!")
// console.log(name,age) // it shows error coz let is block scope