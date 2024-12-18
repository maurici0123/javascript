import './createCard.css'
import { useRef, useState, useEffect } from 'react'
import { toast } from 'sonner'

function CreateCard(props) {
	useEffect(() => {
		props.focus == true && messageRef.current.focus()
		props.setFocus(false)
	}, [props.focus])

	const messageRef = useRef()

	const [tasks, setTasks] = useState(() => {
		if (JSON.parse(localStorage.getItem('tasks'))) {
			return JSON.parse(localStorage.getItem('tasks'))
		} else {
			return []
		}
	})

	const back = () => {
		messageRef.current.value = ''
		props.setShowCard('none')
		props.setBlur(0)
	}

	const createTask = () => {
		const message = messageRef.current.value
		if (message.trim()) {
			setTasks(current => {
				const updatedTasks = [...current, [message, false]]
				localStorage.setItem('tasks', JSON.stringify(updatedTasks))
				return updatedTasks
			})
			messageRef.current.value = ''

			toast.success('Tarefa criada com sucesso')
		}
		back()
	}

	const pressEnterKey = (e) => {
		e.code === 'Enter' && createTask()
	}

	return (
		<div className='card' style={{ display: props.display }}>
			<label>Nome da tarefa</label>
			<input
				type="text" className='inputTask' style={{}}
				ref={messageRef} onKeyDown={e => pressEnterKey(e)}
			/>

			<div className='buttons-card'>
				<button onClick={() => createTask()}>Definir Tarefa</button>
				<button onClick={() => back()}>Voltar</button>
			</div>
		</div>
	)
}

export default CreateCard