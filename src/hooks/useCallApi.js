import { useEffect, useState } from "react";

const key = 'xbetsmIHkKyH66M6d3D2QdkXkewdCIjr96pDsSaRxKvhiO317k53RgfV';
// const key = '8LJXgUSjiFKXngm6n7uTYf4SaYMiOj6OMmLRXpmzH6OP2WxDML3gwFDH';
//const key = 'rawt5OeZl2WNQx0T5DQZTVumgm6grudFz4JQL76gksjYumIW6iH5ToXD'

const urlBase = `https://api.pexels.com/v1/`;

export const useCallApi = (query, page = 1) => {

    const [photos, setPhotos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    const urlGetAllPhotos = `${urlBase}search?query=${query}&size=medium&${page}&per_page=12&locale=es-ES`;

    useEffect(() => {
        if (!query) {
            return;
        }

        const fetchData = async () => {
            setCargando(true);
            try {
                const response = await fetch(urlGetAllPhotos, {
                    headers: { Authorization: key }
                });
                const data = await response.json();
                setPhotos(data.photos);
            } catch (err) {
                console.log(err)
                setError('Error del servidor: no se ha podido cargar las fotos.');
            } finally {
                setCargando(false);
            }
        };

        fetchData();
    }, [query, page]);


    return { photos, cargando, error };
}