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
		if (role.name === 'XB1_NA' || role.name === 'PC_NA') {
			member.setNickname(`${member.user.username}`).then(member.roles.add(visitor))
				.then(member.roles.remove(role.id))
				.then(() => reaction.message.channel.send(`**${member.displayName}**, you have been removed from the **${role.name}** role!`))
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}});
			return;
		}
		if (role.name === 'XB1_EU' || role.name === 'PC_EU') {
			member.setNickName(`${member.user.username}`).then(member.roles.add(visitor))
				.then(member.roles.remove(role.id))
				.then(() => reaction.message.channel.send(`**${member.displayName}**, you have been removed from the **${role.name}** role!`))
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}});
			return;
		} else
			member.roles.remove(role.id)
				.then(() => reaction.message.channel.send(`**${member.displayName}**, you have been removed from the **${role.name}** role!`))
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}});
		return;
	}

	// //SIGNUP SHEETS
	// const normal = this.client.guilds.get('608709068776931328').emojis.get('623938733384663051');
	// const heroic = this.client.guilds.get('608709068776931328').emojis.get('623938737021386762');
	// const sherpa = this.client.guilds.get('608709068776931328').emojis.get('623938733431062528');
	// const heroiclist = heroic.reaction.message.members.map(m => m.displayName).join('  **|**  ');
	// const normallist = normal.reaction.message.members.map(m => m.displayName).join('  **|**  ');
	// const sherpalist = sherpa.reaction.message.members.map(m => m.displayName).join('  **|**  ');
    
	// const whisper = new RichEmbed()
	// .setTitle('Whisper of the Worm')
	// .setImage('https://i.ibb.co/52DTqWf/whisper.png')
	// .addField('<:normal:623938733384663051> Normal Mode', normallist ? normallist : 'none', true)
	// .addField('<:heroic:623938737021386762> Heroic Mode', heroiclist ? heroiclist : 'none', true)
	// .addField('<:sherpa:623938733431062528> Willing Sherpas', sherpalist ? sherpalist : 'none', false)
	// .addFooter('Respond with the correct emoji to sign-up.');
    
	// if (reaction.message.embeds[0].title.includes('Whisper of the Worm')) {
	//     reaction.message.edit({ embed: whisper });
	//     return;
	// }
};