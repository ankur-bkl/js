
function hello(name,callback){ // 2nd parameter is a function // function name can be anything
    console.log(name,);
    callback()
}

function bye(){ // it is passed as a callback function
    console.log("ba bye");
    
}

hello("ankur",bye) // bye is given to callback