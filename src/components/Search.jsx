import { useState } from "react";
import { usePexels } from "../hooks/useFetch";

export const Search = ({onNewCategory}) => {
    let [category, setCategory] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
         e.preventDefault(); 
        setCategory(e.target.value);
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchHook = usePexels(category);
        onNewCategory(category)
    }
    return (

        <form onSubmit={handleSubmit} className="searchForm flexContainer">
            <input
                type="text"
                value={category}
                onChange={handleChange}
                placeholder="Escribe una categoría..."
                className="search"
            />

            <input
                type="submit"
                name="searchBtn"
                id="searchBtn" className="input-btn" />
        </form>
    )
}


/* 

    export const Form=()=>{

        //Iniciamos el estado formulario con un valor por defecto
         const [formulario, setFormulario] = useState({
                nombre: 'Pepe',
                email: 'pepe@pepe.es',
                curso: 'React.js',
            })

        const {nombre,email,curso}=formulario;

         const handleChange = ({ target }) => {
            
            const { name, value } = target;
            
            setFormulario({
                ...formulario,
                name: value //[] establece propiedad computada del objeto, si no puesieramos [] crearía una nueva propiedad del objeto
            })    
        }

        //Usamos el useEffect, es recomendable disparar por separado los useEffect que tengan responsabilidad Única

         //este se ejecutará cada vez que cambie el estado del nombre
        useEffect(() => {
            console.log('Ha cambiado el nombre')
        }, [nombre])
        
        return(
            <form className="mt-4" >
                <input type="text" name='nombre' value={nombre} />
                <textarea name="comentario" placeholder='Comentario' />

                <button type='submit' >Enviar</button>
            </form>

        )

    }


*/

/* import { createClient } from 'pexels';

const client = createClient('YOUR_API_KEY');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {...});

{
  "total_results": 10000,
  "page": 1,
  "per_page": 1,
  "photos": [
    {
      "id": 3573351,
      "width": 3066,
      "height": 3968,
      "url": "https://www.pexels.com/photo/trees-during-day-3573351/",
      "photographer": "Lukas Rodriguez",
      "photographer_url": "https://www.pexels.com/@lukas-rodriguez-1845331",
      "src": {
        "original": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png",
        "large2x": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
      },
      "alt": "Brown Rocks During Golden Hour"
    }
  ],
  "next_page": "https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature"
}

 */