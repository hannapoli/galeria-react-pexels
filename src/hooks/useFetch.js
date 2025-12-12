import { createClient } from "pexels";
const key = 'xbetsmIHkKyH66M6d3D2QdkXkewdCIjr96pDsSaRxKvhiO317k53RgfV';

const client = createClient(key);

export const usePexels = (query) => {

    client.photos.search({ query: query, per_page: 12 }) //size: 'medium', locale: "es-ES"
        .then(photos => {
            console.log(photos)
            return photos
        })
        .catch((error)=>{
            console.log(error,' error en el useFetch')
            return error
        })
}






