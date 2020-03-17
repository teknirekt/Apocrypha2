const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

module.exports = {
	name: 'urban',
	args: true,
	aliases: ['ud'],
	description: 'Urban Dictionary entries',
	usage: ['donkeypunch'],
	category: 'extra',
	async execute(message, args) {

		const query = querystring.stringify({ term: args.join(' ') });
		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length) {
			message.channel.send(`No results found for **${args.join(' ')}**.`);
			return;
		}

		const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
		const [answer] = list;

		const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);
		message.channel.send(embed);
	}
};