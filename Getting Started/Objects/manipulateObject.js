let user={
    First_name: "Ritik",
    Last_name: "Sharma",
    City: "Kolkata"
}

//updating 

user.City="Mumbai" //updating the values
user.Gender="Male" //as the value is not present, it adds the value

console.log(user);

delete user.City //syntax to delete the object objName.keyName
console.log(user);