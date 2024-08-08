import Header from "@/components/Header"

export default function Home() {
  return (
    <main className='bg-stone-200'>
      <Header />
      <div className="container mx-auto bg-slate-100 h-screen pt-5">
        <h1 style={{ fontStyle: "italic", margin: 'auto', textAlign: 'center', fontSize: '32px'}}>Home</h1>
      </div>
    </main >
  )
}