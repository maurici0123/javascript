interface TabelaIMCProps {
    imc: number
}
export default function TabelaIMC(props: TabelaIMCProps) {
    return (
        <div className="mx-2 mb-5">
            <div className="flex">
                <div className="w-1/2 border-2 border-b-0 border-r-0 border-resolution p-1 text-center font-semibold">Classificação</div>
                <div className="w-1/2 border-2 border-b-0 border-resolution p-1 text-center font-semibold">IMC</div>
            </div>
            <div className={"flex " + (props.imc < 18.5 ? 'destaque' : '')}>
                <div className="w-1/2 border-2 border-b-0 border-r-0 border-resolution p-1">Abaixo do peso</div>
                <div className="w-1/2 border-2 border-b-0 border-resolution p-1">Abaixo de 18.5</div>
            </div>
            <div className={"flex " + (props.imc >= 18.5 && props.imc < 25 ? 'destaque' : '')}>
                <div className="w-1/2 border-2 border-b-0 border-r-0 border-resolution p-1">Peso normal</div>
                <div className="w-1/2 border-2 border-b-0 border-resolution p-1">Entre 18.5 e 24.9</div>
            </div>
            <div className={"flex " + (props.imc >= 25 && props.imc < 30 ? 'destaque' : '')}>
                <div className="w-1/2 border-2 border-b-0 border-r-0 border-resolution p-1">Sobre peso</div>
                <div className="w-1/2 border-2 border-b-0 border-resolution p-1">Entre 25 e 29.9</div>
            </div>
            <div className={"flex " + (props.imc >= 30 && props.imc < 35 ? 'destaque' : '')}>
                <div className="w-1/2 border-2 border-b-0 border-r-0 border-resolution p-1">Obesidade grau I</div>
                <div className="w-1/2 border-2 border-b-0 border-resolution p-1">Entre 30 e 34.9</div>
            </div>
            <div className={"flex " + (props.imc >= 35 && props.imc < 40 ? 'destaque' : '')}>
                <div className="w-1/2 border-2 border-b-0 border-r-0 border-resolution p-1">Obesidade grau II</div>
                <div className="w-1/2 border-2 border-b-0 border-resolution p-1">Entre 35 e 39.9</div>
            </div>
            <div className={"flex " + (props.imc > 40 ? 'destaque' : '')}>
                <div className="w-1/2 border-2 border-r-0 border-resolution p-1">Obesidade grau III</div>
                <div className="w-1/2 border-2 border-resolution p-1">Maior que 40</div>
            </div>
        </div>
    )
}