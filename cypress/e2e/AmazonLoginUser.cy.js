/// <reference types = 'cypress' />

import {LogIn}  from '../Pages/Login'
const loginuser = new LogIn()
import cred from '../fixtures/LoginCred.json'

describe('Check the flow of add to cart', () => {
  it('Login the user', () => {
      loginuser.OpenURL()
      loginuser.clickonsignin()
      loginuser.EmailFill(cred.login.email)
      loginuser.Continue()
      loginuser.PasswordFill(cred.login.password)
      loginuser.Clickcheckbox()
      loginuser.Clickcheckbox()
      loginuser.SignInclick()
      cy.url().should('eq', 'https://www.amazon.in/?ref_=nav_ya_signin')
      // cy.get('#nav-logo-sprites').wait(1000).should("have.attr", "href").and("not.be.empty")
     
  })

})
