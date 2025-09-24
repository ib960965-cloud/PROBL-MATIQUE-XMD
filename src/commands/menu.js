const moment = require('moment');

module.exports = {
    name: 'menu',
    description: 'Menu principal complet',
    
    async execute(bot, msg, args) {
        const jid = msg.key.remoteJid;
        const user = msg.pushName || 'Utilisateur';
        const prefix = global.prefix || '.';
        
        const menuText = `
─────────────────╮
       ༒ MR PROBLÉMATIQUE ༒
╰─────────────────╯
╭─────────────────╮
│ Prefix : ${prefix}
│ Hello, ${user}  
│ Day : ${moment().format('dddd')}
│ Date : ${moment().format('DD/MM/YYYY')}
│ Version : v1
│ Plugins : 59
│ Type : X-MD        
╰─────────────────╯

╭──[ ✨ MENUS ✨ ]─────╮
│
│ ⇛ menu
│ ⇛ prem-menu
│ ⇛ bug-menu
╰─────────────────╯

╭──[ 📃 UTILS 📃 ]──────╮
│ 
│ ⇛ ping
│ ⇛ getid
│ ⇛ sudo
│ ⇛ tourl
│ ⇛ owner    
│ ⇛ fancy   
│ ⇛ update
│ ⇛ device 
│ ⇛ delsudo
│ ⇛ getsudo    
╰─────────────────╯

╭──[ 🔎 CONFIG 🔎 ]─────╮
│
│ ⇛ online
│ ⇛ welcome
│ ⇛ autotype
│ ⇛ autoreact
│ ⇛ setprefix
│ ⇛ getconfig
│ ⇛ statuslike 
╰─────────────────╯

╭──[ ✘ GROUP ✘ ]─────╮
│
│ ⇛ bye
│ ⇛ kick
│ ⇛ purge        
│ ⇛ mute
│ ⇛ unmute
│ ⇛ promote
│ ⇛ demote
│ ⇛ gclink      
│ ⇛ antilink
│ ⇛ kickall
│ ⇛ promoteall
│ ⇛ demoteall
╰─────────────────╯

╭──[ 💾 MEDIA 💾 ]─────╮
│
│ ⇛ vv 
│ ⇛ take  
│ ⇛ save 
│ ⇛ photo
│ ⇛ setpp
│ ⇛ getpp
│ ⇛ toaudio
│ ⇛ sticker
╰─────────────────╯

╭──[ ♫ DOWNLOADER ♫ ]──╮
│ 
│ ⇛ img
│ ⇛ play
│ ⇛ tiktok
╰─────────────────╯

╭──[ 📣 TAGS 📣 ]──────╮
│
│ ⇛ tag
│ ⇛ tagadmin
│ ⇛ tagall
╰─────────────────╯

👑 *Créé par MR PROBLÉMATIQUE*
📞 *Contact : wa.me/224620769837*
        `.trim();

        await bot.sendMessage(jid, { 
            text: menuText,
            footer: "PROBLÉMATIQUE X-MD - Tous droits réservés"
        });

        // Réaction 🇬🇳
        await bot.sendMessage(jid, {
            react: { text: "🇬🇳", key: msg.key }
        });
    }
};
