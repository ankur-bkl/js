// What is the output of this code?

let obj = Object.create(
    {
        
    },
    { 
        x: 
        { 
            value: 42 
        } 
    }
);


console.log(Object.values(obj));