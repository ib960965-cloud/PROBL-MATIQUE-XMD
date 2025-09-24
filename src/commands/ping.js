module.exports = {
    name: 'ping',
    description: 'Test de vitesse',
    
    async execute(bot, msg, args) {
        const start = Date.now();
        await bot.sendMessage(msg.key.remoteJid, { text: '🏓 Pong!' });
        const latency = Date.now() - start;
        
        await bot.sendMessage(msg.key.remoteJid, {
            text: `⚡ *Latence:* ${latency}ms\n💾 *RAM:* ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB\n👑 *MR PROBLÉMATIQUE*`
        });
    }
};
