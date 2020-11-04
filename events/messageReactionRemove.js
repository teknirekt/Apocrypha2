require('../index.js');

module.exports = async (client, reaction, user) => {

	const roleName = reaction.emoji.name;
	const role = reaction.message.guild.roles.cache.find(role=> role.name.toLowerCase() === roleName.toLowerCase());
	const member = reaction.message.guild.members.cache.find(member => member.id === user.id);
	const visitor = member.guild.roles.cache.find(r => r.name === 'Visitor');
    
	if (user.bot){
		return;
	}
	if (!role) {
		return;
	}
	if (!member.roles.cache.has(role.id)){
		return;
	}
	else { 
		if (role.name === 'XB_NA' || role.name === 'PC_NA') {
			member.setNickname(`${member.user.username}`).then(member.roles.add(visitor))
				.then(member.roles.remove(role.id))
				.then(() => reaction.message.channel.send(`**${member.displayName}**, you have been removed from the **${role.name}** role!`))
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 30000 });
					}});
			return;
		}
		if (role.name === 'XB_EU' || role.name === 'PC_EU') {
			member.setNickname(`${member.user.username}`).then(member.roles.add(visitor))
				.then(member.roles.remove(role.id))
				.then(() => reaction.message.channel.send(`**${member.displayName}**, you have been removed from the **${role.name}** role!`))
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 30000 });
					}});
			return;
		} else
			member.roles.remove(role.id)
				.then(() => reaction.message.channel.send(`**${member.displayName}**, you have been removed from the **${role.name}** role!`))
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 30000 });
					}});
		return;
	}
};