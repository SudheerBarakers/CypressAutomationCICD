/// <reference types="Cypress" />


describe('My First Test suite', function () {

    it('My First Test Case', function () {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.search-button').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const name = $el.find('h4.product-name').text()
            if(name.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        //cy.get(':nth-child(14)').eq(0).click()
        cy.get('button').contains("Place Order").click()
        cy.get('b').should('have.text', 'Please accept Terms & Conditions - Required')

    })
})