export class LogIn{

weblocator = {

hover:'Account & Lists',
signin: 'Sign in',
email: '#ap_email',
continuebutton: 'input[id=continue]',
password: '#ap_password',
checbox: 'input[type = checkbox]',
signinbutton: '#signInSubmit',
singinsubmit: '#signInSubmit'

}

OpenTheURL(){
    cy.visit('')    // we are getting the value here from config.js file
}

clickOnSignInButton(){
    cy.contains('Hello, sign in').click() 
}

EmailFill(emailtype){
    cy.get(this.weblocator.email).type(emailtype)
}

Continue(){

    cy.get(this.weblocator.continuebutton).click()
}

PasswordFill(passwordtype){
    cy.get(this.weblocator.password).type(passwordtype)
}

ClickOnCheckbox(){
    cy.get(this.weblocator.checbox).check()
}

SignIn(){
    cy.get(this.weblocator.signin).click()
}

SignInclick(){
    cy.get(this.weblocator.singinsubmit).click()
}



}