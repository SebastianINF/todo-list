import { useRef, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { useForm } from '../hooks/useForm'

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
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

    focusInputRef.current.focus()
  }

  return (
    <form onSubmit={onSubmitUpdate} className='flex justify-between'>
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

      <button
        className='bg-blue-400 text-white p-3 flex items-center justify-center border-none rounded-md transition cursor-pointer hover:bg-blue-200 hover:text-black'
        type='submit'
      >
        <FaEdit />
      </button>
    </form>
  )
}
