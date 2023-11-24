export default abstract class Emprestimo {
  constructor(
    protected nome: string,
    protected idade: number,
    protected valor: number,
    protected numParcelas: number,
    protected valorParcela: number,
    protected rendaMensal: number,
    protected possuiHabilitacao?: boolean,
    protected matriculadoInstituicaoSuperior?: boolean
  ) {}

  abstract verificarAprovacao(): boolean;

  getNome(): string {
    return this.nome;
  }
}