const Discord = require('discord.js');

module.exports = {
	name: 'suggest',
	aliases: ['idea', 'suggestion', 'proposal'],
	category: 'general',
	description: 'Posts to the suggestion channel an item for members to vote upon, supply an image in your post to add it to the message.',
	examples: ['<ideas> (attach an image to this message if desired)'],
	guildOnly: true,
	args: true,
	async execute(message, args) {

		const text = args.join(' ');
		const channel = message.guild.channels.cache.find(ch => ch.name === 'suggestions');

		if(!channel) {
			return message.channel.send('You must have a channel named "suggestions" to use this command.');
		}

		const suggest = new Discord.MessageEmbed()
			.setTitle(`Suggested by:\n${message.member.displayName}`)
			.setThumbnail(message.author.avatarURL())
			.addField('__**Suggestion:**__', text)
			.setFooter('Select a reaction emoji below to vote.')
			.setColor('#CA170F')
			.setTimestamp();

		if (!message.attachments.size <= 0) {

			const attachment = message.attachments.array();
			const suggest2 = new Discord.MessageEmbed()
				.setTitle(`Suggested by:\n${message.member.displayName}`)
				.setThumbnail(message.author.avatarURL())
				.addField('__**Suggestion:**__', text)
				.setFooter('Select a reaction emoji below to vote.')
				.setColor('#CA170F')
				.setImage(attachment[0].url)
				.setTimestamp();

			channel.send(suggest2).then(message => {
				message.react(':check:609822544438231043'),
				message.react(':x_:609822527719735357');
			});
			return;
		} else
			channel.send(suggest).then(message => {
				message.react(':check:609822544438231043'),
				message.react(':x_:609822527719735357');
			});
		return;
	}};