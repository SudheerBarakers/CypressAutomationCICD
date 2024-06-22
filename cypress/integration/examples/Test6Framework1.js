/// <reference types="Cypress" />


describe('Cypress Framework Part-1', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data

        })

    })
    it('Framework-1', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('form > div:nth-child(1) > input').type(this.data.name)
        cy.get('select').select(this.data.gender)

        cy.get('form-comp > div > h4 > input').should('have.value', this.data.name)

        // cy.pause()
        cy.get('nav > ul > li:nth-child(2) > a').click()
        // cy.selectModule('Blackberry')
        // cy.selectModule('Nokia Edge')

        this.data.productName.forEach(function (element) {
            cy.selectModule(element)
        })

        cy.get('#navbarResponsive > ul > li > a').click()

        var sum = 0
        cy.get('td:nth-child(4) > strong').each(($el, index, $list) => {

            const amount = $el.text()
            cy.log(amount)
            var res = amount.split(" ")
            res = res[1].trim()

            sum = Number(sum) + Number(res)
            cy.log(sum)
        })

        cy.get('h3 > strong').each(($el, index, $list) => {

            const amount = $el.text()
            cy.log(amount)
            var res = amount.split(" ")
            var total = res[1].trim()
            cy.log(total)

            expect(Number(total)).to.equal(sum)
        })

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.wait(6000)
        cy.get('div.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true }).should('be.checked')
        cy.get('form > input').click()
        //cy.get('div:nth-child(5) > div').contains("Success")
        cy.get('.alert').then(function (ele) {
            const message = ele.text()

            expect(message.includes('Success')).to.be.true
        })



    })
})