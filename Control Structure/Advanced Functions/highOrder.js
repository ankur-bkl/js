// hello - a high order function
function hello(name,callback){ // 2nd parameter is a function // function name can be anything
    console.log(name,);
    callback()
}

function bye(){ // bye - a callback function
    console.log("ba bye");
    
}

hello("ankur",bye) // bye is given to callback