import PropTypes from 'prop-types'

function Dados(props){
    return(
        <>
        <li>{props.carro} - {props.lancamento}</li>
        </>
    )
}

Dados.propTypes={
    carro: PropTypes.string.isRequired
}

Dados.defaultProps={
    lancamento: 0
}

export default Dados