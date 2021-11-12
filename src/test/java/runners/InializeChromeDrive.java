package runners;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class InializeChromeDrive {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\eofo\\Documents\\GitHub" +
                "\\Labs_Java\\Cucumber_Site_SeuBarriga\\ChromeDriver\\chromedriver.exe");
        WebDriver webDriver = new ChromeDriver();
        webDriver.get("https://seubarriga.wcaquino.me/");
    }
}
