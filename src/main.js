/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let var1 = who[Math.round(Math.random() * (who.length - 1))];
  let var2 = action[Math.round(Math.random() * (action.length - 1))];
  let var3 = what[Math.round(Math.random() * (what.length - 1))];
  let var4 = when[Math.round(Math.random() * (when.length - 1))];

  let respuestas = var1 + " " + var2 + " " + var3 + " " + var4;
  document.querySelector("#respuestas").innerHTML = respuestas;
};
