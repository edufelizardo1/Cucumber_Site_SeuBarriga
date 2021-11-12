$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "Testar o site Seu Barriga",
  "description": "Como um usuário\r\nEu quero cadastrar contas\r\npara poder distribuir meu dinheiro de uma forma mais organizada",
  "id": "testar-o-site-seu-barriga",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"\u003cseuUsuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"\u003csuaSenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "inform a conta \"\u003cContadeTeste\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "a conta é inserida com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;",
  "rows": [
    {
      "cells": [
        "seuUsuario",
        "suaSenha",
        "ContadeTeste"
      ],
      "line": 20,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;1"
    },
    {
      "cells": [
        "edufelizardo1@gmail.com",
        "256249",
        "Conta de Teste"
      ],
      "line": 21,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 21,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"256249\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "inform a conta \"Conta de Teste\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "a conta é inserida com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 6784426800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edufelizardo1@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 389330500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "256249",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 364912400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 765654200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 76345400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 105726200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 431880100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 16
    }
  ],
  "location": "InserirContasteps.informAConta(String)"
});
formatter.result({
  "duration": 233719400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 474580600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 123680600,
  "status": "passed"
});
formatter.after({
  "duration": 2019930600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 25,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 26,
  "name": "informo o usuário \"\u003cseuUsuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "a senha \"\u003csuaSenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 30,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "Sou notificado que o nome da conta é obrigatório",
  "keyword": "Entao "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-sem-nome;",
  "rows": [
    {
      "cells": [
        "seuUsuario",
        "suaSenha"
      ],
      "line": 35,
      "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-sem-nome;;1"
    },
    {
      "cells": [
        "edufelizardo1@gmail.com",
        "256249"
      ],
      "line": 36,
      "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-sem-nome;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 36,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-sem-nome;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 25,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 26,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "a senha \"256249\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 30,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "Sou notificado que o nome da conta é obrigatório",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5377764200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edufelizardo1@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 374782800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "256249",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 185381300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 884803900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 72132500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 160286800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 605380600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 334928600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 84495400,
  "status": "passed"
});
formatter.after({
  "duration": 1771427300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 40,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 41,
  "name": "informo o usuário \"\u003cseuUsuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 42,
  "name": "a senha \"\u003csuaSenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 45,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 46,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "inform a conta \"\u003cContadeTeste\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Entao "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-com-nome-já-existente;",
  "rows": [
    {
      "cells": [
        "seuUsuario",
        "suaSenha",
        "ContadeTeste"
      ],
      "line": 51,
      "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-com-nome-já-existente;;1"
    },
    {
      "cells": [
        "edufelizardo1@gmail.com",
        "256249",
        "Conta mesmo nome"
      ],
      "line": 52,
      "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-com-nome-já-existente;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 52,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "testar-o-site-seu-barriga;não-deve-inserir-uma-conta-com-nome-já-existente;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 40,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 41,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 42,
  "name": "a senha \"256249\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 45,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 46,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "inform a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5914420300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edufelizardo1@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 227706000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "256249",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 321781200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 958918300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 100980000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 166447600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 412372800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 16
    }
  ],
  "location": "InserirContasteps.informAConta(String)"
});
formatter.result({
  "duration": 208881200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 536754000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 124193400,
  "status": "passed"
});
formatter.after({
  "duration": 1669209600,
  "status": "passed"
});
});