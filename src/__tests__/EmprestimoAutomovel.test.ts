import EmprestimoAutomovel from '../emprestimos/EmprestimoAutomovel';

describe('EmprestimoAutomovel', () => {
  it('deve aprovar empréstimo se atender aos critérios', () => {
    const emprestimo = new EmprestimoAutomovel('Ana', 22, 19200, 24, 800, 3500, true);
    expect(emprestimo.verificarAprovacao()).toBe(true);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoAutomovel('Ana', 17, 19200, 24, 800, 3500, true);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoAutomovel('Ana', 22, 20000, 24, 800, 3500, true);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoAutomovel('Ana', 22, 19200, 24, 800, 2900, true);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoAutomovel('Ana', 22, 19200, 24, 800, 3500, false);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });
});
