import { TodoList } from '../components/TodoList'
import { AddTask } from '../components/AddTask'
import './App.css'

function App() {

  return (
    <>
      <h1>ToDo List</h1>
      <section className='container'>
        <AddTask/>
        <TodoList/>
      </section>
    </>
  )
}

export default App
