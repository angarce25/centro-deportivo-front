describe('Sidebar Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/dashboard/users'); // Asegúrate de que la URL sea la correcta para tu aplicación
    });
  
    it('should render the Sidebar component', () => {
      cy.get('.Sidebar').should('exist'); // Reemplaza '.Sidebar' con la clase CSS real del componente Sidebar
    });
  
    it('should display the logo', () => {
      cy.get('.Sidebar img').should('exist'); // Ajusta el selector según la estructura del DOM real
    });
  
    it('should display navigation links', () => {
      cy.get('.Sidebar nav').should('have.length', 6); // Verifica que haya 6 elementos nav dentro del Sidebar
    });
  
    it('should navigate to Home page when Home link is clicked', () => {
      cy.contains('Home').click(); // Ajusta el texto según el enlace real
      cy.url().should('include', '/dashboard/products'); // Verifica que la URL haya cambiado a la página de inicio real
    });
  
    // Agrega más pruebas para los demás enlaces de navegación según sea necesario
  });
  