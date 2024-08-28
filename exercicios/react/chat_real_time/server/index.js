const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: '*'}});

const PORT = process.env.PORT || 3001

io.on('connection', socket => {
    console.log('usuario conectado', socket.id)

    socket.on('disconnect', reason => {
        console.log('usuario desconectado', socket.id)
    })

    socket.on('set_username', username => {
        socket.data.username = username
    })

    socket.on('message', text => {
        io.emit('recive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username
        })
    })
})

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`))