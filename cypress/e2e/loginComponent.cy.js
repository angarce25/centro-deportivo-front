describe('Login Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/login');
    });
  
    it('Debería renderizar el formulario de inicio de sesión', () => {
      cy.contains('Iniciar sesión').should('be.visible');
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
      cy.get('input[name="email"]').type('ana@example.com');
      cy.get('input[name="password"]').type('hashedpasswordabc');
      cy.get('button[type="submit"]').click();
  
      // Verifica que la URL cambió a la página de inicio
      cy.url().should('eq', "http://localhost:5173/");
    });
  
    it('Debería navegar a la página de registro al hacer clic en el enlace de registro', () => {
      cy.contains('¿No tienes cuenta? Regístrate aquí').click();
  
      // Verifica que la URL cambió a la página de registro
      cy.url().should('include', '/register');
    });
  });
  