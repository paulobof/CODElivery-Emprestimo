import Emprestimo from './Emprestimo';

export default class EmprestimoEstudantil extends Emprestimo {
  verificarAprovacao(): boolean {
    return (
      this.idade >= 18 &&
      this.idade <= 30 &&
      this.valor === this.numParcelas * this.valorParcela &&
      this.rendaMensal > 1500 &&
      this.matriculadoInstituicaoSuperior
    );
  }
}