/// <reference types="cypress" />

describe('Click on hover', () => {

    beforeEach(()=>{
        cy.visit('https://automationexercise.com/')

    })

    it('click on the price of 400', () => {
  
      cy.get('div>h2').contains('Rs. 400').should('be.visible').trigger('mouseover').then((elements) => {
        cy.wait(1000); 
        // Assert on the background color change
        cy.wrap(elements).should('have.css', 'background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
      })
    })

    it('test',()=>{
        // comment
        cy.get('.fa.fa-plus').first().click()
        cy.get('.panel-body').each(($ele)=>{
            cy.log($ele.text())
        })
    })
  })
  