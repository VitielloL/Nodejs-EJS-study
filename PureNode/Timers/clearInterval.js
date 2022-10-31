// cancela o setInterval

const timeOut = 1000
const threeSeconds = 3000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)
// clearInterval(interval)

setTimeout( () => clearInterval(interval), threeSeconds)