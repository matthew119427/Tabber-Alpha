const os = require('os')
exports.run = async (client, message, args, level) => { 
if(message.author.id !== "193118227348324363") return;
  const code = args.join(" ");
  try {
    const evaled = eval(code);
    const clean = await (client, evaled);
    message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${await (client, err)}\n\`\`\``);
  }
};


exports.help = {
    name: "eval"
}