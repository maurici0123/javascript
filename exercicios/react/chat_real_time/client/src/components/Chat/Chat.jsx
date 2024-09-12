import './ChatStyle.css'
import React, { useRef, useState, useEffect } from 'react'
import { VscSend } from "react-icons/vsc"
import { MdDelete } from "react-icons/md"
import { IoIosMore } from "react-icons/io";

export default function Chat(props) {

    const bottomRef = useRef()
    const messageRef = useRef()
    const [messageList, setMessageList] = useState([])
    const [heightSendInput, setHeightSendInput] = useState(40)
    const [displayOption, setDisplayOption] = useState('none')
    const [backgroundColor, setBackgroundColor] = useState('transparent')
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        localStorage.getItem('messages') && setMessageList(JSON.parse(localStorage.getItem('messages')))
    }, [])

    useEffect(() => {
        props.socket.on('recive_message', data => {

            setMessageList(current => {
                const upadateMessage = [...current, data]
                localStorage.setItem('messages', JSON.stringify(upadateMessage))
                return upadateMessage
            })
        })

        return () => {
            props.socket.off('recive_message')
        }
    }, [props.socket])

    useEffect(() => {
        scrollDown()
    }, [messageList])

    const clearInput = () => messageRef.current.value = ''

    const focusInput = () => messageRef.current.focus()

    const scrollDown = () => bottomRef.current.scrollIntoView()

    const clearDatas = () => {
        localStorage.clear()
        window.location.reload()
    }

    const handleSubmit = () => {
        const message = messageRef.current.value
        if (!message.trim()) return

        props.socket.emit('message', message)
        clearInput()
        focusInput()
        setHeightSendInput(40)
    }

    const input_lines = () => {
        const textarea = messageRef.current
        const lineCount = textarea.value.split('\n').length
        if (lineCount <= 8) {
            setHeightSendInput(lineCount == 1 ? 40 : lineCount * 21 + 16)
        }
    }

    const getEnterKey = (e) => {
        if (e.code === 'Enter') {
            if (e.shiftKey || e.ctrlKey) {
                const textarea = messageRef.current
                const start = textarea.selectionStart
                const end = textarea.selectionEnd
                textarea.value = `${textarea.value.substring(0, start)}\n${textarea.value.substring(end)}`
                textarea.selectionStart = textarea.selectionEnd = start + 1

                input_lines()
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

    const showOption = () => {
        setDisplayOption(prev => {
            if (prev == 'none') {
                setBackgroundColor('#666')
                return 'flex'
            } else {
                setBackgroundColor('transparent')
                return 'none'
            }
        })
    }

    return (
        <div className='chat'>
            <div className='chat-area'>
                <div className='conversation'>
                    {
                        messageList.map((message, index) => (
                            <div key={index} className={`message-area
                                ${message.authorId === userId ? 'my-message-area' : 'other-message-area'}
                                ${isLastTwoMessagesSameAuthor(index) && 'pasted-message'}`}>

                                <div className={`message ${message.authorId === userId ? 'my-message' : 'other-message'}`}>
                                    <p className={`author ${message.authorId === userId ? 'my-author' : 'other-author'}
                                        ${isLastTwoMessagesSameAuthor(index) && 'author-pasted'}`}>{message.author}
                                    </p>

                                    <span>{message.text}</span>

                                    <p className='time'>{message.time}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div ref={bottomRef} />
                </div>

                <div className='input-area'>
                    <div className='displayOption' style={{ display: displayOption }}>
                        <div className='delete-button' onClick={() => clearDatas()}>
                            <MdDelete className='delete-icon' />
                            <span>Deletar todos os dados</span>
                        </div>
                    </div>

                    <IoIosMore className='option-icon' style={{ backgroundColor: backgroundColor }} onClick={() => showOption()} />

                    <textarea type="text" style={{ height: `${heightSendInput}px` }} className='send-input' ref={messageRef} placeholder='Mensagem' onKeyDown={e => getEnterKey(e)} onChange={input_lines} />

                    <button className='send-button' onClick={() => handleSubmit()}><VscSend className='send-icon' /></button>
                </div>
            </div>
        </div>
    )
}