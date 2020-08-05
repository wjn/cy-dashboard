const url = 'https://devexpress.github.io/testcafe/example/'
const devName = 'Jim Bob'

describe('Submit Form', () => {
  before(() => {
    cy.visit(url)
  })
  it('Should fill and submit developer name', () => {
    cy.get('#developer-name')
      .should('be.visible')
      .and('be.enabled')
      .type(devName)
    cy.get('#tried-test-cafe')
      .should('be.visible')
      .and('be.enabled')
      .click()
      .should('be.checked')
    cy.get('#submit-button').should('be.visible').and('be.enabled').click()
  })
  it('should land on thank you page', () => {
    cy.get('#article-header')
      .should('be.visible')
      .contains(`Thank you, ${devName}!`)
  })
})
