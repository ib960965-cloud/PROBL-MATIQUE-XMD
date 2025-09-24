const { makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

// Configuration MR PROBLÉMATIQUE
const CONFIG = {
    CREATOR: "MR PROBLÉMATIQUE",
    BOT_NAME: "PROBLÉMATIQUE X-MD", 
    NUMERO_CREATOR: "224620769837",
    PREFIX: ".",
    VERSION: "1.0.0",
    BOT_IMAGE: "https://files.catbox.moe/gzqbha.jpeg"
};

console.log(chalk.red.bold(`
╔══════════════════════════════╗
║       PROBLÉMATIQUE X-MD     ║
║    Créé par : MR PROBLÉMATIQUE
║    Contact  : 224620769837    ║
║    Version  : 1.0.0           ║
╚══════════════════════════════╝
`));

class ProblemeXMD {
    constructor() {
        this.bot = null;
        this.startBot();
    }

    async startBot() {
        try {
            const { state, saveCreds } = await useMultiFileAuthState('./sessions');
            
            this.bot = makeWASocket({
                auth: state,
                printQRInTerminal: true,
                logger: { level: 'silent' }
            });

            this.setupEvents(saveCreds);
            
        } catch (error) {
            console.error('Erreur démarrage:', error);
        }
    }

    setupEvents(saveCreds) {
        this.bot.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect, qr } = update;
            
            if (qr) {
                console.log(chalk.yellow('🔐 Scannez le QR Code avec WhatsApp'));
                qrcode.generate(qr, { small: true });
            }

            if (connection === 'open') {
                console.log(chalk.green('✅ Bot connecté avec succès!'));
                this.sendWelcomeMessage();
            }
        });

        this.bot.ev.on('messages.upsert', this.handleMessage.bind(this));
        this.bot.ev.on('creds.update', saveCreds);
    }

    async handleMessage({ messages }) {
        const msg = messages[0];
        if (!msg?.message) return;

        const messageText = this.getMessageText(msg);
        if (!messageText?.startsWith(CONFIG.PREFIX)) return;

        const [command, ...args] = messageText.slice(1).split(' ');
        
        // Chargement dynamique des commandes
        try {
            const commandHandler = require(`../commands/${command}.js`);
            await commandHandler.execute(this.bot, msg, args);
        } catch (error) {
            console.log('Commande non trouvée:', command);
        }
    }

    getMessageText(msg) {
        return msg.message.conversation || 
               msg.message.extendedTextMessage?.text ||
               msg.message.imageMessage?.caption;
    }

    async sendWelcomeMessage() {
        await this.bot.sendMessage(this.bot.user.id, {
            image: { url: CONFIG.BOT_IMAGE },
            caption: `┏─『PROBLÉMATIQUE 𝐌𝐄𝐍𝐔』─┓
│                      │
┗─────────────────────┛

╭─❍ 𝐈𝐍𝐅𝐎𝐒 𝐁𝐎𝐓
│ • 𝐁𝐨𝐭 : PROBLÈMATIQUE 𝐗𝐌𝐃
│ • 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : *1.0.0*
│ • 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 🌹 MR PROBLÈMATIQUE 🌹
│ • 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : wa.me/224620769837
│ • 𝐏𝐫𝐞𝐟𝐢𝐱 : ${CONFIG.PREFIX}
╰────────────────`
        });
    }
}

// Démarrage
new ProblemeXMD();
