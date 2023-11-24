import Emprestimo from './Emprestimo';

export default class EmprestimoPessoal extends Emprestimo {
  verificarAprovacao(): boolean {
    return (
      this.idade >= 18 &&
      this.valor === this.numParcelas * this.valorParcela &&
      this.rendaMensal > 2500
    );
  }
}