## CODElivery-Emprestimo

# TRABALHO ADA SEM SER TECH - MODULO02 POO - INDIVIDUAL - EMPRESTIMO

Trabalho Individual - Módulo de Programação Orientada a Objetos

SISTEMA DE EMPRÉSTIMO

Você é encarregado de desenvolver um script que automatiza a aprovação de empréstimos com base em critérios específicos.

Há três tipos possíveis de solicitação de empréstimo: pessoal, automóvel e estudantil.

Diariamente você receberá uma lista de solicitações no seguinte formato:

SolicitacaoEmprestimo.add(new EmprestimoPessoal(param1, param2, param3, param4, param5, param6, param7, param8));
SolicitacaoEmprestimo.add(new EmprestimoAutomovel(param1, param2, param3, param4, param5, param6, param7, param8));
SolicitacaoEmprestimo.add(new EmprestimoEstudantil(param1, param2, param3, param4, param5, param6, param7, param8));

Onde:

param1 = Nome do Solicitante
param2 = Idade do Solicitante
param3 = Valor requerido para o empréstimo
param4 = Número de parcelas desejadas
param5 = Valor da parcela
param6 = Renda mensal do solicitante
param7 = Se possui habilitação
param8 = Se está matriculado em uma instituição de ensino superior

O seu script deverá processar as solicitações, filtrar as que atendem aos critérios de aprovação descritos abaixo:

1. O solicitante deve ter no mínimo 18 anos.
2. O valor total do empréstimo deve ser igual ao número de parcelas multiplicado pelo valor por parcela.
3. Para empréstimos do tipo "pessoal", o solicitante deve ter uma renda mensal superior a de R$ 2.500,00.
4. Para empréstimos do tipo "automóvel", o solicitante deve ter uma renda mensal superior a R$ 3.000,00 e possuir habilitação.
5. Para empréstimos do tipo "estudantil", o solicitante deve ter entre 18 e 30 anos, renda superior a R$ 1.500,00 e estar 
    matriculado em uma instituição de ensino superior.

Em seguida, o sistema deve listar as solicitações aprovadas e reprovadas no seguinte formato:

- Nome Solicitante 1 [APROVADO]
- Nome Solicitante 2 [REPROVADO]
.....

Lembre-se de usar função estática e classe abstrata na sua implementação.

Lembre-se de considerar a orientação a objetos, de modo geral, em seu design e implementação do sistema.
Boa codificação!

# Resolução do exercício

Você precisar ter instalado em seu computador: [GIT](https://git-scm.com/), [Node.js](https://github.com/rafael-neri/projeto-poo.git) e [Visual Studio Code](https://code.visualstudio.com/).

Para executar o código typescript você precisa instalar o ts-node:
```sh
npm install -g ts-node
```

Para acessar o projeto:
```sh
git clone https://github.com/paulobof/CODElivery-Emprestimo.git
cd CODElivery-Emprestimo
code .
```

Para executar o projeto:
```sh
ts-node ./src/Main.ts
```

Desenvolvido por Paulo Bof