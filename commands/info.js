const Discord = require('discord.js');

module.exports = {
	name: 'info',
	args: true,
	aliases: ['lookup', 'whois', 'user', 'check'],
	category: 'mod',
	description: 'Replies with information on the specified member.',
	usage: ['<@mention> `OR` <@role>'],
	async execute(message, args) {
		const user = message.mentions.users.first() || message.author;
		const member = message.mentions.members.first() || message.member;
		const role = message.mentions.roles.first();

		message.channel.send('Here is the user data you requested.');

		if (args[0] === user ) {
			const embed = new Discord.MessageEmbed()
				.setThumbnail(user.displayAvatarURL())
				.setColor('#CA170F')
				.addField('Full Username:', user.tag, true)
				.addField('User ID:', user.id, true)
				.addField('Account Created:', user.createdAt)
				.addField('Joined Server:', `${member.joinedAt}`, true)
				.addField('Online Status:', user.presence.status, true);
			return message.channel.send(embed);
		}
		if (args[0] === role) {
			const roleEmbed = new Discord.MessageEmbed()
				.setTitle(`Information on ${role}`)
				.setColor(role.color)
				.addField('Current Members', role.map(member => member.displayName.toString()).join(' **|** ') ? member : 'none');
			return message.channel.send(roleEmbed);
		}
	}
};

//INCOMPLETE, NEEDS WORK