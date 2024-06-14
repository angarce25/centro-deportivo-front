describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // Asegúrate de cambiar la URL según corresponda
  });

  it('Debería mostrar el logo', () => {
    cy.get('.xl\\:hidden').click(); // Abrir el menú hamburguesa para que el logo sea visible
    cy.get('header img[alt="Logo"]').should('be.visible');
  });

  it('Debería tener enlaces de navegación', () => {
    cy.get('header').within(() => {
      cy.get('.xl\\:hidden').click(); // Abrir el menú hamburguesa para que los enlaces sean visibles
      cy.get('a[href="/register"]').should('be.visible').and('contain', 'Registro');
      cy.get('a[href="/login"]').should('be.visible').and('contain', 'Iniciar sesión');
      cy.get('a[href="/info"]').should('be.visible').and('contain', 'Nuestros equipos');
    });
  });

  it('Debería mostrar y ocultar el menú al hacer clic en el botón de hamburguesa', () => {
    // Abrir el menú hamburguesa
    cy.get('.xl\\:hidden').click();

    // Verificar que el menú se ha abierto correctamente
    cy.get('.xl\\:flex').should('be.visible');

    // Cerrar el menú hamburguesa haciendo clic en la "X"
    cy.get('.w-6 > path').click();

    // Verificar que el menú hamburguesa se ha cerrado
    cy.get('.xl\\:flex').should('not.be.visible');
  });

  it('Debería cerrar el menú cuando se hace clic en una opción', () => {
    // Abrir el menú hamburguesa
    cy.get('.xl\\:hidden').click();

    // Hacer clic en el enlace de registro
    cy.get('header nav a[href="/register"]').click();

    // Verificar que la URL cambie a /register
    cy.url().should('include', '/register');

    // Verificar que el menú hamburguesa se ha cerrado automáticamente
    cy.get('.xl\\:flex').should('not.be.visible');
  });
});
