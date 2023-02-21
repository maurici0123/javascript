const text = `João trouxe flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome dela.

Foi um ano excelente na vida de joão. Teve 5 filhos, todos
adultos atualmente. maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.
Não canso de ouvir a Maria: 

Joooooãoooo, o café tá prontinho aqui. Veeemm!`

const arquivo = [
'atenção.jpg',
'foto.jpeg',
'gatinho.jpg',
'gatinho.jpeg',
'marido.png',
'compras.txt',
]

const html = `<p>ola mundo</p> <p>ola denovo</p>`

const alfabeto = `ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghigklmnopqrstuvwxyz @§ 0123456789`

const cpf = `
254.224.877-45
215.978.456-12
 047.258.369-96
963.987.321-00
 254.224.877-45
`

const ip = `
0.0.0.0
192.168.0.25
222.249.9.188
255.255.255.
`

const  html2  =  `<p
data-teste='teste'
class="teste teste">
Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`

const lookahead = `
ONLINE 192.168.0.1 ABCDEF inactive
OFFLINE 192.168.0.2 ABCDEF active
ONLINE 192.168.0.3 ABCDEF active
ONLINE 192.168.0.4 ABCDEF active
OFFLINE 192.168.0.5 ABCDEF active
OFFLINE 192.168.0.6 ABCDEF inactive
`

export {text, arquivo, html, alfabeto, cpf, ip, lookahead, html2}