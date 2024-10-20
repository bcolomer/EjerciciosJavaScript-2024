# Proyecto: Ejemplos – FUNDAMENTOS DE JS (ES6)

Este proyecto es una demostración de los conceptos fundamentales de JavaScript (ES6) aplicados al desarrollo web del lado del cliente. Consiste en un sistema básico de autenticación (con sesión) y ejemplos prácticos organizados en tarjetas.

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

- **index.html**: Archivo que solicita información de usuario.
- **img/**: Carpeta que contiene imágenes como el `favicon.ico` y la foto de perfil (`perfil.jpg`).
- **css/**: Carpeta que contiene los estilos CSS (`styles.css`).
- **js/**: Carpeta con archivos JavaScript para la lógica de inicio de sesión y manejo de sesión (`login.js`, `sessionStorage.js`, `cambiobase.js`, `minicalculadora.js`, `cambiotexto.js`, `api.js`).
- **ejercicios/**: Carpeta que contiene subcarpetas para cada ejercicio y un índice con el archivo principal que muestra la estructura y contenido HTML.

---

## Funcionalidades

### 1. **Login con sesión**
   - Al cargar la página, se solicita al usuario que ingrese su nombre de usuario y contraseña en un formulario.
   - Si las credenciales son correctas (Usuario: **Jota**, Contraseña: **dejame**), el contenido principal de la página se despliega y se guarda en `sessionStorage`. De lo contrario, se permite al usuario volver a intentarlo.

### 2. **Sistema de ejercicios**
   - **Sección Número**
       - **Ejercicio 1: Mini calculadora**
           - Una calculadora simple que permite realizar operaciones básicas como suma, resta, multiplicación y división. También tiene la posibilidad de obtener la parte entera o decimal de un número, y conseguir la secuencia de Fibonacci o el factorial.
       - **Ejercicio 2: Calculadora de bases**
           - Permite convertir números entre diferentes bases (binario, octal, hexadecimal) utilizando el método `toString(base)` de JavaScript.
       - **Ejercicio 3: Manipulación de Strings**
           - Ejercicios que incluyen la manipulación de cadenas.
       - **Ejercicio 4: API de Buscador de Películas**
           - Implementación de un buscador de películas utilizando una API, donde los usuarios pueden buscar información sobre sus películas favoritas.



---

## Detalles Técnicos

### 1. **Autenticación**
   - La autenticación se realiza mediante condicionales en el archivo JavaScript (`login.js`). Mientras el usuario no ingrese las credenciales correctas, no podrá avanzar.
  
### 2. **Lógica de interacción con botones**
   - El evento `click` en los botones está manejado a través de `addEventListener`.
   
### 3. **Lógica de ejercicios**
   - **Mini calculadora**:
     - Implementada en `minicalculadora.js`, permite realizar operaciones aritméticas básicas.
   - **Calculadora de bases**:
     - Implementada en `cambiobase.js`, utiliza `parseFloat` para la entrada del usuario y `toString(base)` para las conversiones entre bases.
   - **Manipulación de Strings**:
     - Implementada en `manipulacionStrings.js`, contiene funciones para manipular y analizar cadenas de texto.
   - **API de Buscador de Películas**:
     - Implementada en `buscadorPeliculas.js`, utiliza una API pública para buscar y mostrar información sobre películas.

### 4. **JavaScript**
   - **login.js**: Contiene toda la lógica de autenticación y muestra el contenido principal en función de las credenciales correctas, utilizando `sessionStorage` para mantener la sesión.
   - **sessionStorage.js**: Contiene toda la lógica para el manejo de `sessionStorage`.
   - **minicalculadora.js**: Contiene toda la lógica de la mini calculadora.
   - **cambiobase.js**: Contiene la lógica para la calculadora de bases.
   - **cambiotexto.js**: Contiene la lógica para manipular texto según las funcionalidades requeridas.
   - **manipulacionStrings.js**: Contiene funciones para trabajar con cadenas de texto.
   - **buscadorPeliculas.js**: Contiene la lógica para interactuar con la API de películas.

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