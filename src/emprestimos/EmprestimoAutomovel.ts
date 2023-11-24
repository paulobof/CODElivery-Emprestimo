import Emprestimo from './Emprestimo';

export default class EmprestimoAutomovel extends Emprestimo {
  verificarAprovacao(): boolean {
    return (
      this.idade >= 18 &&
      this.valor === this.numParcelas * this.valorParcela &&
      this.rendaMensal > 3000 &&
      this.possuiHabilitacao
    );
  }
}