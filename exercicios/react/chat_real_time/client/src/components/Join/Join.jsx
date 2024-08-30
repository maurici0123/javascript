import './JoinStyle.css'
import React, { useRef } from 'react'
import io from 'socket.io-client'

export default function Join(props) {

    const usernameRef = useRef()

    const handleSubmit = async () => {
        const username = usernameRef.current.value
        if (!username.trim()) return
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_username', username)
        props.setSocket(socket)
        props.setChatVisibility(true)
    }

    const getEnterKey = (e) => {
        if (e.code === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <div className='main'>
            <h1>Cadastro</h1>

            <div className="input-group">
                <input
                    className="input-text"
                    name="text" type="text"
                    placeholder="Type here" autocomplete="off"
                    ref={usernameRef} onKeyDown={(e) => getEnterKey(e)}
                />
                <label className="input-text-label" for="text">Nome do usuário</label>
            </div>


            {/* <input type="text" className='input' ref={usernameRef} onKeyDown={(e) => getEnterKey(e)} placeholder='Nome do usuário' /> */}

            <button onClick={() => handleSubmit()}>Entrar</button>
        </div>
    )
}