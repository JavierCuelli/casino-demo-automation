import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homePage = require("../../pages/HomePage");

///////////////////////////////////////////////////
////// Suite test cases - Footer - Home Page //////
///////////////////////////////////////////////////

Given("A web browser is on the home page of demo.casino", () => {
  cy.visit("/");
});

//// TEST CASE 1 ////
When("A user selects the Slots option from the footer", () => {
  //close pop-up "Welcome"
  cy.log('Close pop-up "Welcome"')
  homePage.clickPopUpWelcome()

  //click Slots footer
  cy.log('Click option Slots from the footer')
  homePage.clickSlotsFooter()

});

Then("the url will contains the slot-games subdirectory", () => {
  cy.url().should("contains", "/gameType/slot-games");
});

//// TEST CASE 2 ////
When("A user selects the Poker option from the footer", () => {
  //close pop-up "Welcome"
  cy.log('Close pop-up "Welcome"')
  homePage.clickPopUpWelcome()

  //click Poker footer
  cy.log('Click option Poker from the footer')
  homePage.clickPokerFooter()
});

Then("the url will contains the poker subdirectory", () => {
  cy.url().should("contains", "/gameType/video-poker");
});

//// TEST CASE 3 ////
When("A user selects the Card games option from the footer", () => {
  //close pop-up "Welcome"
  cy.log('Close pop-up "Welcome"')
  homePage.clickPopUpWelcome()

  //click Card footer
  cy.log('Click option Card from the footer')
  homePage.clickCardFooter()
});

Then("the url will contains the card-games subdirectory", () => {
  cy.url().should("contains", "/gameType/card-games");
});

//// TEST CASE 4 ////
When("A user selects the Lottery option from the footer", () => {
  //close pop-up "Welcome"
  cy.log('Close pop-up "Welcome"')
  homePage.clickPopUpWelcome()

  //click Lottery footer
  cy.log('Click option Lottery from the footer')
  homePage.clickLotteryFooter()
});

Then("the url will contains the lottery subdirectory", () => {
  cy.url().should("contains", "/gameType/lottery");
});

//// TEST CASE 5 ////
When("A user selects the Table games option from the footer", () => {
  //close pop-up "Welcome"
  cy.log('Close pop-up "Welcome"')
  homePage.clickPopUpWelcome()

  //click Table games footer
  cy.log('Click option Table games from the footer')
  homePage.clickTableGamesFooter()
});

Then("the url will contains the table-games subdirectory", () => {
  cy.url().should("contains", "/gameType/table-games");
});

//// TEST CASE 6 ////
When("A user selects the Video poker option from the footer", () => {
  //close pop-up "Welcome"
  cy.log('Close pop-up "Welcome"')
  homePage.clickPopUpWelcome()

  //click Video poker footer
  cy.log('Click option Video poker from the footer')
  homePage.clickVideoPokerFooter()
});

Then("the url will contains the video-poker subdirectory", () => {
  cy.url().should("contains", "/gameType/video-poker");
});

//// TEST CASE 7 ////
When("A user selects the Roulette option from the footer", () => {
  //close pop-up "Welcome"
  cy.log('Close pop-up "Welcome"')
  homePage.clickPopUpWelcome()

  //click Roulette footer
  cy.log('Click option Roulette poker from the footer')
  homePage.clickRouletteFooter()
});

Then("the url will contains the roulette subdirectory", () => {
  cy.url().should("contains", "/gameType/roulette");
});

//// TEST CASE 8 ////
When("A user selects the Live casino option from the footer", () => {
  //close pop-up "Welcome"
  cy.log('Close pop-up "Welcome"')
  homePage.clickPopUpWelcome()

  //click Live casino footer
  cy.log('Click option Live casino from the footer')
  homePage.clickLiveCasinoFooter()
});

Then("the url will contains the live-casino subdirectory", () => {
  cy.url().should("contains", "/gameType/live-casino");
});

//// TEST CASE 8 ////
When("A user selects the Video BSA option from the footer", () => {
  //close pop-up "Welcome"
  cy.log('Close pop-up "Welcome"')
  homePage.clickPopUpWelcome()

  //click BSA footer
  cy.log('Click option BSA from the footer')
  homePage.clickBsaFooter()
});

Then("the url will contains the new-games-bsa subdirectory", () => {
  cy.url().should("contains", "/gameGroup/new-games-bsa");
});