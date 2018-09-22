const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

const botembed = new Discord.RichEmbed()
.setColor("#0ad394")
.setImage("https://i.ytimg.com/vi/eVFd46qABi0/hqdefault.jpg");

return message.channel.send(botembed);
}

module.exports.help = {
    name: "kek"
}
