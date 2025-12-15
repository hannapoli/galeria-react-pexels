import './GridGallery.css';
import { Card } from "./Card"
import { Pagination } from "./Pagination"
import { Error } from "./Error"
import { useState } from 'react';
import { useCallApi } from '../hooks/useCallApi';
// import {usePexels}from '../hooks/useFetch'

/**
 * El componente GridGallery que muestra una galería en cuadrícula (grid) de fotos.
 * @param {Object} props - las props del componente.
 * @param {string} props.categoryName - el nombre de la categoría para obtener fotos.
 * @returns {JSX.Element} componente de galería en cuadrícula con fotos y paginación.
 */
export const GridGallery = ({ categoryName }) => {
    // const { photos, cargando } = usePexels(categoryName);
    const [pag, setPag] = useState(1)
    const { photos, cargando, error } = useCallApi(categoryName, pag);

    /**
     * Maneja los cambios de paginación cuando el usuario navega entre páginas.
     * @param {string} pag - número de página o dirección de navegación ('<' o '>').
     */
    const callAux = (pag) => {
        if (pag === '<') {
            setPag(pag => pag - 1)
        } else if (pag === '>') {
            setPag(pag => pag + 1)
        } else {
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
                        : photos?.length > 0
                            ? photos.map((photo) => (
                                <article key={photo.id}>
                                    <Card photo={photo} />
                                </article>
                            ))
                            : <p>No hay imágenes de esta categoría.</p>
                }
            </div>
            <div className='pagination'>
                <Pagination clase={categoryName} callReturn={callAux} currentPage={pag} />
            </div>
        </>
    )
}
