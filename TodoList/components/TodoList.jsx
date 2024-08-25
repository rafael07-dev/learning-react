import { useReducer, useState } from "react";

const ACTIONS = {
  add_task: 'add_task',
  delete_task: 'delete_task'
}

const initialState = []

function reducer(state, action) {
  if (action.type == ACTIONS.add_task) {
    return [
      ...state, {
        id: state.length + 1,
        name: action.name,
        description: action.description,
        done: false
      }
    ]
  }

if (action.type == ACTIONS.delete_task) {
  const {id} = action.payload
  
  //verificar existencia de la task por id
  const existingTask = state.some((id) => id === id)

  if (existingTask) {
    return state.filter((item) => item.id != id);
  }
  
  return state
}

}

export const TodoList = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [inputs, setInputs] = useState({ inputName: '', inputDescription: '' })

  function handleChange(event) {
    const { name, value } = event.target

    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }))

  }

  function handleSubmit(event) {
    event.preventDefault()

    dispatch({ type: 'add_task', name: inputs.inputName, description: inputs.inputDescription })
    setInputs({ inputName: '', inputDescription: '' })
  }

  function deleteTask(task) {
    dispatch({type: 'delete_task', payload: task})
  }

  return (
    <div>
      <div className='add-tasks'>
        <h3>Añadir nueva tarea</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name='inputName' onChange={handleChange} placeholder='Name' value={inputs.inputName} />
          <input type="text" name='inputDescription' onChange={handleChange} placeholder='Description' value={inputs.inputDescription} />
          <button type='submit'>Agregar</button>
        </form>
      </div>
      <div className="tasks">
        {state.map((item, index) => (
          <div key={index} className='card-todo'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.done ? 'Finalizada' : 'Pendiente'}</p>
            <button>Editar</button>
            <button onClick={() => deleteTask(item)}>Eliminar</button>
          </div>
        ))
        }
      </div>
    </div>
  )

}