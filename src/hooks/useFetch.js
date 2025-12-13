import { useState, useEffect } from "react";
import { createClient } from "pexels";
//const key = 'xbetsmIHkKyH66M6d3D2QdkXkewdCIjr96pDsSaRxKvhiO317k53RgfV';
// const key = '8LJXgUSjiFKXngm6n7uTYf4SaYMiOj6OMmLRXpmzH6OP2WxDML3gwFDH';
const key = 'rawt5OeZl2WNQx0T5DQZTVumgm6grudFz4JQL76gksjYumIW6iH5ToXD'

const client = createClient(key);

//"https://api.pexels.com/v1/curated?page=3&per_page=40"
export const usePexels = (query,page=1) => {
    console.log(query, 'en usePexels')
    const [photos, setPhotos] = useState([]);
    const [cargando, setCargando] = useState(true);

        useEffect(() => {
            if(!query){
                console.log('Escribe una palabra en el buscador para ver las imágenes.') 
                return;
            }
            setCargando(true);
            client.photos
                .search({ query, page:1,per_page: 12 }) //size: 'medium', locale: "es-ES"
                .then((response) => {
                    setPhotos(response.photos);
                })
                .catch((error)=>{
                    console.log(error,' error en el useFetch')
                    return error;
                })
                .finally(() => {
                    setCargando(false);
                })
            }, [query]);

        
            return {photos, cargando};
}






