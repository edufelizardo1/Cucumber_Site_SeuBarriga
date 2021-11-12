# language: pt
Funcionalidade: Testar o site Seu Barriga
  Como um usuário
  Eu quero cadastrar contas
  para poder distribuir meu dinheiro de uma forma mais organizada

  @ignore
  Esquema do Cenário: Deve inserir uma conta com sucesso
    Dado que estou acessando a aplicação
    Quando  informo o usuário "<seuUsuario>"
    E a senha "<suaSenha>"
    E seleciono entrar
    Então  visualizo a página inicial
    Quando seleciono Contas
    E seleciono adincionar E inform a conta "Conta de Teste"
    E seleciono salvar
    Entao  a conta é inserida com sucesso
    Exemplos:
      | seuUsuario   | suaSenha |
      | edufeliz**** | ******   |

  @ignore
  Esquema do Cenário: Não deve inserir uma conta sem nome
    Dado que estou acessando a aplicação
    Quando  informo o usuário "<seuUsuario>"
    E a senha "<suaSenha>"
    E seleciono entrar
    Então  visualizo a página inicial
    Quando seleciono Contas
    E seleciono salvar
    Entao  Sou notificado que o nome da conta é obrigatório
    Exemplos:
      | seuUsuario   | suaSenha |
      | edufeliz**** | ******   |

  @ignore
  Esquema do Cenário: Não deve inserir uma conta com nome já existente
    Dado que estou acessando a aplicação
    Quando  informo o usuário "<seuUsuario>"
    E a senha "<suaSenha>"
    E seleciono entrar
    Então  visualizo a página inicial
    Quando seleciono Contas
    E seleciono adincionar E inform a conta "Conta de Teste"
    E seleciono salvar
    Entao  sou notificado que já existe uma conta com esse nome
    Exemplos:
      | seuUsuario   | suaSenha |
      | edufeliz**** | ******   |