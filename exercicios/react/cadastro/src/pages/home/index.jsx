import './style.css'
// import icons
import { RiDeleteBin6Fill } from "react-icons/ri";

function Home() {

  const users = [{
    id: '98dh93247db34g',
    name: 'João',
    age: 28,
    email: 'joao@example.com'
  }, {
    id: '2398djsdh2394',
    name: 'Maria',
    age: 34,
    email: 'maria@example.com'
  }]

  return (
    <div className="home-container">

      <form className="cadastro-form">
        <h1>Cadastro de Usuários</h1>

        <input type="text" name="name" placeholder='Nome'/>
        <input type="number" name="age" placeholder='Idade'/>
        <input type="email" name="email" placeholder='Email'/>
        <button type='button'>Cadastro</button>

      </form>
      {
        users.map(user => (
          <div key={user.id} className="user-card">

            <div className="user-info">
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Idade:</strong> {user.age}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>

            <button className="delete-button">
              <RiDeleteBin6Fill className='icon' size={20} />
            </button>

          </div>
        ))
      }
    </div>
  )
}

export default Home
