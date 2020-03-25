const Discord = require('discord.js');

module.exports = {
	name: 'modmail',
	args: true,
	aliases: ['report'],
	description: 'DM a message to all leadership members without notifying regular members.',
	usage: ['<everything after command is sent to leadership>'],
	category: 'general',
	guildOnly: false,
	async execute(message, args) {

		const text = args.join(' ');
		const live = message.client.guilds.cache.get('229275151437529088');
		const leadership = live.channels.cache.get('230069344778977290');

		const modmail = new Discord.MessageEmbed()
			.setTitle(`Modmail from: ${message.member.displayName}`)
			.setColor('#CA170F')
			.setThumbnail(message.author.avatarURL())
			.addFields([
				{ name: '__**Message:**__', value: text }
			])
			.setFooter('This message was sent through modmail.')
			.setTimestamp();
			

		if (message.channel.type === 'dm') {
			leadership.send(modmail);
			return message.reply('your message has been forwarded to leadership.');
		}
		if (message.channel.type === 'text' || message.channel.type === 'unknown') {
			leadership.send(modmail);
			message.channel.send('Report submitted to leadership, next time.. DM me please for privacy.')
				.then(message => { 
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}
				}).catch(console.error);
			return;
		}
	}
};

// UNFINISHED, NEEDS WORK DO NOT RELEASE