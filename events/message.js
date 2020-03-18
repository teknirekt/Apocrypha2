require('../index.js');
require('dotenv').config();
const Discord = require('discord.js');

module.exports = (client, message) => {
	const prefix = process.env.prefix;
	if (message.channel.name === 'rate_my_gear') {
		if (!message.attachments.size <= 0) {
			message.react(':exotic:609797640711962624')
				.then(() => message.react(':legendary:609797704423440575'))
				.then(() => message.react(':shard:610589696443154456'));
		}
	}
	if (message.channel.name === 'landing') {
		message.delete({
			timeout: 60000
		}).catch(error => console.log(error));
	}
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (message.channel.name !== 'landing' && message.channel.type === 'text') {
		if(!message.content.startsWith('-purge')) {
			message.delete({
				timeout: 5000
			}).catch(error => console.log(error));
		}
	}
	const cooldowns = new Discord.Collection();
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) ||
		client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
	if (command.category === 'mod' && !message.member.roles.cache.some(role => role.name === 'Osmium Court')) {
		message.channel.send(`${message.author}, that command can only be executed by Osmium Court Members.`)
			.then(message => {
				if (message.channel.name !== 'landing') {
					message.delete({ timeout: 10000 });
				}
			});
		return;
	}
	if (command.category === 'owner' && message.author.id !== '229060782065844224') {
		message.channel.send('Sorry, that command is exclusively for Teknirekt.')
			.then(message => {
				if (message.channel.name !== 'landing') {
					message.delete({ timeout: 10000 });
				}
			});
		return;
	}
	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('This command cannot be ran inside of a DM.');
	}
	if (command.args && !args.length) {
		let reply = `That command requires an argument, ${message.author}`;
		if (command.usage) {
			reply += `\nTry using: \`-${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}
				});
			return;
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Oops, an error occured. A DM has been sent to Teknirekt regarding this issue.');
	}
};