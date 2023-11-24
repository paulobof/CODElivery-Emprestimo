import EmprestimoPessoal from '../emprestimos/EmprestimoPessoal';

describe('EmprestimoPessoal', () => {
  it('deve aprovar empréstimo se atender aos critérios', () => {
    const emprestimo = new EmprestimoPessoal('João', 25, 4800, 12, 400, 3000);
    expect(emprestimo.verificarAprovacao()).toBe(true);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoPessoal('João', 17, 4800, 12, 400, 3000);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoPessoal('João', 25, 2000, 12, 400, 3000);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoPessoal('João', 25, 4800, 12, 400, 2400);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });
});
