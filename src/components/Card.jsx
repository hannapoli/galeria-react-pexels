import './Card.css'

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
