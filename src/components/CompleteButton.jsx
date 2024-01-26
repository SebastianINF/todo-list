import { FaCheck } from 'react-icons/fa'

export function CompleteButton({ complete }) {
  return (
    <>
      <button
        className={`border-blue-500 border-[1px] cursor-pointer rounded-full w-4 h-4 transition flex justify-center mr-3 items-center ${
          complete ? 'bg-blue-500 hover:bg-blue-400' : 'bg-white'
        }`}
      >
        {complete ? <FaCheck className='w-3 h-3 text-white' /> : ''}
      </button>
    </>
  )
}
