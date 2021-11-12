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
        "qatester@tester.qa",
        "qa",
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 21,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;2"
    },
    {
      "cells": [
        "qatester@tester.qa",
        "qa",
        "",
        "Informe o nome da conta"
      ],
      "line": 22,
      "id": "testar-o-site-seu-barriga;deve-inserir-uma-conta-com-sucesso;;3"
    },
    {
      "cells": [
        "qatester@tester.qa",
        "qa",
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
  "name": "informo o usuário \"qatester@tester.qa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"qa\"",
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
  "duration": 7004286000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatester@tester.qa",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 512590500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 143826500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 996107100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 156034900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 244722900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 726328600,
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
  "duration": 222353900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 681970500,
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
  "duration": 178646000,
  "status": "passed"
});
formatter.after({
  "duration": 228744200,
  "status": "passed"
});
formatter.after({
  "duration": 5361877300,
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
  "name": "informo o usuário \"qatester@tester.qa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"qa\"",
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
  "duration": 8291514000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatester@tester.qa",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 383004300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 498714500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 938350200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 126955100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 160178600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 465423200,
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
  "duration": 230577600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 375691000,
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
  "duration": 90007600,
  "status": "passed"
});
formatter.after({
  "duration": 187627400,
  "status": "passed"
});
formatter.after({
  "duration": 3125823100,
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
  "name": "informo o usuário \"qatester@tester.qa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"qa\"",
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
  "duration": 7658493300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatester@tester.qa",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 493761000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 472504200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 859396700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 93090500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 185687200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 646248400,
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
  "duration": 234390600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 490128400,
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
  "duration": 138300000,
  "status": "passed"
});
formatter.after({
  "duration": 182860800,
  "status": "passed"
});
formatter.after({
  "duration": 3169074700,
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
  "name": "Testar o site Seu Barriga usando contexto",
  "description": "Como um usuário\r\nEu quero cadastrar contas\r\npara poder distribuir meu dinheiro de uma forma mais organizada",
  "id": "testar-o-site-seu-barriga-usando-contexto",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@terceiro"
    }
  ]
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
  "name": "informo o usuário \"qatester@tester.qa\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"qa\"",
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
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7308458200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatester@tester.qa",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 491220800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 217332300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1187008200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 91684400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "dar reset em banco de dados",
  "description": "",
  "id": "testar-o-site-seu-barriga-usando-contexto;dar-reset-em-banco-de-dados",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 16,
  "name": "vendo o link de reset eu clico para resetar os meus dados",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasteps.vendoOLinkDeResetEuClicoParaResetarOsMeusDados()"
});
formatter.result({
  "duration": 560824300,
  "status": "passed"
});
formatter.after({
  "duration": 198647200,
  "status": "passed"
});
formatter.after({
  "duration": 3090495300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Cenário: Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga-usando-contexto;cenário:-deve-inserir-uma-conta-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 19,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "inform a conta \"\u003cContadeTeste\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "testar-o-site-seu-barriga-usando-contexto;cenário:-deve-inserir-uma-conta-com-sucesso;",
  "rows": [
    {
      "cells": [
        "ContadeTeste",
        "mensagem"
      ],
      "line": 25,
      "id": "testar-o-site-seu-barriga-usando-contexto;cenário:-deve-inserir-uma-conta-com-sucesso;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 26,
      "id": "testar-o-site-seu-barriga-usando-contexto;cenário:-deve-inserir-uma-conta-com-sucesso;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 27,
      "id": "testar-o-site-seu-barriga-usando-contexto;cenário:-deve-inserir-uma-conta-com-sucesso;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 28,
      "id": "testar-o-site-seu-barriga-usando-contexto;cenário:-deve-inserir-uma-conta-com-sucesso;;4"
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
  "name": "informo o usuário \"qatester@tester.qa\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"qa\"",
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
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7598941700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatester@tester.qa",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 571270200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 240848100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1034045100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 121990100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Cenário: Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga-usando-contexto;cenário:-deve-inserir-uma-conta-com-sucesso;;2",
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
  "line": 19,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "inform a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 228755700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 380785400,
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
  "duration": 248301300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 649836400,
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
  "duration": 95322800,
  "status": "passed"
});
formatter.after({
  "duration": 154988100,
  "status": "passed"
});
formatter.after({
  "duration": 2850204900,
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
  "name": "informo o usuário \"qatester@tester.qa\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"qa\"",
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
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 12398569900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatester@tester.qa",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 560982100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 259597000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 961366100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 90209800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Cenário: Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga-usando-contexto;cenário:-deve-inserir-uma-conta-com-sucesso;;3",
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
  "line": 19,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "inform a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 195050500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 621755500,
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
  "duration": 208099300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 493413000,
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
  "duration": 134760600,
  "status": "passed"
});
formatter.after({
  "duration": 183586400,
  "status": "passed"
});
formatter.after({
  "duration": 6369442400,
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
  "name": "informo o usuário \"qatester@tester.qa\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"qa\"",
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
formatter.match({
  "location": "InserirContasteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 8235866300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatester@tester.qa",
      "offset": 19
    }
  ],
  "location": "InserirContasteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 519809100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa",
      "offset": 9
    }
  ],
  "location": "InserirContasteps.aSenha(String)"
});
formatter.result({
  "duration": 265183200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1038938000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 124047500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Cenário: Deve inserir uma conta com sucesso",
  "description": "",
  "id": "testar-o-site-seu-barriga-usando-contexto;cenário:-deve-inserir-uma-conta-com-sucesso;;4",
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
  "line": 19,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono adincionar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "inform a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasteps.selecionoContas()"
});
formatter.result({
  "duration": 162342100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoAdincionar()"
});
formatter.result({
  "duration": 553154800,
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
  "duration": 364763500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasteps.selecionoSalvar()"
});
formatter.result({
  "duration": 596781700,
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
  "duration": 74122900,
  "status": "passed"
});
formatter.after({
  "duration": 155244400,
  "status": "passed"
});
formatter.after({
  "duration": 2599835100,
  "status": "passed"
});
});