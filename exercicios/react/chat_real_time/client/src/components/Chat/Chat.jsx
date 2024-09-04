import './ChatStyle.css'
import React, { useRef, useState, useEffect } from 'react'
import { VscSend } from "react-icons/vsc";

export default function Chat(props) {

    const bottomRef = useRef()
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

    useEffect(() => {
        if (messageList.length > 0) {
            scrollDown()
        }
    }, [messageList])

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

    const scrollDown = () => {
        bottomRef.current.scrollIntoView()
    }

    const isLastTwoMessagesSameAuthor = (index) => {
        if (index > 0) {
            return messageList[index].authorId === messageList[index - 1].authorId;
        }
        return false;
    }

    return (
        <div className='chat'>
            <div className='chat-area'>
                <div className='conversation'>
                    {
                        messageList.map((message, index) => (
                            <div key={index} className={`message-area 
                                ${message.authorId === props.socket.id ? 'my-message-area' : 'other-message-area'}
                                ${isLastTwoMessagesSameAuthor(index) && 'pasted-message'}`}>

                                <div className={`message ${message.authorId === props.socket.id ? 'my-message' : 'other-message'}`}>
                                    <p
                                        className={`author ${message.authorId === props.socket.id ? 'my-author' : 'other-author'}
                                        ${isLastTwoMessagesSameAuthor(index) && 'author-pasted'}`}>{message.author}:
                                    </p>

                                    {message.text}
                                </div>
                            </div>
                        ))
                    }
                    <div ref={bottomRef} />
                </div>

                <div className='input-area'>
                    <input type="text" className='send-input' ref={messageRef} onKeyDown={e => getEnterKey(e)} placeholder='Mensagem' />
                    <button className='send-button' onClick={() => handleSubmit()}><VscSend className='send-icon' /></button>
                </div>
            </div>
        </div>
    )
}