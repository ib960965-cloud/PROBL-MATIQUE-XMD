module.exports = {
    name: 'prem-menu',
    description: 'Menu premium',
    
    async execute(bot, msg, args) {
        const premiumMenu = `
╭──🏆 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐄𝐍𝐔 🏆──╮
│                       │
│ 💎 *FONCTIONS EXCLUSIVES* 💎
│                       │
│ ✅ Accès complet bug-menu
│ ⚡ Commandes illimitées  
│ 💥 Support prioritaire
│ 🌀 Mises à jour avancées
│ 🔓 Système multi-sessions
│ 📊 Statistiques détaillées
│                       │
│ 💳 *ABONNEMENT PREMIUM*
│ • Prix: 5€/mois
│ • Paiement: Mobile Money
│ • Activation: Immédiate
│                       │
│ 📞 *CONTACT:*
│ wa.me/224620769837
│ 👑 MR PROBLÉMATIQUE
│                       │
│ 💡 *Message type:*
│ "Je souhaite devenir premium"
╰─────────────────────╯
        `.trim();

        await bot.sendMessage(msg.key.remoteJid, { 
            text: premiumMenu,
            footer: "PROBLÉMATIQUE X-MD - Devenez premium dès maintenant!"
        });

        // Réaction 💎 pour premium
        await bot.sendMessage(msg.key.remoteJid, {
            react: { text: "💎", key: msg.key }
        });
    }
};
