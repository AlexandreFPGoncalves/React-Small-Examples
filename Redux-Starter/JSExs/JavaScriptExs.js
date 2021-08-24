//import lodash
import { compose, pipe } from "lodash/fp";
//import immutable
import { Map } from "immutable";
//import immer
import { produce } from "immer";

///1
//Lodash Example - vai trabalhar uma string
let input = "           Java          ";
//funções q trabalham strs.
const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();
//utilização do pipe para criar apenas uma função que engloba todas.
const transform = pipe(trim, toLowerCase, wrap("div"));
console.log("Ex: 1", transform(input));

///2
//...spread, light and deep copies.
const person = {
  name: "Alex",
  address: { country: "Portugal", city: "Porto" },
};
const updated = {
  ...person, //light copy
  address: {
    //deep copy
    ...person.address,
    city: "Lisbon",
  },
  name: "Pedro",
};
console.log("Ex: 2", updated);

//adding a number on array
const numbers = [1, 2, 3];

const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log("Ex: 3", added);

//removing number from array

const removed = numbers.filter((n) => n !== 2);
console.log("Ex: 4", removed);

//Updating a number on Array

const updatedNumber = numbers.map((n) => (n === 2 ? 20 : n));
console.log("Ex: 5", updatedNumber);

//Immutable Example

let book = Map({ title: "Harry Potter" });
function publish(book) {
  return book.set("isPublished", true);
}
book = publish(book);
console.log("Ex: 6", book.toJS());

//immer Example

let game = { title: "Pokemon" };
function isPublished(game) {
  return produce(game, (draftGame) => {
    draftGame.isPublished = true;
  });
}

let updatedGame = isPublished(game);
console.log("Ex: 7", "game:", game, "UpdatedGame: ", updatedGame);
