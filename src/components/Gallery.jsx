import './GridGallery.css'
import {GridGallery} from "./GridGallery"
import { Search } from "./Search";
import { useState } from "react";


export const Gallery = () => {
    
    const [arrayCategories, setArrayCategories] = useState([]);
        
    const [error, setError] = useState(''); 
    
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
            
            <Search onNewCategory={handleNewCategory} />
            
            {   arrayCategories.length > 0 ? arrayCategories.map((element) => (
                    <section key={element} className="gridGallery"> 
                        <GridGallery categoryName={element} />
                    </section>
                ))
                : <p>No hay imágenes de esta categoría.</p>  //añadir clase del error (visible/not visible)
            }
            
        </>
    )
}