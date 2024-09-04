import '../components/Header.css'

export function Header(){

    function handleChangeInput(e) {
        console.log(e.target.value);
    }

    return(
        <header className="header">
            <h1>Tasks To Do!</h1>
            <form action="#">
                <input onChange={handleChangeInput} className='search-bar' type="text"  placeholder='Buscar tareas'/>
            </form>

            <button className='button'>Cerrar Session</button>
        </header>
    )
}