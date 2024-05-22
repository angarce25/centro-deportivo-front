
describe('LogoutButton Component', () => {
    beforeEach(() => {
      // Limpiar localStorage antes de cada prueba
      localStorage.clear();
      // Montar la aplicación antes de cada prueba
      cy.visit('http://localhost:5173/home');
    });
  
    it('should not display the button if no token is present', () => {
      cy.get('button').should('not.exist');
    });
  
    it('should display the button if accessToken is present', () => {
      localStorage.setItem('accessToken', 'dummyToken');
      cy.visit('http://localhost:5173/');
      cy.get('button').contains('Cerrar Sesión').should('exist');
    });
  
    
  
    it('should call signoutContext and navigate to home on button click', () => {
      // Simular tokens en localStorage
      localStorage.setItem('accessToken', 'dummyToken');
  
      // Mockear funciones de contexto y navegación
      cy.window().then(win => {
        win.signoutContext = cy.stub().as('signoutContext');
        win.navigate = cy.stub().as('navigate');
      });
  
      // Montar el componente de nuevo después de haber mockeado las funciones
      cy.visit('http://localhost:5173/home');
  
      // Hacer clic en el botón y verificar comportamientos
    //   cy.get('button').contains('Cerrar Sesión').click();
    //   cy.get('@signoutContext').should('have.been.calledOnce');
    //   cy.get('@navigate').should('have.been.calledWith', '/');
    });
  });
  