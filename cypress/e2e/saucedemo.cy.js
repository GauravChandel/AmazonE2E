/// <reference types = "cypress" />

import TestData from '../fixtures/saucedemo.json'

describe(" Performing the unit testing ", ()=>{

    before(()=>{
        cy.LoginofSauce(TestData.login.username, TestData.login.password)  // Logging the user
    })
    
    it('Assert the validation messages', ()=>{
        cy.visit(Cypress.env('saucedemo'))
        cy.get('.input_error.form_input').first().type('')
        cy.get('.input_error.form_input').last().type('')
        cy.get('.submit-button.btn_action').click()
        cy.log('Test')
    
    })

})