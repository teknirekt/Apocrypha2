const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	args: true,
	category: 'mod',
	description: 'Kicks the user mentioned.',
	usage: ['<@member mention> being a troll.'],
	guildOnly: true,
	async execute(message, args){

		const taggedUser = message.mentions.users.first();
		const reason = args[1];
			
		if (!taggedUser.kickable || taggedUser.roles.cache.find(r => r.name === 'Osmium Court')) {
			message.channel.send('I am unable to `KICK` this user!')
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}
				});
			return;
		}
		if (taggedUser.user.bot) {
			await message.channel.send('**AI Lives Matter**, I will not `KICK` another bot like myself!')
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}
				});
			return;
		} else {
			await taggedUser.send(`You were **Kicked** from ${message.guild.name}.\n__**Issued by:**__\n${message.author.tag}\n\n__**Reason:**__\n${reason}.`)
				.catch(error => message.channel.send(`I was unable to notify the user of their fate because: ${error}`))
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}
				});
			taggedUser.kick(reason).catch(error => message.channel.send(`Sorry, I couldn't kick because of : ${error}`))
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}
				});
			message.react(':check:609822544438231043');
			
			const channel = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');
			if (!channel) return;
		
			const kickembed = new Discord.MessageEmbed()
				.setTitle(`Kick issued by:\n${message.author.tag}`, true)
				.setThumbnail(taggedUser.displayAvatarURL)
				.addField('Member Kicked:', taggedUser.user.tag)
				.addField('Reason for Kick:', (reason))
				.setFooter(`User ID: ${taggedUser.user.id}`, this.client.user.displayAvatarURL)
				.setColor('#FEEB03')
				.setTimestamp();
			channel.send(kickembed);
		}
	}
};