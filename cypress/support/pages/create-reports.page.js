Cypress.Commands.add('getInputByPlaceholder', (name) => {
    cy.get(`app-create form input[type="text"][placeholder="${name}"]`)
})

Cypress.Commands.add('getFirstInputDropdownOption', () => {
    cy.get('.cdk-overlay-container .mat-autocomplete-panel [id^=mat-option]')
})

Cypress.Commands.add('getAllDropdownInputs', () => {
    cy.get('app-create form .mat-input-element')
})

Cypress.Commands.add('getAllTextInputs', () => {
    cy.get('app-create form [type="text"]:not(.mat-form-field-autofill-control)')
})
