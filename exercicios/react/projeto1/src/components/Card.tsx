interface cardPrps {
    product: string
    price: number
    stock: boolean
    disc_inc?: number
    funcao?: any
}

export default function Card(props: cardPrps) {
    return (
        <div className={`text-lg font-semibold p-6 border ${props.stock ? 'border-sky-500' : 'border-red-500'} rounded-lg`}>
            <p>Produto: {props.product}</p>

            {props.funcao ?
                (<>
                    <del>Preço: {props.price.toFixed(2)} </del>
                    <p>Preço: {(props.funcao(props.price, props.disc_inc)).toFixed(2)}</p>
                </>)
                : <p>Preço: {props.price.toFixed(2)}</p>
            }

            <p>Estoque: {props.stock ? 'Sim' : 'Não'}</p>
        </div>
    )
}
