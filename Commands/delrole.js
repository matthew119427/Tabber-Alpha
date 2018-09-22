const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //usage: ta?addrole @user (role)
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You cannot use this command.");
    let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user.");
    let role = args.slice(1).join(" ");
    if(!role) return message.reply("Specify a role.");
    let gRole = message.guild.roles.find(r => r.name.toLowerCase() === `${role}`);
    if(!gRole) return message.reply("Couldn't find that role.");

    if(rMember.roles.has(gRole)) return message.reply("They don't have the role");
    await rMember.removeRole(gRole);

        message.channel.send(`<@${rMember.id}> has had the "${gRole.name}" role removed.`)
        message.delete().catch(O_o=>{});
}

module.exports.help = {
    name: "delrole"
}