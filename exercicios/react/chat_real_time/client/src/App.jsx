import './App.css'
import { useState } from 'react'
import Chat from './components/Chat/Chat.jsx'
import Join from './components/Join/Join.jsx'

export default function App() {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] = useState(null)
  const [background, setBackground] = useState('#242424');

  const toggleBackground = () => {
    setBackground((prevBackground) => (prevBackground === '#eee' ? '#242424' : '#eee'));
  }

  return (
    <div className="main" style={{ background: background }}>
      <div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" className="checkbox" onChange={() => toggleBackground()} />
          <span className="slider"></span>
        </label>
      </div>

      <div>
        {chatVisibility ? (
          <Chat socket={socket} />
        ) : (
          <Join setChatVisibility={setChatVisibility} setSocket={setSocket} />
        )}
      </div>
    </div>
  );
}
