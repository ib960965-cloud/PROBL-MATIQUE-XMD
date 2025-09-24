const moment = require('moment');
const axios = require('axios');

module.exports = {
    name: 'menu',
    description: 'Menu principal avec image',
    
    async execute(bot, msg, args) {
        const jid = msg.key.remoteJid;
        const user = msg.pushName || 'Utilisateur';
        const prefix = global.prefix || '.';
        
        const menuText = `
👑 *MR PROBLÉMATIQUE*  
📞 *wa.me/224620769837*  
🔐 *IBRA-2009*

─────────────────╮
       ༒ MR PROBLÉMATIQUE ༒
╰─────────────────╯
╭─────────────────╮
│ Prefix : ${prefix}
│ Hello, ${user}  
│ Day : ${moment().format('dddd')}
│ Date : ${moment().format('DD/MM/YYYY')}
│ Version : v1
│ Plugins : 63
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
        `.trim();

        try {
            // Envoi de l'image avec le menu en caption
            const imageUrl = "https://files.catbox.moe/gzqbha.jpeg";
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const imageBuffer = Buffer.from(response.data);
            
            await bot.sendMessage(jid, {
                image: imageBuffer,
                caption: menuText,
                footer: "PROBLÉMATIQUE X-MD - Créé par MR PROBLÉMATIQUE"
            });
            
        } catch (error) {
            // Fallback texte si image échoue
            await bot.sendMessage(jid, { 
                text: menuText,
                footer: "PROBLÉMATIQUE X-MD - Créé par MR PROBLÉMATIQUE"
            });
        }

        // Réaction 🇬🇳
        await bot.sendMessage(jid, {
            react: { text: "🇬🇳", key: msg.key }
        });
    }
};
