# Galería de imágenes en React (con la API de Pexels)

Aplicación web desarrollada en **React** que consume la **API de Pexels** para crear una galería de fotos con búsqueda por categorías y paginación dinámica.

La aplicación **[está desplegada en Netlify](https://galeria-react-pexels.netlify.app/)** 

## Descripción del proyecto

Esta aplicación permite a los usuarios buscar y explorar imágenes de alta calidad a través de la API de [Pexels](https://www.pexels.com/). Los usuarios pueden:

- Buscar imágenes por categoría que esciben.
- Consultar múltiples categorías simultáneamente.
- Visualizar resultados en una galería responsive.
- Navegar entre páginas de resultados con paginación dinámica.

##  Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone git@github.com:hannapoli/galeria-react-pexels.git
    cd galeria-react-pexels
    ```

2.  **Cambiar a la rama develop:**
    ```bash
    git checkout develop
    ```

3.  **Instalar dependencias:**
    ```bash
    yarn install
    ```

4.  **Configurar variables de entorno:**
    
    Duplica el archivo `.env.teplate` en la raíz del proyecto y renombralo a `.env`:
    ```env
    VITE_PEXELS_API_KEY=tu_api_key_aqui
    ```
    
    > El API Key se puede obtener gratis en [Pexels API](https://www.pexels.com/api/) (hay que registrarse).

5.  **Iniciar el servidor de desarrollo:**
    ```bash
    yarn dev
    ```

6.  **Abrir en el navegador:**
    ```
    http://localhost:5173
    ```

## Funcionalidades

- **Formulario de búsqueda** con validación de entrada
- **Galería de imágenes** con tarjetas que incluyen foto, autor y descripción
- **Paginación dinámica** con 10 páginas visibles y navegación intuitiva
- **Búsquedas múltiples** - permite consultar varias categorías
- **Estados de carga** - feedback visual durante las peticiones
- **Diseño responsive** - Mobile First con breakpoints para tablet y desktop
- **Compatibilidad cross-browser** - funciona en Chrome, Firefox, Safari y Opera
- **Manejo de errores** - validación de formulario y errores de API

## Tecnologías Utilizadas

- **React** - Biblioteca principal
- **Vite** - Herramienta de compilación y desarrollo
- **JavaScript (ES6+)** - Lenguaje de programación
- **CSS3** - Estilos con Flexbox y Grid
- **Custom Hooks** - Lógica reutilizable para formularios y llamadas API
- **Pexels API** - API REST para obtener imágenes

## Estructura del proyecto

```
src/
├── components/
│   ├── Button.jsx          # Botón reutilizable para paginación
│   ├── Button.css
│   ├── Card.jsx            # Tarjeta de imagen individual
│   ├── Card.css
│   ├── Error.jsx           # Componente de mensaje de error
│   ├── Error.css
│   ├── Footer.jsx          # Pie de página
│   ├── Footer.css
│   ├── Gallery.jsx         # Contenedor principal de galerías
│   ├── Gallery.css
│   ├── GridGallery.jsx     # Grid de imágenes con paginación
│   ├── GridGallery.css
│   ├── Header.jsx          # Encabezado con navegación
│   ├── Header.css
│   ├── Pagination.jsx      # Controles de paginación
│   ├── Pagination.css
│   ├── Search.jsx          # Formulario de búsqueda
│   └── Search.css
├── hooks/
│   ├── useCallApi.js       # Hook para peticiones a Pexels API
│   ├── useForm.js          # Hook para validación de formulario
│   └── useFetch.js         # Hook alternativo usando SDK (Software Development Kit) de Pexels
├── helpers/
│   └── llamarApi.js        # Función auxiliar para llamadas API
├── assets/                 # Recursos estáticos
├── App.jsx                 # Componente raíz
├── App.css
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales
```