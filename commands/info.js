const Discord = require('discord.js');

module.exports = {
	name: 'info',
	args: true,
	aliases: ['lookup', 'whois', 'user', 'check'],
	category: 'mod',
	description: 'Replies with information on the specified member.',
	usage: ['<@mention> `OR` <@role>'],
	async execute(message, args) {

		const member = message.mentions.members.first() || message.author;
		const role = message.mentions.roles.first();

		message.channel.send('Here is the user data you requested.');

		if (args[0] === member ) {
			const embed = new Discord.MessageEmbed()
				.setThumbnail(member.user.displayAvatarURL())
				.setColor('#CA170F')
				.addField('Full Username:', member.user.tag, true)
				.addField('User ID:', member.user.id, true)
				.addField('Account Created:', member.user.createdAt)
				.addField('Joined Server:', `${member.joinedAt}`, true)
				.addField('Online Status:', member.user.presence.status, true);
			message.channel.send(embed);
			return;
		}
		if (args[0] === role) {
			const roleEmbed = new Discord.MessageEmbed()
				.setTitle(`Information on ${role}`)
				.setColor(role.color)
				.addField('Current Members', role.map(member => member.displayName.toString()).join(' **|** ') ? member : 'none');
			message.channel.send(roleEmbed);
			return;
		}
	}
};

//INCOMPLETE, NEEDS WORK