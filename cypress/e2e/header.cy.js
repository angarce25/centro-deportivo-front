describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); // Cambia la ruta si tu aplicación no empieza en "/"
  });

  it('Debería mostrar el logo', () => {
    cy.get('header img[alt="Logo"]').should('be.visible');
  });

  it('Debería tener enlaces de navegación', () => {
    cy.get('header').within(() => {
      cy.get('a[href="/register"]').should('be.visible').and('contain', 'Registrarse');
      cy.get('a[href="/login"]').should('be.visible').and('contain', 'Iniciar sesión');
      // Agrega más enlaces aquí si es necesario
    });
  });

  it('Debería mostrar y ocultar el menú al hacer clic en el botón de hamburguesa', () => {
    cy.get('header .xl\\:hidden button').click();
    cy.get('header nav').should('be.visible');

    cy.get('header .xl\\:hidden button').click();
    cy.get('header nav').should('not.be.visible');
  });

  it('Debería cerrar el menú cuando se hace clic en una opción', () => {
    cy.get('header .xl\\:hidden button').click();
    cy.get('header nav a[href="/register"]').click();
    cy.url().should('include', '/register');
    cy.get('header nav').should('not.be.visible');
  });
});
