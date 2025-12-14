import "./Search.css"
import {useForm} from "../hooks/useForm"
import { Error } from "./Error"
//Añadimos las variables galleryError y formError para distinguir los errores del formulario como de la galería
export const Search = ({onNewCategory, error: galleryError}) => {
    const {validate, error: formError} = useForm("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.search.value;

        const validated = validate(value);
        if (!validated.ok) {
            return;
        }
        onNewCategory(validated.result);
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

