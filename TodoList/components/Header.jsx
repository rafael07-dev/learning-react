import { useTask } from '../hooks/useTask';
import { useEffect, useState } from 'react';
import '../components/Header.css'

export function Header(){
    const [searchTerm, setSearchTerm] = useState('')

    const {state, addToFilteredTask, setFilter} = useTask()
    const tasks = state.task.map(item => item)    
    
    useEffect(()=> {
        const filteredTasks = tasks.filter(item => item.name.includes(searchTerm) || item.description.includes(searchTerm))
        
        addToFilteredTask(filteredTasks)
    }, [searchTerm])
    
    
    function useHandleChangeInput(e) {
        setSearchTerm(e.target.value)
        setFilter('')
    }

    function handleSubmit(e){
        console.log(e);
        
    }

    return(
        <header className="header">
            <h1>Tasks To Do!</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={useHandleChangeInput} className='search-bar' type="text"  placeholder='Buscar tareas'/>
            </form>

            <button className='button'>Cerrar Session</button>
        </header>
    )
}