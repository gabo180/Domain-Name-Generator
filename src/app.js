/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "worst"];
  let noun = ["jogger", "racoon", "food"];
  let ext = [".com", ".net", ".io"];

  for (let p = 0; p < pronoun.length; p++) {
    // console.log(pronoun[p]);
    for (let a = 0; a < pronoun.length; a++) {
      //   console.log(adj[a]);
      for (let n = 0; n < pronoun.length; n++) {
        // console.log(noun[n]);
        for (let e = 0; e < pronoun.length; e++) {
          console.log(`${pronoun[p]}${adj[a]}${noun[n]}${ext[e]}`);
        }
      }
    }
  }
};

//   let getDomainName = () =>
//     `${pronoun[Math.floor(Math.random() * pronoun.length)]}${
//       adj[Math.floor(Math.random() * adj.length)]
//     }${noun[Math.floor(Math.random() * noun.length)]}${
//       ext[Math.floor(Math.random() * ext.length)]
//     }`;
//   console.log(getDomainName());
// };

//   for (let i = 0; i < pronoun.length; i++) {
//     console.log(pronoun[i]);
//   }
// };

// let people = [
//   { name: "Tom", lastname: "Bradley", birthDate: new Date("2001-04-17") },
//   { name: "Dylan", lastname: "Thompson", birthDate: new Date("1982-06-17") },
//   { name: "Shayla", lastname: "Carvol", birthDate: new Date("1991-12-17") },
//   { name: "Bob", lastname: "Hardley", birthDate: new Date("1995-12-20") },
//   { name: "Maria", lastname: "Maneique", birthDate: new Date("1985-11-17") }
// ];
// console.log("The original people: ", people);

// let i = 0;
// while (people.length > i) {
//   console.log("Using while", people[i]);
//   i++;
// }

// for (let a = 0; a < people.length; a++) {
//     console.log("Using for", people[a]);
// }

// people.forEach((person, index) => {
//   console.log("Using forEach", person);
//   person.id = index;
// });

// people.forEach((person, index) => {
//   console.log("Using forEach", person);
//   person.id = index;
//   var ageDifMs = Date.now() - person.birthDate.getTime();
//   var ageDate = new Date(ageDifMs); // miliseconds from epoch
//   person.age = Math.abs(ageDate.getUTCFullYear() - 1970);
// });

// let newArray = people.map((person, index) => {
// //   return person.name + " " + person.lastname;
// // });
// // console.log("The new array: ", newArray);
// // console.log("The old array: ", people);

// // let filteredArray = people.filter(person => {
// //   return person.age <= 20;
// // });
// // console.log("Filtered people", filteredArray);

// let tom = people.find(person => {
//   return person.name == "Tom";
// });
