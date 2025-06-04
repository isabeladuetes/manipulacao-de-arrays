let chamada = [
    "Carlos",
    "Fernanda",
    "João",
    "Mariana",
    "Lucas",
    "Camila"
  ];

console.log("Antes do unshift:")
console.table(chamada);

// Adicionando novas pessoas na lista de chamada
chamada.unshift("Beatriz", "Rafaela");

console.log("Depois do unshift:");
console.table(chamada);