<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLCc_7YH-7urnc8N7_5YCR9JhWEiA6qTrCM55UPPXjg&s" alt="Club Deportivo Ciudad de los Angeles - ¡Somos ciudad!" width="250px">

# Sistema de gestión - Somos Ciudad

Este proyecto tiene como objetivo desarrollar el frontend para el sitio web del Centro Deportivo CA, implementado con Vite, React y Tailwind. A continuación, se detallan los requisitos técnicos y las funcionalidades principales que deben fueron solicitadas por nuestro cliente.

## Tecnologías Utilizadas

### Creación de prototipos en Figma.

<a href="#" rel="nofollow"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" style="max-width: 100%;"></a>

### Lenguajes de Programación

<a href="#"><img src="https://raw.githubusercontent.com/danielcranney/profileme-dev/3fc3595593bc992e6febba6580d6c9571f5e625f/public/icons/skills/html5-colored.svg" alt="HTML"  width="40" height="40" style="max-width: 100%;" ></a>

<a href="#"><img src="https://raw.githubusercontent.com/danielcranney/profileme-dev/3fc3595593bc992e6febba6580d6c9571f5e625f/public/icons/skills/css3-colored.svg" alt="CSS"  width="40" height="40" style="max-width: 100%;"></a>

<a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010" alt="JavaScript"  width="40" height="40" style="max-width: 100%;"></a>

### Frameworks y Librerías

<a href="#" rel="nofollow"> <img src="https://github.com/danielcranney/profileme-dev/blob/main/public/icons/skills/vite-colored.svg" alt="vite" width="40" height="40" style="max-width: 100%;"> Vite </a>
<a href="#"><img src="https://raw.githubusercontent.com/danielcranney/profileme-dev/3fc3595593bc992e6febba6580d6c9571f5e625f/public/icons/skills/react-colored.svg" alt="react"  width="40" height="40" style="max-width: 100%;">React</a>

<a href="#"><img src="https://raw.githubusercontent.com/danielcranney/profileme-dev/3fc3595593bc992e6febba6580d6c9571f5e625f/public/icons/skills/tailwindcss-colored.svg" alt="tailwind"  width="40" height="40" style="max-width: 100%;">Tailwind</a>

### Bases de Datos

<a href="#"><img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=101010" alt="MongoDB"></a>

### Herramientas de Testing

<a href="#"><img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white&labelColor=101010" alt="Postman"></a>
<a href="#"><img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white&labelColor=101010" alt="Jest"></a>
<a href="#"><img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white&labelColor=101010" alt="Cypress"></a>

## Requisitos Técnicos ⚙️

### Marco de Trabajo

- Trabajo bajo el marco Scrum.

### Autenticación de Usuarios

- Implementar autenticación segura de usuarios usando JWT u otro método adecuado.

### Funciones del Representante del Alumno

- **Registro de Hijos**: Permitir registrar a sus hijos con datos como edad, altura, peso, sexo, talla de ropa, etc.
- **Solicitud de Ingreso**: Hacer solicitudes de ingreso que serán aceptadas o rechazadas por el administrador debido a cupos limitados.
- **Listado de Material Obligatorio**: Ver y solicitar material o prendas faltantes para el alumno.
  - Fotos de las prendas disponibles.
  - Listado de ropa por tallas.
  - Información de la cuenta bancaria para pagos.
  - Adjuntar justificante de pago en PDF.
  - Importar listado de prendas compradas.
- **Firma de Documentos**: Gestionar documentos de LOPD y derechos de imagen.
- **Ver Apartados de Pagos Hechos**: Revisar pagos realizados.

### Funciones Extras para Socios

- **Pagos Anuales**: Mostrar estado (positivo o negativo) de los tres pagos anuales de los socios.

### Funciones del Administrador

- **Gestión de Solicitudes de Ingreso**: Aceptar o rechazar solicitudes de ingreso.
- **Listado de Socios del Club**: Ver información de socios (nombre, apellidos, DNI, forma de alta).
- **Descarga de Formularios**: Descargar formularios de quienes desean convertirse en socios.

### Páginas Web Informativas

- Información general del club.
- Información del primer y segundo equipo.
- Información de fútbol base.
- Formulario para convertirse en socio.
- Historia del club.
- Tienda del club.
- Contacto.

### Instalación y Configuración

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/angarce25/centro-deportivo-front.git

   ```

1. **Clonar el Repositorio del backend**

````bash
 git clone https://github.com/carlaprimola/centro-deportivo-back.git

2. **Instalar las dependencias utilizando**
 ```bash
 npm install

3. **Inniciar el cliente**
 ```bash
 npm run dev

4. **Configurar la base de datos según las instrucciones proporcionadas.**




<h4 id="version-control">Version Control</h4>
<a href="https://git-scm.com/" rel="nofollow"> <img src="https://camo.githubusercontent.com/fcafa5ebc1f5f789ae7d012a3ecd8fe7bda49516591caf7c37698f764165d880/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="git" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" style="max-width: 100%;"> </a>



# git branches
 ![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)


| BRANCH   | Description                                                                           |
| -------- | ------------------------------------------------------------------------------------- |
| main     | Rama principal. Aquí alojamos solo los resultados finales                             |
| develop      | Rama para implementaciones en étapa de desarrollo |
| origin/feature/auth | Rama para gestion de token y registro de usuarios, login |
| origin/feature/adminDash | Rama para integracion de token con las funcionalidades propias del admin |
| origin/feature/footer | Rama UI footer|
| origin/feature/header | Rama para UI header y funcionalidades de contaxto |
| origin/feature/design | Rama de diseños generales para estilos de retoques en componentes |
| origin/feature/formPlayer  | Rama de estilos y funcionalidades del formulario de jugador |
| origin/feature/forms | Rama de estilos y funcionalidades del formularios de registro e inicio de sesión |
| origin/feature/home | Rama de UI para pagina de inicio |
| origin/feature/merchandising | Rama de UI para merchandising sin inicio de sesión |
| origin/feature/new-player-form-integration | Rama para comunicación entre formularios |
| origin/feature/order-users  | Rama de UI para compras de un usuario |
| origin/feature/players | Rama de UI y funcionalidades para que el admin vea jugadores |
| origin/feature/products | Rama de UI y funcionalidades para que el admin vea pedidos de productos |
| origin/feature/resources | Rama de recursos generales para UI |
| origin/feature/sidebar | Rama UI y funcionalidades para sidebar de admin y user |
| origin/feature/terms_and_conditions | Rama UI y funcionalidades de términos y condiciones bajo LOPD |
| origin/feature/userProfile | Rama UI y funcionalidades para la información propia a cada usuario |
| origin/feature/users-and-players-view | Rama UI y funcionalidades para la información vinculada entre usuarios y jugadores |
| origin/readme | Rama para modificaciones en pleno desarrollo sobre el archivo README.md |
| origin/test/e2e | Rama de frontend para test end to end |



# Planificación

- Planificación de tareas en Trello
- Daylies
- Sprints
- Todos para uno.


# Nuestro equipo

- Carla Escobar (https://github.com/carlaprimola)
- Leandra Montoya(https://github.com/Leamonfranco)
- Andrea GARCÍA CEDEÑO (https://github.com/angarce25)
- Fiorella ()
- Alvaro ()
- Isaac (https://github.com/Isarok)
- Abelardo Acosta(https://github.com/Moriarty369)


## Contribuyendo

Para contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios al repositorio (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo Pull Request
6. Serás informado sobre la solicitud por el equipo de desarrolladores

## Licencia

Este proyecto está bajo la Licencia. Para más detalles, por favor consulta el archivo LICENSE.
````
