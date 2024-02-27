@regressivo
@login
Feature: Login
  Como usuario do banco
  Quero entrar na minha conta
  Para utilizar os serviços do banco

  Scenario: login efetuado com sucesso
    Given que esteja na home
    When preencher campo com username valido
    And preencher campo com password valido
    And clicar em log in
    Then login efetuado com sucesso

  Scenario: login com dados invalidos
    Given que esteja na home
    When preencher campo com username invalido
    And preencher campo com password invalido
    And clicar em log in
    Then sistema retorna mensagem de dados inexistentes

  Scenario: login com dados em brancos
    Given que esteja na home
    When nao preencher campos obrigatorios
    And clicar em log in
    Then sistema retorna com mensagem exigindo o preenchimento dos campos obrigatorios