/// <reference types="Cypress" />

import HomePage from '../../support/PageObjects/HomePage'
import ProductPage from '../../support/PageObjects/ProductPage'

describe('Cypress Framework Part-1', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data

        })

    })
    it('Framework-1', function () {

        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url') + '/angularpractice/')

        homePage.getName().type(this.data.name)
        //  cy.get('form > div:nth-child(1) > input').type(this.data.name)

        homePage.getGender().select(this.data.gender)
        // cy.get('select').select(this.data.gender)

        homePage.getDataBinding().should('have.value', this.data.name)
        // cy.get('form-comp > div > h4 > input').should('have.value', this.data.name)

        // cy.pause()

        homePage.getShopMenu().click()
        // cy.get('nav > ul > li:nth-child(2) > a').click()
        // cy.selectModule('Blackberry')
        // cy.selectModule('Nokia Edge')

        this.data.productName.forEach(function (element) {
            cy.selectModule(element)
        })

        productPage.getCheckOut().click()
        //  cy.get('#navbarResponsive > ul > li > a').click()

        var sum = 0
        productPage.getSumofProduct().each(($e1, index, $list) => {

            const price = $e1.text()
            cy.log(price)
            var amt = price.split(" ")
            cy.log(amt)
            amt = amt[1].trim()
            cy.log(amt)

            sum = Number(sum) + Number(amt)
            cy.log(sum)

        })

        productPage.getCompareSum().each(($el, index, $list) => {

            const amount = $el.text()
            cy.log(amount)
            var res = amount.split(" ")
            var total = res[1].trim()
            cy.log(total)

            expect(Number(total)).to.equal(11000)
        })

        productPage.getCheckouts().click()
        productPage.getCountry().type('India')
        cy.wait(6000)
        productPage.getCountry1().click()
        productPage.getCheckout2().click({ force: true }).should('be.checked')
        productPage.getClick().click()
        //cy.get('div:nth-child(5) > div').contains("Success")
        productPage.getSuccessMessage().then(function (ele) {
            const message = ele.text()

            expect(message.includes('Success')).to.be.true
        })


    })
})