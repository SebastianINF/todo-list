import { useState, useEffect } from 'react'
import axios from 'axios'

export const useTodo = () => {
  const [initialState, setInitialState] = useState([])

  useEffect(() => {
    (async () => {
      const result = await axios.get('http://localhost:3000/api/tasks')
      setInitialState(result.data)
    })()
  }, [])

  const todosCount = initialState.length
  const pendingTodosCount = initialState.filter(todo => !todo.complete).length

  const handleNewTodo = todo => {
    try {
      (async () => {
        const result = await axios.post('http://localhost:3000/api/tasks', todo)
        const newTodo = [...initialState]
        newTodo.push(result.data)
        setInitialState(newTodo)
      })()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateTodo = (id, description) => {
    try {
      (async () => {
        const task = initialState.filter(task => task.task_id === id)
        const updateTask = {
          task: description,
          complete: task[0].complete === 1 ? true : false
        }
        await axios.put(`http://localhost:3000/api/tasks/${id}`, updateTask)
        const result = await axios.get('http://localhost:3000/api/tasks/')
        setInitialState(result.data)
      })()
    } catch (error) {
      console.log(error)
    }
  }

  const handleCompleteTodo = id => {
    try {
      (async () => {
        const task = initialState.filter(task => task.task_id === id)
        const updateTask = {
          task: task[0].task,
          complete: !(task[0].complete === 1 ? true : false)
        }
        await axios.put(`http://localhost:3000/api/tasks/${id}`, updateTask)
        const result = await axios.get('http://localhost:3000/api/tasks/')
        setInitialState(result.data)
      })()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteTodo = id => {
    try {
      (async () => {
        const modifiedTodo = initialState.filter(task => task.id !== id)
        await axios.delete(`http://localhost:3000/api/tasks/${id}`)
        setInitialState(modifiedTodo)
      })()
    } catch (error) {
      console.log(error)
    }
  }

  return {
    initialState,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  }
}
