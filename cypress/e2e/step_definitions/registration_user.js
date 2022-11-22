/// <reference types="Cypress"/>

import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";
const registrationPage = require("../../pages/RegistrationPage");

//////////////////////////////////////////
// Suite test cases - Registration Page //
//////////////////////////////////////////

Given("A web browser is on the user registration page of demo.casino", () => {
  cy.log('Enter to registration page: https://demo.casino/user/registration')
  cy.visit("/user/registration");
});

//// TEST CASE 1 ////
When("A user enters all mandatory fields: Email, Currency, Password, Secret Question, Answer, "
  + "Address, Country, City, Postal Code, Name, Last Name, Middle Name, Gender, Nikename, "
  + "and select the check box with Terms & Conditions, and select an option of REDEEM BONUS, "
  + "and finally select the button: Create Account"
  , (table) => {

    //The table has: email, currency, password, sQuestion, answer, address, country, city, postalCode, name, lastName, middleName, gender, nickName, bonus
    table.hashes().forEach((row) => {
      cy.log(row.email + ' ** ' + row.currency + ' ** ' + row.password + ' ** ' + row.sQuestion)
      cy.log(row.answer + ' ** ' + row.address + ' ** ' + row.country + ' ** ' + row.city)
      cy.log(row.postalCode + ' ** ' + row.name + ' ** ' + row.lastName + ' ** ' + row.middleName)
      cy.log(row.gender + ' ** ' + row.nickName + ' ** ' + row.bonus)

      //close pop-up "Welcome"
      cy.log('Close pop-up "Welcome"')
      registrationPage.clickPopUpWelcome()

      //enter email
      cy.log('Enter EMAIL!')
      registrationPage.typeEmail(row.email)

      //enter currency 
      cy.log('Select CURRENCY!')
      registrationPage.clickCurrencyDropdownList()
      cy.get('#registration_form_1 > fieldset.form__section.form__section--registration > div:nth-child(2) > div > div.selectric-wrapper.selectric-below.selectric-open > div.selectric-items > div > ul').as('currencyList')
      //verify the existence of the currency
      cy.get('@currencyList')
        .find('> li')
        .each(($el, index, $list) => {
          if ($el.text() === row.currency) {
            cy.log('Find the currency!')
            cy.get('@currencyList').contains(row.currency).click()
          }
        })
      //cy.get(':nth-child(2) > .input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="1"]').click()

      //enter password 
      cy.log('Enter PASSWORD!')
      registrationPage.typePassword(row.password)

      //reenter the password
      cy.log('ReEnter PASSWORD!')
      registrationPage.typePasswordVerify(row.password)

      //enter Secret Question
      cy.log('Select SECRET QUESTION!')
      registrationPage.clickSecretQuestionDropdownList()
      registrationPage.selectSecretQuestion(row.sQuestion)

      //enter answer 
      cy.log('Enter ANSWER!')
      registrationPage.typeAnswer(row.answer)

      //enter address 
      cy.log('Enter ADDRESS!')
      registrationPage.typeAddress(row.address)

      //enter country
      cy.log('Select COUNTRY!')
      registrationPage.clickCountryDropdownList()
      registrationPage.selectCountry(row.country)

      //enter city
      cy.log('Enter CITY!')
      registrationPage.typeCity(row.city)

      //enter postal code 
      cy.log('Enter POSTAL CODE!')
      registrationPage.typePostalCode(row.postalCode)

      //enter name
      cy.log('Enter NAME!')
      registrationPage.typeName(row.name)

      //enter last name 
      cy.log('Enter LAST NAME!')
      registrationPage.typeLastName(row.lastName)

      //enter middle name 
      cy.log('Enter MIDDLE NAME!')
      registrationPage.typeMiddleName(row.middleName)

      //enter gender 
      cy.log('Select GENDER!')
      registrationPage.clickGenderDropdownList()
      registrationPage.selectGender(row.gender)

      //enter Nickname
      cy.log('Enter NICKNAME!')
      registrationPage.typeNickName(row.nickName)

      //select check box with Terms & Conditions
      cy.log('Select Terms & Conditions!')
      //cy.get('[#registration_form_1 > fieldset.form__section.form__section--registration > div.form__input.form__input--checkbox.checkbox > div > label').check({ force: true }).should('be.checked')
      registrationPage.selectTemsAndConditions()

      //select radio button Bonus
      cy.log('Select Bonus!')
      registrationPage.selectBonus(row.bonus)

      //Select the button: Create Account
      cy.log('Click btn: CREATE ACCOUNT !!!')
      registrationPage.clickSubmitRegistrationBtn()
    });

  });

Then("the user account will be created successfully!", () => {
  // verify URL and message successfully
  cy.url().should("contains", "https://demo.casino/");
  cy.log('OK!')
});

//// TEST CASE 2 ////
When("A user provides an email that already exists, and complete all mandatory fields, and finally select the button: Create Account", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.email);

    //close pop-up "Welcome"
    cy.log('Close pop-up "Welcome"')
    registrationPage.clickPopUpWelcome()

    //enter email
    cy.log('Enter EMAIL!')
    registrationPage.typeEmail(row.email)

    //Select the button: Create Account
    cy.log('Click btn: CREATE ACCOUNT !!!')
    registrationPage.clickSubmitRegistrationBtn()
  });
});

Then("Email error message {string} is displayed", (errorMessage) => {
  // verify that the error message is correct and visible
  registrationPage.elements.errorMessageEmail().should("contain.text", errorMessage).should('be.visible');
});

//// TEST CASE 3 ////
When("A user provides a nickname that already exists, and complete all mandatory fields, and finally select the button: Create Account", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.nickName);
    cy.log(row.email);

    //close pop-up "Welcome"
    cy.log('Close pop-up "Welcome"')
    registrationPage.clickPopUpWelcome()

    //enter Nickname
    cy.log('Enter NICKNAME!')
    registrationPage.typeNickName(row.nickName)

    //Select the button: Create Account
    cy.log('Click btn: CREATE ACCOUNT !!!')
    registrationPage.clickSubmitRegistrationBtn()
  });
});

Then("Nickname error message {string} is displayed", (errorMessage) => {
  // verify that the error message is correct and visible
  registrationPage.elements.errorMessageNickname().should("contain.text", errorMessage).should('be.visible');
});