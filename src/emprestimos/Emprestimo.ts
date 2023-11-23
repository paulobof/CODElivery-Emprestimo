abstract class Emprestimo {

    constructor(
      protected nome: string,
      protected idade: number,
      protected valor: number,
      protected numParcelas: number,
      protected rendaMensal: number
    ) {}
  
    abstract verificarAprovacao(): boolean;
  
    toString(): string {
      return `${this.nome} [${this.verificarAprovacao() ? 'APROVADO' : 'REPROVADO'}]`;
    }

    getNome() {
      return this.nome
    }
  }
  
  export default Emprestimo;