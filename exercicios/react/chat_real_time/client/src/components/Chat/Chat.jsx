import './ChatStyle.css'
import React, { useRef, useState, useEffect } from 'react'
import { VscSend } from "react-icons/vsc";

export default function Chat(props) {

    const messageRef = useRef()
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        props.socket.on('recive_message', data => {
            setMessageList((current) => [...current, data])
        })

        return () => {
            props.socket.off('recive_message')
        }
    }, [props.socket])

    const handleSubmit = () => {
        const message = messageRef.current.value
        if (!message.trim()) return

        props.socket.emit('message', message)
        clearInput()
        focusInput()
    }

    const clearInput = () => {
        messageRef.current.value = ''
    }
    const focusInput = () => {
        messageRef.current.focus()
    }
    const getEnterKey = (e) => {
        if (e.code === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <div className='chat'>
            <div className='chat-area'>
                <div className='conversation'>
                    {
                        messageList.map((message, index) => (
                            <p key={index} >{message.author}: {message.text}</p>
                        ))
                    }
                </div>

                <div className='input-area'>
                    <input type="text" className='send-input' ref={messageRef} onKeyDown={e => getEnterKey(e)} placeholder='Mensagem' />
                    <button className='send-button' onClick={() => handleSubmit()}><VscSend className='send-icon'/></button>
                </div>
            </div>
        </div>
    )
}