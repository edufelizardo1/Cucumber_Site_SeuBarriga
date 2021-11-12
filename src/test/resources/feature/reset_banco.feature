# language: pt
@segundo
Funcionalidade: Efetura reset em minha conta
  Como usuário do sistema
  Eu quero acessar o sistema
  Para poder dar um reset em minha conta

  Cenário: Reset em banco de dados de conta
    Dado que estou acessando a aplicação
    Quando  informo o usuário "email1@gmail.com"
    E a senha "******"
    E seleciono entrar
    Então  visualizo a página inicial
    E vendo o link de reset eu clico para resetar os meus dados