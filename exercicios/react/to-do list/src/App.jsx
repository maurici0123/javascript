import './App.css'
import { useState, useEffect } from 'react'
import CreateCard from './components/createCard/createCard'
import TasksCard from './components/tasksCard/tasksCard'

function App() {
  const [showCard, setShowCard] = useState('none')
  const [reset, setReset] = useState(false)
  const [Blur, setBlur] = useState(0)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    localStorage.getItem('tasks') == null && localStorage.setItem('tasks', JSON.stringify([]))
  }, [])

  const createTask = () => {
    setShowCard('flex')
    setBlur(8)
    setFocus(true)
  }

  const isThereTasks = () => {
    if (JSON.parse(localStorage.getItem('tasks'))) {
      return JSON.parse(localStorage.getItem('tasks'))
    } else {
      return []
    }
  }

  const resetTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.map((task, index) => {
      tasks[index][1] = false
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setReset(current => {
      return !current
    })
  }

  return (
    <div className='body'>
      <h1 className='title' style={{ filter: `blur(${Blur}px)` }}>To-do list</h1>

      <main style={{ filter: `blur(${Blur}px)` }}>
        {
          isThereTasks().map((task, index, array) => {
            return <TasksCard key={index} task={task} index={index} array={array} reset={reset} />
          })
        }

        <div className='buttons-default'>
          <button onClick={() => createTask()}>Criar Tarefa</button>
          <button onClick={() => resetTasks()}>Resetar Tarefas</button>
        </div>
      </main>

      <CreateCard
        display={showCard}
        setShowCard={setShowCard}
        setBlur={setBlur}
        focus={focus}
        setFocus={setFocus}
      />
    </div>
  )
}

export default App