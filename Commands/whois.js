
const Discord = require("discord.js");
const talkedRecently = new Set();
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};
exports.run = async (client, message, args, level) => {
  if (talkedRecently.has(message.author.id) && !message.member.roles.has("490364533550874644")) {

    message.channel.send("Too fast!" + message.author);
  } else {
  if (message.mentions.users.first())
    try {
      level = client.permlevel(message.mentions.users.first().lastMessage);
    } catch (e) {
      level = 0;
    }
  const msg = await message.channel.send("Loading...");
  try {
    const botuser = message.mentions.users.first() ? message.guild.members.get(message.mentions.users.first().id) : message.member;
    const tan = message.mentions.users.first() ? message.guild.members.get(message.mentions.users.first().id).roles.sort((a, b) => b.position - a.position).map(i => i.id).slice(0, -1) : message.member.roles.sort((a, b) => b.position - a.position).map(i => i.id).slice(0, -1);
    let bot = "";
    let tabBer = "";
    for (let i = 0; i < tan.length; i++) {
      tabBer += "<@&" + tan[i] + ">";
      if (tan.length != (i + 1)) tabBer += ", ";
    }
    if (botuser.user.bot === true) {
      bot = "Yes";
    } else {
      bot = "No";
    }

    const embed = new Discord.RichEmbed()
      .setAuthor(botuser.displayName, botuser.user.avatarURL)
      .setThumbnail(botuser.user.avatarURL)
      .setColor("#0ad394")
      .setTimestamp(message.createdAt)
      .addField("Created Account At", `${botuser.user.createdAt}`, true)
      .addField("Joined Server At", `${botuser.joinedAt}`, true)
      .addField("Status", `${status[botuser.user.presence.status]}`, true)
      .addField("Roles", `${tabBer}`, true)
      .setFooter(`${client.user.username} | ID ${botuser.id} |  Tanner#7777`);
    if (bot == "Yes") {
      embed.addField("Bot", `${bot}`, true)
    }
    msg.edit(embed);
  } catch (err) {
    msg.edit("Error." +
      err);
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
  }, 2000);
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["userinfo"],
  permLevel: "Standard User"
};

exports.help = {
  name: "whois",
};