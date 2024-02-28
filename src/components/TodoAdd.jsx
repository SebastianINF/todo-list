import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = e => {
    e.preventDefault()

    if (description.length <= 1) return

    let newTodo = {
      task: description,
      complete: false
    }

    handleNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit} className='flex gap-5 flex-1 justify-between'>
      <input
        type='text'
        className='border-none outline-none py-3 px-5 shadow-md rounded-3xl flex-1 font-[17px] text-black'
        name='description'
        value={description}
        onChange={onInputChange}
        placeholder='Enter Task'
      />

      <button
        className='border-none bg-blue-400 text-white py-1 px-10 cursor-pointer font-[17px] hover:bg-blue-300 transition rounded-3xl'
        type='submit'
      >
        Add Task
      </button>
    </form>
  )
}
