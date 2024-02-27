@regressivo
@register
Feature: Register
  Como usuario sem conta no banco
  Quero criar uma conta
  Para utilizar os serviços do banco

  Scenario: Registro de usuario feito com sucesso
    Given que esteja na aba de registro de usuario
    When preencher campo first name
    And preencher campo last name
    And preencher campo address
    And prencher campo city
    And prencher campo state
    And preencher campo zip code
    And preencher campo phone #
    And preencher campo ssn
    And preencher campo username nao cadastrado
    And preencher campo password
    And preencher campo confirm com password valido
    And clicar em register
    Then nova conta registrada com sucesso

  Scenario: Registro de usuario com username cadastrado
    Given que esteja na aba de registro de usuario
    When preencher campo first name
    And preencher campo last name
    And preencher campo address
    And prencher campo city
    And prencher campo state
    And preencher campo zip code
    And preencher campo phone #
    And preencher campo ssn
    And preencher campo username com user cadastrado
    And preencher campo password
    And preencher campo confirm com password valido
    And clicar em register
    Then sistema retorna com mensagem de username ja registrado

  Scenario: Registro de usuario com confirmacao password invalido
    Given que esteja na aba de registro de usuario
    When preencher campo first name
    And preencher campo last name
    And preencher campo address
    And prencher campo city
    And prencher campo state
    And preencher campo zip code
    And preencher campo phone #
    And preencher campo ssn
    And preencher campo username nao cadastrado
    And preencher campo password
    And preencher campo confirm com password invalido
    And clicar em register
    Then sistema retorna com mensagem de confirmacao incorreta

  Scenario: Registro de usuario com campos obrigatorios em branco
    Given que esteja na aba de registro de usuario
    And nao preencher campos obrigatorios
    When clicar em register
    Then sistema retorna com mensagens exigindo o preenchimento dos campos obrigatorios
