import Button from './evento/Button'

function Evento(){

    function botao(){
        console.log('ola')
    }

    return(
        <div>
            <p>click for active the function</p>
            <Button event={botao} text='botao'/>
        </div>
    )
}

export default Evento