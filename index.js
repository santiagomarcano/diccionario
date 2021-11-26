// const { saludo, sumar } = require("./test"); // CommonJS
import { saludo, sumar } from "./test.js"; // ES6 Modules

import fetch from "node-fetch";

// const suma = sumar(10, 10);

// console.log(saludo);

// const fetch = require("node-fetch");

fetch("https://swapi.dev/api/people/2")
  .then((res) => res.json())
  .then(console.log)
  .catch(() => {});

async function main() {
  const res = await fetch("https://www.googleapis.com/youtube/v3/videos", {
    method: "POST",
    headers: {
      Authorization: "Bearer AIzaSyB7aNo47i4bxRtMRnMtQqpwJo8vKxfwqWk",
    },
    body: JSON.stringify({}),
  });
  const result = await res.json();
  console.log(result);
}

main();

// METODOS -> GET, POST, PUT, DELETE

// Content-Type: img/png

// HEADERS -> (Metadatos de la llamada), que tipo de dato estamos enviando, cuanto puede pesar, que espero respuesta

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyB7aNo47i4bxRtMRnMtQqpwJo8vKxfwqWk&part=snippet,id&order=date&maxResults=20&q=Carro
