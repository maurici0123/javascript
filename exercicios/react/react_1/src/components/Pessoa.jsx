import Dados from './OutrosDados'

function Pessoa({nome, idade, profissão}){
    return(
        <div>
            <ul>
                <li>nome: {nome}</li>
                <li>idade: {idade}</li>
                <li>profissão: {profissão}</li>
                <Dados carro='renault' lancamento ={1987}/>
                <Dados carro='chevrolet' lancamento={2004}/>
                <Dados carro='audi' lancamento={1978}/>
                <Dados carro='bmw'/>
            </ul>
            
        </div>
    )
}

export default Pessoa