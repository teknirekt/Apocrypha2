require('dotenv').config();
// const fetch = require('node-fetch');
// const Discord = require('discord.js');

module.exports = {
	name: 'search',
	args: true,
	aliases: ['find', 'user'],
	description: 'Find information on a Destiny 2 player.',
	usage: ['Teknirekt'],
	category: 'owner',
	async execute(message, args) {

		message.channel.send('This command is still a WIP. I\'m unable to search for' + args[0] + 'currently. Sorry!')
			.then(message => { 
				if (message.channel.name !== 'landing') {
					message.delete({ timeout: 30000 });
				}
			}).catch(console.error);
		return;

		// const url = 'https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/';
		// const headers = {
		// 	'x-api-key': process.env.BUNGO_KEY
		// };
		// const response = await fetch(url + args[0], { method: 'GET', headers: headers });
		// const data = await response.json();
			
		// const body = data.body;
		// // const name = body.find(post => post.displayName === args[0]);

		// // const memberInfo = new Discord.MessageEmbed()
		// // 	.setTitle(name.displayName)
		// // 	.setThumbnail(`https://www.bungie.net/Platform/${name.iconPath}`)
		// // 	.addField('__**Member\'s Unique ID**__', name.membershipId);

		// // message.channel.send(memberInfo);
		// console.log(body);
	}
};

//UNFINISHED, NEEDS WORK, DO NOT RELEASE