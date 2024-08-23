import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      name: 'Sistemas',
      description: 'Monitorear sistema',
      state: true,
    },
    {
      id: 0,
      name: 'Redes',
      description: 'Monitorear redes',
      state: true,
    }
  ])

  return (
    <>
      <h1>TodoList</h1>
      <section className='container'>

        {todos.map((item) => (
          <div key={item.id} className='card-todo'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.state ? 'Pendiente' : 'Finalizada'}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default App
