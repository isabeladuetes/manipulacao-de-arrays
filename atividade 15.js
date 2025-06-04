let menuNavegacao = [
    "Início",
    "Serviços",
    "Portfólio",
    "Blog",
    "Contato",
    "Login",
    "Área do cliente"
  ];

console.log("Antes do splice:");
console.table(menuNavegacao);

// Removendo 2 elementos a partir do índice 3
let elementosRemovidos = menuNavegacao.splice(2, 3);

console.log("Depois do splice:");
console.table(menuNavegacao);

console.log(elementosRemovidos);