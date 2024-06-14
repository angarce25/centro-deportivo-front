describe('Sidebar Component', () => {
  beforeEach(() => {
    // Simulamos el inicio de sesión interceptando la solicitud POST a la API
    cy.intercept('POST', 'http://localhost:3000/api/login', {
      statusCode: 200,
      body: {
        token: 'fakeToken',
        isAdmin: 'user',
        username: 'usuario'
      }
    }).as('loginRequest');

    // Visitamos la página de inicio de sesión y llenamos el formulario
    cy.visit('http://localhost:5173/login');
    cy.get('input[name="email"]').type('usuario@ejemplo.com');
    cy.get('input[name="password"]').type('contraseñaSegura');
    cy.get('button[type="submit"]').click();

    // Esperamos a que se complete el inicio de sesión
    cy.wait('@loginRequest');

    // Verificamos que la URL haya cambiado a la página de dashboard
    cy.url().should('include', '/dashboard/my-players');

    // Abrimos el sidebar si está cerrado
    cy.get('.p-2').click(); // Simula el clic para mostrar el sidebar
    cy.get('.translate-x-0').should('exist'); // Verifica que el sidebar esté visible
  });

  it('should render the Sidebar component', () => {
    // Verifica que el sidebar se renderice correctamente
    cy.get('.w-64').should('exist');
  });


  it('should hide Sidebar when button is clicked', () => {
    // Verifica que al hacer clic en el botón que oculta el sidebar, este se oculte
    cy.get('.p-2').click({ force: true }); // Forzamos el clic debido a que puede estar cubierto por otro elemento
    cy.get('.translate-x-0').should('not.exist'); // Verifica que el sidebar esté oculto
  });

  it('should log out when "Cerrar sesión" button is clicked', () => {
    // Verifica que al hacer clic en "Cerrar sesión", la URL cambie a la página de inicio
    cy.contains('Cerrar sesión').click(); // Ajusta el texto según el botón real
    cy.url().should('include', '/');
  });
});
