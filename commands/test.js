const Discord = require('discord.js');

module.exports = {
	name: 'test',
	category: 'mod',
	description: 'Test command.',
	examples: ['update | rule4'],
	args: true,
	guildOnly: true,
	async execute(message, args) {

        //MESSAGE GRAB

        const testserver = message.client.guilds.cache.get('735272870112002119');
        const weekly = testserver.channels.cache.get('851536173410943016');
        const announce = message.client.channels.cache.find(ch => ch.name === 'weekly_updates');

        const updates = await weekly.messages.fetch('851536272069099561');
        const nowlive = await weekly.messages.fetch('851538370039119905');
        const newsworthy = await weekly.messages.fetch('851545971275464755');
        const preview = await weekly.messages.fetch('851601772714786846');

        //EMBED TEMPLATE
        var date = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const today = month + ' ' + day;

        const update = new Discord.MessageEmbed()
            .setTitle(`Rotation for the week of ${today}, 2021.`)
            .setDescription(`***NOW LIVE:*** ${nowlive.content}`)
            .setColor('#2F2FD0')
            .addFields([
                { name: '\u200B', value: `${updates.content}`, inline: false },
                { name: '__Newsworthy Information__', value: `${newsworthy.content}`, inline: false},
                { name: '__*Next Reset Preview*__', value: `${preview.content}`, inline: false }
            ]);

        if (args == 'update'){
            announce.send(update);
            return;
        }
	}
};