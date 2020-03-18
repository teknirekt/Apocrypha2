const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const client = new Discord.Client();
client.commands = new Discord.Collection();

//FILESYSTEM
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
//EVENT HANDLER
fs.readdir('./events/', (err, files) => {
	if (err) return console.error;
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		const evt = require(`./events/${file}`);
		const evtName = file.split('.')[0];
		console.log(`Loaded ${evtName}.`);
		client.on(evtName, evt.bind(null, client));
	});
});
//ERROR REPORTING
client.on('error', error => console.log(error));
//ZERO ERROR PREVENTION
process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection:', error));
//BOT LOGIN
client.login(process.env.BOT_TOKEN);