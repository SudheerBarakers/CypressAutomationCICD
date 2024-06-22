class ProductPage
{
    getCheckOut()
    {
        return cy.get('#navbarResponsive > ul > li > a')
    }

    getSumofProduct()
    {
        return cy.get('td:nth-child(4) > strong')
    }

    getCompareSum()
    {
        return  cy.get('h3 > strong')
    }

    getCheckouts()
    {
        return  cy.contains('Checkout')
    }

    getCountry()
    {
        return cy.get('#country')
    }

    getCountry1()
    {
        return  cy.get('div.suggestions > ul > li > a')
    }

    getCheckout2()
    {
        return  cy.get('#checkbox2')
    }

    getClick()
    {
        return  cy.get('form > input')
    }

    getSuccessMessage()
    {
        return cy.get('.alert')
    }

}
export default ProductPage