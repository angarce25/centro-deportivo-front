describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('Debería renderizar el componente Header', () => {
      cy.get('header').should('exist');
    });
  
    it('Debería renderizar el componente Slide', () => {
      cy.get('.container').should('exist'); // Asegúrate de que la clase .slide-container coincida con la estructura de tu Slide
    });
  
    it('Debería renderizar la sección About Us con la imagen y el texto', () => {
      cy.get('img[src*="imgabout.png"]').should('be.visible');
      cy.contains('¿Quienes somos?').should('be.visible');
      cy.contains('El barrio Madrileño de la Ciudad de los Ángeles').should('be.visible');
    });
  
    it('Debería renderizar el componente Footer', () => {
      cy.get('footer').should('exist');
    });
  });
  