// Prompt the user for a list of froyo flavors separated by commas. 
const flavorsString = prompt(
    "Please enter a list of comma-separated froyo flavors.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

// The user's input string is split into an array of strings. 
const allFlavors = flavorsString.split(", ");

// Declaring the Object
let flavors = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
};

// Object Looping 
// for (let key in flavors) {
//     console.log(key);
//     console.log(flavors[key]);
// };

// An object is used to keep count of how many orders there are of each flavor.
//function getCount(flavors) {
//     let vanilla = 0;
//     for (let i =0; i < countflavors.length; i++) {
//         if (countflavors[i].status === "vanilla") vanilla++;
//     }
//     console.log(vanilla)
// }
// let strawberry = 0;
// let coffee = 0;

// Try number 2 
function countFlavors () { 
    for (const flavor of allFlavors) {
        console.log(flavors[flavor]);
        flavors[flavor] = flavors[flavor] +1;
    }
    console.table(flavors);
    return flavors;
}
flavors = countFlavors();