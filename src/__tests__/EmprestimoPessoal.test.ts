import EmprestimoPessoal from '../emprestimos/EmprestimoPessoal';

describe('EmprestimoPessoal', () => {
  it('deve aprovar empréstimo se atender aos critérios', () => {
    const emprestimo = new EmprestimoPessoal('João', 25, 5000, 12, 3000);
    expect(emprestimo.verificarAprovacao()).toBe(true);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoPessoal('Maria', 17, 5000, 12, 2000);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });
});