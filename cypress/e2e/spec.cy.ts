describe('Tests sur artistes', () => {
  const validArtiste = {
    name: "Monsieur l'insect",
    photo: "https://cdn.pixabay.com/photo/2025/05/01/16/21/insect-9571817_640.jpg"
  }

  // Test initial d’accueil
  it('affiche le message caché sur la page d’accueil', () => {
    cy.visit('http://localhost:4200/accueil')

    cy.contains('Bienvenue sur l\'accueil!').should('exist')
  })

  // test erreur backend
  // it('Test erreur dans un faux backend', () => {
  //   cy.visit('/liste-artistes')

  //   cy.intercept('POST', '**/artists', {
  //   statusCode: 500,
  //   body: { message: 'Erreur serveur inconnue' }
  // }).as('createArtistError')

  // cy.get('#name').should('not.be.disabled').type('Artiste Test')
  // cy.get('#photo').type('https://example.com/photo.jpg')
  // cy.contains('Ajouter').click()
  
  // cy.wait('@createArtistError')
  
  // cy.get('.message-error').should('exist')

  // cy.get('.message-error') 
  //   .and('contain.text', 'Erreur serveur inconnue')
    
  })

  // test ajouter un artiste
  it('Ajouter un artiste valide', () => {
    cy.visit('/')

    cy.contains('Liste des artistes').click()

    cy.url().should('include', '/liste-artistes')

    cy.get('#name').type(validArtiste.name)

    cy.get('#photo').type(validArtiste.photo)

    cy.contains('Ajouter').click()

    cy.contains(validArtiste.name).should('exist')

  })


  it('Montrer les erreurs quand les champs sont vides', () => {
    cy.visit('/')

    cy.contains('Liste des artistes').click()

    cy.get('#name').focus().blur()

    cy.get('#photo').focus().blur()
    
    cy.contains('Ajouter').click()

    cy.get('.error-name').should('contain.text', 'Le nom est obligatoire')
    cy.get('.error-photo').should('contain.text', 'La photo est obligatoire')
  })


  
})