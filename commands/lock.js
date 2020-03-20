const Discord = require('discord.js');

module.exports = {
	name: 'lock',
	category: 'mod',
	aliases: ['freeze', 'halt', 'stop'],
	description: 'Locks the channel, with reason supplied.',
	usage: ['<reason>.'],
	guildOnly: true,
	args: true,
	async execute(message, args) {

		const reason = args.join(' ');
		const write = message.member.guild.roles.cache.find(r => r.name === 'IronWolves');
		const reports = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');

		const lockembed = new Discord.MessageEmbed()
			.setTitle(`Lockdown issued by:\n${message.member.displayName}`)
			.setThumbnail(message.author.displayAvatarURL())
			.addField('Channel Locked:', message.channel)
			.addField('Reason for Lock:', reason)
			.setFooter(`Channel ID: ${message.channel.id}`)
			.setTimestamp()
			.setColor('#000000');

		await message.channel.updateOverwrite(write, { 
			'SEND_MESSAGES': false, 
			'ATTACH_FILES': false
		}).catch(console.error)
			.then(message.channel.send(`**===|[__CHANNEL LOCKED__]|===**\nReason: ${reason}`)).catch(console.error);

		reports.send(lockembed);
	}
};