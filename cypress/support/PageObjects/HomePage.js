class HomePage
{
    getName()
    {
        return cy.get('form > div:nth-child(1) > input')
    }

    getGender()
    {
        return cy.get('select')
    }

    getDataBinding()
    {
        return  cy.get('form-comp > div > h4 > input')
    }

    getShopMenu()
    {
        return  cy.get('nav > ul > li:nth-child(2) > a')
    }

}

export default HomePage