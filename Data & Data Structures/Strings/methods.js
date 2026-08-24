
const obj = {
    name: "Ankur",
    greet: function(){
        console.log("hello "+ this.name);
    }
}

console.log(obj.greet) // prints the key
obj.greet() // prints what inside function