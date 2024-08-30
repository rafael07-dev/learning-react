import { TodoList } from "../components/TodoList.jsx";
import { AddTask } from '../components/AddTask.jsx';
import { Header } from '../components/Header.jsx';
import { Aside } from "../components/Aside.jsx";
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="principal-content">
        <Aside />
        <AddTask />
        <TodoList />
      </div>

    </>
  )
}

export default App
