/// <reference types = "cypress" />


import { reg_user } from "../../Pages/Reg_user"
const ObjRegUser = new reg_user()

import test from '../../fixtures/reguser.json'

describe(' Registering the user ', ()=>{
    before(()=>{
        ObjRegUser.openURL()
    })


    it('Click on SignUp/Login', ()=>{
        ObjRegUser.ClickonSignup_login()

        ObjRegUser.NewUserSignUp(test.login.Fname, test.login.Email)

        ObjRegUser.Print_Name_and_Email()
        
        ObjRegUser.FillAccountDeatis(test.crt_acc.pass, test.crt_acc.F_name, test.crt_acc.L_name, test.crt_acc.cmpny, test.crt_acc.adrs, test.crt_acc.stat, test.crt_acc.cty, test.crt_acc.zpcde, test.crt_acc.mbnum)
        cy.get('.col-sm-9').should('contain', 'Account Created!').should('contain', 'Congratulations! Your new account has been successfully created!').and('contain', 'You can now take advantage of member privileges to enhance your online shopping experience with us');

    })
})