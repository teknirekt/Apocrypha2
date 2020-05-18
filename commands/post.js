const Discord = require('discord.js');

module.exports = {
	name: 'post',
	category: 'mod',
	description: 'Posts requested topic / information.',
	examples: ['update | rule4'],
	args: true,
	guildOnly: true,
	async execute(message, args) {

		//SERVERS
		const backup = message.client.guilds.cache.get('608709068776931328');
		const live = message.client.guilds.cache.get('229275151437529088');
	
		//CHANNELS
		const rules = live.channels.cache.get('635885093885575178');
		const weekly = live.channels.cache.get('633746025022095362');
		const bLanding = backup.channels.cache.get('608710595650387981');

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
			message.channel.send(update.content);
			return;
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
		if (args[0] === 'edit') {

			const fetched = await message.channel.messages.fetch(args[1]);
			const content = args.slice(2).join(' ');

			if (message.channel.name === 'destiny_guides') {
				if (message.author.id !== '229060782065844224') {
					message.channel.send('Nope, Sorry. Only Tek can do that.')
						.then(message.delete({ timeout: 10000 }));
					return;
				} else {
					
					const fix = new Discord.MessageEmbed()
						.setColor('#545454')
						.setTitle('Shadowkeep (Year 3)')
						.setDescription('Season of the Worthy (S.10)\nMAR 10 - JUN 09')
						.setURL('https://www.bungie.net/7/en/Destiny/Shadowkeep')
						.setThumbnail('https://i.ibb.co/ccy8WBZ/worthyicon.jpg')
						.addFields(
							{ name: '__**Season 10 Misc**__', value: '[**Warmind Khanjali**](https://youtu.be/Ogp_SAesYKE \'Esoterickk\') (S.10 Artifact)\n[**Season In-depth**](https://youtu.be/R14hd9gPgL8 \'Datto\')\n[**Warmind Mods**](https://youtu.be/rpaaDVl485s \'Datto\')\n[**Felwinter\'s Lie**](https://youtu.be/4Mhco2Bpaog \'Esoterickk\') (spoilers)'},
							{ name: '__**Season 10 Exotics**__', value: 'Tommy\'s Matchbook (Season Pass)\n[**4th Horseman**](https://youtu.be/1-Morhzrsyg \'Esoterickk\')\nHier Apparent (GG Triumph) [**review**](https://youtu.be/_6XxmZc7EcU \'Aztecross\')'},
							{ name: '__**Web & In-game Lore**__', value: '[**What Gives Me Pause**](http://bit.ly/32OybAX)\n[**Legacy**](http://bit.ly/3cN6InF)\n[**Legacy Pt.2**](http://bit.ly/2xwBOQn)\n[**Rememberance**](http://bit.ly/2TEjygj)\n[**Maint. Operations Log 30037**](http://bit.ly/39Sd2Iw)\n**Trials and Tribulations** -Trials\n**The Liar** -*unknown*' }
						)
						.setImage('https://i.ibb.co/vc6LfhG/worthy.png')
						.setFooter('Command: -g worthy');

					fetched.edit(fix);
				}
			} else
				fetched.edit(content).catch(console.error);
			return;
		}
	}
};