import "./Button.css"
/**
 * El componente de botón.
 * @param {Object} props - las props del componente.
 * @param {string} props.text - texto del botón.
 * @param {string} props.className - nombres de clases CSS para relacionar los botones con sus categorías.
 * @param {Function} props.newPag - función callback cuando se hace clic en el botón.
 * @returns {JSX.Element} elemento del botón.
 */
export const Button = ({ text, className, newPag }) => {
  /**
   * Maneja el evento de clic en el botón.
   * @param {Event} e - evento de clic
   */
  const aux = (e) => {
    const value = e.currentTarget.value;
    if (value === '>') {
      newPag(value)
    } else if (value === '<') {
      newPag(value)

    } else {
      newPag(Number(value))

    }

  }
  return (
    <button onClick={aux} value={text} className={className}>{text}</button>
  )
}
