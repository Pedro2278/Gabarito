document.getElementById('formBonus').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let salarioBase = parseFloat(document.getElementById('salarioBase').value);
    let anosServico = parseFloat(document.getElementById('anosServico').value);
    let avaliacaoDesempenho = document.getElementById('avaliacaoDesempenho').value.toLowerCase();
  
    let bonus = calcularBonus(salarioBase, anosServico, avaliacaoDesempenho);
    let novoSalario = salarioBase + bonus;
  
    document.getElementById('bonus').textContent = 'Bônus: R$ ' + bonus.toFixed(2);
    document.getElementById('novoSalario').textContent = 'Novo Salário Total: R$ ' + novoSalario.toFixed(2);
  });
  
  function calcularBonus(salarioBase, anosServico, avaliacaoDesempenho) {
    let percentualBonus;
  
    if (anosServico > 10) {
      percentualBonus = 0.10;
    } else if (anosServico >= 5) {
      percentualBonus = 0.07;
    } else {
      percentualBonus = 0.05;
    }
  
    let bonus = salarioBase * percentualBonus;
  
    if (avaliacaoDesempenho === 'excelente') {
      bonus *= 2;
    }
  
    return bonus;
  }
  