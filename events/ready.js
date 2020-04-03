require('../index.js');

module.exports = (client) => {

	//ALIVE
	console.log(`Logged in as ${client.user.username}!`);
	setInterval(async () => {
		const statuslist = [
			'our clan. | Clanbot',
			'-modmail',
			'YOU. | Clanbot',
			'the whispers on Io.',
			'music w/ Rasputin.',
			'rumors about SIVA.',
			'tower comms.',
			'Drifter\'s scams.',
			'Banshee-44 ramble.',
			'Fenchurch\'s stories.',
			'Hope for the Future.',
			'Cayde-6\'s journals.',
			'Vuvuzela prattle.',
			'Toland\'s advice.',
			'Moon\'s Haunted.',
			'hissing silence.',
			'Saint-14\'s legend.',
			'Ikora\'s teachings.',
			'Colonel peckin\'.',
			'Shaxx shout a lot.',
			'Benedict99-40.',
			'Calus\'s entitlement.',
			'Osiris\'s prophecies.',
			'Riven\'s bargains.',
			'Asher complain.',
			'Ada-1\'s history.',
			'Osiris\'s #1 fan...',
			'Eris\'s vengeance.',
			'Failsafe & Failsafe.',
			'Spider\'s deals.',
			'Saladin\'s praise.',
			'██████',
			'-donate',
			'ṯ̵̟̰͙͈͉̞̇̌͋̐̋͘h̶̛̩̱͈̠̦̦͎̮̯̜͗̌́́ę̴̛̗̞̄͛͂̇͛̈́͐̽ ̸̧̡̙͇̙͈̱͋̂̈̇̊͂̈̚͠ͅH̴̖̿̓̏̾̐̒͋̎͘e̶͚͖͇̘̤̯̰̔̄ľ̶̨̨̮̺̰͇̉͒̕i̷̡̛͖͖̗̲̤̮̼̒̈̀̿͝ͅo̴͍̠͔͒̚͜p̴̡̝͇͚̗͓̠̆̆̄̂̐̚͝ͅa̵̰̝̿͌u̴̡̼̘̬͕͊̇͗ͅs̸̨̟͔͔̹̜̹̯͉̱̾̾̄̈́̚ȩ̶̝̠̝̠̱̘͖͈̀́̋͋̎́̊͜'
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

	//SIGNUP FETCHING LIVE
	const live = client.guilds.cache.get('229275151437529088');
	const pc = live.channels.cache.get('695319422088380447');
	const xb = live.channels.cache.get('695319770697826304');
	const errorChannel = live.channels.cache.get('658725873700175933');

	//SIGNUP FETCHING BETA
	// const beta = client.guilds.cache.get('569908733090594827');
	// const pc = beta.channels.cache.get('693960008139931669');
	// const xb = beta.channels.cache.get('693960342044409866');

	pc.messages.fetch({ limit: 15 })
		.then(messages => console.log(`${messages.size} messages fetched for PC Signups.`))
		.catch(error => errorChannel.send(`I was unable to fetch the signup lists for \`PC\`. Error: ${error}.`));

	xb.messages.fetch({ limit: 15 })
		.then(messages => console.log(`${messages.size} messages fetched for XB1 Signups.`))
		.catch(error => errorChannel.send(`I was unable to fetch the signup lists for \`XB1\`. Error: ${error}.`));
};