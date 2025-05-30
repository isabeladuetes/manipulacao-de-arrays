let cardapio = [
    "pizza de calabresa",
    "lasanha",
    "sushi",
    "salada Caesar",
    "pastel",
    "yakisoba",
    "feijoada"
  ];

  console.log("Antes do push:");
  console.table(cardapio);
  
  // Adicionando novos itens no final da lista 
  cardapio.push('hambúrguer artesanal', 'wrap de frango');
  
  console.log("Depois do push:");
  console.table(cardapio);