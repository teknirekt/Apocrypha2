const Discord = require('discord.js');

module.exports = {
	name: 'unlock',
	category: 'mod',
	aliases: ['open', 'resume', 'gochat'],
	description: 'UnLocks the channel, with reason supplied.',
	usage: ['<reason>.'],
	guildOnly: true,
	args: true,
	async execute(message, args) {

		const reason = args.join(' ');
		const write = message.member.guild.roles.cache.find(r => r.name === 'IronWolves');
		const reports = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');

		const lockembed = new Discord.MessageEmbed()
			.setTitle(`Lockdown lifted by:\n${message.member.displayName}`)
			.setThumbnail(message.author.displayAvatarURL())
			.addField('Channel UnLocked:', message.channel)
			.addField('Reason for UnLock:', reason)
			.setFooter(`Channel ID: ${message.channel.id}`)
			.setTimestamp()
			.setColor('#ffffff');

		await message.channel.updateOverwrite(write, { 
			'SEND_MESSAGES': true, 
			'ATTACH_FILES': true
		}).catch(console.error)
			.then(message.channel.send(`**===|[__CHANNEL UNLOCKED__]|===**\nReason: ${reason}`)).catch(console.error);

		reports.send(lockembed);
	}
};