package runners;

import cucumber.api.*;
import cucumber.api.junit.Cucumber;
import domain.InserirConta;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/feature/inserir_conta.feature"},
        glue = {"steps"},
        tags = {"~@ignore"},
        plugin = {"pretty", "html:target/report-html", "json:target/report-json/"}
        )
public class RunnerTest {

        InserirConta conta = new InserirConta();
        private String email = conta.getEmail();
        private String senha = conta.getSenha();
        private WebDriver webDriver;

        private void caminhoWebDriver() {
                System.setProperty("webdriver.chrome.driver", "C:\\Users\\eofo\\Documents\\GitHub" +
                        "\\Labs_Java\\Cucumber_Site_SeuBarriga\\ChromeDriver\\chromedriver.exe");
        }

        @BeforeClass
        public void reset () {
                caminhoWebDriver();
                webDriver = new ChromeDriver();
                webDriver.get("https://seubarriga.wcaquino.me/");
                webDriver.findElement(By.id("email")).sendKeys(email);
                webDriver.findElement(By.name("senha")).sendKeys(senha);
                webDriver.findElement(By.tagName("button")).click();
                webDriver.findElement(By.linkText("reset")).click();
                webDriver.quit();
        }
}
