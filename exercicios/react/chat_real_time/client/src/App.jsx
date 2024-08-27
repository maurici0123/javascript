import './App.css'
import { useState } from 'react'
import Chat from './components/chat/chat.jsx'
import Join from './components/Join/Join.jsx'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false)

  return (
    <div>
      {
      chatVisibility ? <Chat /> : <Join setChatVisibility={setChatVisibility}/>
      }
    </div>
  )
}

export default App
