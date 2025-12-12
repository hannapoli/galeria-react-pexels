import './GridGallery.css';
import { Card } from "./Card"
import { Pagination } from "./Pagination"
import {usePexels}from '../hooks/useFetch'


export const GridGallery = ({categoryName}) => {
    console.log(categoryName,'esto es el dato que le pasamos al fetchHook')
    const fetchHook = usePexels(categoryName);
    const {photos}=fetchHook
    console.log(photos,'jsuto antes de pasarlo a card')


    return (
        <>
            {
                photos.map((element) => (
                    <article key={element.id}>
                        <Card {...element} />
                    </article>
                ))
            }
            <Pagination />
        </>
    )
}
