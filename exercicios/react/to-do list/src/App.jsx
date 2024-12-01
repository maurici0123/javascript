import './App.css'
import { useState, useEffect } from 'react'
import CreateCard from './components/createCard/createCard'
import TasksCard from './components/tasksCard/tasksCard'

function App() {
  const [showCard, setShowCard] = useState('none')
  const [Blur, setBlur] = useState(0)

  useEffect(() => {
    localStorage.getItem('tasks') == null && localStorage.setItem('tasks', JSON.stringify([]))
  }, [])

  const createTask = () => {
    setShowCard('flex')
    setBlur(8)
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
    }

  return (
    <div className='body'>
      <h1 className='title' style={{ filter: `blur(${Blur}px)` }}>To-do list</h1>

      <main style={{ filter: `blur(${Blur}px)` }}>
        {
          isThereTasks().map((task, index, array) => {
            return <TasksCard key={index} task={task} index={index} array={array} />
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
      />
    </div>
  )
}

export default App