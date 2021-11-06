describe('Create report', () => {
    it('should load the dashboard', () => {
        cy.visit('/')
        cy.get('app-reports h1').first().should('have.text', 'Dashboard')
    })

    it('it should validate that create reports buttons works', () => {
        cy.get('app-reports .content a.mat-flat-button')
            .contains('CREATE REPORT')
            .should('be.visible')
            .click()

        cy.url().should('include', '/reports/create')
    })

    it('it should validate that the options dropdown expands on click inside input', () => {
        cy.getInputByPlaceholder('Select type').should('be.visible')
        cy.getInputByPlaceholder('Select type').click()
        cy.getInputByPlaceholder('Select type').should('have.attr', 'aria-expanded', 'true')

        cy.getInputByPlaceholder('Select Company').should('be.visible')
        cy.getInputByPlaceholder('Select Company').click()
        cy.getInputByPlaceholder('Select Company').should('have.attr', 'aria-expanded', 'true')
        cy.getFirstInputDropdownOption().should('be.visible')
    })

    it('it should validate that the options dropdown expands on click on arrow icon', () => {
        cy.get('app-create form autocomplete-trigger-arrow').click()
        cy.getInputByPlaceholder('Select type').should('have.attr', 'aria-expanded', 'true')
        cy.getFirstInputDropdownOption().should('be.visible')

        cy.get('app-create form autocomplete-trigger-arrow').click()
        cy.getInputByPlaceholder('Select Company').should('have.attr', 'aria-expanded', 'true')
        cy.getFirstInputDropdownOption().should('be.visible')
    })

    it('it should validate that the options dropdown disappears after the first option is selected', () => {
        cy.validateDropdownInput('Select type', 'Executing summary')
        cy.validateDropdownInput('Select Company', 'Sample Company')
    })

    it('it should validate that name input', () => {
        cy.getInputByPlaceholder('Enter name').type('Test').should('have.value', 'Test')
        cy.getInputByPlaceholder('Enter name').clear().type('Test!@#$%321').should('have.value', 'Test')
    })

    it('it should validate that inputs are cleared after pressing save', () => {
        cy.get('footer button span.mat-button-wrapper').contains('SAVE').click()
        cy.getAllDropdownInputs().each((input, index, list) => {
            cy.wrap(input).should('have.value', '')
        })

        cy.getAllTextInputs().each((input, index, list) => {
            cy.wrap(input).should('have.value', '')
        })
    })
})