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
    updateDescription: todo.task
  })

  const [disabled, setDisabled] = useState(true)
  const focusInputRef = useRef()

  const onSubmitUpdate = e => {
    e.preventDefault()

    const id = todo.task_id
    const description = updateDescription

    handleUpdateTodo(id, description)

    setDisabled(!disabled)

    focusInputRef.current.focus() // tooglelea el focus
    if (disabled) focusInputRef.current.classList.remove('line-through')
    else if (!disabled && todo.complete)
      focusInputRef.current.classList.add('line-through')
  }

  return (
    <li>
      {/* Arreglar esto */}
      <form
        className='flex justify-between items-center gap-5 bg-white border-2 border-blue-400 rounded-md py-1 relative'
        onSubmit={onSubmitUpdate}
      >
        <button
          type='button'
          onClick={() => handleCompleteTodo(todo.task_id)}
          className={`rounded-full border-2 ml-2 border-blue-500 size-5 text-white ${
            todo.complete ? 'bg-blue-400' : 'bg-white'
          }`}
        >
          <FaCheck className={todo.complete ? 'visible' : 'invisible'} />
        </button>
        <input
          type='text'
          className={`border-none font-medium text-black  w-full outline-none mr-3 caret-green-700 ${
            todo.complete ? 'line-through decoration-blue-600' : ''
          }`}
          name='updateDescription'
          value={updateDescription}
          onChange={onInputChange}
          placeholder='Empty Task'
          readOnly={disabled}
          ref={focusInputRef}
          autoComplete='off'
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
            onClick={() => handleDeleteTodo(todo.task_id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </form>
    </li>
  )
}
