describe('Players Users Chart Component', () => {
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
  
      // Visitamos la página de inicio de sesión (o cualquier página que requiera inicio de sesión)
      cy.visit('http://localhost:5173/login');
  
      // Llenamos el formulario de inicio de sesión simulado
      cy.get('input[name="email"]').type('usuario@ejemplo.com');
      cy.get('input[name="password"]').type('contraseñaSegura');
      cy.get('button[type="submit"]').click();
  
      // Esperamos a que se complete el inicio de sesión simulado
      cy.wait('@loginRequest');
    });
  
    it('should display "Mis Jugadores" section with players data', () => {
      // Esperamos a que se carguen los datos de los jugadores
      cy.intercept('GET', 'http://localhost:3000/api/myplayers', {
        statusCode: 200,
        body: [
          {
            _id: '1',
            name: 'Juan',
            lastname: 'Pérez',
            age: 25,
            team: { name: 'Equipo A' },
            shirt_size: 'M',
            pants_size: '32',
            shoe_size: '9',
            status: true
          },
          {
            _id: '2',
            name: 'María',
            lastname: 'López',
            age: 28,
            team: null,
            shirt_size: 'S',
            pants_size: '28',
            shoe_size: '7',
            status: false
          }
        ]
      }).as('getPlayers');
  
      // Visitamos la página de jugadores
      cy.visit('http://localhost:5173/dashboard/my-players');
  
      // Esperamos a que se carguen los jugadores
      cy.wait('@getPlayers');
  
      // Verificamos que el título "Mis Jugadores" esté presente
      cy.contains('Mis Jugadores').should('exist');
  
      // Verificamos que los jugadores se muestren correctamente en la tabla
      cy.get('.table tbody tr').should('have.length', 2); // Verificamos que hay dos jugadores en la tabla
  
      // Verificamos los datos del primer jugador
      cy.get('.table tbody tr').eq(0).within(() => {
        cy.get('td').eq(0).should('contain.text', 'Juan'); // Nombre
        cy.get('td').eq(1).should('contain.text', 'Pérez'); // Apellido
        cy.get('td').eq(2).should('contain.text', '25 años'); // Edad
        cy.get('td').eq(3).should('contain.text', 'Equipo A'); // Equipo
        cy.get('td').eq(4).should('contain.text', 'M'); // Talla Camisa
        cy.get('td').eq(5).should('contain.text', '32'); // Talla Pantalón
        cy.get('td').eq(6).should('contain.text', '9'); // Talla Zapato
        cy.get('td').eq(7).should('contain.text', 'Activo'); // Estado
      });
  
      // Verificamos los datos del segundo jugador
      cy.get('.table tbody tr').eq(1).within(() => {
        cy.get('td').eq(0).should('contain.text', 'María'); // Nombre
        cy.get('td').eq(1).should('contain.text', 'López'); // Apellido
        cy.get('td').eq(2).should('contain.text', '28 años'); // Edad
        cy.get('td').eq(3).should('contain.text', 'Pendiente'); // Equipo (cuando team es null)
        cy.get('td').eq(4).should('contain.text', 'S'); // Talla Camisa
        cy.get('td').eq(5).should('contain.text', '28'); // Talla Pantalón
        cy.get('td').eq(6).should('contain.text', '7'); // Talla Zapato
        cy.get('td').eq(7).should('contain.text', 'Inactivo'); // Estado
      });
    });
  });
  