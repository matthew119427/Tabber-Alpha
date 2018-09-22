const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
 const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`)
    .setColor(message.member.displayColor)
    .addField("• Uptime", `${duration}`, true)
    .addField("• Ping", `${Math.round(client.ping)}ms`, true)
    .addField("• Ping Ratings", `${bot.pings}`, true)
    .setFooter(`${bot.user.username} | Tanner#7777`); 
    message.channel.send(embed)
    }
    
    module.exports.help = {
    name: "uptime"
}
