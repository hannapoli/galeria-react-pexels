import './GridGallery.css';
import { Card } from "./Card"
import { Pagination } from "./Pagination"
import { Error } from "./Error"
// import {usePexels}from '../hooks/useFetch'
import { useCallApi } from '../hooks/useCallApi';


export const GridGallery = ({ categoryName }) => {
    // const { photos, cargando } = usePexels(categoryName);
    const { photos, cargando, error } = useCallApi(categoryName);
    console.log({photos}, {cargando})

    return (
        <>
            {error && <Error error={error} />}
            {
                cargando
                    ? <p>cargando</p>
                    : photos?.map((photo) => (
                        <article key={photo.id}>
                            <Card photo={photo} />
                        </article>
                    ))
            }
            <Pagination clase={categoryName} />
        </>
    )
}
