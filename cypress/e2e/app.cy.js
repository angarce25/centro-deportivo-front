describe('App Navigation', () => {
    beforeEach(() => {
      // Visita la página de inicio antes de cada prueba
      cy.visit('http://localhost:5173/');
    });
  
    it('Debería renderizar la página de inicio correctamente, y verificamos titulo', () => {
      
      cy.get('h1').should('have.text', '¿Quienes somos?');
    });
  
    it('Debería navegar a la página de login', () => {
      cy.visit('http://localhost:5173/login');
      cy.get('h2').should('have.text', 'Iniciar sesión');
    });
  
    it('Debería navegar a la página de registro', () => {
      cy.visit('http://localhost:5173/register');
      cy.get('h2').should('have.text', 'Regístrate');
    });
  
    it('Debería navegar a la página de productos', () => {
      cy.visit('http://localhost:5173/products');
      cy.get('h2').should('have.text', 'Productos disponibles del Club');
    });
  
    it('Debería navegar a la página de usuarios del dashboard', () => {
      cy.visit('http://localhost:5173/dashboard/users');
      cy.get('h2').should('have.text', 'Padres');
    });
  
    // it('NO Debería navegar a la página de productos del dashboard sin un token', () => {
    //   cy.visit('http://localhost:5173/dashboard/products');
    //   cy.contains('Products'); 
    // });
  
    // it('NO Debería navegar a la página de equipos del dashboard sin un token', () => {
    //   cy.visit('http://localhost:5173/dashboard/teams');
    //   cy.contains('Teams'); 
    // });
  });
  