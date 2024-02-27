const { I } = inject();
const { url, messagesLogin } = require('../data/user_data');

module.exports = {

    fields: {
        usernameField: '//input[@name="username"]',
        passwordField: '//input[@name="password"]',
    },

    button: {
        logIn: '//input[@class="button"]'
    },

    modal: {
        modalDadosBancarios: '//div[@ng-if="showOverview"]'
    },

      acessarHome() {
        I.amOnPage(url.home)
      },

      preencherUsername(username) {
        I.fillField(this.fields.usernameField, username)
      },
    
      preencherPassword(password) {
        I.fillField(this.fields.passwordField, password)

      },

      clicarLogIn() {
        I.click(this.button.logIn)
      },

      validarLogin() {
        I.see(messagesLogin.messageLoginSucess)
        I.seeElement(this.modal.modalDadosBancarios)
      }

}