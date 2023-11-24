import EmprestimoPessoal from './emprestimos/EmprestimoPessoal';
import EmprestimoAutomovel from './emprestimos/EmprestimoAutomovel';
import EmprestimoEstudantil from './emprestimos/EmprestimoEstudantil';
import Processador from './processadores/Processador';

class Main {
  static run() {
    const solicitacoes = [
      
      new EmprestimoPessoal('João1', 25, 4800, 12, 400, 3000),
      new EmprestimoPessoal('João2', 17, 4800, 12, 400, 3000),
      new EmprestimoPessoal('João3', 25, 2000, 12, 400, 3000),
      new EmprestimoPessoal('João4', 25, 4800, 12, 400, 2400),

      new EmprestimoAutomovel('Ana1', 22, 19200, 24, 800, 3500, true),
      new EmprestimoAutomovel('Ana2', 17, 19200, 24, 800, 3500, true),
      new EmprestimoAutomovel('Ana3', 22, 20000, 24, 800, 3500, true),
      new EmprestimoAutomovel('Ana4', 22, 19200, 24, 800, 2900, true),
      new EmprestimoAutomovel('Ana5', 22, 19200, 24, 800, 3500, false),

      new EmprestimoEstudantil('Gabriel1', 19, 1200, 6, 200, 2000, true, true),
      new EmprestimoEstudantil('Gabriel2', 17, 1200, 6, 200, 2000, true, true),
      new EmprestimoEstudantil('Gabriel3', 19, 1300, 6, 200, 1400, true, true),
      new EmprestimoEstudantil('Gabriel4', 19, 1200, 6, 200, 2000, false, true),
      new EmprestimoEstudantil('Gabriel5', 19, 1200, 6, 200, 2000, true, false),
    ];

    const resultados = Processador.processarSolicitacoes(solicitacoes);

    console.log('Resultados:');
    resultados.forEach((resultado) => {
      console.log(resultado);
    });
  }
}

Main.run();