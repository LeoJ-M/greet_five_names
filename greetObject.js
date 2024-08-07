const greet = require('./greet.js');
const goodbye = require('./goodbye.js');

const nameObj = {
    name1: "Bob",
    name2: "Billy",
    name3: "Bort",
    name4: "Brent",
    name5: "Bryan"
};

// make a function that is reusable
// so you can pass in any object and have it greet
// and say goodbye to the names in that object

const nameObj2 = {
    name1: "Hob",
    name2: "Hughie",
    name3: "Hellen",
    name4: "Hillary",
    name5: "Howard"
};

function converse(nameObject) {
    for (let name in nameObject) {
        greet(nameObject[name]);
    }
    
    for (let name in nameObject) {
        goodbye(nameObject[name]);
    }
}

converse(nameObj2);
