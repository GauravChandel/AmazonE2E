/// <reference types = 'cypress' />

import {LogIn}  from '../Pages/Login'
const loginuser = new LogIn()
import cred from '../fixtures/LoginCred.json'

describe('User Log in with its credentials', () => {
  it('Login the user', () => {
      loginuser.OpenTheURL()
      loginuser.clickOnSignInButton()
      loginuser.EmailFill(cred.login.email)
      loginuser.Continue()
      loginuser.PasswordFill(cred.login.password)
      loginuser.ClickOnCheckbox()
      loginuser.SignInclick()
      cy.url().should('include', 'https://www.amazon.in/')
      // cy.get('#nav-logo-sprites').wait(1000).should("have.attr", "href").and("not.be.empty")
     
  })

})
