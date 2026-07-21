// create a function creatArray that * hint use factory function
// 1 that push() elemeemnt into an array
// 2 return the array 

function createArray() {
    let arr = []; 

    function push(element) {
        arr.push(element);
    }

    function getElement(index) {
        return arr[index];
    }

    function getArray() {
        return arr;
    }
    return {
        push,
        getElement,
        getArray
    };
}
const myArray = createArray();

myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(40);

console.log(myArray.getElement(1));
console.log(myArray.getArray()); 