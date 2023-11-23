import Emprestimo from './Emprestimo';

class EmprestimoAutomovel extends Emprestimo {
  private possuiHabilitacao: boolean;

  constructor(
    nome: string,
    idade: number,
    valor: number,
    numParcelas: number,
    rendaMensal: number,
    possuiHabilitacao: boolean
  ) {
    super(nome, idade, valor, numParcelas, rendaMensal);
    this.possuiHabilitacao = possuiHabilitacao;
  }

  verificarAprovacao(): boolean {
    return this.idade >= 18 && this.rendaMensal > 3000 && this.possuiHabilitacao;
  }
}

export default EmprestimoAutomovel;