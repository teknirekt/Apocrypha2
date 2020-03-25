const Discord = require('discord.js');

module.exports = {
	name: 'donate',
	guildOnly: false,
	aliases: ['kofi', 'patreon'],
	category: 'general',
	description: 'Want to doante? This is how.',
	async execute(message) {

		const donate = new Discord.MessageEmbed()
			.setTitle('Ways to donate!')
			.setDescription('This is ENTIRELY optional.')
			.setColor('#0AA52C')
			.setThumbnail('https://i.ibb.co/9bB2Y9j/shut-up-and-take-my-money-meme.png')
			.addFields([
				{ name: '__**Kofi Link**__ (single donation)', value: '[CLICK HERE](https://ko-fi.com/teknirekt)' },
				{ name: '__**Patreon Link**__ (re-occuring)', value: '[CLICK HERE](https://www.patreon.com/teknirekt?fan_landing=true)' },
				{ name: '__**A word about Donations**__', value: 'Firstly, I want to thank you for invoking this command. Just by seeing what you can do to help is immensely appreciated, but know this: I will NEVER ask for monetary compensation for what I do.\n\nKofi donations are $3 USD one-time charges and Patreon is $5 USD a month until cancelled. If you do choose to donate, please notify me via DM so I can link you with your role and/or grant you test server access.' }
			])
			.setFooter('Again, Thank you!');

		message.channel.send(donate);
		return;

	}
};