describe('Test the application', ()=>{

// const URL =  'http://127.0.0.1:5500/index.html'

    it('it test', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html')
        // Intercept link-clicking behavior

        cy.window().then((win) => {
            cy.stub(win, 'open').as('openStub');
          });
      
          // Click the button that opens a new tab
          cy.get('#StripeLink').click();
      
        //   Assert that the window.open() function was called with the correct URL
    
        // cy.get('@openStub').should('be.calledWith', 'https://stripe.com');

      
          // Get the URL of the newly opened tab and assert its correctness
          cy.window().then((win) => {
            const newTabUrl = win.open.args[0][0];
            cy.visit(newTabUrl);
          });
        });

    })
