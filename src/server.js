const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.static("public", {}));

function getDiccionario() {
  const diccionario = fs.readFileSync("./src/database/diccionario.json");
  return JSON.parse(diccionario.toString());
}

function writeDiccionario(diccionario) {
  fs.writeFileSync(
    "./src/database/diccionario.json",
    JSON.stringify(diccionario, null, 2)
  );
}

app.get("/diccionario", function (request, response) {
  response.json({ diccionario: getDiccionario() });
});

app.post("/diccionario", function (request, response) {
  //   if (Math.random() > 0.5) {
  //     response.status(404).json({ status: "Invalid" });
  //   } else {
  //     response.status(200).json({ status: "OK" });
  //   }
  // console.log(request.body);
  const { english, spanish } = request.body;
  const diccionario = getDiccionario();
  const duplicated = diccionario.find(
    (item) =>
      item.english === english.toLowerCase() ||
      item.spanish === spanish.toLowerCase()
  );
  if (duplicated) {
    return response.status(409).json({ diccionario });
  }
  diccionario.push({
    english: english.toLowerCase(),
    spanish: spanish.toLowerCase(),
    id: diccionario.length + 1,
  });
  writeDiccionario(diccionario);
  response.status(200).json({ diccionario });
});

app.put("/diccionario/:id", function (request, response) {});

app.delete("/diccionario/:id", function (request, response) {
  // Deconstrucción de propiedad dentro de una propiedad de un objeto
  // const { id } = request.params;
  const id = request.params.id;
  const diccionario = getDiccionario();
  const filteredDiccionario = diccionario.filter((item) => item.id != id);
  writeDiccionario(filteredDiccionario);
  response.status(200).json({ diccionario: filteredDiccionario });
});

app.listen(4000, function () {
  console.log("Servidor escuchando en el puerto 4000");
});
