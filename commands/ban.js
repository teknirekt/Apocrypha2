const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	args: true,
	category: 'mod',
	description: 'Bans the user mentioned.',
	usage: ['<@member mention> Repeated offenses.'],
	guildOnly: true,
	async execute(message, args) {

		const taggedUser = message.mentions.members.first();
		const reason = args.slice(1).join(' ');

		const modEmbed = new Discord.MessageEmbed()
			.setTitle(`Member Banned: ${taggedUser.displayName}`)
			.setDescription('*' + taggedUser.user.tag + '*')
			.setThumbnail(taggedUser.user.displayAvatarURL())
			.setFooter(`USER ID: ${taggedUser.user.id}`)
			.setColor('#c70000')
			.addFields([
				{ name: '__**Moderator:**__', value: message.member.displayName },
				{ name: '__**Reason for BAN:**__', value: reason }
			])
			.setTimestamp();
        
		const dmEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`You were \`BANNED\` from ${message.guild.name}`)
			.setColor('#c70000')
			.setFooter('Note: Being banned takes something special, don\'t bother asking for reversal.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Reason for ban:**__', value: reason }
			])
			.setTimestamp();

		const reportChannel = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');
		const errorChannel = message.member.guild.channels.cache.find(ch => ch.name === 'errorlog');

		if (!taggedUser.bannable || taggedUser.roles.cache.some(r => r.name ==='Osmium Court')) {
			message.channel.send(`I am unable to \`BAN\` ${taggedUser.displayName} from ${message.guild.name}!\n`)
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
			message.channel.send('I refuse to `BAN` another `BOT` like myself, do your own bidding human.')
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000 });
					}
				});
			return;
		}
		await taggedUser.send(dmEmbed)
			.then(taggedUser.ban({ reason: reason })).catch(error => errorChannel.send(`I was unable to notify ${taggedUser.displayName} of the \`BAN\` due to: ${error}.`));
		if (!reportChannel) {
			return;
		} else
			reportChannel.send(modEmbed).catch(console.error);
	}
};