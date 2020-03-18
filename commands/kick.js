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
		taggedUser.kick(reason).catch(console.error);

		const reportChannel = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');

		if (!reportChannel) {
			return;
		}

		const modEmbed = new Discord.MessageEmbed()
			.setTitle(`Member Kicked: ${taggedUser.displayName}`)
			.setThumbnail(taggedUser.user.displayAvatarURL())
			.setFooter(`USER ID: ${taggedUser.user.id}`)
			.setColor('#ff7400')
			.addFields([
				{ name: '__**Moderator:**__', value: message.author.username },
				{ name: '__**Reason for KICK:**__', value: reason }
			])
			.setTimestamp();

		reportChannel.send(modEmbed).catch(console.error);
	}
};