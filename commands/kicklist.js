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
			const hiatus = fetchedMembers.filter(member => member.roles.cache.some(r => r.name === 'HIATUS'));
			const missed = fetchedMembers.filter(member => member.roles.cache.some(r => r.name === 'RΞDΛCTΞD') && !member.roles.cache.some(r => r.name === 'IronWolves'));
			const left = fetchedMembers.filter(member => member.roles.cache.some(r => r.name === 'IronWolves') && !member.roles.cache.some(r => r.name === 'RΞDΛCTΞD'));
			const visitorList = visitor.map(member => member.user.toString()).join(', ');
			const inactiveList = inactive.map(member => member.user.toString()).join(', ');
			const hiatusList = hiatus.map(member => member.user.toString()).join(', ');
			const missedList = missed.map(member => member.user.toString()).join(', ');
			const leftList = left.map(member => member.user.toString()).join(', ');

			const kicklist = new Discord.MessageEmbed()
				.setTitle('The list of members in each category.')
				.addFields([
					{ name: `__**Discord Visitors**__ (${visitor.size})`, value: visitorList ? visitorList : 'No visitors remain.' },
					{ name: `__**Inactive Members**__ (${inactive.size})`, value: inactiveList ? inactiveList : 'Everyone is active.' },
					{ name: `__**On Hiatus**__ (${hiatus.size})`, value: hiatusList ? hiatusList : 'None are on hiatus.' },
					{ name: `__**Left the Community**__ (${left.size})`, value: leftList ? leftList : 'Everyone is a member.' },
					{ name: `__**Needs Roles Reviewed**__ (${missed.size})`, value: missedList ? missedList : 'All roles appear correct.' }
				])
				.setColor('631B99');

			message.channel.send(kicklist).catch(console.error);
		});		
	}
};