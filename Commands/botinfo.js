const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .setThumbnail(bicon)
    .setTitle("Bot Information")
    .addField("Bot Name", bot.user.username, true)
    .addField("Created On", bot.user.createdAt, true)
    .addField("Library", "discord.js", true)
    .addField("Node Version", "8.11.4", true)
    .addField("Discord.js Version", "11.4.2", true)
    .addField("Creator", "Tanner#7777", true)
    .setFooter(`${bot.user.username} | Bot's ID ${bot.user.id} |  Tanner#7777`);

    return message.channel.send(botembed);
};

module.exports.help = {
    name: "info"
}


