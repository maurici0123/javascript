//import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header"
import Card from "@/components/Card"

function calcDis(v: number, d: number) {
  return v - (v * d)
}
function calcInc(v: number, d: number) {
  return v + (v * d)
}

const products = [
  {
    product: 'teclado',
    price: 89.90,
    stock: true
  },
  {
    product: 'mouse',
    price: 40,
    disc_inc: 0.1,
    funcao: calcInc,
    stock: true
  },
  {
    product: 'monitor',
    price: 210.99,
    disc_inc: 0.3,
    funcao: calcDis,
    stock: false
  },
  {
    product: 'mousepad',
    price: 34.99,
    stock: true
  },
]


export default function Home() {
  return (
    <main className='bg-stone-200'>
      <Header />
      <main className="container   mx-auto bg-slate-100 px-5 h-screen">
        <h1 style={{ fontStyle: "italic", margin: 'auto', textAlign: 'center', fontSize: '32px', paddingTop: '50px' }}>Loja</h1>

        <div className="flex justify-center gap-4 mt-5">
          {
            products.map(e => {
              return (
                <Card product={e.product} price={e.price} stock={e.stock} disc_inc={e.disc_inc} funcao={e.funcao} />
              )
            })
          }
        </div>
      </main>
    </main >
  );
}
