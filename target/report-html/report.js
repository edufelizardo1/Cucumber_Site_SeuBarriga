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
  "line": 7,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o usuário \"\u003cseuUsuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "a senha \"\u003csuaSenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "inform a conta \"\u003cContadeTeste\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;",
  "rows": [
    {
      "cells": [
        "seuUsuario",
        "suaSenha",
        "ContadeTeste",
        "mensagem"
      ],
      "line": 19,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;1"
    },
    {
      "cells": [
        "edufelizardo1@gmail.com",
        "256249",
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 20,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;2"
    },
    {
      "cells": [
        "edufelizardo1@gmail.com",
        "256249",
        "",
        "Informe o nome da conta"
      ],
      "line": 21,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;3"
    },
    {
      "cells": [
        "edufelizardo1@gmail.com",
        "256249",
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 22,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 20,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "a senha \"256249\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "inform a conta \"Conta de Teste\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 4981306400,
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
  "duration": 403890900,
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
  "duration": 186593000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 771994500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 65466300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 80711600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 334640200,
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
  "duration": 221368300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 429867200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 69751900,
  "status": "passed"
});
formatter.after({
  "duration": 2707872600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "a senha \"256249\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "inform a conta \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5411166400,
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
  "duration": 236843700,
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
  "duration": 390309800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1049795700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 72637500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 124877900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 348102800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "InserirContasteps.informAConta(String)"
});
formatter.result({
  "duration": 87134600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 384149200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 54141200,
  "status": "passed"
});
formatter.after({
  "duration": 1457512300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "a senha \"256249\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "inform a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 4414245900,
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
  "duration": 243622500,
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
  "duration": 198228400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 706256700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 65464700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 126163600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 341484900,
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
  "duration": 211038000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 370090400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 64382400,
  "status": "passed"
});
formatter.after({
  "duration": 1535978700,
  "status": "passed"
});
});