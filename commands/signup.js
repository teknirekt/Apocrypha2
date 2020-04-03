const Discord = require('discord.js');

module.exports = {
	name: 'signup',
	category: 'mod',
	description: 'Posts permanent signups for missons.',
	examples: [ 'whisper, outbreak, etc...' ],
	guildOnly: true,
	args: true,
	async execute(message, args){

		const whisperNew = new Discord.MessageEmbed()
			.setTitle('__**Signup for the Whisper Exotic Mission**__')
			.setDescription('*If you need this, use an emoji below*')
			.setColor('0000ff')
			.addFields([
				{ name: '<:normal:693232097359560746> __**Need Whisper**__', value: 'Awaiting members.', inline: true },
				{ name: '<:heroic:693232190116593765> __**Need Catalyst**__', value: 'Awaiting members.', inline: true },
				{ name: '<:sherpa:693232256587792564> __**Willing Sherpas**__', value: 'Awaiting members.', inline: true }

			])
			.setImage('https://i.ibb.co/52DTqWf/whisper.png');

		const outbreakNew = new Discord.MessageEmbed()
			.setTitle('__**Signup for the Zero Hour Mission**__')
			.setDescription('*If you need this, use an emoji below*')
			.setColor('0000ff')
			.addFields([
				{ name: '<:normal:693232097359560746> __**Need Outbreak**__', value: 'Awaiting members.', inline: true },
				{ name: '<:heroic:693232190116593765> __**Need Catalyst**__', value: 'Awaiting members.', inline: true },
				{ name: '<:sherpa:693232256587792564> __**Willing Sherpas**__', value: 'Awaiting members.', inline: true }

			])
			.setImage('https://i.ibb.co/T0HPX9p/outbreak.png');

		const thornNew = new Discord.MessageEmbed()
			.setTitle('__**Signup for Thorn or Malfeasance**__')
			.setDescription('*If you need this, use an emoji below*')
			.setColor('0000ff')
			.addFields([
				{ name: '<:normal:693232097359560746> __**Malfeasance**__', value: 'Awaiting members.', inline: true },
				{ name: '<:heroic:693232190116593765> __**Thorn**__', value: 'Awaiting members.', inline: true },
				{ name: '<:sherpa:693232256587792564> __**Willing Sherpas**__', value: 'Awaiting members.', inline: true }

			])
			.setImage('https://i.ibb.co/k40VfQZ/malthorn.png')
			.setFooter('Note: In this case, heroic is for Thorn.');

		const wishNew = new Discord.MessageEmbed()
			.setTitle('__**Signup for Wishender or Taken Eggs**__')
			.setDescription('*If you need this, use an emoji below*')
			.setColor('0000ff')
			.addFields([
				{ name: '<:normal:693232097359560746> __**Wishender**__', value: 'Awaiting members.', inline: true },
				{ name: '<:heroic:693232190116593765> __**Taken Eggs**__', value: 'Awaiting members.', inline: true },
				{ name: '<:sherpa:693232256587792564> __**Willing Sherpas**__', value: 'Awaiting members.', inline: true }

			])
			.setImage('https://i.ibb.co/hgh1wVq/wish.png')
			.setFooter('Note: In this case, heroic is for the Taken Eggs.');

		const izanagiNew = new Discord.MessageEmbed()
			.setTitle('__**Signup for Izanagi\'s Burden**__')
			.setDescription('*If you need this, use an emoji below*')
			.setColor('0000ff')
			.addFields([
				{ name: '<:normal:693232097359560746> __**Izanagi Questline**__', value: 'Awaiting members.', inline: true },
				{ name: '<:heroic:693232190116593765> __**Heroic Menagerie**__', value: 'Awaiting members.', inline: true },
				{ name: '<:sherpa:693232256587792564> __**Willing Sherpas**__', value: 'Awaiting members.', inline: true }

			])
			.setImage('https://i.ibb.co/y6BmZkF/izanagi.png')
			.setFooter('Note: In this case, heroic is for the Catalyst.');

		const exoticsNew = new Discord.MessageEmbed()
			.setTitle('__**Signup for Ratking & Legend of Acrius**__')
			.setDescription('*If you need this, use an emoji below*')
			.setColor('0000ff')
			.addFields([
				{ name: '<:ratking:693916350158209185> __**Rat King Quest**__', value: 'Awaiting members.', inline: true },
				{ name: '<:acrius:693916350216667197> __**Legend of Acrius**__', value: 'Awaiting members.', inline: true },
				{ name: '<:acriuscat:693916350598479922> __**Prestige Leviathan**__', value: 'Awaiting members.', inline: true },
				{ name: '<:sherpa:693232256587792564> __**Willing Sherpas**__', value: 'Awaiting members.' }

			])
			.setImage('https://i.ibb.co/KDkJX4R/acrius.png');

		const xenoNew = new Discord.MessageEmbed()
			.setTitle('__**Signup for Xenophage (Pit of Heresy)**__')
			.setDescription('*If you need this, use an emoji below*')
			.setColor('0000ff')
			.addFields([
				{ name: '<:normal:693232097359560746> __**Need Xenophage**__', value: 'Awaiting members.', inline: true },
				{ name: '<:sherpa:693232256587792564> __**Willing Sherpas**__', value: 'Awaiting members.', inline: true }
			])
			.setImage('https://i.ibb.co/hynh3KP/xeno.png')
			.setFooter('Note: In this case, there is no heroic option.');

		const divinityNew = new Discord.MessageEmbed()
			.setTitle('__**Signup for Divinity (Garden of Salvation)**__')
			.setDescription('*If you need this, use an emoji below*')
			.setColor('0000ff')
			.addFields([
				{ name: '<:normal:693232097359560746> __**Need Divinity**__', value: 'Awaiting members.', inline: true },
				{ name: '<:sherpa:693232256587792564> __**Willing Sherpas**__', value: 'Awaiting members.', inline: true }
			])
			.setImage('https://i.ibb.co/wW89qz1/divinity.png')
			.setFooter('Note: MUST be done in one run, allow 2HRs just incase.');

		if (args[0] === 'whisper') {
			message.channel.send(whisperNew).then(message => 
				message.react(':normal:693232097359560746')
					.then(() => message.react(':heroic:693232190116593765'))
					.then(() => message.react(':sherpa:693232256587792564')));
			return;
		}
		if (args[0] === 'outbreak') {
			message.channel.send(outbreakNew).then(message => 
				message.react(':normal:693232097359560746')
					.then(() => message.react(':heroic:693232190116593765'))
					.then(() => message.react(':sherpa:693232256587792564')));
			return;
		}
		if (args[0] === 'thorn') {
			message.channel.send(thornNew).then(message => 
				message.react(':normal:693232097359560746')
					.then(() => message.react(':heroic:693232190116593765'))
					.then(() => message.react(':sherpa:693232256587792564')));
			return;
		}
		if (args[0] === 'wishender') {
			message.channel.send(wishNew).then(message => 
				message.react(':normal:693232097359560746')
					.then(() => message.react(':heroic:693232190116593765'))
					.then(() => message.react(':sherpa:693232256587792564')));
			return;
		}
		if (args[0] === 'izanagi') {
			message.channel.send(izanagiNew).then(message => 
				message.react(':normal:693232097359560746')
					.then(() => message.react(':heroic:693232190116593765'))
					.then(() => message.react(':sherpa:693232256587792564')));
			return;
		}
		if (args[0] === 'exotics') {
			message.channel.send(exoticsNew).then(message => 
				message.react(':ratking:693916350158209185')
					.then(() => message.react(':acrius:693916350216667197'))
					.then(() => message.react(':acriuscat:693916350598479922'))
					.then(() => message.react(':sherpa:693232256587792564')));
			return;
		}
		if (args[0] === 'xenophage') {
			message.channel.send(xenoNew).then(message => 
				message.react(':normal:693232097359560746')
					.then(() => message.react(':sherpa:693232256587792564')));
			return;
		}
		if (args[0] === 'divinity') {
			message.channel.send(divinityNew).then(message => 
				message.react(':normal:693232097359560746')
					.then(() => message.react(':sherpa:693232256587792564')));
			return;
		}
	}
};

//WORK IN PROGRESS