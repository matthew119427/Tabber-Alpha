const Discord = require("discord.js")

module.exports.run = async (bot, message) => {
    let member = message.author
    let serverembed = new Discord.RichEmbed()
    .setColor("#0ad394")
    .setThumbnail("https://cdn.discordapp.com/attachments/484183506503860224/491397539791372288/tabberlogopng.png")
    .addField("__**Main**__", "Commands that are available to all members.")
    .addField("`>ping`", "Retrieves the ping, and API ping.")
    .addField("`>sysinfo`", "Retrieves the system info for the machine the bot is being run on.")
    .addField("`>serverinfo`", "Retrieves the info for the server.")
    .addField("`>report <user> <reason>`", "Reports a user in a server. Anyone can use this command.")
    .addField("`>whois`", "Gets info about yourself or a user mentioned.")
    .addField("`>botinvite`", "Sends a link to the invite link to the bot so you can have it in your server!")
    .addField("__**Moderation**__", "Commands that are available to moderators.")
    .addField("`>addrole <user> <rolename>`", "Adds a role to a specified user.")
    .addField("`>delrole <user> <rolename>`", "Removes a role to a specified user.")
    .addField("`>ban <user> <reason>`", "Bans the specified user. Mention the user or use their ID.")
    .addField("`>kick <user> <reason>`", "Kicks the specified user. Mention the user or use their ID.")
    .addField("`>mute <user>`", "Mutes a specified member.")
    .addField("`>unmute <user>`", "Unmutes a specified member.")
    .addField("`>warn <user> <reason>`", "Warns the user specified. CROSS SERVER.")
    .addField("`>clear <amount>`", "Clears the specified amount of messages.")
    .addField("`>say <message>`", "Sends a message in the channel that the command was used in.")
    .addField("`>warnlevel <user>`", "Finds the amount of warns the user has. CROSS SERVER.")
    .addField("`>rules`", "Sends a custom rule command geared toward the official Tabber discord server.")
    .addField("`>discipline`", "Sends a custom discipline command geared toward the official Tabber discord server.")
    .addField("__**Fun**__", "Commands that are available to everyone and are designated to entertainment.")
    .addField("`>kek`", "Sends a common meme used in discord emotes.")
    .setTimestamp(message.createdAt);

    message.delete().catch(O_o=>{});
    return member.send(serverembed);

}

module.exports.help = {
    name: "help"
}