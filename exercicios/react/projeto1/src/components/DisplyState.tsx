interface displayStateProps {
    valor: number
    setValor: any
}

export default function displayState(props: displayStateProps) {
    function operação(op: number) {
        let c = props.valor
        c += op
        props.setValor(c)
    }

    return (
        <>
            <h1>{props.valor}</h1>

            <div className="flex gap-6 mx-auto">
                <button className="bg-slate-700 text-white p-2 rounded-lg" onClick={() => operação(1)}>adicionar</button>
                <button className="bg-slate-700 text-white p-2 rounded-lg" onClick={() => operação(-1)}>subtrair</button>
            </div>
        </>
    )
}