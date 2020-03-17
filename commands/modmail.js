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

		const { text } = args;
		const leadership = message.member.guild.channels.cache.find(ch => ch.name === 'leadership');
		if (message.channel.type === 'dm') {
			const modmail = new Discord.MessageEmbed()
				.setTitle(`Modmail from: ${message.member.displayName}`)
				.setColor('#CA170F')
				.setThumbnail(`${message.author.avatarURL}`)
				.addFields({ name: '__**Message:**__', value: text })
				.setFooter('This message was sent through modmail.', this.client.user.displayAvatarURL)
				.setTimestamp();
			leadership.send(modmail);
			return message.reply('Message forwarded to leadership.');
		}
	}
};

// UNFINISHED, NEEDS WORK DO NOT RELEASE