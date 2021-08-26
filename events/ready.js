require('../index.js');

module.exports = (client) => {

	//ALIVE
	console.log(`Logged in as ${client.user.username}!`);
	setInterval(async () => {
		const statuslist = [
			'-modmail',
			'rumors about SIVA.',
			'tower comms.',
			'Drifter\'s scams.',
			'Banshee-44 ramble.',
			'Fenchurch\'s stories.',
			'Hope for the Future.',
			'Cayde-6\'s journals.',
			'Vuvuzela prattle.',
			'Zavala Refuse.',
			'Toland\'s advice.',
			'Moon\'s Haunted.',
			'hissing silence.',
			'Saint-14\'s legend.',
			'Ikora\'s teachings.',
			'Shaxx shout a lot.',
			'Osiris\'s prophecies.',
			'Riven\'s bargains.',
			'Eris\'s vengeance.',
			'Failsafe & Failsafe.',
			'Spider\'s deals.',
			'Saladin\'s praise.',
			'ṯ̵̟̰͙͈͉̞̇̌͋̐̋͘h̶̛̩̱͈̠̦̦͎̮̯̜͗̌́́ę̴̛̗̞̄͛͂̇͛̈́͐̽ ̸̧̡̙͇̙͈̱͋̂̈̇̊͂̈̚͠ͅH̴̖̿̓̏̾̐̒͋̎͘e̶͚͖͇̘̤̯̰̔̄ľ̶̨̨̮̺̰͇̉͒̕i̷̡̛͖͖̗̲̤̮̼̒̈̀̿͝ͅo̴͍̠͔͒̚͜p̴̡̝͇͚̗͓̠̆̆̄̂̐̚͝ͅa̵̰̝̿͌u̴̡̼̘̬͕͊̇͗ͅs̸̨̟͔͔̹̜̹̯͉̱̾̾̄̈́̚ȩ̶̝̠̝̠̱̘͖͈̀́̋͋̎́̊͜',
			'the Darkness.',
			'the Collective.',
			'the Winnower.',
			'the Gardener.',
			'-guide',
			'the Crow.',
			'Shaw Han.',
			'Clovis secrets.',
			'Distress Calls.',
			'The Anomaly.',
			'Status: Calamitous',
			'Empress Caiatl.',
			'the Glycon\'s Logs.',
			'Katabasis\'s Regret.',
			'Voices from Beyond.',
			'Clarity Control.',
			'Savathûn\'s Song.',
			'The Entity.',
			'Lakshmi\'s Rhetoric.',
			'Edo\'s tales.',
			'Mithrax\'s splicers.',
			'Savathûn\'s Song.',
			'giant Exo heads.',
			'the Witch Queen.',
			'the Truth.',
			'Savathûn\'s lies.',
			'Petra\'s caution.',
			''
			
		];
		const random = Math.floor(Math.random() * statuslist.length);
		try {
			await client.user.setPresence({ 
				activity: {
					type: 'LISTENING',
					name: `${statuslist[random]}`
				}, 
				status: 'online'
			});
		}
		catch (error) {
			console.error(error);
		}
	}, 30000);

	// //SIGNUP FETCHING
	const serverList = client.guilds.cache.map(g => g.id).join('\n');
	const roles = client.channels.cache.find(ch => ch.name === 'role_assign');
	const errorLog = client.channels.cache.find(ch => ch.name === 'errorlog');
	
	roles.messages.fetch({ limit: 5 })
		.then(messages => console.log(`${messages.size} messages fetched for role asignment.`))
		.catch(error => errorLog.send(`I was unable to fetch the role assignment messages. \nError: ${error}`));

	console.log(`Server List:\n${serverList}\n`);
	errorLog.send(`${client.user.username} bot has restarted and is **ONLINE**.`)
	.catch(error => console.log(error);
};
