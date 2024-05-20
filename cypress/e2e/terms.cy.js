describe('TermsAndConditionsModal', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/register');
    });
  
    it('should display terms and conditions modal', () => {
      // Verificar que el modal esté cerrado inicialmente
      cy.get('[data-testid="modal"]').should('not.be.visible');
  
      // Hacer clic en el botón que abre el modal
      cy.get('[data-testid="open-modal-button"]').click();
  
      // Verificar que el modal esté abierto
      cy.get('[data-testid="modal"]').should('be.visible');
  
      // Verificar que el título de los términos y condiciones esté presente
      cy.contains('TÉRMINOS Y CONDICIONES').should('be.visible');
  
      // Hacer clic en el botón "Siguiente" para avanzar a la siguiente página
      cy.get('[data-testid="next-page-button"]').click();
  
      // Verificar que la siguiente página se haya cargado
      cy.contains('AUTORIZACIÓN PARA EL USO DE IMÁGENES').should('be.visible');
  
      // Hacer clic en el botón "Anterior" para volver a la página anterior
      cy.get('[data-testid="prev-page-button"]').click();
  
      // Verificar que la página anterior se haya cargado
      cy.contains('CLÁUSULA INFORMATIVA DE PROTECCION DE DATOS').should('be.visible');
  
      // Hacer clic en el botón "Entendido" para cerrar el modal
      cy.get('[data-testid="close-modal-button"]').click();
  
      // Verificar que el modal esté cerrado después de hacer clic en "Entendido"
      cy.get('[data-testid="modal"]').should('not.be.visible');
    });
  });
  