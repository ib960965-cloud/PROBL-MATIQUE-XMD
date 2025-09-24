module.exports = {
    name: 'bug-menu',
    description: 'Menu des attaques bug',
    
    async execute(bot, msg, args) {
        const jid = msg.key.remoteJid;
        
        const bugMenu = `
╭──👾 𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 👾──╮
│                    │
│ 🏴‍☠️ *ATTACK MODE* 🏴‍☠️
│                    │
│ 🔴 .bulldozer 224xxx
│ ⚡ .protocol6 224xxx  
│ 💥 .protocol7 224xxx
│ 🌀 .guear5-crash 225xxx
│ 👑 .lord-crash 224xxx
│ 👁️ .rinnegan 224xxx
│ ⏳ .obito-delay 224xxx
│ 🔇 .silent-delay 224xxx
│ 🌪️ .mega-spam 224xxx
│ 👻 .ghost-crash 224xxx
│ 🏆 .spm 224xxx *[PREMIUM]*
│                    │
│ 💡 *Usage: .commande 22412345678*
│ 🔒 *VIP: wa.me/224620769837*
│ 👑 *MR PROBLÉMATIQUE*
╰──────────────────╯
        `.trim();

        await bot.sendMessage(jid, { 
            text: bugMenu,
            footer: "PROBLÉMATIQUE X-MD - Bug System v1.0"
        });

        await bot.sendMessage(jid, {
            react: { text: "🇬🇳", key: msg.key }
        });
    }
};
