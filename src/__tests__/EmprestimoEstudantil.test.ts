import EmprestimoEstudantil from '../emprestimos/EmprestimoEstudantil';

describe('EmprestimoEstudantil', () => {
  it('deve aprovar empréstimo se atender aos critérios', () => {
    const emprestimo = new EmprestimoEstudantil('Pedro', 19, 1000, 6, 2000, true);
    expect(emprestimo.verificarAprovacao()).toBe(true);
  });

  it('deve reprovar empréstimo se não atender aos critérios', () => {
    const emprestimo = new EmprestimoEstudantil('Ana', 31, 1000, 6, 2000, true);
    expect(emprestimo.verificarAprovacao()).toBe(false);
  });
});