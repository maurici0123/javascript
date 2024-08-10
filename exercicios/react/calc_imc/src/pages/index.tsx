import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import CalcIMC from "./calcIMC/CalcIMC";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <CalcIMC />
    </div>
  )
}
