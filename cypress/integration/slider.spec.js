const url = 'https://devexpress.github.io/testcafe/example/'
const devName = 'Jim Bob'
const selectBoxValue = 'JavaScript API'

describe('Slider Test', () => {
  before(() => {
    cy.visit(url)
  })

  it('should pick value on slider', () => {
    cy.get('#tried-test-cafe')
      .should('be.visible')
      .and('be.enabled')
      .click()
      .should('be.checked')
    cy.contains('5').click()
    // cy.get('[data-testid=rank-input]').should('contain', 5)
    // cy.get('#submit-button').should('be.visible').and('be.enabled').click()
  })
})
