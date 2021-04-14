const Discord = require("discord.js");

const bot = new Discord.Client;

bot.login("process.env.TOKEN");

bot.on("ready", async () => {
    bot.user.setStatus("dnd");
    setTimeout(() => {
        bot.user.setActivity("Mp pour pour passer commande | COMMISSIONS ON");
    }, 100)
});

bot.on("message", async message => {

    if(message.channel.type === "dm"){
        channel = bot.channels.cache.get('831944520428945458').send("Ticket de" + " <@" + message.author + ">." + "\n\r" + message.content);
    }
})