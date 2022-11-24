class homePage {
  elements = {
    popUpWelcome: () => cy.get('#welcome_modal > button'),
    slotsFooter: () => cy.get(':nth-child(1) > .footer__menu-list > :nth-child(1) > .footer__menu--item-link'),
    pokerFooter: () => cy.get(':nth-child(1) > .footer__menu-list > :nth-child(2) > .footer__menu--item-link'),
    cardFooter: () => cy.get(':nth-child(1) > .footer__menu-list > :nth-child(3) > .footer__menu--item-link'),
    lotteryFooter: () => cy.get(':nth-child(1) > .footer__menu-list > :nth-child(4) > .footer__menu--item-link'),
    tableGamesFooter: () => cy.get(':nth-child(1) > .footer__menu-list > :nth-child(5) > .footer__menu--item-link'),
    videoPokerFooter: () => cy.get(':nth-child(1) > .footer__menu-list > :nth-child(6) > .footer__menu--item-link'),
    rouletteFooter: () => cy.get(':nth-child(1) > .footer__menu-list > :nth-child(7) > .footer__menu--item-link'),
    liveCasinoFooter: () => cy.get(':nth-child(1) > .footer__menu-list > :nth-child(8) > .footer__menu--item-link'),
    bsaFooter: () => cy.get(':nth-child(1) > .footer__menu-list > :nth-child(9) > .footer__menu--item-link')
  };

  clickRouletteFooter() {
    this.elements.rouletteFooter().click({ force: true });
  }

  clickLiveCasinoFooter() {
    this.elements.liveCasinoFooter().click({ force: true });
  }

  clickBsaFooter() {
    this.elements.bsaFooter().click({ force: true });
  }

  clickVideoPokerFooter() {
    this.elements.videoPokerFooter().click({ force: true });
  }

  clickTableGamesFooter() {
    this.elements.tableGamesFooter().click({ force: true });
  }

  clickCardFooter() {
    this.elements.cardFooter().click({ force: true });
  }

  clickLotteryFooter() {
    this.elements.lotteryFooter().click({ force: true });
  }

  clickSlotsFooter() {
    this.elements.slotsFooter().click({ force: true });
  }

  clickPokerFooter() {
    this.elements.pokerFooter().click({ force: true });
  }

  clickPopUpWelcome() {
    this.elements.popUpWelcome().click();
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

}

module.exports = new homePage();
