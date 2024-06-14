describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Debería renderizar el componente Header', () => {
    cy.get('header').should('exist').and('be.visible');
  });

  it('Debería renderizar el componente Slide', () => {
    cy.get('.home .container').should('exist').and('be.visible'); // Asegúrate de que '.container' sea parte de tu Slide
  });

  it('Debería renderizar la sección "About Us" con la imagen y el texto', () => {
    // Verificar que la imagen y el texto estén presentes y visibles en la sección "About Us"
    cy.get('img[src*="imgabout.png"]').should('be.visible');
    cy.contains('¿Quienes somos?').should('be.visible');
    cy.contains('El barrio madrileño de la Ciudad de los Ángeles').should('be.visible');
  });

  it('Debería renderizar el componente Footer', () => {
    cy.get('footer').should('exist').and('be.visible');
  });
});
