const key = 'xbetsmIHkKyH66M6d3D2QdkXkewdCIjr96pDsSaRxKvhiO317k53RgfV';
// const key = '8LJXgUSjiFKXngm6n7uTYf4SaYMiOj6OMmLRXpmzH6OP2WxDML3gwFDH';
 //const key = 'rawt5OeZl2WNQx0T5DQZTVumgm6grudFz4JQL76gksjYumIW6iH5ToXD'

const urlBase = `https://api.pexels.com/v1/`;

export const useCallApi = (query) => {
    
    const [photos, setPhotos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const urlGetAllPhotos = `${urlBase}search?query=${query}&size=medium&page=1&per_page=$12&locale=es-ES`;

    useEffect(() => {
            if(!query){
                return {
                    ok: false,
                    error: 'Escribe una palabra en el buscador para ver las imágenes.'
                };
            }
            setCargando(true);

            }, [query]);

        
            return {photos, cargando};
}

    //    useEffect(() => {
    //         if(!query){
    //             console.log('Escribe una palabra en el buscador para ver las imágenes.') 
    //             return;
    //         }
    //         setCargando(true);
    //         client.photos
    //             .search({ query, per_page: 12 }) //size: 'medium', locale: "es-ES"
    //             .then((response) => {
    //                 setPhotos(response.photos);
    //             })
    //             .catch((error)=>{
    //                 console.log(error,' error en el useFetch')
    //                 return error;
    //             })
    //             .finally(() => {
    //                 setCargando(false);
    //             })
    //         }, [query]);