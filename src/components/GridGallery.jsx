import './GridGallery.css';
import { Card } from "./Card"
import { Pagination } from "./Pagination"
import {usePexels}from '../hooks/useFetch'


export const GridGallery = ({categoryName}) => {
    const fetchHook = usePexels(categoryName);
    const {photos, cargando}=fetchHook;
    console.log(photos)

    return (
            <>
                {
                    cargando
                    ? <p>cargando</p>
                    : photos.map((photo) => (
                            <article key={photo.id}>
                                <Card  photo={photo} />
                            </article>
                        ))
                }
                <Pagination clase={categoryName} />
            </>
        )
}
