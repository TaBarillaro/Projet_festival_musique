describe('Page d\'accueil', () => {
  it('successfully loads', () => {
    cy.visit('/')

    cy.contains('Liste des artistes').click()

    cy.url().should('include', '/liste-artistes')

    cy.get('#name').type('Monsieur l\'insect')
    
    cy.get('#photo').type('https://cdn.pixabay.com/photo/2025/05/01/16/21/insect-9571817_640.jpg')

    cy.contains('Ajouter').click()

    cy.contains('Monsieur l\'insect').should('exist')

  })
})