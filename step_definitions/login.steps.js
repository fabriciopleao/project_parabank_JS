const { register_page, login_page } = inject();
const { messagesLogin, dadosValidos, dadosInvalidos } = require('../data/user_data');

  Given('que esteja na home', () => {
    login_page.acessarHome()
  });
  
  When('preencher campo com username valido', () => {
    login_page.preencherUsername(dadosValidos.usernameValido)
  });
  
  When('preencher campo com password valido', () => {
    login_page.preencherPassword(dadosValidos.passwordValido)
  });
  
  When('clicar em log in', () => {
    login_page.clicarLogIn()
  });
  
  Then('login efetuado com sucesso', () => {
    login_page.validarLogin()
  });
  
  When('preencher campo com username invalido', () => {
   login_page.preencherUsername(dadosInvalidos.dadoInvalido) 
  });
  
  When('preencher campo com password invalido', () => {
   login_page.preencherPassword(dadosInvalidos.dadoInvalido)
  });
  
  Then('sistema retorna mensagem de dados inexistentes', () => {
   register_page.validarTexto(messagesLogin.messagenDadosInvalidos) 
  });

  When('nao preencher campos obrigatorios', () => {
    
  });
  
  Then('sistema retorna com mensagem exigindo o preenchimento dos campos obrigatorios', () => {
   register_page.validarTexto(messagesLogin.messageDadoEmBranco)
  });