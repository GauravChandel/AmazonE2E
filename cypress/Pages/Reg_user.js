export class reg_user {

weblocator = {

signup_login : 'Signup / Login',
Name: 'input[name="name"]',
Email: 'input[name="email"]',
Button: '[data-qa="signup-button"]',

assertname: ' #name',
assertemail: '#email',

}

crt_acc ={

title: '#id_gender1',
password: '#password',
days: '#days',
months: '#months',
year: '#years',
newsletter: '#newsletter',
specialoffers : '#optin',


firstname: '#first_name',
lastname: '#last_name',
company: '#company',
address: '#address1',
country: '#country',
state :'#state',
city: '#city',
zipcode: '#zipcode',
mobilenumber: '#mobile_number',
createaccountbutton: 'Create Account'


}

openURL() {

    const newURL = Cypress.env('AutomationExercise')
    cy.visit(newURL)
    cy.get('img[src$=".png"]').should('have.attr', 'src' , '/static/images/home/logo.png')
}

ClickonSignup_login(){
    cy.contains(this.weblocator.signup_login).click()
    cy.get('.signup-form').contains('New User Signup!').should('be.visible')
}

NewUserSignUp(Fname,email ){
    cy.get(this.weblocator.Name).type(Fname)
    cy.get(this.weblocator.Email).last().type(email)
    cy.get(this.weblocator.Button).click()
}


Print_Name_and_Email(){
    cy.get(this.weblocator.assertname).should('have.attr', 'value').then((value)=>{
        cy.log(value)
    })
    cy.get(this.weblocator.assertemail).should('have.attr', 'value').then((value)=>{
        cy.log(value)
    })
}


FillAccountDeatis(pass, F_name, L_name, cmpny, adrs, stat, cty, zpcde, mbnum){
    cy.get(this.crt_acc.title).check()
    cy.get(this.crt_acc.password).type(pass)
    cy.get(this.crt_acc.days).select(5)
    cy.get(this.crt_acc.months).select('November')
    cy.get(this.crt_acc.year).select('1998')
    cy.get(this.crt_acc.newsletter).check()
    cy.get(this.crt_acc.specialoffers).check()


    cy.get(this.crt_acc.firstname).type(F_name)
    cy.get(this.crt_acc.lastname).type(L_name)
    cy.get(this.crt_acc.company).type(cmpny)
    cy.get(this.crt_acc.address).type(adrs)
    cy.get(this.crt_acc.country).select(0)
    cy.get(this.crt_acc.state).type(stat)
    cy.get(this.crt_acc.city).type(cty)
    cy.get(this.crt_acc.zipcode).type(zpcde)
    cy.get(this.crt_acc.mobilenumber).type(mbnum)
    cy.contains(this.crt_acc.createaccountbutton).click()

}


}