let estoque = [
    { produto: "Teclado", quantidade: 5 },
    { produto: "Mouse", quantidade: 12 },
    { produto: "Monitor", quantidade: 3 },
    { produto: "Notebook", quantidade: 18 },
    { produto: "Impressora", quantidade: 9 },
    { produto: "Webcam", quantidade: 20 }
  ];

// Filtrando produtos com quantidade maior que 10 unidades
  let estoqueFiltrada = estoque.filter(produtos => produtos.quantidade > 10);

  console.log(`Estoque filtrado (mais que 10 quantidades): ${estoqueFiltrada}`);