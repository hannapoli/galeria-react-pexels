# Gelería en React
---
## Descripcion
Aplicación web basada en **React** para busqueda de fotos en **Pexels API**
---

##  Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/hannapoli/galeria-react-pexels/tree/develop
    ```

2.  **Instalar dependencias:**
    ```bash
    yarn install
    ```

3.  **Crear variables de entorno** (Crea un archivo `.env` ):
    ```
    VITE_PEXELS_API_KEY=<API-KEY>
    ```

4.  **Iniciar servidor** :
    ```bash
    yarn run dev
    ```
---
## Funcionalidades
- Búsqueda de imágenes por categoría
- Galería de imágenes con tarjeta (foto, autor y descripción)
- Paginación dinámica (10 páginas visibles)
- Cambio de página sin recargar
- Manejo de estados de carga y error
- Diseño responsive

---

## Tecnologias usadas

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS Flexbox / Grid**
- **Pexels API**

---
## Estructura del proyecto
src/
 ├── components/
 │   ├── Button.jsx
 │   ├── Card.jsx
 │   ├── Error.jsx
 │   ├── GridGallery.jsx
 │   ├── Pagination.jsx
 │   └── Search.jsx
 ├── hooks/
 │   ├── useCallApi.js
 │   └── useForm.js
 ├── styles/
 └── main.jsx


