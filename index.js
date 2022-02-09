require('dotenv').config()

const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', (bot) => {
    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
});


client.on('messageCreate', message => {
	console.log(message.content);
    
    if(message.content === 'ping'){
        message.reply('pong!')
    }

});

/*
client.on('messageCreate', (message) => {
    
})
*/

client.login(process.env.TOKEN);