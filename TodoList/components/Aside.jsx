import { useState } from 'react'
import '../components/Aside.css'

export function Aside() {

    const [activeOption, setActiveOption] = useState('todas')


    return (
        <aside className="aside">
            <h3>TAREAS</h3>
            <div>
                <ul>
                    <li className={activeOption != 'todas' ? '': 'active'} onClick={() => setActiveOption('todas')}><p>Todas</p></li>
                    <li onClick={() => setActiveOption('pendientes')} className={activeOption === 'pendientes' ? 'active': ''}><p>Pendientes</p></li>
                    <li onClick={() => setActiveOption('completadas')} className={activeOption === 'completadas' ? 'active': ''}><p>Completadas</p></li>
                </ul>
            </div>
        </aside>
    )
}