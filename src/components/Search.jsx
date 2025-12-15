import "./Search.css"
import { Error } from "./Error"
import { useValidate } from "../hooks/useValidate";
/**
 * El componente de búsqueda de categorías de imágenes.
 * @param {Object} props - props del componente.
 * @param {Function} props.onNewCategory - la función callback para manejar la nueva categoría.
 * @param {string} props.error - mensaje de error de la galería.
 * @returns {JSX.Element} componente del formulario de búsqueda.
*/
//Añadimos las variables galleryError y formError para distinguir los errores del formulario como de la galería
export const Search = ({ onNewCategory, error: galleryError }) => {
    const { validate, error: formError } = useValidate();

    /**
     * Maneja el envío del formulario y valida la entrada.
     * @param {Event} e - evento de envío del formulario.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.search.value;

        validate(value);
        if (formError) return;
        onNewCategory(value);
        e.target.reset();
    }

    const hasError = formError || galleryError;

    return (
        <>
            <form onSubmit={handleSubmit} className="searchForm flexContainer">
                <input
                    type="text"
                    name="search"
                    placeholder="Escribe una categoría..."
                    className={`search ${hasError ? 'search-error' : ''}`}
                />

                <input
                    type="submit"
                    name="searchBtn"
                    id="searchBtn" className="input-btn" />
            </form>
            {formError && <Error error={formError} />}
        </>
    )
}

