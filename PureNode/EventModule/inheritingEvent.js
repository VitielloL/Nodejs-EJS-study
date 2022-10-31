const { inherits } = require('util')
const { EventEmitter} = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin colorado');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} !`))

console.log('Oh! e agora? quem poderá me defender?')
chapolin.emit('help')