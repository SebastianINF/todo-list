import { useRef, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrashAlt, FaCheck } from 'react-icons/fa'
import { useForm } from '../hooks/useForm'

export function TodoItem({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo
}) {
  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description
  })

  const [disabled, setDisabled] = useState(true)
  const focusInputRef = useRef()

  const onSubmitUpdate = e => {
    e.preventDefault()

    const id = todo.id
    const description = updateDescription

    handleUpdateTodo(id, description)

    setDisabled(!disabled)

    focusInputRef.current.focus() // tooglelea el focus
    if (disabled) focusInputRef.current.classList.remove('line-through')
    else if (!disabled && todo.done)
      focusInputRef.current.classList.add('line-through')
  }

  return (
    <li>
      {/* Arreglar esto */}
      <form
        className='flex justify-between items-center gap-5 bg-white border-2 border-blue-400 rounded-md py-1'
        onSubmit={onSubmitUpdate}
      >
        <button
          type='button'
          onClick={() => handleCompleteTodo(todo.id)}
          className={`rounded-full border-2 ml-2 border-blue-500 size-5 ${
            todo.done ? 'bg-blue-400 text-white' : 'bg-white text-white'
          }`}
        >
          <FaCheck />
        </button>
        <input
          type='text'
          className={`border-none font-medium text-black  w-full outline-none mr-3 ${
            todo.done ? 'line-through decoration-blue-600' : ''
          }`}
          name='updateDescription'
          value={updateDescription}
          onChange={onInputChange}
          placeholder='Empty Task'
          readOnly={disabled}
          ref={focusInputRef}
        />
        <div className='flex justify-between space-x-2'>
          <button
            type='submit'
            className='bg-blue-400 text-white p-3 flex items-center justify-center border-none rounded-md transition cursor-pointer hover:bg-blue-200 hover:text-black'
          >
            <FaEdit />
          </button>
          <button
            className='bg-red-400 text-white p-3 flex items-center justify-center border-none rounded-md transition cursor-pointer hover:bg-red-200 hover:text-black'
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </form>
    </li>
  )
}
