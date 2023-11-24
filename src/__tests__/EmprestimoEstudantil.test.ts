import EmprestimoEstudantil from '../emprestimos/EmprestimoEstudantil';

describe('EmprestimoEstudantil', () => {
  it('deve aprovar empréstimo se atender aos critérios', () => {
    const emprestimo = new EmprestimoEstudantil('Gabriel', 19, 1200, 6, 200, 2000, true, true);
    expect(emprestimo.verificarAprovacao()).toBe(true);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoEstudantil('Gabriel', 17, 1200, 6, 200, 2000, true, true);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoEstudantil('Gabriel', 19, 1300, 6, 200, 1400, true, true);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });

  it('deve aprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoEstudantil('Gabriel', 19, 1200, 6, 200, 2000, false, true);
    expect(emprestimo.verificarAprovacao()).toBe(true);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoEstudantil('Gabriel', 19, 1200, 6, 200, 2000, true, false);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });
});