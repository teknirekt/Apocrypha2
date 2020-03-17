require('dotenv').config();
const request = require('request');

module.exports = {
	name: 'search',
	args: true,
	aliases: ['find', 'user'],
	description: 'Find information on a Destiny 2 player.',
	usage: ['Teknirekt'],
	category: 'owner',
	execute(message, args) {

		var options = {
			'method': 'GET',
			'url': `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/${args[0]}`,
			'headers': {
				'x-api-key': process.env.BUNGO_KEY
			}
		};
		request(options, function (error, response) {
			if (error) throw new Error(error);
			message.channel.send(response.body);
		});
	}
};

//UNFINISHED, NEEDS WORK, DO NOT RELEASE