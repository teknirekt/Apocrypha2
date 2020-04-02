const Discord = require('discord.js');

module.exports = {
	name: 'remind',
	category: 'mod',
	description: 'Reminds the mentioned user about join requirements.',
	examples: [ '<@member mention> register `OR` roles.' ],
	guildOnly: true,
	args: true,
	async execute(message, args){

		const taggedUser = message.mentions.members.first();

		const regEmbed = new Discord.MessageEmbed()
			.setTitle(`Member Reminded: ${taggedUser.displayName}`)
			.setDescription('*' + taggedUser.user.tag + '*')
			.setThumbnail(taggedUser.user.displayAvatarURL())
			.setFooter(`USER ID: ${taggedUser.user.id}`)
			.setColor('#3399ff')
			.addFields([
				{ name: '__**Moderator:**__', value: message.member.displayName },
				{ name: '__**Reason for REMINDER:**__', value: '#1: Needs to register and set roles.' }
			])
			.setTimestamp();
            
		const roleEmbed = new Discord.MessageEmbed()
			.setTitle(`Member Reminded: ${taggedUser.displayName}`)
			.setDescription('*' + taggedUser.user.tag + '*')
			.setThumbnail(taggedUser.user.displayAvatarURL())
			.setFooter(`USER ID: ${taggedUser.user.id}`)
			.setColor('#3399ff')
			.addFields([
				{ name: '__**Moderator:**__', value: message.member.displayName },
				{ name: '__**Reason for REMINDER:**__', value: '#2: Needs set Platform and Region roles.' }
			])
			.setTimestamp();

		const dmRegEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`This is a \`REMINDER\` for ${message.guild.name}`)
			.setColor('#3399ff')
			.setFooter('Note: Removal will occur at reset if not addressed.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Reminder Reason:**__', value: 'You need to register and set your region/platform at your earliest convenience **prior** to reset on Tuesday. See instructions #1 through #3 in #landing for more information.' }
			])
			.setTimestamp();
            
		const dmRoleEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`This is a \`REMINDER\` for ${message.guild.name}`)
			.setColor('#399ff')
			.setFooter('Note: Removal will occur at reset if not addressed.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Reminder Reason:**__', value: 'You need to set your region/platform at your earliest convenience **prior** to reset on Tuesday. See instruction #3 in #landing for more information.' }
			])
			.setTimestamp();

		const dmInEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`This is a \`REMINDER\` for ${message.guild.name}`)
			.setColor('#399ff')
			.setFooter('Note: Removal will occur at reset if not addressed.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Reminder Reason:**__', value: 'You have been sent this reminder due to inactivity beyond our allowed limit (14 or more days). Please correct this course of action before reset, or risk removal.' }
			])
			.setTimestamp();

		const inactiveEmbed = new Discord.MessageEmbed()
			.setTitle(`Member Reminded: ${taggedUser.displayName}`)
			.setDescription('*' + taggedUser.user.tag + '*')
			.setThumbnail(taggedUser.user.displayAvatarURL())
			.setFooter(`USER ID: ${taggedUser.user.id}`)
			.setColor('#3399ff')
			.addFields([
				{ name: '__**Moderator:**__', value: message.member.displayName },
				{ name: '__**Reason for REMINDER:**__', value: 'Inactive beyond 14 days, warned of removal.' }
			])
			.setTimestamp();

		const channel = message.guild.channels.cache.find(ch => ch.name === 'warnings');
		
		if (!channel) {
			return;
		}
		if (args[1] === 'register') {
			await taggedUser.send(dmRegEmbed)
				.catch(error => message.channel.send(`I was unable to notify the user because: ${error}`));
			message.react(':check:609822544438231043');
			channel.send(regEmbed).catch(console.error);
		}
		if (args[1] === 'roles') {
			await taggedUser.send(dmRoleEmbed)
				.catch(error => message.channel.send(`I was unable to notify the user because: ${error}`));
			message.react(':check:609822544438231043');
			channel.send(roleEmbed).catch(console.error);
		}
		if (args[1] === 'inactive') {
			await taggedUser.send(dmInEmbed)
				.catch(error => message.channel.send(`I was unable to notify the user because: ${error}`));
			message.react(':check:609822544438231043');
			channel.send(inactiveEmbed).catch(console.error);
		}
	}
};