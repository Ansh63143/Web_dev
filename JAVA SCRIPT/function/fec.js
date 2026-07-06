debugger;
console.log("Global execution context starts");

var globalVar = "I am a global variable";


console.log(globalVar);
console.log(globalFunction);
globalFunction();

console.log("Global execution context ends");

var globalFunction = function() {
    console.log("I am a global function");
};