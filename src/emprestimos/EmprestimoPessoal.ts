import Emprestimo from './Emprestimo';

class EmprestimoPessoal extends Emprestimo {
  verificarAprovacao(): boolean {
    return this.idade >= 18 && this.rendaMensal > 2500;
  }
}

export default EmprestimoPessoal;