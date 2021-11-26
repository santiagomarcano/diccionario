const saludo = "Hola Mundo!";

function sumar(a, b) {
  return a + b;
}

// module.exports = {
//     saludo,
//     sumar
// } // CommonJS (require)

export { saludo, sumar }; // ES6 Module
