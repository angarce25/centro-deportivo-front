
describe('Footer Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/'); // Asegúrate de que la URL sea la correcta para tu aplicación
    });
  
    it('should display social media links with correct attributes', () => {
      cy.get('footer').within(() => {
        // Facebook link
        cy.get('a[href="https://www.facebook.com/123Ciudad/"]')
          .should('have.attr', 'target', '_blank')
          .and('have.attr', 'rel', 'noopener noreferrer')
          .within(() => {
            cy.get('svg').should('exist'); // Assuming FbIcon is an SVG
          });
  
        // Instagram link
        cy.get('a[href="https://www.instagram.com/cd_ciudad/"]')
          .should('have.attr', 'target', '_blank')
          .and('have.attr', 'rel', 'noopener noreferrer')
          .within(() => {
            cy.get('svg').should('exist'); // Assuming IgIcon is an SVG
          });
  
        
        // Gmail link
        cy.get('a[href="mailto:hola_ciudad@hotmail.com"]').within(() => {
          cy.get('svg').should('exist'); // Assuming GmailIcon is an SVG
        });
      });
    });
  
    it('should display the correct copyright text', () => {
      cy.get('footer').within(() => {
        cy.contains('© COPYRIGHT 2024').should('exist');
        cy.contains('Aviso Legal | Política de Privacidad').should('exist');
      });
    });
  
    
  });
  