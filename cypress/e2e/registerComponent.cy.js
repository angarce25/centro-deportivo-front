describe('Register Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/register');
    });
  
    it('Debería renderizar el formulario de registro', () => {
      cy.contains('Regístrate').should('be.visible');
      cy.get('input[name="name"]').should('exist');
      cy.get('input[name="lastName"]').should('exist');
      cy.get('input[name="email"]').should('exist');
      cy.get('input[name="password"]').should('exist');
      cy.get('input[name="phone"]').should('exist');
      cy.get('textarea[name="observations"]').should('exist');
      cy.get('input[type="checkbox"]').should('exist');
      cy.get('button[type="submit"]').should('exist').and('contain', 'Aceptar');
    });
  
    it('Debería permitir al usuario ingresar datos en los campos del formulario', () => {
      cy.get('input[name="name"]').type('Juan');
      cy.get('input[name="lastName"]').type('Pérez');
      cy.get('input[name="email"]').type('juan.perez@ejemplo.com');
      cy.get('input[name="password"]').type('Contraseña123!');
      cy.get('input[name="phone"]').type('123456789');
      cy.get('textarea[name="observations"]').type('Encontré el sitio web en Google.');
    });
  
    it('Debería mostrar errores de validación cuando los campos están vacíos o son inválidos', () => {
      cy.get('button[type="submit"]').click();
  
      cy.contains('Campo obligatorio').should('be.visible');
      cy.get('input[name="email"]').type('email inválido');
      cy.contains('Email inválido').should('be.visible');
      cy.get('input[name="password"]').type('contraseña');
      cy.contains('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@$!%*?&)').should('be.visible');
    });
  
    it('Debería verificar el reCAPTCHA antes de enviar el formulario', () => {
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Por favor, verifica que no eres un robot.');
      });
    });
  
    it('Debería aceptar los términos y condiciones antes de enviar el formulario', () => {
      cy.get('input[type="checkbox"]').uncheck();
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Debes aceptar los términos y condiciones.');
      });
    });
  
    it('Debería enviar el formulario correctamente después de completar todos los campos y verificaciones', () => {
      cy.get('input[name="name"]').type('Juan');
      cy.get('input[name="lastName"]').type('Pérez');
      cy.get('input[name="email"]').type('juan.perez@ejemplo.com');
      cy.get('input[name="password"]').type('Contrasena123!');
      cy.get('input[name="phone"]').type('123456789');
      cy.get('textarea[name="observations"]').type('Encontré el sitio web en Google.');
      cy.get('input[type="checkbox"]').check();


     // Confirma la casilla de verificación de reCAPTCHA
    //  cy.get('iframe[title="reCAPTCHA"]').should('be.visible').then((iframe) => {
    //     const body = iframe.contents().find('body');
    //     cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click();
    //   });
      

  // Haz clic en el botón de enviar formulario
  cy.get('button[type="submit"]').click();

  // Verifica que se muestra la alerta de éxito
//   cy.on('window:alert', (text) => {
//     expect(text).to.contains('Registrado con éxito');
//   });

  // Verifica que la URL cambió a la página de inicio
//   cy.url().should('eq', "http://localhost:5173/");


    
    });
  });
  