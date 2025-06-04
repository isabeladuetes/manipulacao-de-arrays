let codigos = [
    "abc123",
    "def456",
    "ghi789",
    "jkl012",
    "mno345",
    "pqr678",
    "stu901",
    "vwx234"
  ];

// Transformando os códigos dos produtos em letras maiúsculas 
  let codigosEmCaps = codigos.map(codigo => codigo.toUpperCase());

  console.log("Códigos letras em maiúsculas:", codigosEmCaps);