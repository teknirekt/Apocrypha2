const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'post',
	category: 'mod',
	description: 'Posts requested topic / information.',
	examples: ['update | rule4'],
	args: true,
	guildOnly: true,
	async execute(message, args) {

		const request = args[0];
		//SERVERS
		// const live = client.guilds.cache.get('229275151437529088');
		// const test = client.guilds.cache.get('569908733090594827');
		const backup = client.guilds.fetch('608709068776931328').channels.cache.get('608710595650387981');
		// const emoji = client.guilds.cache.get('613401400654692387');

		//CHANNELS
		// const rules = live.channels.cache.get('635885093885575178');
		// const weekly = live.channels.cache.get('633746025022095362');
		// const bLanding = backup.channels.cache.get('608710595650387981');

		//MESSAGES
		// const update = await weekly.fetchMessage('633746699806048257');
		const join = await backup.fetchMessage('610725013300969491');
		// const rule1 = await rules.fetchMessage('679810022255230983');
		// const rule2 = await rules.fetchMessage('679810138227474476');
		// const rule3 = await rules.fetchMessage('');
		// const rule4 = await rules.fetchMessage('');
		// const rule5 = await rules.fetchMessage('');
		// const rule6 = await rules.fetchMessage('');
		// const rule7 = await rules.fetchMessage('');
		// const rule8 = await rules.fetchMessage('');
		// const rule9 = await rules.fetchMessage('');
		// const rule10 = await rules.fetchMessage('');
		// const rule11 = await rules.fetchMessage('');
		// const rule12 = await rules.fetchMessage('');
		// const rule13 = await rules.fetchMessage('');
		// const rule14 = await rules.fetchMessage('');
	
	
		if (request === 'join' ) {
			message.channel.send(join.content);

		}
	}
};

//WORK IN PROGRESS - DO NOT GO LIVE