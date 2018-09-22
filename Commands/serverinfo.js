const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    function checkBots(guild) {
        let botCount = 0; 
        guild.members.forEach(member => { 
          if(member.user.bot) botCount++; 
        });
        return botCount; 
      }
      function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++; 
        });
        return memberCount;
      }
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .setThumbnail(sicon)
    .addField('Owner', message.guild.owner, true)
    .addField("Name", message.guild.name, true)
    .addField("Created", message.guild.createdAt)
    .addField("Joined", message.member.joinedAt)
    .addField('Region', message.guild.region, true)
    .addField('Channels:', message.guild.channels.size, true)
    .addField('Roles', `${message.guild.roles.size}`, true)
    .addField("Members", message.guild.memberCount, true)
    .addField('Humans', checkMembers(message.guild), true)
    .addField('Bots', checkBots(message.guild), true)
    .setFooter(`${bot.user.username} | ID ${message.guild.id} |  Tanner#7777`);

    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverinfo"
}