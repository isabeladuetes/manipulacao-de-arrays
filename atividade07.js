let filaAtendimento = [
    "cliente 003",
    "cliente 004",
    "cliente 005",
    "cliente 006",
    "cliente 007"
  ];

console.log("Antes do unshift:")
console.table(filaAtendimento);

// Adicionando novos clientes
filaAtendimento.unshift('cliente 001', 'cliente 002');

console.log("Depois do unshift:");
console.table(filaAtendimento);