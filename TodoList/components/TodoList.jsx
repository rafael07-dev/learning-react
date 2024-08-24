import { useReducer, useState } from "react";

const ACTIONS = {
  add_task: 'add_task',
  delete_task: 'delete_task'
}

const initialState = []

function reducer(state, action) {
  if (action.type == ACTIONS.add_task) {
    return [
      ...state,{
        id: state.length +1,
        name: action.name,
        description: action.description,
        done: false
      }
    ]
  }
  
}

export const TodoList = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [inputs, setInputs] = useState({inputName: '', inputDescription: ''})
  
  function handleChange(event) {
    const { name, value } = event.target

    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }))

  }
  
  function handleSubmit(event) {
    event.preventDefault()
    
    dispatch({type: 'add_task', name: inputs.inputName, description: inputs.inputDescription})
    console.log(event);
  }

  return (
    <div>
      <div className='add-tasks'>
        <h3>Añadir nueva tarea</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name='inputName' onChange={handleChange} placeholder='Name' value={inputs.inputName} />
          <input type="text" name='inputDescription' onChange={handleChange} placeholder='Description' value={inputs.inputDescription} />
          <select name="state" id="state" onChange={handleChange} value={state.state}>
            <option>--seleccionar--</option>
            <option>Pendiente</option>
            <option >Finalizada</option>
          </select>
          <button type='submit'>Agregar</button>
        </form>
      </div>

      {state.map((item, index) => (
        <div key={index} className='card-todo'>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.state ? 'Pendiente' : 'Finalizada'}</p>
        </div>
      ))
      }

    </div>
  )

}