import { useState } from "react"
import { AiOutlineCheckCircle } from "react-icons/ai"
import '../ToDos.css'

export default function Checked({tarea}){

  const [isChecked, setChecked] = useState(false)

  const handleCheck = ()=> {
    setChecked(!isChecked)
  }

  return(
    <>
      <input
        type="text"
        className={isChecked? "tachado-si": "tachado-no"}
        key={tarea}
        value={tarea}
        readOnly={true}
      />
      <button
        className="boton-check" 
        onClick={handleCheck}>
      <AiOutlineCheckCircle />
      </button>
      
    </>
  )
}