import { createContext, useReducer, useState } from "react"
//import { useTask } from "../hooks/useTask"

export const TaskContext = createContext()

const ACTIONS = {
    add_task: 'add_task',
    delete_task: 'delete_task',
    addToCompletedTask: 'add_to_completed' 
}

const initialState = {
    task: [
        {
            id: 1,
            name: "Tarea 1",
            description: "Descripción de la tarea 1",
            done: false
          },
          {
            id: 2,
            name: "Tarea 2",
            description: "Descripción de la tarea 2",
            done: true
          },
          {
            id: 3,
            name: "Tarea 3",
            description: "Descripción de la tarea 3",
            done: false
          },
          {
            id: 4,
            name: "Tarea 4",
            description: "Descripción de la tarea 4",
            done: true
        }
    ],
    completedTask: [],
    pendingTask: []
}

function reducer(state, action) {

    if (action.type == ACTIONS.add_task) {
        const isDone = action.payload.done === 'true' ? true: false;

        const newTask = {
            id: state.task.length +1,
            name: action.payload.name, 
            description: action.payload.description, 
            done: isDone
        }

        function checkIsPendingTask(){
            return isDone === false ? [...state.pendingTask, newTask] : [...state.pendingTask];
        }

        function checkIsCompletedTask(){
            return isDone === true ? [...state.completedTask, newTask] : [...state.completedTask];
        }

        return {
            ...state,
            pendingTask: checkIsPendingTask(),
            completedTask: checkIsCompletedTask(),
            task: [...state.task, newTask]
        }
    }

    if (action.type == ACTIONS.delete_task) {
        const { id } = action.payload        

        //verificar existencia de la task por id
        const existingTask = state.task.some((id) => id === id)

        if (existingTask) {
            return {
                ...state,
                task: state.task.filter((item) => item.id != id)
            } 
        }

        return state
    }

    if (action.type === ACTIONS.addToCompletedTask) {
        const {id} = action.payload

        const existingTask = state.completedTask.some(item => item.id === id)

        if (!existingTask) {
            
            return {
                ...state,
                pendingTask: state.pendingTask.filter(item => item.id != action.payload.id),
                completedTask: [
                    ...state.completedTask,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        description: action.payload.description,
                        done: true
                    }
                ]
            }
        }

        return state
        
    }
    
    return state

}

function useTaskReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [filter, setFilter] = useState('all')

    console.log(state);

    function deleteTask(task) {
        dispatch({ type: 'delete_task', payload: task })
    }

    function editTask(task) {
        dispatch({ type: 'edit_task', payload: task })
    }

    function addTask(task) {
        dispatch({ type: 'add_task', payload: task })
    }

    function addToCompleted(task){
        dispatch({type: 'add_to_completed', payload: task})
    }

    return { state, dispatch, editTask, deleteTask, addTask, addToCompleted, filter, setFilter}
}

export const TaskProvider = ({children}) => {

    const {state, dispatch, deleteTask, editTask, addTask, addToCompleted, filter, setFilter} = useTaskReducer()

    return(
        <TaskContext.Provider value={{state, dispatch, deleteTask, editTask, addTask, addToCompleted, filter, setFilter}}>
            {children}
        </TaskContext.Provider>
    )
}