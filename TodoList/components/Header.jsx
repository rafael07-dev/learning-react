import '../components/Header.css'

export function Header(){
    return(
        <header className="header">
            <h1>Tasks To Do!</h1>
            <form action="#">
                <input type="text"  placeholder='Buscar tareas'/>
            </form>

            <button className='button'>Cerrar Session</button>
        </header>
    )
}