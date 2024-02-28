import { TodoItem } from './TodoItem'

export const TodoList = ({
  initialState,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo
}) => {
  return (
    <ul className='mt-12 flex flex-col gap-4'>
      {initialState.map(todo => (
        <TodoItem
          key={todo.task_id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  )
}
