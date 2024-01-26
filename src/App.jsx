import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'
import { CompleteButton } from './components/CompleteButton'

export default function App() {
  const [wordInput, setWordInput] = useState('')
  const [toDoList, setTodoList] = useState([])

  const handleChange = e => {
    setWordInput(e.target.value)
  }

  const addTask = () => {
    const newTask = [...toDoList]
    newTask.push({ id: uuidv4(), task: wordInput, complete: false })
    setTodoList(newTask)
  }

  const updateComplete = id => {
    const indexToReplace = toDoList.findIndex(el => el.id === id)
    const taskUpdate = [...toDoList]
    taskUpdate[indexToReplace] = {
      ...taskUpdate[indexToReplace],
      complete: !taskUpdate[indexToReplace].complete
    }
    setTodoList(taskUpdate)
  }

  const deleteTask = id => {
    const taskUpdate = toDoList.filter(el => el.id !== id)
    setTodoList(taskUpdate)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTask()
    }
  }
  const updateTask = (id, textContent) => {
    console.log(id)
    console.log(textContent)
    const indexToReplace = toDoList.findIndex(el => el.id === id)
    const taskUpdate = [...toDoList]
    taskUpdate[indexToReplace] = {
      ...taskUpdate[indexToReplace],
      task: textContent
    }
    setTodoList(taskUpdate)
  }
  return (
    <main className='max-w-96 m-auto'>
      <section className='flex justify-between'>
        <input
          className='outline-none border-blue-400 border-2 p-1 text-black rounded-xl w-full mr-2 py-2'
          type='text'
          id='inputTask'
          placeholder='Review presentation'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className='border-none bg-blue-400 rounded-xl hover:bg-blue-300 px-3 transition-colors'
          onClick={addTask}
        >
          Add
        </button>
      </section>
      <ul>
        {toDoList.map(objectTask => {
          return (
            <Task
              key={objectTask.id}
              id={objectTask.id}
              task={objectTask.task}
              complete={objectTask.complete}
              updateComplete={updateComplete}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )
        })}
      </ul>
    </main>
  )
}

function Task({ id, task, complete, updateComplete, deleteTask, updateTask }) {

  const changeComplete = () => {
    updateComplete(id)
  }

  const pressDelete = e => {
    e.stopPropagation() // detiene la progagación del evento changeComplete
    deleteTask(id)
  }

  const pressUpdate = e => {
    e.stopPropagation() // detiene la progagación del evento changeComplete
    // codigo aquí
  }

  return (
    <li
      className='flex justify-between p-2 my-3 bg-white text-[#242424] rounded-xl border-blue-400 border-2 items-center select-none'
      onClick={changeComplete}
    >
      <div className='flex justify-between items-center'>
        <CompleteButton id={id} complete={complete} />
        <p
          className={`decoration-blue-600 decoration-2 font-bold  ${
            complete ? 'line-through' : ''
          }`}
        >
          {task}
        </p>
      </div>
      <div className='flex items-center justify-between'>
        {/* update task */}
        <button
          className='p-2 cursor-pointer rounded-lg bg-blue-400 hover:bg-blue-200 hover:text-black text-white mr-1 transition'
          onClick={pressUpdate}
        >
          <FaEdit />
        </button>
        {/* delete task */}
        <button
          className='p-2 cursor-pointer rounded-lg bg-red-400 hover:bg-red-200 hover:text-black text-white ml-1 transition'
          onClick={pressDelete}
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  )
}
