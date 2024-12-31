const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } })
const moment = require('moment-timezone')

const PORT = 3001

io.on('connection', socket => {
    const userId = socket.handshake.query.userId

    console.log('usuario conectado', socket.id, 'com userId:', userId)

    socket.data.userId = userId

    socket.on('set_username', username => {
        socket.data.username = username
    })

    socket.on('disconnect', reason => console.log('usuario desconectado', socket.id))

    socket.on('message', content => {
        // const time = new Date()
        // const formatNumber = number => (number < 10 ? `0${number}` : number)
        
        // const messageTime = `${formatNumber(time.getHours())}:${formatNumber(time.getMinutes())}`
        // const timeOfDay = [time.getFullYear(), time.getMonth()+1, time.getDate()]

        const time = moment().tz("America/Sao_Paulo").format("HH:mm")

        io.emit('recive_message', {
            text: content[0],
            type: content[1],
            authorId: socket.data.userId,
            author: socket.data.username,
            time: time
        })
    })
})

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`))