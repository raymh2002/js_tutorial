let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Returns a URL-friendly version of a string
//Example: "North Dakota" -> "north-dakota"
function urlify(string){
    return string.toLowerCase().split(/\s+/).join("-");
}



// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//Returns an url from an input string
function urlifiedForm(string) {
    return "https://example.com/" + string.toLowerCase().split(/\s+/).join("-");
}

//Returns an array of urls
function createUrl(array) {
    return array.map(element => urlifiedForm(element));
}


// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            console.log(`element.split(/\s+/) = ${element.split(/\s+/)}`);
            console.log(`element length = ${element.split(/\s+/).length}`);
            console.log(`element = ${element}  singles = ${singles}`);
            singles.push(element);
            console.log(`singles after element push : ${singles}`);
        }
    });
    return singles;
}

//Returns * Dakotas String#includes
function pullSearch(array, searchValue) {
    return array.filter(element => element.includes(searchValue));
}


//Returns * Dakotas regex
function pullRegex(array, regEx) {
    return array.filter(element => element.split(regEx).length === 2);
}

let numbers = [1, 2, 3, 4, 5];

// Function arrayProduct returns the product of all elements of the array
function arrayProduct(array) {
    return array.reduce((product, factor) => {
       return product *= factor;
    },1);
}

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
// lengths: Functional solution
function functionalLengths(elements) {return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});}
