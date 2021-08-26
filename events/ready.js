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
			'Music of the Spheres.'
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

	console.log(`Server List:\n${serverList}\n`)
	errorLog.send(`${client.user.username} bot has restarted and is **ONLINE**.`);
};

	// '-donate',
	// 'Colonel peckin\'.',
	// 'Benedict99-40.',
	// 'YOU. | Clanbot',
	// 'the whispers on Io.',
	// 'music w/ Rasputin.',
	// 'Asher complain.',
	// 'Ada-1\'s history.',
	// 'Osiris\'s #1 fan...',
	// 'Calus\'s entitlement.',
	// 'our clan. | Clanbot',
	// '██████',

	// if (!errorLog) {
	// 	serverList.channels.create('errorlog', {
	// 		type: 'text',
	// 		topic: 'Apocrypha error logging.',
	// 		reason: 'No errorlog present for Apocrypha.',
	// 	})
	// };
	// if (!roles) {
	// 	serverList.channels.create('role_assign', {
	// 		type: 'text',
	// 		topic: 'Get your server access here!.',
	// 		reason: 'No role assignment channel present for Apocrypha.',
	// 	})
	// };
