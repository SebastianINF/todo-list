
# Aplicación To Do List , React + Vite

La Aplicación ToDo es una sencilla aplicación web desarrollada en React que te permite llevar un registro de tus tareas pendientes. Puedes agregar, marcar como completadas y eliminar tareas de tu lista.

## Funcionalidad

La aplicación ofrece las siguientes características:

- **Agregar Tareas**: Puedes ingresar una nueva tarea a tu lista escribiendo el texto de la tarea en el campo de entrada y haciendo clic en "Agregar Tarea". La tarea se agregará a la lista de tareas pendientes.

- **Marcar como Completada**: Para indicar que una tarea ha sido completada, simplemente haz clic en el icono de verificación junto a la tarea. La tarea se marcará como completada y se mostrará con un formato visual diferente.

- **Eliminar Tareas**: Si deseas eliminar una tarea de la lista, puedes hacerlo haciendo clic en el icono de eliminación junto a la tarea. La tarea se eliminará permanentemente de la lista.

- **Mejora Visual de Tareas Completadas**: Las tareas marcadas como completadas se presentan con un estilo visual que facilita su identificación.

## Cómo Utilizar la Aplicación

1. **Agregar Tareas**: Ingresa una descripción de la tarea en el campo de entrada y presiona "Agregar Tarea".

2. **Marcar como Completada**: Haz clic en el icono de verificación junto a una tarea para marcarla como completada.

3. **Eliminar Tareas**: Haz clic en el icono de eliminación junto a una tarea para eliminarla de la lista.

4. **Visualización de Tareas Completadas**: Las tareas marcadas como completadas se mostrarán de manera diferente para que puedas identificarlas de un vistazo.

## Personalización

Puedes personalizar y modificar la apariencia y el comportamiento de la aplicación según tus necesidades. Si tienes conocimientos en React y CSS, puedes explorar y realizar cambios en el código fuente.

## Contribuciones

Si deseas contribuir a esta aplicación o informar sobre problemas, siéntete libre de crear un problema o enviar una solicitud de extracción en el repositorio de GitHub.

```jsx
export default function ToDos() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask !== '') {
      const task = {
        id: Date.now(),
        text: newTask
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }

  const removeTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <div className='div-app'>
      <h1>ToDos</h1>
      <div>
        <section className='section'>
          <input
            type='text'
            placeholder='Ingrese la tarea a realizar'
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <button className='boton-agregar' onClick={addTask}>
            Agregar Tarea
          </button>
        </section>

        {tasks.map(task => (
          <div key={task.id} className='div-tarea'>
            <Checked tarea={task.text} />
            <button
              className='boton-delete'
              onClick={() => removeTask(task.id)}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
```

¡Esperamos que esta aplicación te ayude a mantener un seguimiento efectivo de tus tareas pendientes y a mejorar tu productividad!
