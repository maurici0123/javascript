//import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className='bg-stone-200'>
      <Header />
      <div className="container  mx-auto bg-slate-100 px-5 h-screen pt-5">
        <h1 style={{ fontStyle: "italic", margin: 'auto', textAlign: 'center', fontSize: '32px'}}>Loja</h1>
      </div>
    </main >
  )
}