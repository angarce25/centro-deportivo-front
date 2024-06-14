describe('Terms and Conditions Modal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should open and navigate through the terms and conditions modal', () => {
    // Hacer clic para abrir el modal
    cy.get('.text-sm').click();

   


    // Hacer clic en "Siguiente" para ir a la siguiente página
    cy.contains('Siguiente').click();


   

    // Hacer clic en "Entendido" para cerrar el modal
    cy.contains('Entendido').click();

    // Verificar que el modal ya no exista en el DOM después de cerrarlo
    cy.get('.Modal').should('not.exist');
  });
});
