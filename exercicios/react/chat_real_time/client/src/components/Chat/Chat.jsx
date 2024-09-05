import './ChatStyle.css'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { VscSend } from "react-icons/vsc"

export default function Chat(props) {

    const bottomRef = useRef()
    const messageRef = useRef()
    const [messageList, setMessageList] = useState([])
    const [heightSendInput, setHeightSendInput] = useState(40)

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

    const clearInput = () => messageRef.current.value = ''

    const focusInput = () => messageRef.current.focus()

    const scrollDown = () => bottomRef.current.scrollIntoView()

    const getEnterKey = (e) => { //! arrumar =======================================================
        if (e.code === 'Enter') {
            if (e.shiftKey || e.ctrlKey) {
                const textarea = messageRef.current
                const start = textarea.selectionStart
                const end = textarea.selectionEnd
                textarea.value = `${textarea.value.substring(0, start)}\n${textarea.value.substring(end)}`
                textarea.selectionStart = textarea.selectionEnd = start + 1

                const lineCount = textarea.value.split('\n').length
                if (lineCount <= 5) {
                    setHeightSendInput(prev => prev += 24)
                }
            } else {
                handleSubmit()
            }
            e.preventDefault()
        }
    }


    const isLastTwoMessagesSameAuthor = (index) => {
        if (index > 0) {
            return messageList[index].authorId === messageList[index - 1].authorId
        }
        return false
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

                                    <p>{message.text}</p>

                                    <p className='time'>{message.time}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div ref={bottomRef} />
                </div>

                <div className='input-area'>
                    <textarea type="text" style={{ height: `${heightSendInput}px` }}
                        className='send-input' ref={messageRef} onKeyDown={e => getEnterKey(e)} placeholder='Mensagem' />
                    <button className='send-button' onClick={() => handleSubmit()}><VscSend className='send-icon' /></button>
                </div>
            </div>
        </div>
    )
}