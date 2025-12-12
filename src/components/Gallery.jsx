import { GridGallery } from "./GridGallery";
import { Search } from "./Search";
import { useState } from "react";


export const Gallery = () => {
    
    const [arrayCategories, setArrayCategories] =
        useState(['cats', 'anime', 'cars']);
        
    const [error, setError] = useState(''); 
    
    const handleNewCategory = (newCategory) => {
        setError('');
        
        const aux = newCategory.trim();
        const lowerAux = aux.toLowerCase();

        if (lowerAux.length > 0) {
            
            const isDuplicate = arrayCategories.some(cat => cat.toLowerCase() === lowerAux);

            if (!isDuplicate) {
                setArrayCategories([aux, ...arrayCategories]);
                return true;
            } else {
                setError(`Búsqueda realizada, pero la categoría '${aux}' ya existe.`);
                return false;
            }
        }
        return false;
    }

    return (
        <>
            <h2>Imágenes por categoría</h2>
            
            <Search onNewCategory={handleNewCategory} />
            
            {
                arrayCategories.map((element) => (
                    <section key={element} className="gridGallery"> 
                        <GridGallery categoryName={element.photos} />
                    </section>
                ))
            }
            {/* <Error error={error} /> */}
        </>
    )
}