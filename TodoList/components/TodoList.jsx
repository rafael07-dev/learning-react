import { useTask } from "../hooks/useTask"

export const TodoList = () => {

  const {state, deleteTask, editTask} = useTask()

  return (
    <div>
      <h3>Aqui está tu lista de pendientes</h3>
      <div className="tasks">
        {state.map((item, index) => (
          <div key={index} className='card-todo'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.done ? 'Finalizada' : 'Pendiente'}</p>
            <button onClick={()=> editTask(item)}>Editar</button>
            <button onClick={()=> deleteTask(item)}>Eliminar</button>
          </div>
        ))
        }
      </div>
    </div>
  )
}