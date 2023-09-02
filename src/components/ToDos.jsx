import {AiOutlineCloseCircle} from "react-icons/ai"
import Checked from "./ButtonCheked";
import { useState } from "react"

export default function ToDos(){
  
  const [list , setList] = useState([]);
  const [change, setChange] = useState("");

  const handleSubmit = (e)=> {
    e.preventDefault()
    let input = document.getElementById("barra")
    let texto = input.value
    if(texto !== "" ){
      list.push(texto)
      setList(list)
      setChange("")
    }
  }

  const handleChange = (e)=> {
    setChange(e.target.value)
  }

  return (
    <div className="div-app">
      <h1>ToDos</h1>
      <div>
        <form onSubmit={handleSubmit} className="formulario">
          <input
            id="barra"
            type="text"
            placeholder="Ingrese la tarea a realizar"
            onChange={handleChange}
            value={change}
          />
          <button className="boton-agregar">Agregar Tarea</button>
        </form>
        {list && list.map((tarea, index, lista)=>{
          return(
            <div key={index} id={index} className="div-tarea">
            <Checked tarea={tarea}/>
            <button
              className="boton-delete"
              onClick={()=>{
                const nuevasTareas = [...list];
                nuevasTareas.splice(index, 1);
                console.log(nuevasTareas)
                setList(nuevasTareas);
            }}
            >
            <AiOutlineCloseCircle></AiOutlineCloseCircle> 
            </button>
            </div> 
          )
        })}
      </div>
    </div>
  )
} 