import './Card.css'

export const Card = ({ photo }) => {
    const {alt,url, photographer,src}=photo
    const {original, medium} =src
    return (
        <>
              <article>
                <img className ="card" src={medium} alt={alt}/>
            </article>
            <article>
                <p>Autor: {photographer}</p>
                <p>Descripcion: {alt}</p>
            </article>

      
        </>

    )
}
