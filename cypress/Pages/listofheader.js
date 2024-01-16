export class allheaderslist{

weblocator = {


}

openURL(){
    cy.visit(Cypress.env('URL'))   // we are getting the value here from config.js file
}


}