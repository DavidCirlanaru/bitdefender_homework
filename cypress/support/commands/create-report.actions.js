Cypress.Commands.add('validateDropdownInput', (inputSelector, inputValue) => {
    cy.getInputByPlaceholder(`${inputSelector}`).type(`${inputValue}`)
    cy.getFirstInputDropdownOption().should('be.visible')
    cy.getFirstInputDropdownOption().click()
    cy.getFirstInputDropdownOption().should('not.exist')
    cy.getInputByPlaceholder(`${inputSelector}`).should('have.value', `${inputValue}`)
})