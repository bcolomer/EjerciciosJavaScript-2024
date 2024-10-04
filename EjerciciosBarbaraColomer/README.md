# Proyecto: Ejemplos – FUNDAMENTOS DE JS (ES6)

Este proyecto es una demostración de los conceptos fundamentales de JavaScript (ES6) aplicados al desarrollo web del lado del cliente. Consiste en un sistema básico de autenticación (sin sesiones) y ejemplos prácticos organizados en tarjetas.

## Contenido

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Funcionalidades](#funcionalidades)
3. [Ejecución del Proyecto](#ejecución-del-proyecto)
4. [Detalles Técnicos](#detalles-técnicos)
5. [Estilos y Diseño](#estilos-y-diseño)
6. [Recursos Externos](#recursos-externos)

---

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos y carpetas:

- **login.html**: Archivo que solicita informacion de usuario.
- **index.html**: Archivo principal que muestra la estructura y contenido HTML.
- **img/**: Carpeta que contiene imágenes como el `favicon.ico` y la foto de perfil (`perfil.jpg`).
- **css/**: Carpeta que contiene los estilos CSS (`styles.css`).
- **js/**: Carpeta con el archivo JavaScript para la lógica de inicio de sesión (`login.js`).
- **ejercicios/**: Carpeta que contiene subcarpetas para cada ejercicio.

---

## Funcionalidades

### 1. **Login sin sesión**
   - Al cargar la página, se solicita al usuario que ingrese su nombre de usuario y contraseña en un formulario.
   - Si las credenciales son correctas (Usuario: **Jota**, Contraseña: **dejame**), el contenido principal de la página se despliega. De lo contrario, se permite al usuario volver a intentarlo.

### 2. **Sistema de tarjetas de ejercicios**
   - Cada tarjeta muestra un título, una breve descripción y un enlace a la solución del ejercicio correspondiente.
   - Los ejercicios están organizados en carpetas dentro del directorio `ejercicios`.

### 3. **Botón interactivo**
   - Un botón que muestra un resultado al hacer clic utilizando la función `mostrar`.

---
## Detalles Técnicos

### 1. **Autenticación**
   - La autenticación se realiza mediante condicionales en el archivo JavaScript (`login.js`). Mientras el usuario no ingrese las credenciales correctas, no podrá avanzar.
  
### 2. **Lógica de interacción con botones**
   - El evento `click` en el botón está manejado a través de `addEventListener`.

### 3. **JavaScript**
   - **login.js**: Contiene toda la lógica de autenticación y muestra el contenido principal en función de las credenciales correctas.
   - **Nota**: Se ha decidido no utilizar el atributo `required` en los inputs para poder poner un mensaje más amigable dentro del mismo formulario.

---

## Estilos y Diseño

Los estilos están definidos en el archivo `styles.css` y se destacan por:

- **Colores**: Predominan los tonos suaves y cálidos, como el color de fondo en tonos rosa pálido y el encabezado en verde oscuro.
- **Diseño Responsivo**: El diseño es adaptativo, ajustándose a pantallas pequeñas (como móviles) mediante media queries.
- **Componentes visuales**:
   - Encabezado con foto de perfil.
   - Sistema de tarjetas con bordes redondeados y sombras para mayor atractivo visual.
   - Footer al final de la página con créditos.

---

## Recursos Externos

### Enlaces de interés (menú de navegación):

- [w3schools](https://www.w3schools.com/js/default.asp)
- [javascript.info](https://es.javascript.info/js)
- [MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [GitHub](https://github.com/bcolomer)
- [LinkedIn](https://www.linkedin.com/in/bcolomer/)

---

## Autor

- **Barbara Colomer 2024** - Desarrollo del contenido y diseño del proyecto.