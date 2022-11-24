class registrationPage {
  elements = {
    popUpWelcome: () => cy.get('#welcome_modal > button'),
    emailInput: () => cy.get('[data-test="input-email"]'),
    passwordInput: () => cy.get('[data-test="input-password"]'),
    passwordVerifyInput: () => cy.get('[data-test="input-password_confirmation"]'),
    answerInput: () => cy.get('[data-test="input-secret_answer"]'),
    addressInput: () => cy.get('[data-test="input-address"]'),
    currencyDropdownList: () => cy.get(':nth-child(2) > .input__wrapper > .selectric-wrapper > .selectric > .label'),
    secretQuestionDropdownList: () => cy.get(':nth-child(7) > .input__wrapper > .selectric-wrapper > .selectric > .label'),
    selectSecretQuestion: () => cy.get(':nth-child(7) > .input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul'),
    countryDropdownList: () => cy.get(':nth-child(10) > .input__wrapper > .selectric-wrapper > .selectric > .label'),
    selectCountry: () => cy.get(':nth-child(10) > .input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul'),
    genderDropdownList: () => cy.get(':nth-child(16) > .input__wrapper > .selectric-wrapper > .selectric > .label'),
    selectGender: () => cy.get(':nth-child(16) > .input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul'),
    selectTemsAndConditions: () => cy.get('[for="core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions"]'),
    selectBonus: () => cy.get('.special-radio__label'),
    cityInput: () => cy.get('[data-test="input-city"]'),
    postalCodeInput: () => cy.get('[data-test="input-postcode"]'),
    nameInput: () => cy.get('[data-test="input-name"]'),
    lastNameInput: () => cy.get('[data-test="input-surname"]'),
    middleNameInput: () => cy.get('[data-test="input-middle_name"]'),
    nickNameInput: () => cy.get('[data-test="input-nickname"]'),
    submitRegistrationBtn: () => cy.get('[type="submit"]'),
    errorMessageEmail: () => cy.get('[data-test="error-email"]'),
    errorMessageNickname: () => cy.get('[data-test="error-nickname"]')
  };

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  typePasswordVerify(password2) {
    this.elements.passwordVerifyInput().type(password2);
  }
  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typeAnswer(answer) {
    this.elements.answerInput().type(answer);
  }

  typeAddress(address) {
    this.elements.addressInput().type(address);
  }

  typeCity(city) {
    this.elements.cityInput().type(city);
  }

  typePostalCode(postalCode) {
    this.elements.postalCodeInput().type(postalCode);
  }

  typeName(name) {
    this.elements.nameInput().type(name);
  }

  typeLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }

  typeMiddleName(middleName) {
    this.elements.middleNameInput().type(middleName);
  }

  typeNickName(nickName) {
    this.elements.nickNameInput().type(nickName);
  }

  selectSecretQuestion(sQuestion) {
    this.elements.selectSecretQuestion().contains(sQuestion).click()
  }

  selectCountry(country) {
    this.elements.selectCountry().contains(country).click()
  }

  selectGender(gender) {
    this.elements.selectGender().contains(gender).click()
  }

  selectBonus(bonus) {
    this.elements.selectBonus().contains(bonus).click()
  }

  clickPopUpWelcome() {
    this.elements.popUpWelcome().click();
  }

  clickCurrencyDropdownList() {
    this.elements.currencyDropdownList().click();
  }

  clickSecretQuestionDropdownList() {
    this.elements.secretQuestionDropdownList().click();
  }

  clickCountryDropdownList() {
    this.elements.countryDropdownList().click();
  }

  clickGenderDropdownList() {
    this.elements.genderDropdownList().click();
  }

  clickSubmitRegistrationBtn() {
    this.elements.submitRegistrationBtn().click();
  }

  isVisibleClosePopUpWelcome() {
    cy.wait(2000)
    this.elements.popUpWelcome().then($input => {
      if ($input.length) {
        cy.log('Close pop-up "Welcome"')
        this.clickPopUpWelcome()
      }
      return
    })
  }

  selectTemsAndConditions() {
    this.elements.selectTemsAndConditions().click();
  }

}

module.exports = new registrationPage();
