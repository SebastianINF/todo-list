// En tu componente ToDos
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Checked from './ButtonCheked'

export default function ToDos() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask !== '') {
      const task = {
        id: Date.now(),
        text: newTask
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }

  const removeTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <div className='div-app'>
      <h1>ToDos</h1>
      <div>
        <section className='section'>
          <input
            type='text'
            placeholder='Ingrese la tarea a realizar'
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <button className='boton-agregar' onClick={addTask}>
            Agregar Tarea
          </button>
        </section>

        {tasks.map(task => (
          <div key={task.id} className='div-tarea'>
            <Checked tarea={task.text} />
            <button
              className='boton-delete'
              onClick={() => removeTask(task.id)}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
