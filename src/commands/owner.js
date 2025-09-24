module.exports = {
    name: 'owner',
    description: 'Informations du créateur',
    
    async execute(bot, msg, args) {
        const ownerInfo = `
👑 *MR PROBLÉMATIQUE - CRÉATEUR*

📞 *Contact:* wa.me/224620769837
🔐 *Code Pairing:* IBRA-2009
💎 *Statut:* Propriétaire du bot
🌍 *Pays:* Guinée

💼 *Services proposés:*
• Développement de bots WhatsApp
• Systèmes X-MD avancés
• Fonctionnalités bug sécurisées
• Support technique premium

💰 *Abonnement Premium:*
• Accès complet aux commandes bug
• Support prioritaire 24h/24
• Mises à jour exclusives
• Prix: 5€/mois

🔧 *Technologies utilisées:*
• WhatsApp Baileys MD
• Système multi-sessions
• Cryptage avancé
• Architecture X-MD

📋 *Pour devenir premium:*
Contactez-moi directement sur WhatsApp avec le message "PREMIUM X-MD"
        `.trim();

        await bot.sendMessage(msg.key.remoteJid, { 
            text: ownerInfo,
            footer: "PROBLÉMATIQUE X-MD - Contactez-moi pour toute question"
        });

        // Réaction spéciale pour la commande owner
        await bot.sendMessage(msg.key.remoteJid, {
            react: { text: "👑", key: msg.key }
        });
    }
};
