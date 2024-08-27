import { useTask } from "../hooks/useTask"

export const TodoList = () => {

  const {state, deleteTask, editTask} = useTask()

  console.log(state);
  

  return (
    <div>
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