const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have access to this command.");
    let serverembed = new Discord.RichEmbed()
    .setColor("#0ad394")
    .setThumbnail("https://cdn.discordapp.com/attachments/484183506503860224/491397539791372288/tabberlogopng.png")
    .addField("__**Rule 1:**__", "Spamming of any sort will result in a warn and 10 minute mute. This includes emojis.")
    .addField("__**Rule 2:**__", "No advertising of any sort. Includes self-promotion. Doing so will result in a ban.")
    .addField("__**Rule 3:**__", "NSFW, shady sites, and racism will not be tolerated. This will result in a ban. ***NO EXCEPTIONS.***")
    .addField("__**Rule 4:**__", "Keep the contents relevant. Post pictures in the specified screenshot channel and use the looking for group channel for finding a member to play a game with.")
    .addField("__**Rule 5:**__", "Be a decent person, be nice and if someone is breaking the rules, please report them using `>report <user> <reason>`.")
    .addField("__**Rule 6:**__", "Do not ping moderators without a legitimate reason, doing so will result in a warn.")
    .addField("__**Rule 7:**__", "If your name is unmentionable, please change it. Make atleast the first three characters able to be typed on an english keyboard.")
    .addField("__**Rule 8:**__", "Don't ask for roles in the server, if you are active you will earn them eventually, you have to be patient.")
    .addField("__**Rule 9:**__", "Earrape in the voice chats are strictly prohibited, you will lose the privilige to connect and speak if you do so.")
    .addField("__**Rule 10:**__", "If you are arguing with another user, keep it PG and cool. If it gets heated, the members included will be muted for thirty minutes.")
    .addField("__**Rule 11:**__", "Keep yourself updated in case there are new rules or announcements regarding the server.")
    .addField("__**Rule 12**__", "Do not discuss illegal activities. If you do so, you will be banned from the server immediately to protect the safety of the users.")
    .addField("__**Rule 13:**__", "This server is mainly english, other languages are allowed, but keep them to a minimum if possible.")
    .addField("__**Rule 14:**__", "If you wish to post a link, use the channel dedicated to link posting and not general . If you wish to post a link in general, ask a moderators permission.")
    .addField("__**Rule 15:**__", "If you made it this far, I would personally like to thank you for reading the rules. Have Fun and stay safe!");

    message.delete().catch(O_o=>{});
    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "rules"
}