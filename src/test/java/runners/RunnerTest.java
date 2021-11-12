package runners;

import cucumber.api.*;
import cucumber.api.junit.Cucumber;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/feature/"},
        glue = {"steps"},
        tags = {"~@ignore"},
        plugin = {"pretty", "html:target/report-html", "json:target/report-json/"}
        )
public class RunnerTest {

        @BeforeClass
        public static void reset () {
                System.setProperty("webdriver.chrome.driver", "C:\\Users\\eofo\\Documents\\GitHub" +
                        "\\Labs_Java\\Cucumber_Site_SeuBarriga\\ChromeDriver\\chromedriver.exe");
                WebDriver webDriver = new ChromeDriver();
                webDriver.get("https://seubarriga.wcaquino.me/");
                webDriver.findElement(By.id("email")).sendKeys("email1@gmail.com");
                webDriver.findElement(By.name("senha")).sendKeys("******");
                webDriver.findElement(By.tagName("button")).click();
                webDriver.findElement(By.linkText("reset")).click();
                webDriver.quit();
        }
}
