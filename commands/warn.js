const Discord = require('discord.js');

module.exports = {
	name: 'warn',
	category: 'mod',
	description: 'Warns the user mentioned.',
	examples: [ '<@member mention> spamming in general chat.' ],
	guildOnly: true,
	args: true,
	async execute(message, args){

		const taggedUser = message.mentions.members.first();
		const reason = args.slice(1).join(' ');

		const modEmbed = new Discord.MessageEmbed()
			.setTitle(`Member Warned: ${taggedUser.displayName}`)
			.setDescription('*' + taggedUser.user.tag + '*')
			.setThumbnail(taggedUser.user.displayAvatarURL())
			.setFooter(`USER ID: ${taggedUser.user.id}`)
			.setColor('#ff0000')
			.addFields([
				{ name: '__**Moderator:**__', value: message.member.displayName },
				{ name: '__**Reason for WARN:**__', value: reason }
			])
			.setTimestamp();

		const dmEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`You were \`WARNED\` in ${message.guild.name}`)
			.setColor('#ff0000')
			.setFooter('Note: Warnings are tracked, limit 3 total.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Kick Reason:**__', value: reason }
			])
			.setTimestamp();

		if (taggedUser.roles.cache.some(r => r.name === 'Osmium Court')) {
			await message.channel.send('You can\'t `WARN` MODs or higher.')
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({
							timeout: 10000
						});
					}
				});
			return;
		}
		if (taggedUser.user.bot) {
			message.channel.send('I refuse to `WARN` another `BOT` like myself, do your own bidding human.')
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}
				});
			return;
		} else {
                
			await taggedUser.send(dmEmbed)
				.catch(error => message.channel.send(`I was unable to notify the user because: ${error}`));
			message.react(':check:609822544438231043');
    
			const channel = message.guild.channels.cache.find(ch => ch.name === 'warnings');
			if (!channel) {
				return;
			} else
				channel.send(modEmbed).catch(console.error);
		}
	}
};