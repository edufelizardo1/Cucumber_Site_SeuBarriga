# language: pt
@primeiro
Funcionalidade: Testar o site Seu Barriga
  Como um usuário
  Eu quero cadastrar contas
  para poder distribuir meu dinheiro de uma forma mais organizada

  Esquema do Cenário: Deve inserir uma conta com sucesso
    Dado que estou acessando a aplicação
    Quando  informo o usuário "<seuUsuario>"
    E a senha "<suaSenha>"
    E seleciono entrar
    Então  visualizo a página inicial
    Quando seleciono Contas
    E seleciono adincionar
    E inform a conta "<ContadeTeste>"
    E seleciono salvar
    Entao  recebo a mensagem "<mensagem>"
    Exemplos:
      | seuUsuario       | suaSenha | ContadeTeste     | mensagem                           |
      | email1@gmail.com | ******   | Conta de Teste   | Conta adicionada com sucesso!      |
      | email1@gmail.com | ******   |                  | Informe o nome da conta            |
      | email1@gmail.com | ******   | Conta mesmo nome | Já existe uma conta com esse nome! |


#  Esquema do Cenário: Não deve inserir uma conta sem nome
#    Dado que estou acessando a aplicação
#    Quando  informo o usuário "<seuUsuario>"
#    E a senha "<suaSenha>"
#    E seleciono entrar
#    Então  visualizo a página inicial
#    Quando seleciono Contas
#    E seleciono adincionar
#    E seleciono salvar
#    Entao  Sou notificado que o nome da conta é obrigatório
#    Exemplos:
#      | seuUsuario         | suaSenha |
#      | email@gmail.com    | ******   |
#
#
#  Esquema do Cenário: Não deve inserir uma conta com nome já existente
#    Dado que estou acessando a aplicação
#    Quando  informo o usuário "<seuUsuario>"
#    E a senha "<suaSenha>"
#    E seleciono entrar
#    Então  visualizo a página inicial
#    Quando seleciono Contas
#    E seleciono adincionar
#    E inform a conta "<ContadeTeste>"
#    E seleciono salvar
#    Entao  sou notificado que já existe uma conta com esse nome
#    Exemplos:
#      | seuUsuario         | suaSenha |
##      | email@gmail.com    | ******   |