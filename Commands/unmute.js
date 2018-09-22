const Discord = require("discord.js")
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have access to this command.");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("You did not specify a user mention or ID.");

    let role = message.guild.roles.find(r => r.name === "SADB Muted");

    await toMute.removeRole(role);
    message.channel.sendMessage("They have been successfully unmuted.");

    return;
}

module.exports.help = {
    name: "unmute"
}