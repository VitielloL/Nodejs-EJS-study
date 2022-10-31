const { EventEmitter } = require('events')

const ev = new EventEmitter

// sempre ouvindo
ev.on('saySomething', (message) => {
    console.log('Eu ouvi voce', message)
})

// apenas uma vez
ev.once('saySomething', (message) => {
    console.log('Eu ouvi voce', message)
})

ev.emit('saySomething', "Vitiello")
ev.emit('saySomething', "Lucas")