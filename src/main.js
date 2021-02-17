/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["Mi perro", "Mi abuela", "La tortuga", "Mi gato"];
  let action = ["se comió", "se orinó", "rompio", "daño"];
  let what = ["mi tarea", "mis llaves", "el carro", "mi computadora"];
  let when = [
    "antes de clases",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras paseaba"
  ];

  let var1 = who[Math.round(Math.random() * (who.length - 1))];
  let var2 = action[Math.round(Math.random() * (action.length - 1))];
  let var3 = what[Math.round(Math.random() * (what.length - 1))];
  let var4 = when[Math.round(Math.random() * (when.length - 1))];

  let respuestas = var1 + " " + var2 + " " + var3 + " " + var4;
  document.querySelector("#respuestas").innerHTML = respuestas;
};
