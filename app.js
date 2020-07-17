// variables of different data-types:
// string
// number
// array
// boolean
// object (4 different key value pairs) [string], [number], [array], [boolean]

let sentence = "Hi, My name is CocoScrappeh.";
console.log(sentence);

let age = 42;
console.log(age);

const motorcycles = ["Kawasaki", "Yamaha", "Suzuki"];
console.log(motorcycles);

let doesThisWork = true;
console.log(doesThisWork);

const lakers = {
  headquarters: "Los Angeles",
  numberOfPlayers: 11,
  players: ["LBJ", "Anthony Davis", "Danny Green"],
  areChampions: true,
};

console.log(lakers);

// make 10 different functions
// one of your functions need to pass in an array
// one of your functions need to pass in a callback
// ..... string
// ..... object
// ..... boolean
// ..... freestyle

// TEST YOUR CODE!!!

function displayCoolBikes(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let bike = array[i];

    if (bike.length > 7) {
      result.push(bike);
    }
  }
  return result;
}

console.log(displayCoolBikes(motorcycles));

function removeFromArray(callback, array) {
  let result = callback(array)[0];
  console.log(result);
}

removeFromArray(displayCoolBikes, motorcycles);

function printSentence(string) {
  console.log(string);
}

printSentence(sentence);
printSentence(name);

function printPlayers(object) {
  console.log(object.players);
}

printPlayers(lakers);

function printEachPlayer(object) {
  object.players.forEach((eachPlayer) => {
    console.log(eachPlayer);
  });
}
printEachPlayer(lakers);

function doesThisReallyWork(boolean) {
  if (boolean) {
    console.log("this works");
  } else {
    console.log("this does not work");
  }
}
doesThisReallyWork(doesThisWork);

const sectionOne = document.getElementById("section-one");
console.log(sectionOne);

const sectionTwo = document.getElementById("section-two");
console.log(sectionTwo);

const sectionThree = document.querySelector("#section-three");
console.log(sectionThree);

const sectionFour = document.querySelector("#section-four");
console.log(sectionFour);

const sectionFive = document.querySelector("#section-five");
console.log(sectionFive);

// use this henceforth - Prof. Bell

sectionOne.textContent = "Biggie";
sectionTwo.textContent = "Tupac";
sectionThree.textContent = "Glazed Doughnuts";
sectionFour.textContent = "Humble Honey";
sectionFive.textContent = "Singh is King";

// DOM (most common mistake when working with the DOM is forgetting the . before class)

const paraOne = document.querySelector(".paragraph-one");
console.log(paraOne);

paraOne.textContent = "It was all a DREAM";

const paraTwo = document.querySelector(".paragraph-two");
console.log(paraTwo);

paraTwo.textContent = "Hit them UP";

const paraThree = document.querySelector(".paragraph-three");
console.log(paraThree);

paraThree.textContent = "Krispay kraym";

const paraFour = document.querySelector(".paragraph-four");
console.log(paraFour);

paraFour.textContent = "bee my bebe";

const paraFive = document.querySelector(".paragraph-five");
console.log(paraFive);

paraFive.textContent = "Masala is Lyfe";

//

const containerSix = document.createElement("div");
containerSix.classList.add("container-six");
console.log(containerSix);

const sectionSix = document.createElement("h2");
sectionSix.setAttribute("id", "section-six");
sectionSix.textContent = "Weezy";
console.log(sectionSix);

const paraSix = document.createElement("p");
paraSix.classList.add("paragraph-six");
paraSix.textContent = "Turn your fruits in to Vegtables";
console.log(paraSix);

const body = document.querySelector("body");
console.log(body);

body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paraSix);

// create another container
const containerSeven = document.createElement("div");
// add class
containerSeven.classList.add("container-seven");
console.log(containerSeven);
// create another section
const sectionSeven = document.createElement("h2");
// add id
sectionSeven.setAttribute("id", "section-seven");
// add textContent
sectionSeven.textContent = "Jai Wolf";
console.log(sectionSeven);
// create another paragraph
const paraSeven = document.createElement("p");
// add a class
paraSeven.classList.add("paragraph-seven");
// add textContent
paraSeven.textContent = "Stargalaxy Travelling Milky way Bruising";
console.log(paraSeven);

// append the container to the body
body.appendChild(containerSeven);
// append section to the container
containerSeven.appendChild(sectionSeven);
// append the paragraph to the container
containerSeven.appendChild(paraSeven);
