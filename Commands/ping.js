const Discord = require("discord.js");
const talkedRecently = new Set();
exports.run = async (client, message) => {
  if (talkedRecently.has(message.author.id) && !message.member.roles.has("490364533550874644")) {

    message.channel.send("You are being rate limited!" + message.author);
  } else { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Loading...");
  const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .addField("• Ping Latency", `${msg.createdTimestamp - message.createdTimestamp}ms`, true)
    .addField("• API Latency", `${Math.round(client.ping)}ms`, true)
    .setFooter(`${client.user.username} | Tanner#7777`);
  msg.edit(embed);
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
  }, 2000);
};
}

module.exports.help = {
    name:"ping"
}