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
				.setDescription('Season of Arrivals (S.11)\nJUN 09 - SEP 22')
				.setURL('https://www.bungie.net/7/en/Seasons/SeasonOfArrivals')
				.setThumbnail('https://i.ibb.co/b7zjZzp/arrival-icon.png')
				.addFields(
					{ name: '__**Release Info**__', value: '[**Season Trailer**](https://youtu.be/5tJwLjVfFPc)\n[**BEYOND LIGHT Cinematic Trailer**](https://youtu.be/h-5S82ETKvI)\n[**BEYOND LIGHT Gameplay Trailer**](https://youtu.be/Ms90okhAbTw)\n[**Prophecy Dungeon Trailer**](https://youtu.be/ManQHg9_MiU)\n[**Past is Prologue**](https://youtu.be/HUfUiJ-qqV8)'},
					{ name: '__**Season Information**__', value: '[**Umbral Engram System**](https://youtu.be/pL8J6L-PP4Y \'xHoundishx\')\n[**Heroic "Contact" PE**](https://youtu.be/ibC58GezyoU \'Esoterickk\')\n[**Datto\'s Levelling Guide**](https://youtu.be/ENgt76PnI44 \'Datto\')', inline: true},
					{ name: '__**Prophecy Dungeon**__', value: '[**"Urn It" Triumph**](https://youtu.be/HO7SfPHmCSA \'Esoterickk\')\n[**Dungeon Mechanics**](https://youtu.be/Msjcufwbnag \'NinjaPups\')\n[**Loot Table**](https://www.niris.tv/blog/prophecy-dungeon-loot-table \'Niris.tv\')', inline: true},
					{ name: '__**Season 11 Exotics**__', value: 'Witherhoard -Season Pass\n[**Ruinous Effigy**](https://youtu.be/kQ9zAkOLjxo \'Datto\')\n> [Calcified Light](https://youtu.be/PjKIlA0S0Ao \'Esoterickk\') - [Marionettes](https://youtu.be/dvJzOJobbq8 \'Esoterickk\') - [Catalyst](https://youtu.be/xe4oTjp7gHI \'Esoterickk\') - [Eyes](https://youtu.be/6F-h9gAsdwY \'Esoterickk\')\nTraveler\'s Chosen -Unknown Quest'},
					{ name: '__**Web & In-Game Lore**__', value: '[**FALSE IDOLS**](http://www.bungie.net/en/News/Article/49185)\n**The Singular Exegete** -Weekly Interference Mission\n**Duress and Egress** -Exodus Quest'}
				)
				.setImage('https://i.ibb.co/0jf7sNZ/arrivals.png')
				.setFooter('Command: -g arrivals');

					fetched.edit(fix).catch(console.error);
				}
			} else
				fetched.edit(content).catch(console.error);
			return;
		}
	}
};