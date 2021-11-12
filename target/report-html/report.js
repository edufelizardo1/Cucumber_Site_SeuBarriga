$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Testar o site Seu Barriga",
  "description": "Como um usuário\r\nEu quero cadastrar contas\r\npara poder distribuir meu dinheiro de uma forma mais organizada",
  "id": "testar-o-site-seu-barriga",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@primeiro"
    }
  ]
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
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
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
        "ContadeTeste",
        "mensagem"
      ],
      "line": 20,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;1"
    },
    {
      "cells": [
        "edufelizardo1@gmail.com",
        "256249",
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 21,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;2"
    },
    {
      "cells": [
        "edufelizardo1@gmail.com",
        "256249",
        "",
        "Informe o nome da conta"
      ],
      "line": 22,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;3"
    },
    {
      "cells": [
        "edufelizardo1@gmail.com",
        "256249",
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 23,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;4"
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
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@primeiro"
    }
  ]
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
  "duration": 8995392900,
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
  "duration": 715106800,
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
  "duration": 308725900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 974437100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 105398200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 372016600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 597887900,
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
  "duration": 621462400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 1007519900,
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
  "duration": 243233600,
  "status": "passed"
});
formatter.after({
  "duration": 747582200,
  "status": "passed"
});
formatter.after({
  "duration": 6136544600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@primeiro"
    }
  ]
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
  "name": "inform a conta \"\"",
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
  "duration": 8287996600,
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
  "duration": 1023452100,
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
  "duration": 403636200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1227670500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 129868000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 307336300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 693560200,
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
  "duration": 212727200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 552106000,
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
  "duration": 119769000,
  "status": "passed"
});
formatter.after({
  "duration": 275758000,
  "status": "passed"
});
formatter.after({
  "duration": 8050963200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@primeiro"
    }
  ]
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
  "name": "inform a conta \"Conta mesmo nome\"",
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
  "duration": 8216621900,
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
  "duration": 943755500,
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
  "duration": 491370500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 989309600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 157925400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 246609000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 739793800,
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
  "duration": 368622900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 517276700,
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
  "duration": 106605000,
  "status": "passed"
});
formatter.after({
  "duration": 177174800,
  "status": "passed"
});
formatter.after({
  "duration": 4111982000,
  "status": "passed"
});
formatter.uri("inserir_conta_com_contexto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Testar o site Seu Barriga",
  "description": "Como um usuário\r\nEu quero cadastrar contas\r\npara poder distribuir meu dinheiro de uma forma mais organizada",
  "id": "testar-o-site-seu-barriga",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@terceiro"
    }
  ]
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Cenário: Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;cenário:-deve-inserir-uma-conta-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "inform a conta \"\u003cContadeTeste\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "testar-o-site-seu-barriga;cenário:-deve-inserir-uma-conta-com-sucesso;",
  "rows": [
    {
      "cells": [
        "ContadeTeste",
        "mensagem"
      ],
      "line": 22,
      "id": "testar-o-site-seu-barriga;cenário:-deve-inserir-uma-conta-com-sucesso;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 23,
      "id": "testar-o-site-seu-barriga;cenário:-deve-inserir-uma-conta-com-sucesso;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 24,
      "id": "testar-o-site-seu-barriga;cenário:-deve-inserir-uma-conta-com-sucesso;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 25,
      "id": "testar-o-site-seu-barriga;cenário:-deve-inserir-uma-conta-com-sucesso;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 8,
  "name": "Efetuar o login no sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"256249\"",
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
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 8264304900,
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
  "duration": 1132869800,
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
  "duration": 391854800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1000171000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 150066200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 225933300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 784356100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Cenário: Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;cenário:-deve-inserir-uma-conta-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@terceiro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "inform a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
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
  "duration": 396094200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 741190600,
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
  "duration": 110300000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Conta adicionada com sucesso]!\u003e but was:\u003c[Já existe uma conta com esse nome]!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.InserirContasteps.receboAMensagem(InserirContasteps.java:73)\r\n\tat ✽.Entao recebo a mensagem \"Conta adicionada com sucesso!\"(inserir_conta_com_contexto.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 396250000,
  "status": "passed"
});
formatter.after({
  "duration": 4113734000,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Efetuar o login no sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"256249\"",
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
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 8849017300,
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
  "duration": 1012763000,
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
  "duration": 355235300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 952261900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 124250800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 139448100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 617233000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Cenário: Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;cenário:-deve-inserir-uma-conta-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@terceiro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "inform a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
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
  "duration": 223457000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 386252300,
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
  "duration": 142632600,
  "status": "passed"
});
formatter.after({
  "duration": 211072100,
  "status": "passed"
});
formatter.after({
  "duration": 6772695800,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Efetuar o login no sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"256249\"",
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
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 9294610900,
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
  "duration": 522986500,
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
  "duration": 661176300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1041931400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 145068900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 287677200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 865516000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Cenário: Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga;cenário:-deve-inserir-uma-conta-com-sucesso;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@terceiro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "inform a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
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
  "duration": 431228500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 529465300,
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
  "duration": 132667300,
  "status": "passed"
});
formatter.after({
  "duration": 297167300,
  "status": "passed"
});
formatter.after({
  "duration": 5633530200,
  "status": "passed"
});
formatter.uri("reset_banco.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Efetura reset em minha conta",
  "description": "Como usuário do sistema\r\nEu quero acessar o sistema\r\nPara poder dar um reset em minha conta",
  "id": "efetura-reset-em-minha-conta",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@segundo"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Reset em banco de dados de conta",
  "description": "",
  "id": "efetura-reset-em-minha-conta;reset-em-banco-de-dados-de-conta",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"edufelizardo1@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"256249\"",
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
  "name": "vendo o link de reset eu clico para resetar os meus dados",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 10677478500,
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
  "duration": 963716600,
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
  "duration": 310282300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 906616400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 153246000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.vendoOLinkDeResetEuClicoParaResetarOsMeusDados()"
});
formatter.result({
  "duration": 647438400,
  "status": "passed"
});
formatter.after({
  "duration": 210600700,
  "status": "passed"
});
formatter.after({
  "duration": 9091954400,
  "status": "passed"
});
});