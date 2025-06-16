import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contenedor">
        <p>Has clickeado {count} veces</p>
        <button onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrementar
        </button>
        <button onClick={() => setCount(0)}>
          Reiniciar
        </button>
      </div>
    </>
  )
}

export default App
