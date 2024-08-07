const namesArr = [
    "Bob", "Billy", "Bort", "Brent", "Bryan"
];

// for (let i = 0; i < namesArr.length - 1; i++) {
//     console.log(`Hello ${namesArr[i]}!`);
// }

const namesArr2 = [
    "George", "Jeremy", "Joe", "Jimbo", "Gerald"
];

// wrap forEach in a function
function listNames(list) {
    list.forEach((name) => {
        console.log(`Hello, ${name}`);
    });
}

// listNames(namesArr);
// listNames(namesArr2);

global.namesArr = namesArr;
global.namesArr2 = namesArr2;
global.listNames = listNames;