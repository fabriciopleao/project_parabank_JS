module.exports = {

    url: {
      home: "https://parabank.parasoft.com/parabank/index.htm",
      register: "https://parabank.parasoft.com/parabank/register.htm",
      accountsOverview: "https://parabank.parasoft.com/parabank/overview.htm"
    },

    // Dados fictícios retirados do site: https://www.4devs.com.br/gerador_de_pessoas
    
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

    dadosInvalidos: {
    //REGISTER
      dadoInvalido: "ERROR",

    },

    //REGISTER
    messagesRegister: {
      messageRegisterSucess: "Your account was created successfully. You are now logged in.",
      messageUsernameCadastradoError: "This username already exists.",
      messageConfirmInvalidoError: "Passwords did not match.",
      messageFirstNameRequiredError: "First name is required.",
      messageLastNameRequiredError: "Last name is required.",
      messageAddressRequiredError: "Address is required.",
      messageCityRequiredError: "City is required.",
      messageStateRequiredError: "State is required.",
      messageZipCodeRequiredError: "Zip Code is required.",
      messageSsnRequiredError: "Social Security Number is required.",
      messageUsernameRequiredError: "Username is required.",
      messagePasswordRequiredError: "Password is required.",
      messageConfirmRequiredError: "Password confirmation is required.",

    },
    
    //LOGIN
    messagesLogin: {
      messageLoginSucess: "Accounts Overview",
      messagenDadosInvalidos: "An internal error has occurred and has been logged.",
      messageDadoEmBranco: "Please enter a username and password."
    }

  };
  