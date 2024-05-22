

describe('FormNewPlayer Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/dashboard/form-player'); // Asegúrate de que la URL sea la correcta para tu aplicación
    });
  
    it('should display the form fields correctly', () => {
      // Seleccionar el primer formulario (Datos personales)
      cy.get('form').first().within(() => {
        // Verificar campos de datos personales
        cy.get('input#nombre').should('exist');
        cy.get('input#apellidos').should('exist');
        cy.get('input#email').should('exist');
        cy.get('input#telefono').should('exist');
        cy.get('input#dni').should('exist');
        cy.get('input#codigopostal').should('exist');
        cy.get('textarea#alergias').should('exist');
        cy.get('textarea#enfermedad').should('exist');
      });
  
      // Seleccionar el segundo formulario (Datos equipamiento deportivo)
      cy.get('form').last().within(() => {
        cy.get('select#tallaCamiseta').should('exist');
        cy.get('select#tallaPantalon').should('exist');
        cy.get('select#numeroCalzado').should('exist');
      });
    });
  
    it('should open and close the modal correctly', () => {
      cy.contains('¿Para qué necesito aportar esta información?').click();
      cy.get('div[role="dialog"]').should('exist');
      cy.get('button').contains('Cerrar').click({ force: true }); // Asegúrate de que el botón de cierre tenga el texto "Cerrar"
      cy.get('div[role="dialog"]').should('not.exist');
    });
  
    it('should submit the form', () => {
      // Seleccionar el primer formulario (Datos personales)
      cy.get('form').first().within(() => {
        cy.get('input#nombre').type('John');
        cy.get('input#apellidos').type('Doe');
        cy.get('input#email').type('john.doe@example.com');
        cy.get('input#telefono').type('123456789');
        cy.get('input#dni').type('12345678A');
        cy.get('input#codigopostal').type('28001');
        cy.get('textarea#alergias').type('None');
        cy.get('textarea#enfermedad').type('None');
      });
  
      // Seleccionar el segundo formulario (Datos equipamiento deportivo)
      cy.get('form').last().within(() => {
        cy.get('select#tallaCamiseta').select('M');
        cy.get('select#tallaPantalon').select('30');
        cy.get('select#numeroCalzado').select('38');
      });
  
      cy.get('button[type="submit"]').contains('Añadir jugador').click();
      // Aquí puedes agregar verificación adicional después de enviar el formulario, como comprobar si se ha realizado una redirección o si ha aparecido un mensaje de éxito.
    });
  });
  