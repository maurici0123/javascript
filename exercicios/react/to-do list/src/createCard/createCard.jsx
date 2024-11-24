import './createCard.css'
import { useRef, useState, useEffect } from 'react'

function CreateCard(props) {
	const [hiddenCard, setHiddenCard] = useState('none')
	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')))
	const messageRef = useRef()

	useEffect(() => {
		setHiddenCard(props.display)
	}, [props.display])

	const back = () => {
		messageRef.current.value = ''
		setHiddenCard('none')
		props.setShowCard('none')
		props.setBlur(0)
	}

	const creatTask = () => {
		const message = messageRef.current.value
		if (message !== '') {
			setTasks(current => {
				const updatedTasks = [...current, [message, false]]
				console.log(updatedTasks)
				localStorage.setItem('tasks', JSON.stringify(updatedTasks))
				return updatedTasks
			})
			messageRef.current.value = ''
		}
	}

	const pressEnterKey = (e) => {
		e.code === 'Enter' && creatTask()
	}

	return (
		<div className='card' style={{ display: hiddenCard }}>
			<label>Nome da tarefa</label>
			<input
				type="text" className='inputTask'
				ref={messageRef} onKeyDown={e => pressEnterKey(e)}
			/>

			<div className='buttons-default'>
				<button onClick={() => creatTask()}>Definir Tarefa</button>
				<button onClick={() => back()}>Voltar</button>
			</div>
		</div>
	)
}

export default CreateCard