const Discord = require('discord.js');

module.exports = {
	name: 'post',
	category: 'mod',
	description: 'Posts requested topic / information.',
	examples: ['update | rule4'],
	args: true,
	async execute(message, args) {

		//SERVERS
		const live = message.client.guilds.cache.get('229275151437529088');
	
		//CHANNELS
		const rules = live.channels.cache.get('635885093885575178');
		const weekly = live.channels.cache.get('633746025022095362');

		//MESSAGES
		const join = await bLanding.messages.fetch('610725013300969491');
		const update = await weekly.messages.fetch('633746699806048257');
		const rule1 = await rules.messages.fetch('690618458886373376');
		const rule2 = await rules.messages.fetch('690618509193117737');
		const rule3 = await rules.messages.fetch('690618579091193906');
		const rule4 = await rules.messages.fetch('690618631167672410');
		const rule5 = await rules.messages.fetch('690618685991157911');
		const rule6 = await rules.messages.fetch('690618753745944688');
		const rule7 = await rules.messages.fetch('690618821530091520');
		const rule8 = await rules.messages.fetch('690618870385606737');
		const rule9 = await rules.messages.fetch('690618924009783376');
		const rule10 = await rules.messages.fetch('690618966422585374');
		const rule11 = await rules.messages.fetch('690619086949842964');
		const ruleset1 = await rules.messages.fetch('635885183471714336');
		const ruleset2 = await rules.messages.fetch('635885244280733746');

		//MESSAGE FETCHING
		if (args[0] === 'join') {
			message.channel.send(join.content);
			return;
		}
		if (args[0] === 'update') {
			weekly.send(update.content);
			return;
		}
		if (args[0] === 'fix') {
			const fetched = await weekly.messages.fetch(args[1]);
				fetched.edit(update.content);
		}
		if (args[0] === 'rule1') {
			message.channel.send(rule1.content);
			return;
		}
		if (args[0] === 'rule2') {
			message.channel.send(rule2.content);
			return;
		}
		if (args[0] === 'rule3') {
			message.channel.send(rule3.content);
			return;
		}
		if (args[0] === 'rule4') {
			message.channel.send(rule4.content);
			return;
		}
		if (args[0] === 'rule5') {
			message.channel.send(rule5.content);
			return;
		}
		if (args[0] === 'rule6') {
			message.channel.send(rule6.content);
			return;
		}
		if (args[0] === 'rule7') {
			message.channel.send(rule7.content);
			return;
		}
		if (args[0] === 'rule8') {
			message.channel.send(rule8.content);
			return;
		}
		if (args[0] === 'rule9') {
			message.channel.send(rule9.content);
			return;
		}
		if (args[0] === 'rule10') {
			message.channel.send(rule10.content);
			return;
		}
		if (args[0] === 'rule11') {
			message.channel.send(rule11.content);
			return;
		}
		if (args[0] === 'ruleset') {
			message.channel.send(ruleset1.content).then(message.channel.send(ruleset2.content));
			return;
		}
	}
};