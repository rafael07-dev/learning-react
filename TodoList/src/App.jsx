import { useState } from 'react'
import './App.css'

const TodoList = () => {

  const [tasks, setTasks] = useState([{ id: null, name: '', decription: '', state: null }])

  return (
    <div>
      {tasks.map((item, index) => (
      <div key={index} className='card-todo'>
        <h3>{item.name}</h3>
        <p>{item.decription}</p>
        <p>{item.state ? 'Pendiente' : 'Finalizada'}</p>
      </div>
      ))}
    </div>
  )

}

function App() {

  return (
    <>
      <h1>TodoList</h1>
      <section className='container'>
        <TodoList/>
      </section>
    </>
  )
}

export default App
