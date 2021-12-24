const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('bot is online'));

app.listen(port, () => console.log(`http://localhost:${port}`));
//bot
const Discord  = require('discord.js');
const token = '';
const bot = new Discord.Client();
//prefix
const prefix = 'w/';
//bot online event
bot.on('ready', () => {

    console.log("bot is online(press ^C to restart or close)");
    bot.user.setActivity("w/help | Walkie Talkie")
})
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ")
    
    if (message.content.startsWith(prefix)) {
        if (args[0] === "help") {
            let help = new Discord.MessageEmbed()
            .setTitle("help commands:")
            .addField("info:", "w/info")
            message.channel.send(help)
        }
        if (args[0] === "info") {
            let info = new Discord.MessageEmbed()
            .setTitle("server info:")
            .addField("Invite", "https://discord.gg/VjaBwApN")
            .addField("server stats:", "All members: 32")
            .addField("server Owner", "NOOB DOG")
            .addField("bot stats:", "supported by: nodejs v16.13.1 LTS \n programmed with: discord JS v12.5.3 \n created by: PC_baz")
            message.channel.send(info)

        }
    }
})

//bot login verify
bot.login(token)