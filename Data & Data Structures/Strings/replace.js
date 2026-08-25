let str ="My name is string, all i do is string, string, string string muhahaha!"

console.log(str.replace("s","X")) // replaces only first occurence

console.log(str.replace(/s/g,"X")) // replaces all occurences - must be included using / /g flag