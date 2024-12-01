import './tasksCard.css'
import { RiDeleteBin5Line } from "react-icons/ri"
import { useRef, useEffect} from 'react'

function TasksCard(props) {

	useEffect(() =>{
		console.log('ola')
	}, [JSON.parse(localStorage.getItem('tasks'))])

	const checkboxRef = useRef()

	const deleteCard = () => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))
		tasks.splice(props.index, 1)
		localStorage.setItem('tasks', JSON.stringify(tasks))
		window.location.reload()
	}

	const checkbox = () => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))
		tasks[props.index][1] = checkboxRef.current.checked
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	return (
		<div key={props.index} className='task-card'>
			<p className='task-text'>{props.task}</p>
			<div className="checkbox-wrapper">
				<label>
					<input type="checkbox" ref={checkboxRef} onClick={() => checkbox()} />
					<span className="checkbox"></span>
				</label>
			</div>
			<button className='delete-button' onClick={() => deleteCard()}><RiDeleteBin5Line className='delete-icon' /></button>
		</div>
	)
}

export default TasksCard