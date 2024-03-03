require('dotenv').config()
const { Client, Guild } =  require("discord.js");
const PREFIX = "!!"; // Prefix d'une commande
const score = [];

const client = new Client({
    intents: ["Guilds","GuildMessages","MessageContent","GuildMessageReactions"]
});

client.on("ready",() => {
    client.user.setPresence({
        activities: [{
            name: "Compteur de potatoes"
        }],
        status :"dnd"
    });
    console.log(`Connecté comme ${client.user.tag}`);
})

// Command Part 
client.on("messageCreate", async message => {
    if(message.member.id === '186483704325996544' && message.content.startsWith(PREFIX)){
        const input = message.content.slice(PREFIX.length)

    }
    if(message.member.id !== client.user.id && message.content.startsWith(PREFIX)){
        const input = message.content.slice(PREFIX.length)
        console.log(message.content)
    };

})

// Approval part
client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.emoji.name === "✅" && user.id === '186483704325996544') {
        const key = reaction.message.content.trim().split(",")
        for(let i = 0; i < key; i++){
            
        }
    }
});

client.login(process.env.DISCORD_KEY);