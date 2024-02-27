const { register_page } = inject();
const { dadosValidos, dadosInvalidos, messagesRegister } = require('../data/user_data');


Given('que esteja na aba de registro de usuario', () => {
  register_page.acessarAbaRegister();
});

When('preencher campo first name', () => {
  register_page.preencherFirstName(dadosValidos.firstNameValido)
});

When('preencher campo last name', () => {
  register_page.preencherLastName(dadosValidos.lastNameValido)
});

When('preencher campo address', () => {
  register_page.preencherAddress(dadosValidos.addressValido)
});

When('prencher campo city', () => {
  register_page.preencherCity(dadosValidos.cityValido)
});

When('prencher campo state', () => {
  register_page.preencherState(dadosValidos.stateValido)
});

When('preencher campo zip code', () => {
  register_page.preencherZipCode(dadosValidos.zipCodeValido)
});

When('preencher campo phone #', () => {
  register_page.preencherPhone(dadosValidos.phoneValido)
});

When('preencher campo ssn', () => {
  register_page.preencherSsn(dadosValidos.ssnValido)
});

When('preencher campo username nao cadastrado', () => {
  register_page.preencherUsername(dadosValidos.usernameValido)
});

When('preencher campo password', () => {
  register_page.preencherPassword(dadosValidos.passwordValido)
});

When('clicar em register', () => {
  register_page.clicarRegister()
});

Then('nova conta registrada com sucesso', () => {
  register_page.validarTexto(messagesRegister.messageRegisterSucess)
});

When('preencher campo username com user cadastrado', () => {
  register_page.preencherUsername(dadosValidos.usernameValido)
});

When('preencher campo confirm com password valido', () => {
  register_page.preencherConfirm(dadosValidos.passwordValido)
});

Then('sistema retorna com mensagem de username ja registrado', () => {
  register_page.validarTexto(messagesRegister.messageUsernameCadastradoError)
});

When('preencher campo confirm com password invalido', () => {
  register_page.preencherConfirm(dadosInvalidos.dadoInvalido)
});

Then('sistema retorna com mensagem de confirmacao incorreta', () => {
  register_page.validarTexto(messagesRegister.messageConfirmInvalidoError)
});

Given('nao preencher campos obrigatorios', () => {
  
});

Then('sistema retorna com mensagens exigindo o preenchimento dos campos obrigatorios', () => {
  register_page.validarMensagensErrorRequired()
});


