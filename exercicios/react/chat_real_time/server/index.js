const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } })

const PORT = 3001

io.on('connection', socket => {

    console.log('usuario conectado', socket.id)

    socket.on('set_userid', userid => socket.id = userid)

    socket.on('set_username', username => socket.data.username = username)

    socket.on('disconnect', reason => console.log('usuario desconectado', socket.id))


    socket.on('message', text => {

        const time = new Date()
        const formatNumber = (number) => (number < 10 ? `0${number} ` : number)
        const timestamp = `${formatNumber(time.getHours())}:${formatNumber(time.getMinutes())}`

        io.emit('recive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username,
            time: timestamp
        })
    })
})

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`))