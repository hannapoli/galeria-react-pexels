import './GridGallery.css';
import { Card } from "./Card"
import { Pagination } from "./Pagination"
import { Error } from "./Error"
// import {usePexels}from '../hooks/useFetch'
import { useCallApi } from '../hooks/useCallApi';
import { useState } from 'react';


export const GridGallery = ({ categoryName }) => {
    // const { photos, cargando } = usePexels(categoryName);
    const [pag, setPag] = useState(1)
    const { photos, cargando, error } = useCallApi(categoryName,pag);
    
    
    const  callAux =(pag)=>{
        if(pag==='<'){
            setPag(pag=>pag-1)
        }else if (pag==='>'){
            setPag(pag=>pag+1)
        }else{
            setPag(pag)
        }
        
    }

    return (
        <>
            {error && <Error error={error} />}
            <div className='gridGallery'>
            {
                cargando
                    ? <p>Cargando...</p>
                    : photos?.map((photo) => (
                        <article key={photo.id}>
                            <Card photo={photo} />
                        </article>
                    ))
            }
            </div>
            <div className='pagination'>
                <Pagination clase={categoryName} callReturn={callAux} currentPage={pag}/>
            </div>
        </>
    )
}
