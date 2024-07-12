document.getElementById('formNotas').addEventListener('submit', function(event) {
  event.preventDefault();

  let nota1 = parseFloat(document.getElementById('nota1').value);
  let nota2 = parseFloat(document.getElementById('nota2').value);
  let nota3 = parseFloat(document.getElementById('nota3').value);

  let media = calcularMedia(nota1, nota2, nota3);
  let classificacao = classificarAluno(media);

  document.getElementById('media').textContent = 'Média: ' + media.toFixed(2);
  document.getElementById('classificacao').textContent = 'Classificação: ' + classificacao;
});

function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function classificarAluno(media) {
  if (media >= 7) {
    return 'Aprovado';
  } else if (media >= 5) {
    return 'Em Recuperação';
  } else {
    return 'Reprovado';
  }
}
