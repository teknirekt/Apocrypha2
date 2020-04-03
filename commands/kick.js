const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	args: true,
	category: 'mod',
	description: 'Kicks the user mentioned.',
	usage: ['<@member mention> being a troll.'],
	guildOnly: true,
	async execute(message, args) {

		const taggedUser = message.mentions.members.first();
		const reason = args.slice(1).join(' ');

		const modEmbed = new Discord.MessageEmbed()
			.setTitle(`Member Kicked: ${taggedUser.displayName}`)
			.setDescription('*' + taggedUser.user.tag + '*')
			.setThumbnail(taggedUser.user.displayAvatarURL())
			.setFooter(`USER ID: ${taggedUser.user.id}`)
			.setColor('#ff7400')
			.addFields([
				{ name: '__**Moderator:**__', value: message.member.displayName },
				{ name: '__**Reason for KICK:**__', value: reason }
			])
			.setTimestamp();

		const dmEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`You were \`KICKED\` from ${message.guild.name}`)
			.setColor('#ff7400')
			.setFooter('Note: Visitors removed in this way can rejoin at any time.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Kick Reason:**__', value: reason }
			])
			.setTimestamp();

		const reportChannel = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');
		const errorChannel = message.member.guild.channels.cache.find(ch => ch.name === 'errorlog');

		if (!taggedUser.kickable || taggedUser.roles.cache.some(r => r.name ==='Osmium Court')) {
			message.channel.send(`I am unable to \`KICK\` ${taggedUser.displayName} from ${message.guild.name}!\n`)
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
			message.channel.send('I refuse to `KICK` another `BOT` like myself, do your own bidding human.')
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}
				});
			return;
		}
		await taggedUser.send(dmEmbed)
			.then(taggedUser.kick([reason])).catch(error => errorChannel.send(`I was unable to notify ${taggedUser.displayName} of the \`KICK\` due to: ${error}.`));
		if (!reportChannel) {
			return;
		} else
			reportChannel.send(modEmbed).catch(console.error);
	}
};