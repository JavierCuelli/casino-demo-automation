# casino-demo-automation

comments:
1) In the folder: cypress\e2e\features
   There are 3 feature files using Gherkins to write the test cases
   
    footer.feature: has the FOOTER test cases
    registration_user.feature: has the SIGN UP test cases
    login.feature: has the SIGN IN test cases

2) In the folder: cypress\e2e\step_definitions
    There are a js file for each feature. They contain the step by step of the execution of the test cases.

3) In the folder: cypress\screenshots
   This folder contains the classes that are used by cucumber.
   It contains the Selectors of the screens and the necessary methods for the execution of the test cases.

4) To run the test cases use:
npx cypress run --browser chrome

5) Dashboard of Cypress to see the result of the tests:
https://cloud.cypress.io/projects/1admhu/
