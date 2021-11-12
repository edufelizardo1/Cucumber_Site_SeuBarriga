# language: pt
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

  Cenário: Deve inserir uma conta com sucesso
    E inform a conta "Conta de Teste"
    E seleciono salvar
    Entao  a conta é inserida com sucesso

  Cenário: Não deve inserir uma conta sem nome
    E seleciono salvar
    Entao  Sou notificado que o nome da conta é obrigatório

  Cenário: Não deve inserir uma conta com nome já existente
    E inform a conta "Conta mesmo nome"
    E seleciono salvar
    Entao  sou notificado que já existe uma conta com esse nome