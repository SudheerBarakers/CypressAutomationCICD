/// <reference types="Cypress" />


describe('My First Test suite', function () {

    it('My First Test Case', function () {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.search-button').click()
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
         
            const name = $el.find('h4.product-name').text()
            if(name.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.brand').then(function(ele){

            cy.log(ele.text())
        })
    })
})