const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
    const invite = 'https://discord.gg/sX5hYpk'

    const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, 'https://cdn.discordapp.com/attachments/492897266437193749/492897408548601856/ServerLogo.png')
    .setColor("#0ad394")
    .setTitle('Server Invite Link.')
    .setTimestamp(message.createdAt)
    .setDescription(invite)
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Standard User"
  };
  
  exports.help = {
    name: "serverinvite",
    category: "System",
    description: "Posts the invite URL to the main server.",
    usage: "serverinvite"
  };