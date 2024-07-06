import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex items-center justify-around p-10 text-xl bg-teal-900 text-slate-50">
      <Image
        src={'/logo_white.png'}
        alt="logo"
        width={80}
        height={80}
        priority
      />

      <Link style={link} href={'/'}>
        Home
      </Link>

      <Link style={link}
        href={
          {
            pathname: '/produtos/produtos',
            query: { nome: 'alisson', curso: 'python' }
          }
        }>
        Prdutos
      </Link>

      <Link style={link} href={'/useState/useState'}>
        UseState
      </Link>

      <Link style={link} href={'/useEffect/useEffect'}>
        UseEffect
      </Link>

      <Link style={link} href={'/inputs/inputs'}>
        Inputs
      </Link>

      <Link style={link} href={'/filtragem/filtragem'}>
        Filtragem
      </Link>
    </header>
  )
}

const link = {
  display: 'flex',
  textDecoration: 'underline'
}