class computador {
    private nome: string
    private ram: number
    private ligado: boolean

    constructor(nome: string, ram: number, ligado: boolean) {
        this.nome = nome
        this.ram = ram
        this.ligado = ligado
    }

    info() {
        console.table(this)
    }

    on_off() {
        this.ligado = !this.ligado
    }
}

const c1 = new computador('inspiron 15', 16, false)
const c2 = new computador('book 3', 8, true)
const c3 = new computador('acer nitro 5', 32, false)

c1.info()
c2.info()
c3.info()
console.log('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+')
c3.on_off()
c3.info()   