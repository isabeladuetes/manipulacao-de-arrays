let gradeCurricular = [
    "Matemática",
    "Português",
    "Biologia",
    "Física",
    "História",
    "Educação Física",
    "Inglês"
  ];
  
  console.table(gradeCurricular);

// Removendo 3 elementos a partir do índice 4
  gradeCurricular.splice(2, 3, "Programação" , "Robotica")
  console.table(gradeCurricular);