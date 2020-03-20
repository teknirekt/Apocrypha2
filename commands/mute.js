const Discord = require('discord.js');

module.exports = {
	name: 'mute',
	aliases: ['m', 'silence', 'gag'],
	category: 'mod',
	description: 'Mute\'s the mentioned user.',
	examples: ['<@membermention> <reason>'],
	guildOnly: true,
	args: true,
	async execute(message, args) {

		const muterole = message.guild.roles.cache.find(r => r.name === 'MUTED');
		const access = message.guild.roles.cache.find(r => r.name === 'IronWolves');
		const taggedUser = message.mentions.members.first();
		const reason = args.slice(1).join(' ');

		const dmEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`You were \`MUTED\` in ${message.guild.name}`)
			.setColor('#3E1453')
			.setFooter('Note: Mutes are temporary, if the reason is unclear - speak to the MOD.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Mute Reason:**__', value: reason }
			])
			.setTimestamp();

		if (taggedUser.roles.cache.some(r => r.name === 'Osmium Court') || taggedUser.bot) {
			message.channel.send('You can\'t `MUTE` MODs or BOTs.')
				.then(() => { 
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 30000 });
					}});
			return;
		}
		if(!muterole) {
			message.channel.send('Error!! Please create a Muted role.')
				.then(() => { 
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 30000 });
					}});
			return;
		}
		if(!access) {
			message.channel.send('Error!! Access role is not found!')
				.then(() => { 
					if (message.channel.name !== 'landing') {
						message.delete({ timeout: 30000 });
					}});
			return;
		} else {
			taggedUser.roles.add(muterole).then(taggedUser.roles.remove(access))
				.catch(error => message.channel.send(`Sorry, I couldn't mute them because of : ${error}`));
			await taggedUser.send(dmEmbed)
				.catch(error => message.channel.send(`I was unable to notify the user of their fate because: ${error}`));
			message.react(':check:609822544438231043');
		}
    
		const channel = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');
		if(!channel) {
			return;
		}
		const modEmbed = new Discord.MessageEmbed()
			.setTitle(`Member Muted: ${taggedUser.displayName}`)
			.setDescription('*' + taggedUser.user.tag + '*')
			.setThumbnail(taggedUser.user.displayAvatarURL())
			.setFooter(`USER ID: ${taggedUser.user.id}`)
			.setColor('#3E1453')
			.addFields([
				{ name: '__**Moderator:**__', value: message.member.displayName },
				{ name: '__**Reason for MUTE:**__', value: reason }
			])
			.setTimestamp();
		channel.send(modEmbed);
	}
};