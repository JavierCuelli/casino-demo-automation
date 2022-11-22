Feature: Test Cases - login page - SIGN IN

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is on the user login page of demo.casino
    Scenario: Success Login
        When A user enters the email "jacuelli@hotmail.com", and the password "Test1234", and clicks on the login button: SIGN IN
        Then the user will be login successfully!
    Scenario: Incorrect Email Login
        When A user provides incorrect Email, and clicks on the login button
            | email                | password |
            | jjcuelli@hotmail.com | Test1234 |
        Then Email error message "                    Incorrect login, email, phone number or password.                " is displayed!
    Scenario: Incorrect Password Login
        When A user provides incorrect Password, and clicks on the login button
            | email                | password |
            | jacuelli@hotmail.com | Test1239 |
        Then Password error message "                    Incorrect login, email, phone number or password.                " is displayed!