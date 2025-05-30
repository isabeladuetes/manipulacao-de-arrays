let promocoes = [
    "teclado mecânico",
    "mouse gamer",
    "monitor ultrawide",
    "cadeira ergonômica",
    "webcam HD",
    "fone bluetooth",
    "notebook i5",
    "hub USB"
  ];

  console.log("Antes do push:");
  console.table(promocoes);
  
  // Adicionando novos produtos em promoção da semana
  promocoes.push('SSD 1TB', 'mesa digitalizadora');
  
  console.log("Depois do push:");
  console.table(promocoes);