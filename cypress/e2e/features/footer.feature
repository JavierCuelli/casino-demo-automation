Feature: Footer - home page - Validate redirections

    Background:
        Given A web browser is on the home page of demo.casino
    @mobile
    Scenario: Validate redirection to slot games
        When A user selects the Slots option from the footer
        Then the url will contains the slot-games subdirectory
    @desktop
    Scenario: Validate redirection to Poker games
        When A user selects the Poker option from the footer
        Then the url will contains the poker subdirectory
    @desktop
    Scenario: Validate redirection to Card games
        When A user selects the Card games option from the footer
        Then the url will contains the card-games subdirectory
    @desktop
    Scenario: Validate redirection to Lottery games
        When A user selects the Lottery option from the footer
        Then the url will contains the lottery subdirectory
    @desktop
    Scenario: Validate redirection to Table games
        When A user selects the Table games option from the footer
        Then the url will contains the table-games subdirectory
    @desktop
    Scenario: Validate redirection to Video poker games
        When A user selects the Video poker option from the footer
        Then the url will contains the video-poker subdirectory
    @desktop
    Scenario: Validate redirection to Roulette poker games
        When A user selects the Roulette option from the footer
        Then the url will contains the roulette subdirectory
    @desktop
    Scenario: Validate redirection to Live casino poker games
        When A user selects the Live casino option from the footer
        Then the url will contains the live-casino subdirectory
    @desktop
    Scenario: Validate redirection to BSA poker games
        When A user selects the Video BSA option from the footer
        Then the url will contains the new-games-bsa subdirectory