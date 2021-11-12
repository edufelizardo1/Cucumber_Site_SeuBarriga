package runners;

import cucumber.api.*;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/feature/inserir_conta.feature"},
        glue = {"steps"},
        tags = {"~@ignore"},
        plugin = "pretty"
        )
public class RunnerTest {
}
