const { I } = inject();
const { messagesRegister, url } = require('../data/user_data');

module.exports = {

  fields: {
    firstNameField: '//input[@name="customer.firstName"]',
    lastNameField: '//input[@name="customer.lastName"]',
    addressField: '//input[@name="customer.address.street"]',
    cityField: '//input[@name="customer.address.city"]' ,
    stateField: '//input[@name="customer.address.state"]' ,
    zipCodeField: '//input[@name="customer.address.zipCode"]',
    phoneField: '//input[@name="customer.phoneNumber"]',
    ssnField: '//input[@name="customer.ssn"]',
    usernameField: '//input[@name="customer.username"]',
    passwordField: '//input[@name="customer.password"]',
    confirmField: '//input[@name="repeatedPassword"]',

  },

  button: {
    registerButton: '//input[@value="Register"]'

  },

  acessarAbaRegister(){
    I.amOnPage(url.register)
  },

  preencherFirstName(firstName) {
    I.fillField(this.fields.firstNameField, firstName)
  },

  preencherLastName(lastName) {
    I.fillField(this.fields.lastNameField, lastName)
  },

  preencherAddress(address) {
    I.fillField(this.fields.addressField, address)
  },

  preencherCity(city) {
    I.fillField(this.fields.cityField, city)
  },

  preencherState(state) {
    I.fillField(this.fields.stateField, state)
  },

  preencherZipCode(zipCode) {
    I.fillField(this.fields.zipCodeField,zipCode)
  },

  preencherPhone(phone) {
    I.fillField(this.fields.phoneField, phone)
  },

  preencherSsn(ssn) {
    I.fillField(this.fields.ssnField, ssn)
  },

  preencherUsername(username) {
    I.fillField(this.fields.usernameField, username)
  },

  preencherPassword(password) {
    I.fillField(this.fields.passwordField, password)
  },

  preencherConfirm(confirm) {
    I.fillField(this.fields.confirmField, confirm)
  },

  clicarRegister() {
    I.click(this.button.registerButton)
  },

  validarTexto(message) {
    I.see(message)
  },

  validarMensagensErrorRequired() {
    I.see(messagesRegister.messageFirstNameRequiredError)
    I.see(messagesRegister.messageLastNameRequiredError)
    I.see(messagesRegister.messageAddressRequiredError)
    I.see(messagesRegister.messageCityRequiredError)
    I.see(messagesRegister.messageStateRequiredError)
    I.see(messagesRegister.messageZipCodeRequiredError)
    I.see(messagesRegister.messageSsnRequiredError)
    I.see(messagesRegister.messageUsernameRequiredError)
    I.see(messagesRegister.messagePasswordRequiredError)
    I.see(messagesRegister.messageConfirmRequiredError)

  }

}
