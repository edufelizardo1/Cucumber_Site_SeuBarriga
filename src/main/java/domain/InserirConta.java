package domain;

public class InserirConta {

    private String email = "digite o email cadastrado no site seu Barriga";
    private String senha = "digite senha cadstrada";

    public InserirConta() {
    }

    public InserirConta(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
