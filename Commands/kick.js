const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.slice(1).join(" ") || "None";
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to use this command");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked.");
    message.channel.send(`<@${kUser.id}> ** with and ID of "${kUser.id}" has been kicked.**`)

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "tabberlogs")
    if(!kickChannel) return message.channel.send("Can't find tabberlogs channel, have you created one yet?");


    message.guild.member(kUser).kick(kReason);
    message.delete().catch(O_o=>{});
    kickChannel.send(kickEmbed);
    
    
    return;
}

module.exports.help = {
    name: "kick"
}