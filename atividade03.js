let producao = [
    "mousepad",
    "placa de vídeo",
    "fonte de alimentação",
    "HD externo",
    "notebook gamer",
    "roteador"
  ];

console.log("Antes do pop:");
console.table(producao);

// Removendo o último produto com defeito
let produtoRemovido = producao.pop();

console.log("Depois do pop:");
console.table(producao);

console.log("Produto removido:", produtoRemovido);