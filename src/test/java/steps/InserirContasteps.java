package steps;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.*;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.io.IOException;

public class InserirContasteps {

    private WebDriver webDriver;

    @Dado("^que estou acessando a aplicação$")
    public void queEstouAcessandoAAplicação() {
        caminhoWebDriver();
        webDriver = new ChromeDriver();
        webDriver.get("https://seubarriga.wcaquino.me/");
    }

    @Quando("^informo o usuário \"([^\"]*)\"$")
    public void informoOUsuário(String email) throws Throwable {
        webDriver.findElement(By.id("email")).sendKeys(email);
    }

    @E("^a senha \"([^\"]*)\"$")
    public void aSenha(String senha) throws Throwable {
        webDriver.findElement(By.name("senha")).sendKeys(senha);
    }

    @E("^seleciono entrar$")
    public void selecionoEntrar() {
        webDriver.findElement(By.tagName("button")).click();
    }

    @Então("^visualizo a página inicial$")
    public void visualizoAPáginaInicial() {
        String texto = webDriver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
        Assert.assertEquals("Bem vindo, qatester!", texto);
    }

    @Quando("^seleciono Contas$")
    public void selecionoContas() {
        webDriver.findElement(By.linkText("Contas")).click();
    }

    @E("^seleciono adincionar$")
    public void selecionoAdincionar() {
        webDriver.findElement(By.linkText("Adicionar")).click();
    }

    @E("^inform a conta \"([^\"]*)\"$")
    public void informAConta(String nomeConta) throws Throwable {
        webDriver.findElement(By.id("nome")).sendKeys(nomeConta);
    }

    @E("^seleciono salvar$")
    public void selecionoSalvar() {
        webDriver.findElement(By.tagName("button")).click();
    }

    @Entao("^recebo a mensagem \"([^\"]*)\"$")
    public void receboAMensagem(String mensagem) throws Throwable {
        String texto = webDriver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
        Assert.assertEquals(mensagem, texto);
    }
//    @Entao("^a conta é inserida com sucesso$")
//    public void aContaÉInseridaComSucesso() {
//        String texto = webDriver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
//        Assert.assertEquals("Conta adicionada com sucesso!", texto);
//    }
//
//    @Entao("^Sou notificado que o nome da conta é obrigatório$")
//    public void souNotificadoQueONomeDaContaÉObrigatório() {
//        String texto = webDriver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
//        Assert.assertEquals("Informe o nome da conta", texto);
//    }
//
//    @Entao("^sou notificado que já existe uma conta com esse nome$")
//    public void souNotificadoQueJáExisteUmaContaComEsseNome() {
//        String texto = webDriver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
//        Assert.assertEquals("Já existe uma conta com esse nome!", texto);
//    }

    @E("^vendo o link de reset eu clico para resetar os meus dados$")
    public void vendoOLinkDeResetEuClicoParaResetarOsMeusDados() {
        webDriver.findElement(By.linkText("reset")).click();
    }

    /**
     * @param
     */
    private void caminhoWebDriver() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\eofo\\Documents\\GitHub" +
                "\\Labs_Java\\Cucumber_Site_SeuBarriga\\ChromeDriver\\chromedriver.exe");
    }

    /**
     * @Hook
     * Tem como objetivo efetuar ações que não estão ligado aso testes diretamente
     */

    @After(order = 1)
    public void screenshot (Scenario scenario) {
        File file = ((TakesScreenshot)webDriver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(file, new File("target/screeshot/" + scenario.getId() + ".jpg"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @After(order = 0)
    public void closeBrowser () {
        webDriver.quit();
        System.out.println("Teste realizado... Verifique os resultados.");
    }


}
