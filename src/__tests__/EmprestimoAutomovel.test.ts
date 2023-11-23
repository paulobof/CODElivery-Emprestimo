import EmprestimoAutomovel from '../emprestimos/EmprestimoAutomovel';

describe('EmprestimoAutomovel', () => {
  it('deve aprovar empréstimo se atender aos critérios', () => {
    const emprestimo = new EmprestimoAutomovel('Maria', 22, 20000, 24, 3500, true);
    expect(emprestimo.verificarAprovacao()).toBe(true);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoAutomovel('João', 25, 20000, 24, 2500, false);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });
});