const getFlag = require ('./flag.js')

console.log(`oi ${getFlag('--name')} , ${getFlag('--greeting')}`)

/* node greeting.js --name "vitiello" --greeting "na voz"*/