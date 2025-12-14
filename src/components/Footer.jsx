import "./Footer.css";

/**
 * Muestra el pie de página de la aplicación.
 * @returns {JSX.Element} el componente Footer.
 */
export const Footer = () => {
    return (
        <footer className="fullContainer flexContainer">
            <p>&copy; 2025</p>
            <p> Todos los derechos reservados</p>
            <p><a href="https://www.pexels.com/api/" target="_blank">API de Pexels</a></p>
        </footer>
    )
}
