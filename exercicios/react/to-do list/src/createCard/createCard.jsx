import './createCard.css'
import { useState, useEffect } from 'react'

function CreateCard(props) {

	useEffect(() => {
		setHiddenCard(props.display)
	}, [props.display])

	const [hiddenCard, setHiddenCard] = useState('none')

	const back = () => {
		setHiddenCard('none')
		props.setBlur(0)
	}

	return (
		<div className='card' style={{ display: hiddenCard }}>
			<label>Nome da tarefa</label>
			<input type="text" className='inputTask' />

			<div className='buttons-default'>
				<button>Definir Tarefa</button>
				<button onClick={() => back()}>Voltar</button>
			</div>
		</div>
	)
}

export default CreateCard