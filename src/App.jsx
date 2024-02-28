import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'
import { useTodo } from './hooks/useTodo'

function App() {
  const {
    initialState,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  } = useTodo()

  return (
    <main className='p-5 bg-neutral-800 rounded-md shadow-green-800 shadow-2xl max-w-4xl mx-auto mt-10'>
      <div className=' mx-0 flex mb-2 justify-around'>
        <h3 className=' text-center font-[24px]'>
          Tasks: <span>{todosCount}</span>
        </h3>
        <h3 className=' text-center font-[24px]'>
          Pending: <span>{pendingTodosCount}</span>
        </h3>
      </div>

      <div className='add-todo'>
        <TodoAdd handleNewTodo={handleNewTodo} />
      </div>

      <TodoList
        initialState={initialState}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </main>
  )
}

export default App
