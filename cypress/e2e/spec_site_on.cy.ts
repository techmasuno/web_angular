describe('techMasUno siteOn', () => {
  it('secure site', () => {
    cy.visit('https://techmasun.com',
      {
        timeout: 3000,
      })

      cy.get('.container-fluid > .navbar-brand');
  })
})
