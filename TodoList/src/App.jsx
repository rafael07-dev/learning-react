import { TodoList } from '../components/TodoList'
import { AddTask } from '../components/AddTask'
import { useTask } from '../hooks/useTask'
import { EditTask } from '../components/EditTask'
import './App.css'  

function App() {

  const { addMode, setAddMode } = useTask()

  return (
    <>
      <h1>ToDo List</h1>
      <main className='container'>
        <AddTask/>
        <EditTask isOpen />
        <TodoList />    
      </main>
    </>
  )
}

export default App
