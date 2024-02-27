# project_parabank_JS

Projeto básico de automação de testes utilizando JavaScript, voltado a validar funcionalidades do site de demonstração ParaBank.


### ParaBank: https://parabank.parasoft.com/parabank/index.htm 


## Tecnologias utilizadas no projeto:
- JavaScript
- CodeceptJS
- Playwright
- Page Objects
- Behavior Driven Development (BDD)


## Instruções de uso
- Clone este repositório.
- Abra o projeto em uma IDE (O projeto foi desenvolvido no Visual Code).
- Abra o terminal e utilize este comando para executar os testes:   npx codeceptjs run --grep "@tag"
  #### Aviso: execute o registro de novo usuario antes do login

  #### Exemplo de execução recomendada:
  
      npx codeceptjs run --grep "@register"

  e depois

      npx codeceptjs run --grep "@login"
  #### *Dado que execute o login antes de efetuar o registro, o teste falhará.
  
  
- Para alterar os dados que serão utilizados no teste, utilize a classe user_data: (..\data\user_data.js). Altere os valores das variáveis abaixo conforme necessário para testar as funcionalidades implementadas.

      dadosValidos: {
      //REGISTER    
        firstNameValido: "Felipe", 
        lastNameValido: "Isaac Martins",
        addressValido: "Avenida Zacarias de Araújo Melo 272",
        cityValido: "Luziânia",
        stateValido: "GO",
        zipCodeValido: "72816-090",
        phoneValido: "(61) 98454-5469",
        ssnValido: "630-88-XXXX",
        usernameValido: "felipe_martins",
        passwordValido: "9BQoaxL5kj"
       
      },

  
### O site ParaBank limpa a base de dados frequentemente, então o registro deverá ser feito quantas vezes forem necessárias.
