import './GridGallery.css'
import {GridGallery} from "./GridGallery"
import { Search } from "./Search";
import { useState } from "react";


export const Gallery = () => {
    
    const [arrayCategories, setArrayCategories] = useState([]);
        
    const [error, setError] = useState(''); 
    
    const handleNewCategory = (newCategory) => {
        setError('');
  
            const isDuplicate = arrayCategories.some(cat => cat === newCategory);
            if (!isDuplicate) {
               
                setArrayCategories([newCategory, ...arrayCategories]);
                return true;
            } else {
                setError(`Búsqueda realizada, pero la categoría '${newCategory}' ya existe.`);
                return true;
            }
        
        return true;
    }

    return (
        <>
            <h2>Busca las imágenes por categoría</h2>
            
            <Search onNewCategory={handleNewCategory} />
            
            {   arrayCategories.length > 0 ? arrayCategories.map((element) => (
                    <section key={element} className="gridGallery"> 
                        <GridGallery categoryName={element.value} />
                    </section>
                ))
                : <p>No hay imágenes de esta categoría.</p>  //añadir clase del error (visible/not visible)
            }
            
        </>
    )
}