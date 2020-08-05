const url = 'https://devexpress.github.io/testcafe/example/'
const selectBoxValue = 'JavaScript API'

describe('Select Box', () => {
  before(() => {
    cy.visit(url)
  })

  it('should pick an option from the preferred interface select box', () => {
    cy.get('[data-testid=preferred-interface-select]')
      .select(selectBoxValue)
      .should('have.value', selectBoxValue)
  })
})
