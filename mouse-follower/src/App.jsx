import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }

    if (active) {

      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [active]);


  return (
    <>
      <div style={{
        position: 'absolute', 
        height: '50px', 
        width: '50px', 
        borderRadius: '50%',
        pointerEvents: 'none',
        backgroundColor: '#888',
        left: -25,
        top: -25,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>

      <button onClick={() => setActive(!active)}>{active ? 'Dejar de seguir' : 'Seguir pointer'}</button>
    </>
  )
}

function App() {

  return (
    <main>
      <FollowMouse></FollowMouse>
    </main>
  )
}

export default App