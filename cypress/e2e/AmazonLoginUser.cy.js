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
      cy.get('#nav-logo-sprites').should("have.attr", "href").and("not.be.empty")
     
  })

})
