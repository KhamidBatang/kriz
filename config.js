let fs = require('fs')

global.owner = ['6281947707409','6281947707409'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  melcanz: 'httpa://melcanz.com',
  lol: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'pkebgk8248jskrkfm',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.stiker_wait = '⏳ 𝙒𝘼𝙄𝙏, 𝙎𝙀𝘿𝘼𝙉𝙂 𝘿𝙄𝙋𝙍𝙊𝙎𝙀𝙎...'
global.packname = '︶꒷꒦乂REX-MD乂꒦꒷︶'
global.author = 'by K🐦 '

global.wm = '︶꒷꒦乂REX-MD乂꒦꒷︶'
global.botwm = '︶꒷꒦乂REX-MD乂꒦꒷︶'
global.watermark = '︶꒷꒦乂REX-MD乂꒦꒷︶'
global.media = fs.readFileSync('./src/krizyn.jpg')
global.donasi = fs.readFileSync('./src/payment.jpg')

global.wait = '⏳ 𝙒𝘼𝙄𝙏, 𝙎𝙀𝘿𝘼𝙉𝙂 𝘿𝙄𝙋𝙍𝙊𝙎𝙀𝙎...'
global.eror = '❗𝙎𝙚𝙧𝙫𝙚𝙧 𝙀𝙧𝙧𝙤𝙧...'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.multiplier = 99 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
