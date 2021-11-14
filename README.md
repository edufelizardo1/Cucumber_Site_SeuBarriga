# Selenium - Site Seu Barriga
![Profile views](https://visitor-badge.glitch.me/badge?page_id=edufelizardo1.visitor-Cucumber_Site_SeuBarriga)
![GitHub followers](https://img.shields.io/github/followers/edufelizardo1?style=social)
<!-- ![Profile views](https://gpvc.arturio.dev/edufelizardo1) -->
[![made-with-java](https://img.shields.io/badge/Language-Java-1f425f.svg)](https://www.oracle.com/br/java/technologies/javase-jdk8-doc-downloads.html)
[![made-with-java](https://img.shields.io/badge/framework-Gherkin-1f425f.svg)](https://cucumber.io/docs/gherkin/)
[![Framework-Cucumber](https://img.shields.io/badge/framework-Cucumber-1f425f.svg)](https://cucumber.io/)
<!-- ![Profile views](https://gpvc.arturio.dev/edufelizardo1) -->
[![made-with-java](https://img.shields.io/badge/framework-JUnit-1f425f.svg)](https://junit.org/junit4/)
[![made-with-java](https://img.shields.io/badge/framework-Selenium-1f425f.svg)](https://www.selenium.dev/)
[![made-with-java](https://img.shields.io/badge/ide-Intellij-1f425f.svg)](https://www.jetbrains.com/)
<!-- ![Profile views](https://gpvc.arturio.dev/edufelizardo1) -->
[![GitHub license](https://img.shields.io/github/license/edufelizardo1/CucumberBasic)](https://github.com/edufelizardo1/Cucumber_Site_SeuBarriga/blob/main/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/edufelizardo1/CucumberBasic)](https://github.com/edufelizardo1/Cucumber_Site_SeuBarriga/network)
[![GitHub stars](https://img.shields.io/github/stars/edufelizardo1/CucumberBasic)](https://github.com/edufelizardo1/Cucumber_Site_SeuBarriga/stargazers)
[![Generic badge](https://img.shields.io/static/v1?label=build&message=success&color=<COLOR>)]()
### Dependências
* info.cuke- cucumber-java
* info.cuke- cucumber-juint
* org.seleniumhq.selenium
* chromedriver.exe
* https://seubarriga.wcaquino.me/login

Será necessário acessar o site descrito e fazer o cadastro para que os testes possam ser aplicados.

#### O que é esperado:
* Inserir conta com nome;
* Inserir conta sem nome;
* Inserir conta já existente;
* Hooks;
* Gerenciamento de Massa de Dados;
* Contexto;
* Cenários imperativos x Cenários declarativos

## Exemplos:
##### Feature
~~~
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
~~~

São testes Simples que procuram entender a funcionalidade da ferramenta ***Selenium***. Também tem como ituíto otimizar 
os tempos de testes. A minha necessidade de contribuir para com meu time de desnvolvimento, fez com que eu me 
enteressasse em estudar esta ferramenta, para pode unir as técncicas de desevolvimento ***ágil***.
