Feature: Test Cases - user registration - SIGN UP

    Background:
        Given A web browser is on the user registration page of demo.casino
    Scenario: Success Registration - Create Account (with correct information) by filling in the required fields
        When A user enters all mandatory fields: Email, Currency, Password, Secret Question, Answer, Address, Country, City, Postal Code, Name, Last Name, Middle Name, Gender, Nikename, and select the check box with Terms & Conditions, and select an option of REDEEM BONUS, and finally select the button: Create Account
            | email                | currency | password | sQuestion                      | answer    | address      | country   | city         | postalCode | name   | lastName | middleName | gender | nickName | bonus    |
            | jacuelli@hotmail.com | EUR      | Test1234 | Your favorite actor or actress | Don Ramon | Emilio Mitre | Argentina | Buenos Aires | 1706       | Javier | Cuelli   | Hernan     | Male   | Jacuelli | No bonus |
        Then the user account will be created successfully!
    Scenario: Invalid Registration - email exists
        When A user provides an email that already exists, and complete all mandatory fields, and finally select the button: Create Account
            | username | email                |
            | Javier   | jacuelli@hotmail.com |
        Then Email error message "                    This email has been used for registration already. Please contact customer support.                " is displayed
    Scenario: Invalid Registration - nickname exists
        When A user provides a nickname that already exists, and complete all mandatory fields, and finally select the button: Create Account
            | nickName | email                |
            | Jacuelli | jacuelli@hotmail.com |
        Then Nickname error message "                    Nickname has already been taken.                " is displayed