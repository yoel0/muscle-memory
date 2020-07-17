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
