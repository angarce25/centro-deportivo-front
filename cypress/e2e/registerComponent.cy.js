describe('Registro de usuario', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('Verifica campos obligatorios y formato de entrada', () => {
    // Intenta enviar el formulario sin llenar campos obligatorios
    cy.get('button[type="submit"]').click();

    // Verifica mensajes de error para campos obligatorios
    cy.contains('Campo obligatorio').should('be.visible');

    // Llena el formulario con datos válidos
    cy.get('input[name="name"]').type('Nombre');
    cy.get('input[name="lastname"]').type('Apellido');
    cy.get('input[name="email"]').type('correo@example.com');
    cy.get('input[name="password"]').type('Password1!');
    cy.get('input[name="mobile"]').type('123456789');

    // Verifica que los errores desaparezcan
    cy.contains('Campo obligatorio').should('not.exist');
    cy.contains('La contraseña debe tener al menos 6 caracteres').should('not.exist');
  });

  
});
