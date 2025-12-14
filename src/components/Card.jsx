import './Card.css'

/**
 * Muestra una tarjeta de foto con sus detalles.
 * @param {Object} props - props del componente
 * @param {Object} props.photo - objeto de foto de la API de Pexels.
 * @param {string} props.photo.alt - texto alternativo para la imagen.
 * @param {string} props.photo.url - URL a la foto original en Pexels.
 * @param {string} props.photo.photographer - nombre del fotógrafo.
 * @param {Object} props.photo.src - URLs de diferentes tamaños de imagen.
 * @param {string} props.photo.src.medium - URL de la imagen de tamaño mediano.
 * @returns {JSX.Element} componente de tarjeta de foto.
 */
export const Card = ({ photo }) => {
    const { alt, url, photographer, src } = photo;
    const { medium } = src;
    return (
        <>
            <article>
                <img className="card" src={medium} alt={alt} />
            </article>
            <article>
                <p>Autor: {photographer}</p>
                <p>Descripción: {alt}</p>
                <p><a href={url} target="_blank">Ver foto original</a></p>
            </article>

        </>

    )
}
