import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReactUseEffect } from './useEffect/ReactUseEffect'
import { Pokemon } from './useEffect/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <ReactUseEffect/>
    <Pokemon/>
  )
}

export default App
