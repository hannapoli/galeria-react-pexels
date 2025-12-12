import "./Search.css"
import { useState } from "react";
import {useForm} from "../hooks/useForm"

export const Search = ({onNewCategory}) => {
    let [category, setCategory] = useState('');
 
    const formHook = useForm(category);
    if(!formHook.ok){
        console.log(formHook.error,'desde el if del formHook',formHook.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {value} = e.target.search;
        setCategory(value); 
        onNewCategory(formHook.value)
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

