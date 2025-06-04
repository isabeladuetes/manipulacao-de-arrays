let inscritos = ["Pedro", "Larissa", "João", "Amanda", "Lucas", "Mariana"];

console.log("Antes do pop:");
console.table(inscritos);

// Removendo o último produto com defeito
let inscritoRemovido = inscritos.pop();

console.log("Depois do pop:");
console.table(inscritos);

console.log("Inscrito removido:", inscritoRemovido);