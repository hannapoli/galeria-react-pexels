import './Gallery.css'
import { GridGallery } from "./GridGallery"
import { Search } from "./Search";
import { Error } from "./Error";
import { useState } from "react";

/**
 * El componente Gallery que maneja la búsqueda y muestra galerías en cuadrícula (grid).
 * @returns {JSX.Element} componente Gallery con búsqueda y galerías en cuadrícula (grid).
 */
export const Gallery = () => {

    const [arrayCategories, setArrayCategories] = useState([]);

    const [error, setError] = useState('');

    /**
     * Maneja la agregación de una nueva categoría a la galería.
     * @param {string} newCategory - el nombre de la categoría a agregar.
     */
    const handleNewCategory = (newCategory) => {
        if (!newCategory) return;

        if (arrayCategories.includes(newCategory)) {
            setError(`Búsqueda realizada, pero la categoría '${newCategory}' ya existe.`);
            return;
        }
        setArrayCategories([newCategory, ...arrayCategories]);
        setError('');
    }


    return (
        <>
            <h2>Busca las imágenes por categoría</h2>

            <Search onNewCategory={handleNewCategory} error={error} />

            {error && <Error error={error} />}

            {arrayCategories.length > 0 && arrayCategories.map((element) => (
                <section key={element}>
                    <GridGallery categoryName={element} />
                </section>
            ))
            }

        </>
    )
}