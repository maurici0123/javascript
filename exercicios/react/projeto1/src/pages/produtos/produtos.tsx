import Header from "@/components/Header"
import Card from "@/components/Card"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Globais from "@/components/Globais"

function calcDis(v: number, d: number) {
    return v - (v * d)
}
function calcInc(v: number, d: number) {
    return v + (v * d)
}

const products = [
    {
        id: 1,
        product: 'teclado',
        price: 89.90,
        stock: true
    },
    {
        id: 2,
        product: 'mouse',
        price: 40,
        disc_inc: 0.1,
        funcao: calcInc,
        stock: true
    },
    {
        id: 3,
        product: 'monitor',
        price: 210.99,
        disc_inc: 0.3,
        funcao: calcDis,
        stock: false
    },
    {
        id: 4,
        product: 'mousepad',
        price: 34.99,
        stock: true
    },
]

export default function Produtos() {
    useEffect(() => {
        Globais.City = 'London'
        Globais.Name = 'thais'
        Globais.job = 'medica'
    }, [])

    const router = useRouter()
    const { nome, curso } = router.query
    console.log(nome)
    console.log(curso)

    return (
        <main className='bg-stone-200'>
            <Header />
            <div className="container mx-auto bg-slate-100 h-screen flex flex-col items-center">
                <div className=" px-5 flex justify-center gap-4 py-5">
                    {
                        products.map(e => {
                            return (
                                <Card key={e.id} product={e.product} price={e.price} stock={e.stock} disc_inc={e.disc_inc} funcao={e.funcao}>
                                    <p className="text-green-600">10X sem juros</p>
                                    <p className="text-green-600">ou 15X com nosso cartão</p>
                                </Card>
                            )
                        })
                    }
                </div>
                <p>{Globais.Name}</p>
                <p>{Globais.City}</p>
                <p>{Globais.job}</p>
            </div>
        </main>
    )
}