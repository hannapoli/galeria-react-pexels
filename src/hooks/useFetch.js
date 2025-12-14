import { useState, useEffect } from "react";
import { createClient } from "pexels";
const key = import.meta.env.VITE_PEXELS_API_KEY;

const client = createClient(key);

//"https://api.pexels.com/v1/curated?page=3&per_page=40"
/**
 * El hook personalizado para llamar a la API de Pexels.
 * @param {string} query - la consulta de búsqueda para las fotos.
 * @param {number} [page=1] - número de página para la paginación.
 * @returns {Object} estado y datos de la llamada a la API.
 * @returns {Array} photos - array de objetos de fotos de la API.
 * @returns {boolean} cargando - indicador del estado de carga de los datos de la API.
 * @returns {string|null} error - mensaje de error si la solicitud falló.
 */
export const usePexels = (query, page = 1) => {
    console.log(query, 'en usePexels')
    const [photos, setPhotos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) {
            console.log('Escribe una palabra en el buscador para ver las imágenes.')
            return;
        }
        setCargando(true);
        client.photos
            .search({ query, page: 1, per_page: 12 })
            .then((response) => {
                setPhotos(response.photos);
            })
            .catch((err) => {
                console.log(err)
                setError('Error del servidor: no se ha podido cargar las fotos.');
            })
            .finally(() => {
                setCargando(false);
            });
    }, [query, page]);


    return { photos, cargando, error };
}






