/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#allDomains").innerHTML = domainNameGenerator();
  });
};

const domainNameGenerator = () => {
  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "worst"];
  let noun = ["jogger", "racoon", "food", "thing"];
  let ext = [".com", ".net", ".io", ".us"];

  var result = [];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < ext.length; e++) {
          result.push(`${pronoun[p]}${adj[a]}${noun[n]}${ext[e]}`);
        }
      }
    }
  }

  return result.join("</br>");
};