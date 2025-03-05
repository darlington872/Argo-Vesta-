//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +919366316018
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

//contact details
global.ownernomer = "2347041620617"
global.owner = ["2347041620617"]
global.ownername = "𝕶𝖎𝖓𝖌 𝕾𝖆𝖒"
global.ytname = "YT: Xeon"
global.socialm = "GitHub: DGXeon"
global.location = "Kenya, Nairobi"
global.url1 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //
global.url2 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //
global.linkgc = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.delayjpm = 3500
global.ownernumber = '254742491666'  //creator number
global.ownername = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒' //owner name
global.botname = 'DYNAMIC-V3' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'SPIDER\n\nContact: +254742491666'

//console view/theme
global.themeemoji = '🕷️'
global.wm = "SPIDER."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Owner !`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Be Used By Premium User Only" Want Premium? Chat Owner`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})