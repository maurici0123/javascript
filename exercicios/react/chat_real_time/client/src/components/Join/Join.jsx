import './JoinStyle.css'
import React, { useRef, useEffect } from 'react'
import io from 'socket.io-client'

export default function Join(props) {

    useEffect(() => {
        if (localStorage.getItem('authorId')) {
            const socket = io.connect('http://localhost:3001')
            socket.emit('set_username', localStorage.getItem('username'))
            //socket.emit('set_userid', localStorage.getItem('authorId'))
            props.setSocket(socket)
            props.setChatVisibility(true)
        }
    }, [])

    const usernameRef = useRef()

    const handleSubmit = async () => {
        const username = usernameRef.current.value
        if (!username.trim()) return
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_username', username)
        //socket.emit('set_userid', crypto.randomUUID())
        props.setSocket(socket)
        props.setChatVisibility(true)
    }

    const getEnterKey = (e) => {
        if (e.code === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <div className='cadastro'>
            <h1>Cadastro</h1>

            <div className="input-group">
                <input
                    className="input-text"
                    name="text" type="text"
                    placeholder="Type here" autoComplete='off'
                    ref={usernameRef} onKeyDown={(e) => getEnterKey(e)}
                />
                <label className="input-text-label" htmlFor="text">Nome do usuário</label>
            </div>

            <button className='register-button' onClick={() => handleSubmit()}>Entrar</button>
        </div>
    )
}