import { useEffect, useState } from "react";

const key = import.meta.env.VITE_PEXELS_API_KEY;

const urlBase = `https://api.pexels.com/v1/`;

/**
 * El hook personalizado para llamar a la API de Pexels
 * @param {string} query - la consulta de búsqueda para las fotos.
 * @param {number} [page=1] - número de página para la paginación.
 * @returns {Object} estado y datos de la llamada a la API.
 * @returns {Array} photos - array de objetos de fotos de la API.
 * @returns {boolean} cargando - indicador del estado de carga de los datos de la API.
 * @returns {string|null} error - mensaje de error si la solicitud falló.
 */
export const useCallApi = (query, page = 1) => {

    const [photos, setPhotos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    const urlGetAllPhotos = `${urlBase}search?query=${query}&size=medium&page=${page}&per_page=12&locale=es-ES`;

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