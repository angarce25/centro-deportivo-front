describe('Login Component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });

  it('Debería renderizar el formulario de inicio de sesión', () => {
    cy.contains('h2', 'Iniciar sesión').should('be.visible');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist').and('contain', 'Iniciar sesión');
  });

  it('Debería permitir al usuario ingresar un correo electrónico y una contraseña', () => {
    cy.get('input[name="email"]').type('usuario@ejemplo.com');
    cy.get('input[name="password"]').type('contraseñaSegura');
    cy.get('input[name="email"]').should('have.value', 'usuario@ejemplo.com');
    cy.get('input[name="password"]').should('have.value', 'contraseñaSegura');
  });

  it('Debería navegar a la página de inicio después de un inicio de sesión exitoso', () => {
    cy.intercept('POST', 'http://localhost:3000/api/login', {
      statusCode: 200,
      body: {
        token: 'fakeToken',
        isAdmin: 'user',
        username: 'usuario'
      }
    }).as('loginRequest');
    
    cy.get('input[name="email"]').type('usuario@ejemplo.com');
    cy.get('input[name="password"]').type('contraseñaSegura');
    cy.get('button[type="submit"]').click();
    cy.wait('@loginRequest');
    cy.url().should('include', '/dashboard/my-players');
  });

  it('Debería navegar a la página de inicio después de un inicio de sesión exitoso como admin', () => {
    cy.intercept('POST', 'http://localhost:3000/api/login', {
      statusCode: 200,
      body: {
        token: 'fakeToken',
        isAdmin: 'admin',
        username: 'admin'
      }
    }).as('loginRequestAdmin');
    
    cy.get('input[name="email"]').type('admin@ejemplo.com');
    cy.get('input[name="password"]').type('adminPassword');
    cy.get('button[type="submit"]').click();
    cy.wait('@loginRequestAdmin');
    cy.url().should('include', '/dashboard/users');
  });

  it('Debería mostrar un mensaje de error por exceso de intentos de inicio de sesión', () => {
    cy.intercept('POST', 'http://localhost:3000/api/login', {
      statusCode: 429,
      body: {
        message: 'Demasiados intentos de inicio de sesión. Por favor, inténtelo de nuevo más tarde.'
      }
    }).as('rateLimitRequest');
    
    cy.get('input[name="email"]').type('usuario@ejemplo.com');
    cy.get('input[name="password"]').type('contraseñaSegura');
    cy.get('button[type="submit"]').click();
    cy.wait('@rateLimitRequest');
    cy.contains('Demasiados intentos de inicio de sesión. Por favor, inténtelo de nuevo más tarde.').should('be.visible');
  });



});

