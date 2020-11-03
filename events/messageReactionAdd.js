require('../index.js');

module.exports = async (client, reaction, user) => {

	//ROLE ASSIGN
	const roleName = reaction.emoji.name;
	const role = reaction.message.guild.roles.cache.find(role=> role.name.toLowerCase() === roleName.toLowerCase());
	const member = reaction.message.guild.members.cache.find(member => member.id === user.id);
	const visitor = member.guild.roles.cache.find(r => r.name === 'Visitor');
	const roleAssign = client.channels.cache.find(ch => ch.name === 'role_assign');

	if (user.bot){
		return;
	}
	if (reaction.message.channel === roleAssign && role) {
		if (member.roles.cache.has(role.id)){
			reaction.message.channel.send('I cannot add you to a role that you already have. However, selecting it again will remove the role.')
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}});
			return;
		}
		if (member.displayName.startsWith('[') && reaction.message.embeds[0].title.includes('Set your primary region/platform')){
			reaction.message.channel.send('You may only select one **primary** platform, *if you need to change it, de-select __both emoji__, **THEN** select the correct emoji.*')
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}});
			return;
		}
		else {
			member.roles.add(role.id)
				.then(() => {
					if (role.name === 'XB_NA' || role.name === 'PC_NA') {
						member.setNickname(`[NA] ${member.displayName}`)
							.then(member.roles.remove(visitor));
					}
					if (role.name === 'XB_EU' || role.name === 'PC_EU') {
						member.setNickname(`[EU] ${member.displayName}`)
							.then(member.roles.remove(visitor));
					}
				})
				.then(() => reaction.message.channel.send(`**${member.displayName}** was added to the **${role.name}** role!`))
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}});
			return;
		}
	}
	if (!role || reaction.message.channel !== roleAssign) {
		return;
	}

};