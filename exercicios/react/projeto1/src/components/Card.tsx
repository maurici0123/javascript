interface cardPrps {
    product: string
    price: number
    disc_inc?: number
    funcao?: any
}

export default function Card(props: cardPrps) {
    return (
        <div className={`text-lg font-semibold p-6 border ${props.disc_inc? 'border-sky-500' : 'border-red-500'} rounded-lg`}>
            <p>Produto: {props.product}</p>

            {props.funcao ? (
                <>
                <del>Preço: {props.price.toFixed(2)} </del>
                <p>Preço: {(props.funcao(props.price, props.disc_inc)).toFixed(2)}</p>
                </>)
                : <p>Preço: {props.price.toFixed(2)}</p>}
        </div>
    )
}
