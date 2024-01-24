// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




// Cypress.Commands.add('login', (email, password) => { 

//     cy.visit('')  // It will take the URL from the cofig.js file of baseURL
//     cy.get('#input-email').type(email)
//     cy.get('#input-password').type(password)
//     cy.get('input[type="submit"]').click()

// })


Cypress.Commands.add('LoginofSauce', (username, password) =>{


    cy.visit(Cypress.env('saucedemo'))
    cy.get('.input_error.form_input').first().type(username)
    cy.get('.input_error.form_input').last().type(password)
    cy.get('.submit-button.btn_action').click()

})
