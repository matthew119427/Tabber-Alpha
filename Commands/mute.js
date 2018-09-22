const Discord = require("discord.js")
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have access to this command.");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("You did not specify a user mention or ID.");

    if(toMute.id === message.author.id) return message.channel.sendMessage("You cannot mute yourself.");
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot mute a member that is higher than you on the role hierarchy.");

    let role = message.guild.roles.find(r => r.name === "SADB Muted");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name:"SADB Muted",
                color:"#000000",
                permissions: []
            });

            message.guild.channels.forEach(async(channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }

    if(toMute.roles.has(role.id)) return message.channel.sendMessage("This user is already muted.");

    await toMute.addRole(role);
    message.channel.sendMessage("They have been successfully muted.");

    return;
    }

module.exports.help = {
    name: "mute"
}