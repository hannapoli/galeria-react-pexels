import "./Pagination.css"
import {Button} from "./Button"

export const Pagination = ({clase,pag=1,callReturn}) => {
  const primeClas = clase
  const pagChange = pag;
  const showPag = 10;
  const half = Math.floor(showPag / 2);

  let min = pagChange-half
  let max = pagChange+half-1

  //caso del primer renderizado o de estar al inicio de la búsqueda
  if (min < 1) {
    min = 1;
    max = showPag;
  }
  
  const aux =Array.from({length: max - min + 1}, (_,i) => min + i)

  const handleClick =(valor)=>{
     callReturn(primeClas,valor)
  }
    


  return (
    <>
      <Button text={`<`} className={`pageBtn ${clase}`}/>
    {
     
      aux.map((elemento)=>(
        <Button key={elemento} text={elemento} className={`${clase} pageBtn`} newPag={handleClick}/>
        
      ))
      
    }
      <Button text={`>`} className={`pageBtn ${clase}`}/>
    </>
  )
}

/* busqueda por pagina GET https://api.pexels.com/v1/curated?page=2&per_page=40
 */ 