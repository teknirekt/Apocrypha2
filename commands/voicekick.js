const Discord = require('discord.js');

module.exports = {
	name: 'voicekick',
	category: 'mod',
	aliases: ['voice', 'vcremove', 'notalk'],
	description: 'Kicks the user mentioned from voice chat, with supplied reason.',
	usage: [ '<@membermention> ear cancer.'],
	guildOnly: true,
	args: true,
	async execute(message, args){

		const taggedUser = message.mentions.members.first();
		const reason = args.slice(1).join(' ');

		const dmEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`You were removed from \`VOICE\` in ${message.guild.name}`)
			.setColor('#3E1453')
			.setFooter('Note: If the reason is unclear - speak to the MOD.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Mute Reason:**__', value: reason }
			])
			.setTimestamp();

		if (!taggedUser.voice.channel) {
			message.channel.send('That tagged member isn\'t in a voice channel.')
				.then(message => {
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 10000	});
					}
				});
			return;
		}

		await taggedUser.send(dmEmbed)
			.catch(error => message.channel.send(`I was unable to notify ${taggedUser.displayName} of their fate because of this error: ${error}`));
		await taggedUser.voice.setChannel(null)
			.then(message.react(':check:609822544438231043'));

		const channel = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');
		if(!channel) {
			return;
		}
		const modEmbed = new Discord.MessageEmbed()
			.setTitle(`Member Kicked from Voice: ${taggedUser.displayName}`)
			.setDescription('*' + taggedUser.user.tag + '*')
			.setThumbnail(taggedUser.user.displayAvatarURL())
			.setFooter(`USER ID: ${taggedUser.user.id}`)
			.setColor('#00d60e')
			.addFields([
				{ name: '__**Moderator:**__', value: message.member.displayName },
				{ name: '__**Reason for VC-KICK:**__', value: reason }
			])
			.setTimestamp();
		channel.send(modEmbed);
	}
};