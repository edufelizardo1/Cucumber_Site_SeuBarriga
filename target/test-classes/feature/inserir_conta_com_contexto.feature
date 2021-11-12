# language: pt
@terceiro
Funcionalidade: Testar o site Seu Barriga
  Como um usuário
  Eu quero cadastrar contas
  para poder distribuir meu dinheiro de uma forma mais organizada

  Contexto: Efetuar o login no sistema
    Dado que estou acessando a aplicação
    Quando  informo o usuário "edufelizardo1@gmail.com"
    E a senha "256249"
    E seleciono entrar
    Então  visualizo a página inicial
    Quando seleciono Contas
    E seleciono adincionar

  Esquema do Cenário: Cenário: Deve inserir uma conta com sucesso
    E inform a conta "<ContadeTeste>"
    E seleciono salvar
    Entao  recebo a mensagem "<mensagem>"
    Exemplos:
      | ContadeTeste     | mensagem                           |
      | Conta de Teste   | Conta adicionada com sucesso!      |
      |                  | Informe o nome da conta            |
      | Conta mesmo nome | Já existe uma conta com esse nome! |