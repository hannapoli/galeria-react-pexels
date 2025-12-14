import "./Button.css"
export const Button = ({text, className, newPag}) => {
  const aux =(e)=>{
    const value = e.target.value;
    newPag(value)
  }
  return (
    <button onClick={aux}  value={text} className={className}>{text}</button>
  )
}
