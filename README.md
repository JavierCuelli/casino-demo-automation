# casino-demo-automation

###### Comments ######
1) In the folder: cypress\e2e\features  
   There are 3 features files using Gherkins to write the test cases:  
   
    footer.feature: has the FOOTER test cases      
    registration_user.feature: has the SIGN UP test cases  
    login.feature: has the SIGN IN test cases

2) In the folder: cypress\e2e\step_definitions  
    There are a js file for each feature. They contain the step by step of the execution of the test cases:  
    
    footer.js: has the STEPS of footer.feature      
    registration_user.js: has the STEPS of registration_user.feature  
    login.js: has the STEPS of login.feature

3) In the folder: cypress\pages  
   This folder contains the classes that are used by cucumber.  
   It contains the Selectors of the screens and the necessary methods for the execution of the test cases:  
   
   HomePage.js: this class has the Selectors and Methods that use the home page  
   LoginPage.js: this class has the Selectors and Methods that use the login page  
   RegistrationPage.js: this class has the Selectors and Methods that use the registration page

4) To run the test cases use:  
npx cypress run --browser chrome

5) Dashboard of Cypress to see the result of the tests:  
https://cloud.cypress.io/projects/1admhu/
