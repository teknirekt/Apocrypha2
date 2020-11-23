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
		const landing = message.member.guild.channels.cache.find(ch => ch.name === 'landing');
		const roleassign = message.member.guild.channels.cache.find(ch => ch.name === 'role_assign');
		const rules = message.member.guild.channels.cache.find(ch => ch.name === 'faq_rules');
		const warnchannel = message.guild.channels.cache.find(ch => ch.name === 'warnings');
		const errorChannel = message.guild.channels.cache.find(ch => ch.name === 'errorlog');

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
			.setFooter('Note: Removal will occur at reset if this is not addressed.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Reminder Reason:**__', value: `You need to register with Charlemagne and set your **primary** region/platform at your earliest convenience, prior to weekly reset on Tuesday.\n\nSee ${landing} and ${roleassign} for instructions, ${rules} for requirements.\n\nThank you.` }
			])
			.setTimestamp();
            
		const dmRoleEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`This is a \`REMINDER\` for ${message.guild.name}`)
			.setColor('#399ff')
			.setFooter('Note: Removal will occur at reset if this is not addressed.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Reminder Reason:**__', value: `You need to set your **primary** region/platform at your earliest convenience, prior to weekly reset on Tuesday.\n\nSee ${landing} and ${roleassign} for instructions, ${rules} for requirements.\n\nThank you.` }
			])
			.setTimestamp();

		const dmInEmbed = new Discord.MessageEmbed()
			.setTitle('__**Moderation Notification**__')
			.setThumbnail(message.guild.iconURL())
			.setDescription(`This is a \`REMINDER\` for ${message.guild.name}`)
			.setColor('#399ff')
			.setFooter('Note: Removal will occur at reset if this is not addressed.')
			.addFields([
				{ name: '__**Moderator Responsible:**__', value: message.member.displayName },
				{ name: '__**Reminder Reason:**__', value: 'You have been sent this notice due to being inactive, __without prior notice__, for longer than our community allows. Please login and correct this issue at your next availability, prior to weekly reset.\n\nThank you.' }
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
				{ name: '__**Reason for REMINDER:**__', value: 'Inactive beyond 14 days without notice, warned of removal.' }
			])
			.setTimestamp();

		//======END EMBEDS
		
		if (!warnchannel) {
			return;
		}
		if (args[1] === 'register') {
			await taggedUser.send(dmRegEmbed)
				.catch(error => errorChannel.send(`I was unable to notify ${taggedUser.displayName} of the \`REMINDER\` due to: ${error}.`));
			message.react(':check:780571017139453982');
			warnchannel.send(regEmbed).catch(console.error);
		}
		if (args[1] === 'roles') {
			await taggedUser.send(dmRoleEmbed)
				.catch(error => errorChannel.send(`I was unable to notify ${taggedUser.displayName} of the \`REMINDER\` due to: ${error}.`));
			message.react(':check:780571017139453982');
			warnchannel.send(roleEmbed).catch(console.error);
		}
		if (args[1] === 'inactive') {
			await taggedUser.send(dmInEmbed)
				.catch(error => errorChannel.send(`I was unable to notify ${taggedUser.displayName} of the \`REMINDER\` due to: ${error}.`));
			message.react(':check:780571017139453982');
			warnchannel.send(inactiveEmbed).catch(console.error);
		}
	}
};