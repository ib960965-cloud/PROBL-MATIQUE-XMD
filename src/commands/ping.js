module.exports = {
    name: 'ping',
    description: 'Test de vitesse du bot',
    
    async execute(bot, msg, args) {
        const jid = msg.key.remoteJid;
        const start = Date.now();
        
        // Premier message pour tester la latence
        await bot.sendMessage(jid, { text: '🏓 *Pong!*' });
        const latency = Date.now() - start;
        
        // Message détaillé avec statistiques
        const uptime = process.uptime();
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
        
        const statsText = `
⚡ *STATISTIQUES BOT*

📊 *Performance:*
• Latence: ${latency}ms
• Uptime: ${hours}h ${minutes}m ${seconds}s
• RAM: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB
• Platform: ${process.platform}

👑 *MR PROBLÉMATIQUE*
📞 wa.me/224620769837
        `.trim();

        await bot.sendMessage(jid, { 
            text: statsText,
            footer: "PROBLÉMATIQUE X-MD - System Monitor"
        });
    }
};
