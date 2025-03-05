//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "7604874383:AAHk0bEANRl4bmf_ArYVd9UWMaceczjJyrA" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "DYNAMIC-V3" //your bot name
global.OWNER_NAME = "@The_Chosen_001" //your name with sign @
global.OWNER = ["https://t.me/The_Chosen_001", "https://t.me/KingSamHub"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7660171682"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://files.catbox.moe/912b7u.jpg' //your bot pp

global.owner = global.owner = ['2347041620617'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})