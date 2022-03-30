
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let handler = async (m) => {
let duit = `*────── 「 DONATE 」 ──────*

Kalian bisa mendukung saya agar bot ini tetap aktif selalu
┌〔 Donasi • Emoney 〕
├ Gak Perlu Bang >~<
└────
Berapapun donasi kalian akan sangat berarti 👍

Contact person Owner:
wa.me/6281390492911 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/f2a537430f94d0d163997.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Saweria',
               url: 'https://saweria.co/'
             }

           },
               {
             callButton: {
               displayText: 'Telkomsel',
               phoneNumber: '+62 813-9049-2911'
             }
           },           
               {
             quickReplyButton: {
               displayText: 'Kembali Ke Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
