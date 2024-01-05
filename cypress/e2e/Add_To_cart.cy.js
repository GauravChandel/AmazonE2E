/// <reference types = "cypress" />

import { AddTocart } from "../Pages/cart"

const obj1 = new AddTocart()

describe('Add to cart any item',()=>{

    before(()=>{
        cy.visit('')
    })

    it(' Add any mobile in to the cart', ()=>{
        cy.log('Testing')
        obj1.clickonseachinput()
        obj1.typeinsearchfield()
        cy.contains('Results').should('be.visible')
        obj1.clickonMobile()
        cy.get('.a-price-whole').should('have.text', '10,999.10,999.10,999.10,999.10,99910,999.8,999.')
        obj1.clickonaddtocartbutton()
        cy.get('div>h4.a-alert-heading').eq(5).contains('Added to Cart')
    })
})