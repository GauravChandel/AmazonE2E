export class AddTocart{


weblocator = {
searchinput: '#twotabsearchtextbox',
clickonredmimobile: '[aria-label="redmi 13c 5g"]',
clickonsearchedmobile: 'h2>a.a-link-normal.s-underline-text',
addtocartbutton: '#add-to-cart-button'

}

clickonseachinput(){
    cy.get(this.weblocator.searchinput).type('Redmi')
}

typeinsearchfield(){
    cy.contains('13c 5g', {matchCase:false}).click()
}

clickonMobile() {
    cy.get(this.weblocator.clickonsearchedmobile).eq(0)
      .invoke('removeAttr', 'target')
      .click()
}

clickonaddtocartbutton(){
    cy.scrollTo(0, 500)
    cy.get(this.weblocator.addtocartbutton).click({force: true})
    cy.wait(5000)
}

}