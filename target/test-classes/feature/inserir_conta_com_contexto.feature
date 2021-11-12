# language: pt
@terceiro
Funcionalidade: Testar o site Seu Barriga usando contexto
  Como um usuário
  Eu quero cadastrar contas
  para poder distribuir meu dinheiro de uma forma mais organizada

  Contexto: Efetuar o login no sistema
    Dado que estou acessando a aplicação
    Quando  informo o usuário "qatester@tester.qa"
    E a senha "qa"
    E seleciono entrar
    Então  visualizo a página inicial

  Cenário: dar reset em banco de dados
    E vendo o link de reset eu clico para resetar os meus dados

  Esquema do Cenário: Cenário: Deve inserir uma conta com sucesso
    Quando seleciono Contas
    E seleciono adincionar
    E inform a conta "<ContadeTeste>"
    E seleciono salvar
    Entao  recebo a mensagem "<mensagem>"
    Exemplos:
      | ContadeTeste     | mensagem                           |
      | Conta de Teste   | Conta adicionada com sucesso!      |
      |                  | Informe o nome da conta            |
      | Conta mesmo nome | Já existe uma conta com esse nome! |
