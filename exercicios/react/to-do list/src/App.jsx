import './App.css'
import CreateCard from './createCard/createCard'

function App() {

  const createCard = () => {

  }

  return (
    <div className='body'>
      <CreateCard/>

      <h1>To-do list</h1>
      <main>
        <div className='buttons-default'>
          <button onClick={() => CreateCard()}>Criar Tarefa</button>
          <button>Resetar Tarefas</button>
        </div>
      </main>
    </div>
  )
}

export default App