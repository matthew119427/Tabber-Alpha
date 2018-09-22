const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    //ta?warn @user (reason)

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have access to this command.");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("Could not find the member specified.")
if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("That member cannot be warned.");
let reason = args.join(" ").slice(23);
message.channel.send(`<@${wUser.id}> ** with and ID of "${wUser.id}", has been warned.**`)

if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
};

warns[wUser.id].warns++;

fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

let warnEmbed = new Discord.RichEmbed()
.setDescription("Warns")
.setAuthor(message.author.username)
.setColor("#0ad394")
.addField("Warned User", `<@${wUser.id}>`)
.addField("Warned In", message.channel)
.addField("Number of Warnings", warns[wUser.id].warns)
.addField("Reason", reason);

let warnchannel = message.guild.channels.find(`name`, "tabberlogs");
if(!warnchannel) return message.reply("Couldn't find channel");

warnchannel.send(warnEmbed);
message.delete().catch(O_o=>{});
}


module.exports.help = {
    name:"warn"
}