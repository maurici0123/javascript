import CalcIMC from "./calcIMC/CalcIMC";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-zinc-100">
      <h1 className="mb-16 text-center font-bold text-resolution text-4xl">Cálculo do IMC</h1>
      <CalcIMC />
    </div>
  )
}
