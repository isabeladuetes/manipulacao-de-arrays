let importados = [
    "carregador portátil",
    "cabo HDMI",
    "leitor biométrico",
    "controle sem fio",
    "webcam 4K"
  ];

  console.log("Antes do shift:");
  console.table(importados);
  
  // Removendo o primeiro estilo
  let importadoRemovido = importados.shift();
  
  console.log("Depois do shift:");
  console.table(importados);
  
  console.log("Produto importado removido:", importadoRemovido);