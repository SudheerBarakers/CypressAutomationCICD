/// <reference types="Cypress" />


describe('My First Test suite', function () {

    it('My First Test Case', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
        //Handling alert and pop up message
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //Handle allert and pop up window message using events
        // event: window:alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //event:window:confirm
        cy.on('window:confirm', (str) => {

            //assertion to compare two strings
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Handle child tab in same tab without moving to new tab. 
        // remove target attribute ( target='_blank')
        cy.get('#opentab').invoke('removeAttr','target').click()

        //assertion of url 
        cy.url().should('include','rahulshettyacademy')        // go back navigation
        cy.go('back')
    })
})