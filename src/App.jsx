import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'
import { CompleteButton } from './components/CompleteButton'

export default function App() {
  const [wordInput, setWordInput] = useState('')
  const [task, setTask] = useState([])

  const handleChange = e => {
    setWordInput(e.target.value)
  }

  const addTask = () => {
    const newTask = [...task]
    newTask.push({ id: uuidv4(), task: wordInput, complete: false })
    setTask(newTask)
  }

  const updateComplete = id => {
    const indexToReplace = task.findIndex(el => el.id === id)
    const taskUpdate = [...task]
    taskUpdate[indexToReplace] = {
      ...taskUpdate[indexToReplace],
      complete: !taskUpdate[indexToReplace].complete
    }
    setTask(taskUpdate)
  }

  const deleteTask = id => {
    const taskUpdate = task.filter(el => el.id !== id)
    setTask(taskUpdate)
  }

  return (
    <main className='max-w-96 m-auto'>
      <section className='flex justify-between'>
        <input
          className='outline-none border-blue-700 border-2 p-1 text-black rounded-xl w-full mr-2 py-2'
          type='text'
          placeholder='Review presentation'
          onChange={handleChange}
        />
        <button
          className='border-none bg-blue-400 rounded-xl hover:bg-blue-300 px-3 transition-colors'
          onClick={addTask}
        >
          Add
        </button>
      </section>
      <ul>
        {task.map(objectTask => {
          return (
            <Task
              key={objectTask.id}
              id={objectTask.id}
              task={objectTask.task}
              complete={objectTask.complete}
              updateComplete={updateComplete}
              deleteTask={deleteTask}
            />
          )
        })}
      </ul>
    </main>
  )
}

// eslint-disable-next-line react/prop-types
function Task({ id, task, complete, updateComplete, deleteTask }) {
  const changeComplete = () => {
    updateComplete(id)
  }
  const pressDelete = () => {
    deleteTask(id)
  }
  return (
    <li className='flex justify-between p-2 my-3 bg-white text-[#242424] rounded-xl border-blue-400 border-2 items-center'>
      <div className='flex justify-between items-center'>
        <CompleteButton
          id={id}
          complete={complete}
          changeComplete={changeComplete}
        />
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
        <button className='p-2 cursor-pointer rounded-lg bg-blue-400 hover:bg-blue-200 hover:text-black text-white mr-1 transition'>
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
