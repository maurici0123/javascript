interface GridDadosProps {
    nome: string
    peso: any
    altura: any
    IMC: any
    data: string
}

export default function GridDados(props: GridDadosProps) {
    return (
        <div className="gridLinhas">
            <div className="gridLinha">{props.nome}</div>
            <div className="gridLinha">{props.peso}Kg</div>
            <div className="gridLinha">{props.altura}m</div>
            <div className="gridLinha">{props.IMC}</div>
            <div className="gridLinha">{props.data}</div>
        </div>
    )
}