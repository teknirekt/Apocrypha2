
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	category: 'general',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			
			data.push('Here\'s a list of all my commands:\n');
			data.push('> **__Available General Commands__**', commands.filter(command => command.category === 'general').map(command => command.name).join(' **|** '));
			data.push('\n');
			data.push('> **__Available Extra Commands__**', commands.filter(command => command.category === 'extra').map(command => command.name).join(' **|** '));
			data.push('\n');
			if (message.member.roles.cache.some(r => r.name === 'Osmium Court')) data.push('> **__Moderator Commands__**', commands.filter(command => command.category === 'mod').map(command => command.name).join(' **|** '));
			data.push('\nYou can send `-help [command name]` to get info on a specific command!');

			return message.author.send(data, {
				split: true
			})
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				}).catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('It seems like I can\'t DM you, do you have DMs disabled?');
				});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('That\'s not a valid command!');
		}
		data.push(`**__Command Name:__** ${command.name}`);
		if (command.aliases) data.push(`**Available Aliases:** ${command.aliases.join(', ')}`);
		if (command.category) data.push(`**Command Category:** ${command.category}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Command Usage:** -${command.name} ${command.usage}`);
		data.push(`**Cooldown Period:** ${command.cooldown || 3} second(s)`);
		message.channel.send(data, {
			split: true
		});
	},
};