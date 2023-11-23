import Emprestimo from '../emprestimos/Emprestimo';

export default class Processador {
  static processarSolicitacoes(solicitacoes: Emprestimo[]): string[] {
    const resultados: string[] = [];

    solicitacoes.forEach((solicitacao) => {
      const status = solicitacao.verificarAprovacao() ? '[APROVADO]' : '[REPROVADO]';
      resultados.push(`${solicitacao.getNome()} ${status}`);
    });

    return resultados;
  }
}