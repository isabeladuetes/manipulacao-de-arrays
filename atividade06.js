let mensagens = [
    "Propaganda indevida",
    "Bom dia, posso ajudar?",
    "Preciso de suporte técnico",
    "Claro, qual o problema?",
    "Erro ao acessar conta"
  ];

  console.log("Antes do shift:");
  console.table(mensagens);
  
  // Removendo a primeira mensagem indevida
  let mensagemRemovida = mensagens.shift();
  
  console.log("Depois do shift:");
  console.table(mensagens);
  
  console.log("Mensagem removida:", mensagemRemovida);