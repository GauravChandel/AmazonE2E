/// <reference types =  "cypress" />

import { allheaderslist } from "../Pages/listofheader";
const hiturl = new allheaderslist()

describe('Hit the URL', () =>{
    beforeEach(()=>{
        hiturl.openURL()
    })

    it(' First, Hit the URL', () =>{
        cy.url().should('include', 'https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/')
    })

    it(' Second, Print all the list of headers', ()=>{
        cy.get('.menu-primary-container ul#menu-primary li').each(($li) => {
          cy.log($li.text());
        })
        cy.get('div>img.attachment-post-thumbnail').should('have.attr', 'src', 'https://automationpanda.files.wordpress.com/2021/12/5921538908_aa151ddfcf_b.jpg?w=620')
    })

    it('Third, Click on the required alert message',()=>{
        cy.get('div>form>p>button').contains('Follow').click();
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('Please fill in this field');
        })
    })

    it.only('Fourth, Seach for the hello word in the search bar',()=>{
        cy.get('.search-field').type('hello{enter}')
        cy.get('.page-title').contains('Search Results for: hello')
    })

})




