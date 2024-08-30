import { useTask } from "../hooks/useTask"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import '../components/TodoList.css'

export const TodoList = () => {

  const {state, deleteTask, editTask} = useTask()

  return (
    <div className="tasks">
      <h2>Todas mis tareas</h2>
        {state.map((item, index) => (
          <div key={index} className='card-todo'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.done ? 'Finalizada' : 'Pendiente'}</p>
            <a className="button" onClick={()=> editTask(item)}><FontAwesomeIcon icon={faPenToSquare} /></a>
            <a className="button" onClick={()=> deleteTask(item)}><FontAwesomeIcon icon={faTrash} /></a>
          </div>
        ))
        }
    </div>
  )
}