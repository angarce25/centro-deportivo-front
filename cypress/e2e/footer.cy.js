
describe('Footer Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/'); // Asegúrate de que la URL sea la correcta para tu aplicación
    });
  
    it('should display social media links with correct attributes', () => {
      cy.get('footer').within(() => {
        // Facebook link
        cy.get('a[href="https://www.facebook.com/"]')
          .should('have.attr', 'target', '_blank')
          .and('have.attr', 'rel', 'noopener noreferrer')
          .within(() => {
            cy.get('svg').should('exist'); // Assuming FbIcon is an SVG
          });
  
        // Instagram link
        cy.get('a[href="https://www.instagram.com/"]')
          .should('have.attr', 'target', '_blank')
          .and('have.attr', 'rel', 'noopener noreferrer')
          .within(() => {
            cy.get('svg').should('exist'); // Assuming IgIcon is an SVG
          });
  
        // LinkedIn link
        cy.get('a[href="https://www.linkedin.com/"]')
          .should('have.attr', 'target', '_blank')
          .and('have.attr', 'rel', 'noopener noreferrer')
          .within(() => {
            cy.get('svg').should('exist'); // Assuming LnkdIcon is an SVG
          });
  
        // Gmail link
        cy.get('a[href="mailto:cdciudaddelosangeles@hotmail.com"]').within(() => {
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
  
    // Uncomment and adjust this test if you decide to add the Link components back
    // it('should display the correct link texts', () => {
    //   cy.get('footer').within(() => {
    //     cy.get('a[href="/"]').contains('¿Link 1?').should('exist');
    //     cy.get('a[href="/"]').contains('¿Link 2?').should('exist');
    //   });
    // });
  });
  