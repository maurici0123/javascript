import './tasksCard.css'
import { RiDeleteBin5Line } from "react-icons/ri"
import { useRef, useEffect } from 'react'

function TasksCard(props) {
	const checkboxRef = useRef()
	const spanRef = useRef()

	useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))

		if (tasks[props.index][1] === true) {
			spanRef.current.style.display = "inline-block";
			spanRef.current.style.transform = "rotate(45deg)";
			spanRef.current.style.width = "14px";
			spanRef.current.style.marginLeft = "6px";
			spanRef.current.style.borderColor = "#2ab383";
			spanRef.current.style.borderTopColor = "transparent";
			spanRef.current.style.borderLeftColor = "transparent";
			spanRef.current.style.borderRadius = "0";
		}
	}, [])

	useEffect(() => {
		checkboxRef.current.checked = false
	}, [props.reset])

	const deleteCard = () => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))
		tasks.splice(props.index, 1)
		localStorage.setItem('tasks', JSON.stringify(tasks))
		window.location.reload()
	}

	const checkbox = () => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))
		tasks[props.index][1] = !tasks[props.index][1]
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}

	return (
		<div key={props.index} className='task-card'>
			<p className='task-text'>{props.task}</p>
			<div className="checkbox-wrapper">
				<label>
					<input type="checkbox" ref={checkboxRef} onClick={() => checkbox()} />
					<span className="checkbox" ref={spanRef}></span>
				</label>
			</div>
			<button className='delete-button' onClick={() => deleteCard()}><RiDeleteBin5Line className='delete-icon' /></button>
		</div>
	)
}

export default TasksCard