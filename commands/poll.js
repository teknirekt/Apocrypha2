const Discord = require('discord.js');

module.exports = {
	name: 'poll',
	aliases: ['vote'],
	category: 'general',
	description: 'Posts a poll for members to vote upon in the current channel.',
	usage: ['<yes/no question>'],
	guildOnly: true,
	args: true,
	async execute(message, args) {

		const pollText = args.join(' ');

		const poll = new Discord.MessageEmbed()
			.setTitle(`Asked by: ${message.member.displayName}`)
			.setThumbnail('https://i.ibb.co/266GL2f/ballot-box-with-ballot-1f5f3.png')
			.addField('__**Yay or Nay:**__', pollText )
			.setFooter('Select a reaction emoji below to vote.')
			.setColor('#05A8C0')
			.setTimestamp();
		message.channel.send(poll).then(message => {
			message.react(':check:609822544438231043')
				.then(message.react(':x_:609822527719735357'));
		});
	}
};