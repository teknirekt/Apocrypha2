require('../index.js');

module.exports = async (client, reaction, user) => {

	//ROLE ASSIGN
	const roleName = reaction.emoji.name;
	const role = reaction.message.guild.roles.cache.find(role=> role.name.toLowerCase() === roleName.toLowerCase());
	const member = reaction.message.guild.members.cache.find(member => member.id === user.id);
	const visitor = member.guild.roles.cache.find(r => r.name === 'Visitor');
	const gamesdiv = member.guild.roles.cache.find(r => r.name === '=====|[ Misc. Games Played ]|=====');
	const d2div = member.guild.roles.cache.find(r => r.name === '=====|[ Destiny 2 LFG Roles ]|=====');

	if (user.bot){
		return;
	}
	if (role) {
		if (member.roles.cache.has(role.id)){
			reaction.message.channel.send('I cannot add you to a role that you already have. However, selecting it again will remove the role.')
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}});
			return;
		}
		if (member.displayName.startsWith('[') && reaction.message.embeds[0].title.includes('__Supported Regions/Platforms__')){
			reaction.message.channel.send('You may only select one **primary** platform, *if you need to change it, re-select the incorrect one THEN select the correct emoji.*')
				.then(message => {
					if (reaction.message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}});
			return;
		}
		else {
			member.roles.add(role.id)
				.then(() => {
					if (role.name === 'XB1_NA' || role.name === 'PC_NA') {
						member.setNickname(`[NA] ${member.displayName}`)
							.then(member.roles.remove(visitor));
					}
					if (role.name === 'XB1_EU' || role.name === 'PC_EU') {
						member.setNickName(`[EU] ${member.displayName}`)
							.then(member.roles.remove(visitor));
					}
					if (reaction.message.embeds[0].title.includes('__Available Destiny 2 LFG Roles__')) {
						member.roles.add(d2div);
					}
					if (reaction.message.embeds[0].title.includes('__Currently Available Game Roles__')) {
						member.roles.add(gamesdiv);
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
	if (!role) {
		return;
	}

	//SIGNUP SHEETS
	// const normal = this.client.guilds.get('608709068776931328').emojis.get('623938733384663051');
	// const heroic = this.client.guilds.get('608709068776931328').emojis.get('623938737021386762');
	// const sherpa = this.client.guilds.get('608709068776931328').emojis.get('623938733431062528');
	// const heroiclist = heroic.reaction.message.members.map(m => m.displayName).join('  **|**  ');
	// const normallist = normal.reaction.message.members.map(m => m.displayName).join('  **|**  ');
	// const sherpalist = sherpa.reaction.message.members.map(m => m.displayName).join('  **|**  ');

	// const whisper = new RichEmbed()
	// .setTitle('Signup Sheet:')
	// .setDescription('Whisper of the Worm')
	// .setImage('https://i.ibb.co/52DTqWf/whisper.png')
	// .addField('<:normal:623938733384663051> Normal Mode', normallist ? normallist : 'none', true)
	// .addField('<:heroic:623938737021386762> Heroic Mode', heroiclist ? heroiclist : 'none', true)
	// .addField('<:sherpa:623938733431062528> Willing Sherpas', sherpalist ? sherpalist : 'none', false)
	// .addFooter('Respond with the correct emoji to sign-up.');

	// if (reaction.message.embeds[0].title.includes('Signup Sheet')) {
	//     reaction.message.edit();
	//     return;
	// }
};


// UNFINISHED, NEEDS WORK. USE MESSAGE.EDIT TO BUILD SIGNUPS