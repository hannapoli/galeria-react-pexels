import "./Button.css"
export const Button = ({text, className, newPag}) => {
  const aux =(e)=>{
const value = e.currentTarget.value;    
  if(value==='>'){
    newPag(value)
  } else if (value==='<'){
    newPag(value)

  }else{
    newPag(Number(value))

  }
    
  }
  return (
    <button onClick={aux}  value={text} className={className}>{text}</button>
  )
}
