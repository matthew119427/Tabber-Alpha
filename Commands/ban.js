const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.slice(1).join(" ") || "None";
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to use this command");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned.");
    message.channel.send(`<@${bUser.id}> ** with and ID of "${bUser.id}" has been banned.**`)

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "tabberlogs")
    if(!incidentchannel) return message.channel.send("Can't find tabberlogs channel, have you created one yet?");

    message.guild.member(bUser).ban(bReason);
    message.delete().catch(O_o=>{});
    incidentchannel.send(banEmbed);

    return;
}

module.exports.help = {
    name: "ban"
}