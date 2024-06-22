/// <reference types="Cypress" />


describe('My First Test suite', function () {

    it('My First Test Case', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')

        cy.get('select').select('option2').should('have.value','option2')

        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($e1) => {

            if($e1.text()==="India")
            {
                $e1.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
    })
})