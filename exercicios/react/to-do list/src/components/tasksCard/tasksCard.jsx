import './tasksCard.css'
import { RiDeleteBin5Line } from "react-icons/ri"

function TasksCard(props) {

	const deleteCard = () => {
		const tasks = JSON.parse(localStorage.getItem('tasks'))
		tasks.splice(props.index, 1)
		localStorage.setItem('tasks', JSON.stringify(tasks))
		window.location.reload()
	}

	return (
		<div key={props.index} className='task-card'>
			<p className='task-text'>{props.task}</p>
			<input type="checkbox" className='checkbox' />
			<button className='delete-button' onClick={() => deleteCard()}><RiDeleteBin5Line className='delete-icon'/></button>
		</div>
	)
}

export default TasksCard