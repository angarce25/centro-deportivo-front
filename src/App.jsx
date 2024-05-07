import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo w-32" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react w-32" alt="React logo" />
          </a>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mt-8">Vite + React</h1>
      <div className="card mx-auto mt-4 p-4 bg-white shadow-md rounded-md max-w-md">
        <button onClick={() => setCount((count) => count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Incrementar contador
        </button>
        <p className="text-center mt-2">
          El contador es: <span className="font-bold">{count}</span>
        </p>
        <p className="text-center mt-2">
          Edita <code className="bg-gray-200 p-1 rounded">src/App.jsx</code> y guarda para probar HMR
        </p>
      </div>
      <p className="read-the-docs text-center mt-4">
        Haz clic en los logos de Vite y React para obtener más información
      </p>
    </>
  )
}

export default App
