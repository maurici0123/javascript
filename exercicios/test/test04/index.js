const moment = require('moment-timezone')
const currentTime = moment().tz("America/Sao_Paulo").format("HH:mm")
console.log(currentTime)