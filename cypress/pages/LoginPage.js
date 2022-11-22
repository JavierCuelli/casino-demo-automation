class loginPage {
  elements = {
    popUpWelcome: () => cy.get('#welcome_modal > button'),
    emailInput: () => cy.get('[data-test="input-username"]'),
    passwordInput: () => cy.get('[data-test="input-password"]'),
    loginBtn: () => cy.get('[data-test="control-submit"]'),
    errorMessage: () => cy.get('#UserLogin_username_em_'),
  };

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  clickPopUpWelcome() {
    this.elements.popUpWelcome().click();
  }
  submitLogin(email,password){
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

module.exports = new loginPage();
