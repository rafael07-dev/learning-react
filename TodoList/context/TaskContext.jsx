import { createContext, useReducer } from "react"

export const TaskContext = createContext()

const ACTIONS = {
    add_task: 'add_task',
    delete_task: 'delete_task',
    edit_task: 'edit_task'
}

const initialState = [
    {
        id: 1,
        name: "Tarea 1",
        description: "Descripción de la tarea 1",
        done: "pendiente"
      },
      {
        id: 2,
        name: "Tarea 2",
        description: "Descripción de la tarea 2",
        done: "finalizada"
      },
      {
        id: 3,
        name: "Tarea 3",
        description: "Descripción de la tarea 3",
        done: "pendiente"
      },
      {
        id: 4,
        name: "Tarea 4",
        description: "Descripción de la tarea 4",
        done: "finalizada"
      }
]

function reducer(state, action) {
    if (action.type == ACTIONS.add_task) {
        return [
            ...state, {
                id: state.length + 1,
                name: action.payload.name,
                description: action.payload.description,
                done: action.payload.done
            }
        ]
    }

    if (action.type == ACTIONS.delete_task) {
        const { id } = action.payload

        //verificar existencia de la task por id
        const existingTask = state.some((id) => id === id)

        if (existingTask) {
            return state.filter((item) => item.id != id);
        }

        return state
    }

    if (action.type === ACTIONS.edit_task) {

        const { id } = action.payload
        const existingTask = state.some(item => item.id === id)

        if (existingTask) {
            //console.log(action.payload);

        }
    }

    return state

}

function useTaskReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    function deleteTask(task) {
        dispatch({ type: 'delete_task', payload: task })
    }

    function editTask(task) {
        dispatch({ type: 'edit_task', payload: task })
    }

    function addTask(task) {
        console.log(task);
        
        dispatch({ type: 'add_task', payload: task })
    }

    return { state, dispatch, editTask, deleteTask, addTask}
}

export const TaskProvider = ({children}) => {

    const {state, dispatch, deleteTask, editTask, addTask} = useTaskReducer()

    return(
        <TaskContext.Provider value={{state, dispatch, deleteTask, editTask, addTask}}>
            {children}
        </TaskContext.Provider>
    )
}