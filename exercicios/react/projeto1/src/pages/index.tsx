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

export default function Home() {
  return (
    <main className='bg-stone-200'>
      <Header />
      <main className="container   mx-auto bg-slate-100 px-5 h-screen">
        <h1 style={{ fontStyle: "italic", margin: 'auto', textAlign: 'center', fontSize: '32px', paddingTop: '50px' }}>Loja</h1>

        <div className="flex justify-center gap-4 mt-5">
          <Card product='teclado' price={89.90} />
          <Card product='mouse' price={40} disc_inc={0.3} funcao={calcDis} />
          <Card product='monitor' price={320.00} disc_inc={0.1} funcao={calcInc} />
        </div>
      </main>
    </main >
  );
}
