// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// -_- Comando para confirmar el reCAPTCHA
Cypress.Commands.add('confirmCaptcha', function () {
    cy.get('iframe')
      .first()
      .then((recaptchaIframe) => {
        const body = recaptchaIframe.contents();
        cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click();
      });
  });


  
  