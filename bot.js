const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var tickle = "maybe";

var reply = [ "They aren't very ticklish", "Tickle till they die!", "They might pee themselves!"
];
var index = Math.floor(Math.random() * reply.length);
if (tickle == reply[index]);

client.on('ready', () => {
	  client.user.setGame(`on ${client.guilds.size} servers| /help`);
	console.log("Hyperion Has Launched Successfully!");
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 'member-log');
	if (!channel)return;
	channel.send(`Welcome to the family, ${member}`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.react("ðŸ‘");
	message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "avatar")) {
	message.react("ðŸ‘");
	let member = message.mentions.members.first();
	message.channel.send(message.author.avatarURL);
  }else
  if (message.content.startsWith(config.prefix + "tickle")){
	  let member = message.mentions.members.first();
	  message.channel.send(`${member} isn't very ticklish`);
  }else
  if (message.content.startsWith(config.prefix + "kick")){
	  message.react("ðŸ‘");
	  let member = message.mentions.members.first();
	  member.kick();
	  message.channel.send(`${member} has been removed`)
  }else
  if (message.content.startsWith(config.prefix + "help")){
  	message.react("ðŸ‘");
	message.author.send("/avatar - Sends the user's avatar");
	message.author.send("/tickle - Tickles a user");
	message.author.send("/kick - Kicks a user from your server");
  }else
  if (message.content.startsWith(config.prefix + "milkshake")){
	  message.react("ðŸ‘");
	message.channel.send("My milkshake brings all the boys to the yard!", {files: ["https://cdn.discordapp.com/attachments/316326775523246081/381912091017216023/image.gif"]});
}else
  if (message.content.startsWith(config.prefix + "add")) {
	  message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=388098567174225920&permissions=0&scope=bot");
  }
});
client.login(config.token);
