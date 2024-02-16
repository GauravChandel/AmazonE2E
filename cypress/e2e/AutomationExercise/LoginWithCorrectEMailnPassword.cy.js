/// <reference types = "cypress" />


import { reg_user } from "../../Pages/Reg_user";
const Obj1 = new reg_user()

describe(' Login with the Correct Email n Password', ()=>{
    before(()=>{

        Obj1.openURL()
    })

    it('Enter the correct Email and Password', ()=>{
        Obj1.ClickonSignup_login()

    })
    it('Tetsing ', ()=>{
        cy.log('testing')
    })

})