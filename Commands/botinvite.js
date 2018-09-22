const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .setTitle("Bot Invite Link.")
    .addField("Link", "https://discordapp.com/api/oauth2/authorize?client_id=490695472365699092&permissions=2146958839&scope=bot")
    .addField('Admin', 'If you would like me to have admin permissions, go into your role hierarchy on your server, go to Tabber Alpha, and flip the "Administrator" switch.')
    .setFooter(`${bot.user.username} | Bot's ID ${bot.user.id} |  Tanner#7777`);

    return message.channel.send(botembed);
};

module.exports.help = {
    name: "botinvite"
}