export default function Header(){
    return(
        <header>
      <div className="flex items-center justify-around p-10 text-xl bg-teal-900 text-slate-50">
        <p>Logo</p>
        <p>Home</p>
        <div style={link}>
          <p>Links</p>
          <p className="mx-6">Links</p>
          <p>Links</p>
        </div>
      </div>
    </header>
    )
}

const link = {
    display: 'flex',
    textDecoration: 'underline'
  }