/// <reference types="Cypress" />


describe('My First Test suite', function () {

    it('My First Test Case', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
        cy.get('tr td:nth-child(2)').each(($e1,index,$list) =>{

            const textCol = $e1.text()
          //  cy.log("texttt" +textCol)

            if(textCol.includes("Python"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {               
                    const Price = price.text()
                    cy.log("Price:" +Price)
                    expect(Price).to.equal('25')
                })
            }
        })

        cy.contains('Top').click({force: true})
        cy.url().should('include','top')


    })
})