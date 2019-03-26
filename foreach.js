// Iterate over an array using the forEach() method of arrays

// let a = ["ant", "bat", "cat", "rat", 42];

// a.forEach(function (element) {
//     console.log(element);
// });

a.forEach(element => console.log(element));



// Function to iterate over the contents of an array
// Pulls out characters , && : from the respective elements

function iterateArr(inputArray){
    if (Array.isArray(inputArray)){
         inputArray.forEach(function (element) {
            console.log(element);
    })} else {
        let arr = inputArray.split(" ");
        console.log(arr);
        arr.forEach(function (element) {
            let lastChar = element.charAt(element.length - 1);
            // console.log(element);
            // console.log(lastChar);
            if (lastChar === ',' || lastChar === ':' ){
               let newElement =  element.slice(0, element.length -1);
                console.log(newElement)
            } else {
                console.log(element)
            }
        })}
};

let a = [8, 17, 42, 99];

function printValues(array){
    let aIndex = 0;   //initialize index for a
    let b = 0;        //initialize value for b
    console.log(array);
    array.forEach( function(element){
        aIndex = array.indexOf(element); //identify and assign index for current element a
        if (aIndex < array.length - 1){     // evaluate position in array and decision point
            b = array[aIndex + 1];        // assign element value b relative to element a pos
            console.log(`a= ${element}  b= ${b}  (a - b) = ${element-b}`);
        }
        }
    )
}



