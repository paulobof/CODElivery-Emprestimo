import EmprestimoPessoal from './emprestimos/EmprestimoPessoal';
import EmprestimoAutomovel from './emprestimos/EmprestimoAutomovel';
import EmprestimoEstudantil from './emprestimos/EmprestimoEstudantil';
import Processador from './processadores/Processador';

class Main {
  static run() {
    const solicitacoes = [
      new EmprestimoPessoal('João', 25, 5000, 12, 3000),
      new EmprestimoAutomovel('Maria', 22, 20000, 24, 3500, true),
      new EmprestimoEstudantil('Pedro', 19, 1000, 6, 2000, true),
    ];

    const resultados = Processador.processarSolicitacoes(solicitacoes);

    console.log('Resultados:');
    resultados.forEach((resultado) => {
      console.log(resultado);
    });
  }
}

Main.run();