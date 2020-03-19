const Discord = require('discord.js');

module.exports = {
	name: 'kicklist',
	category: 'mod',
	description: 'Lists members on the chopping block.',
	guildOnly: true,
	async execute(message) {

		await message.guild.members.fetch().then(fetchedMembers => {
			const visitor = fetchedMembers.filter(member => member.roles.cache.some(r => r.name === 'Visitor'));
			const inactive = fetchedMembers.filter(member => member.roles.cache.some(r => r.name === 'INACTIVE'));
			const visitorList = visitor.map(member => member.displayName.toString()).join(', ');
			const inactiveList = inactive.map(member => member.displayName.toString()).join(', ');

			const kicklist = new Discord.MessageEmbed()
				.setTitle('The list of members in danger of removal.')
				.addFields([
					{ name: `__**Visitors**__ (${visitor.size})`, value: visitorList ? visitorList : 'All Clear!' },
					{ name: `__**Inactive Members**__ (${inactive.size})`, value: inactiveList ? inactiveList : 'All Clear!' }
				])
				.setColor('631B99');

			message.channel.send(kicklist).catch(console.error);
		});		
	}
};