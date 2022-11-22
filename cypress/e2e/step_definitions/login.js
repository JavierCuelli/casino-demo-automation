import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

///////////////////////////////////////////
////// Suite test cases - Login Page //////
///////////////////////////////////////////

Given("A web browser is on the user login page of demo.casino", () => {
  cy.log('Enter to login page: https://demo.casino/user/login')
  cy.visit("/user/login");
});

//// TEST CASE 1 ////
When("A user enters the email {string}, and the password {string}, "
  + "and clicks on the login button: SIGN IN"
  , (email, password) => {

    //close pop-up "Welcome"
    cy.log('Close pop-up "Welcome"')
    loginPage.clickPopUpWelcome()

    //Enter email, password and select option: SIGN IN
    cy.log('Enter email, password and select option: SIGN IN')
    loginPage.submitLogin(email, password)

  });

Then("the user will be login successfully!", () => {
  cy.url().should("contains", "https://demo.casino/");
});

//// TEST CASE 2 ////
When("A user provides incorrect Email, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.email + '**' + row.password);

    //close pop-up "Welcome"
    cy.log('Close pop-up "Welcome"')
    loginPage.clickPopUpWelcome()

    //Enter incorrect email, and enter password and select option: SIGN IN
    cy.log('Enter incorrect email, and enter password and select option: SIGN IN')
    loginPage.submitLogin(row.email, row.password)

  });
});

Then("Email error message {string} is displayed!", (errorMessage) => {
  // verify that the error message is correct and visible
  loginPage.elements.errorMessage().should("contain.text", errorMessage)
});

//// TEST CASE 3 ////
When("A user provides incorrect Password, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.email + '**' + row.password);

    //close pop-up "Welcome"
    cy.log('Close pop-up "Welcome"')
    loginPage.clickPopUpWelcome()

    //Enter incorrect password, and enter email and select option: SIGN IN
    cy.log('Enter incorrect password, and enter email and select option: SIGN IN')
    loginPage.submitLogin(row.email, row.password)

  });
});

Then("Password error message {string} is displayed!", (errorMessage) => {
  // verify that the error message is correct and visible
  loginPage.elements.errorMessage().should("contain.text", errorMessage)
});