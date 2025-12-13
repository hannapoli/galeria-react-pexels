import "./Search.css"
import {useForm} from "../hooks/useForm"

export const Search = ({onNewCategory}) => {
    const {validate, error} = useForm("");

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
    
    return (
        <form onSubmit={handleSubmit} className="searchForm flexContainer">
            <input
                type="text"
                name="search"
                placeholder="Escribe una categoría..."
                className="search"
            />

            <input
                type="submit"
                name="searchBtn"
                id="searchBtn" className="input-btn" />
        </form>
    )
}

