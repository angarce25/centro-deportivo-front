/// <reference types="cypress" />

describe('Card Components', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/dashboard/products'); // Asegúrate de que la URL sea la correcta para tu aplicación
    });
  
    it('should display Card0 correctly', () => {
      cy.get('[data-testid="card0"]').within(() => {
        cy.get('span').contains('Merchandaising').should('exist');
        cy.get('img').should('have.attr', 'src', 'https://deportesbernal.es//wp-content/uploads/2024/01/gorra-amarilla-cadiz-cf-2-600x600.jpg');
        cy.get('span').contains('Gorra oficial').should('exist');
        cy.get('span').contains('8 €').should('exist');
      });
    });
  
    it('should display Card1 correctly', () => {
      cy.get('[data-testid="card1"]').within(() => {
        cy.get('span').contains('Equipación').should('exist');
        cy.get('img').should('have.attr', 'src', 'https://tienda.rfaf.es/1443-home_default/camiseta-nike-selecci%C3%B3n-ii-hombre.jpg');
        cy.get('span').contains('Camiseta oficial').should('exist');
        cy.get('span').contains('21 €').should('exist');
      });
    });
  
    it('should display Card2 correctly', () => {
      cy.get('[data-testid="card2"]').within(() => {
        cy.get('span').contains('Accesorios').should('exist');
        cy.get('img').should('have.attr', 'src', 'https://shop.realbetisbalompie.es/cdn/shop/files/u1nf03gj.png?crop=center&v=1715241409&width=960');
        cy.get('span').contains('Bufanda').should('exist');
        cy.get('span').contains('10 €').should('exist');
      });
    });
  
    it('should display Card3 correctly', () => {
      cy.get('[data-testid="card3"]').within(() => {
        cy.get('span').contains('Protección').should('exist');
        cy.get('img').should('have.attr', 'src', 'https://tienda.granadacf.es/3139-large_default/parka-negra-adulto-adidas-23-24.jpg');
        cy.get('span').contains('Abrigo').should('exist');
        cy.get('span').contains('10 €').should('exist');
      });
    });
  });
  