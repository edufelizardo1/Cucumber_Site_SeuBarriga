package steps;

import cucumber.api.PendingException;
import cucumber.api.java.pt.*;

public class InserirContasteps {
    @Dado("^que estou acessando a aplicação$")
    public void queEstouAcessandoAAplicação() {
    }

    @Quando("^informo o usuário \"([^\"]*)\"$")
    public void informoOUsuário(String arg0) throws Throwable {
    }

    @E("^a senha \"([^\"]*)\"$")
    public void aSenha(String arg0) throws Throwable {
    }

    @E("^seleciono entrar$")
    public void selecionoEntrar() {
    }

    @Então("^visualizo a página inicial$")
    public void visualizoAPáginaInicial() {
    }

    @Quando("^seleciono Contas$")
    public void selecionoContas() {
    }

    @E("^seleciono adincionar E inform a conta \"([^\"]*)\"$")
    public void selecionoAdincionarEInformAConta(String arg0) throws Throwable {
    }

    @E("^seleciono salvar$")
    public void selecionoSalvar() {
    }

    @Entao("^a conta é inserida com sucesso$")
    public void aContaÉInseridaComSucesso() {
    }

    @Entao("^Sou notificado que o nome da conta é obrigatório$")
    public void souNotificadoQueONomeDaContaÉObrigatório() {
    }

    @Entao("^sou notificado que já existe uma conta com esse nome$")
    public void souNotificadoQueJáExisteUmaContaComEsseNome() {
    }
}
