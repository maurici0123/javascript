import './ChatStyle.css'
import React, { useRef, useState, useEffect } from 'react'
import { IoIosMore } from "react-icons/io"
import { MdDelete } from "react-icons/md"
import { GrPowerReset } from "react-icons/gr"
import { VscSend } from "react-icons/vsc"

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

    const clearInput = () => messageRef.current.innerText = ""

    const focusInput = () => messageRef.current.focus()

    const scrollDown = () => bottomRef.current.scrollIntoView()

    const clearDatas = () => {
        localStorage.clear()
        window.location.reload()
    }

    const clearMessages = () => {
        localStorage.setItem('messages', JSON.stringify([]))
        window.location.reload()
    }

    const isItImage = () => {
        const div = messageRef.current

        if (div.querySelector('img')) {
            const img = div.querySelector('img')
            console.log('img')
            return img.getAttribute('src')
        } else {
            console.log('not img')
            return div.innerText
        }
    }

    const handleSubmit = () => {
        console.log('oi')
        const message = isItImage() || ""

        if (!message.trim()) return

        props.socket.emit('message', message)
        clearInput()
        focusInput()
        setHeightSendInput(40)
    }

    const input_lines = () => {
        const contentDiv = messageRef.current

        const context = document.createElement('canvas').getContext('2d')
        context.font = getComputedStyle(contentDiv).font

        const lines = contentDiv.innerText.split('\n')
        let totalLines = 0

        lines.forEach(line => {
            const lineWidth = context.measureText(line).width
            const estimatedLines = Math.ceil(lineWidth / (contentDiv.clientWidth - 40))
            totalLines += estimatedLines || 1
        })

        if (totalLines <= 12) {
            const newHeight = totalLines === 1 ? 40 : totalLines * 21 + 16
            setHeightSendInput(newHeight)
        } else {
            setHeightSendInput(12 * 21 + 16)
        }
    }

    const getEnterKey = (e) => {
        if (e.code === 'Enter') {
            handleSubmit()
            e.preventDefault()
            // if (e.shiftKey || e.ctrlKey) {
            //     const textarea = messageRef.current 
            //     const selection = window.getSelection() 
            //     const range = selection.getRangeAt(0)   

            //     const br = document.createElement('br') 

            //     range.deleteContents()  
            //     range.insertNode(br)    

            //     range.setStartAfter(br) 
            //     range.setEndAfter(br)   

            //     selection.removeAllRanges() 
            //     selection.addRange(range)   

            //     textarea.focus()            

            //     input_lines()   
            // } else {
            //     handleSubmit()  
            // }
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

                                    <p className='value'>{message.text}</p>

                                    <p className='time'>{message.time}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div ref={bottomRef} />
                </div>

                <div className='input-area'>
                    <div className='displayOption' style={{ display: displayOption }}>
                        <div className='delete-button' onClick={() => clearMessages()}>
                            <MdDelete className='delete-icon' />
                            <span>Deletar as mensagens</span>
                        </div>
                        <div className='delete-button' onClick={() => clearDatas()}>
                            <GrPowerReset className='delete-icon' />
                            <span>Deletar os dados</span>
                        </div>
                    </div>

                    <IoIosMore className='option-icon' style={{ backgroundColor: backgroundColor }} onClick={() => showOption()} />

                    <div
                        contentEditable='true'
                        style={{ 'min-height': `${heightSendInput}px` }}
                        className='send-input'
                        ref={messageRef}
                        placeholder='Mensagem'
                        onKeyDown={e => getEnterKey(e)}
                    //onInput={input_lines}
                    />

                    <button className='send-button' onClick={() => handleSubmit()}><VscSend className='send-icon' /></button>
                </div>
            </div>
        </div>
    )
}