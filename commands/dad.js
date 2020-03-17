const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
	name: 'dad',
	args: false,
	aliases: ['joke'],
	description: 'Random Dad jokes.',
	category: 'extra',

	async execute(message) {

		const {
			body
		} = await superagent
			.get('https://icanhazdadjoke.com/slack');

		const dad = new Discord.MessageEmbed()
			.setColor(0xFFFFFF)
			.setDescription('**' + body.attachments.map(a => a.text) + '**');
		await message.channel.send(dad);
	}
};