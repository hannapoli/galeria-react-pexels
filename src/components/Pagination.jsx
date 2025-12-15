import "./Pagination.css"
import { Button } from "./Button"

/**
 * El componente de paginación para navegar entre páginas de fotos.
 * @param {Object} props - props del componente.
 * @param {string} props.clase - nombre de la clase CSS para capturar la categoría relacionada con el botón.
 * @param {Function} props.callReturn - función callback cuando cambia la página.
 * @param {number} props.currentPage - número de página activa actual.
 * @returns {JSX.Element} botones de paginación con controles de anterior/siguiente.
 */
export const Pagination = ({ clase, callReturn, currentPage }) => {

  const pagChange = currentPage;
  let showPag = 10;
  const half = Math.floor(showPag / 2);

  let min = pagChange - half;
  let max = pagChange + half - 1;

  //caso del primer renderizado o de estar al inicio de la búsqueda
  if (min < 1) {
    min = 1;
    max = showPag;
  }

  const aux = Array.from({ length: max - min + 1 }, (_, i) => min + i)

  /**
   * Maneja los eventos de clic en los botones de paginación.
   * @param {string} valor - número de página o dirección de navegación.
   */
  const handleClick = (valor) => {
    callReturn(valor);
  }



  return (
    <>
      <Button text={`<`} className={`pageBtn ${clase}`} newPag={handleClick} />
      {

        aux.map((elemento) => (
          <Button key={elemento} text={elemento} className={`${elemento === currentPage ? "activo" : ""} pageBtn`} newPag={handleClick} />

        ))

      }
      <Button text={`>`} className={`pageBtn ${clase}`} newPag={handleClick} />
    </>
  )
}