require('dotenv').config()

const pool = require('./database')
const dias = ["","lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', (bot) => {
    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
});


client.on('messageCreate', async message => {
	const content = message.content
    const createdAt = message.createdAt
    const username = message.author.username

    if(content === 'on'){
        message.reply(
        `
            asistencia de entrada por: ${message.author}
            dia: ${dias[createdAt.getDay()]} 
            fecha:     ${createdAt.getDate()}/${createdAt.getMonth()+1}
            hora:       ${createdAt.getHours()}:${createdAt.getMinutes()}
        `)
        
        const asistente = {
            nombre_asistencia: username,
            entrada_asistencia: createdAt
        }

        await pool.query(`INSERT INTO asistencias SET ?`,[asistente])
    }
});

client.login(process.env.TOKEN);