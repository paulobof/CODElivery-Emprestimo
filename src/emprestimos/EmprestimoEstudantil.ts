import Emprestimo from './Emprestimo';

class EmprestimoEstudantil extends Emprestimo {
  private estaMatriculado: boolean;

  constructor(
    nome: string,
    idade: number,
    valor: number,
    numParcelas: number,
    rendaMensal: number,
    estaMatriculado: boolean
  ) {
    super(nome, idade, valor, numParcelas, rendaMensal);
    this.estaMatriculado = estaMatriculado;
  }

  verificarAprovacao(): boolean {
    return (
      this.idade >= 18 &&
      this.idade <= 30 &&
      this.rendaMensal > 1500 &&
      this.estaMatriculado
    );
  }
}

export default EmprestimoEstudantil;