const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

let words = sonnet.match(/((\w+).'(\w+))|((\w+).-(\w+))|\w+/gm);

let uniques = new Map();
let word ="";

for (i = 0; i < words.length; i++) {
    word = words[i];
    if (uniques.has(word) == false) {
        uniques.set(word, 1);
    } else {
        count = uniques.get(word) + 1;
        uniques.set(word, count);
    };
};

for(let [w, c] of uniques)
    console.log(`${w}: ${c}`);

console.log(uniques);

for(let [f, g] of getGreeting)
    console.log(`${f}: ${g}`);
// below is the workup with console.log breaks
//     let words = sonnet.match(/((\w+).'(\w+))|((\w+).-(\w+))|\w+/gm);
//
//     let uniques = new Map();
//     let word ="";
//     console.log(`uniques initial size == ${uniques.size}`);
//     console.log(`words.length = ${words.length}`);
//
//     for (i = 0; i < words.length; i++) {
//         word = words[i];
//         if (uniques.has(word) == false)  {
//             uniques.set(word, 1);
//             console.log(`add word : ${word}`);
//         } else {
//             count = uniques.get(word) + 1;
//             console.log(`existing word: ${word}  count: ${count}`);
//             uniques.set(word, count);
//         };
//
//         for(let [w, c] of uniques)
//             console.log(`${w}: ${c}`);

// console.log(`uniques == ${uniques}`);
// this is the end of the workup




// console.log(`word = ${word}`); list all 109 words
// };
//     if (uniques[word]) {
//         console.log(`Old word: ${word}`);
//         // uniques[word] += 1;
//         uniques.set(word, uniques.get(word)+1);
//         console.log(`uniques.get(word) = ${uniques.get(word)}`);
//
//     } else {
//         console.log(`New word: ${word}`);
//         // uniques[word] = 1;
//         // uniques.set(word, 1);
//         uniques.set(word, (uniques.get(word)+1));
//         console.log(`uniques.get(word) = ${uniques.get(word)}`);
//         // console.log(`uniques[word] = ${uniques[word]}`);
//     }
    // console.log(uniques[word]);
// }

// console.log(uniques);
// console.log(words);


// let uniques = new Map();



