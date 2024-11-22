import './App.css'
import { useState } from 'react'
import CreateCard from './createCard/createCard'

function App() {

  const [showCard, setShowCard] = useState('none')
  const [Blur, setBlur] = useState(0)

  const createTask = () => {
    setShowCard('flex')
    setBlur(8)
  }

  return (
    <div className='body'>
      <CreateCard display={showCard} setBlur={setBlur}/>

      <h1 className='title' style={{ filter: `blur(${Blur}px)` }}>To-do list</h1>

      <main style={{ filter: `blur(${Blur}px)` }}>

        <div className='buttons-default'>
          <button onClick={() => createTask()}>Criar Tarefa</button>
          <button>Resetar Tarefas</button>
        </div>

      </main>
    </div>
  )
}

export default App