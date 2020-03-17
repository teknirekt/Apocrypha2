require('../index.js');
const Discord = require('discord.js');

module.exports = (client, member) => {

	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;
    
	const leavelist = [
		'The darkness has consumed you.',
		'Your Light fades away...',
		'You are now lost in time thanks to the Vex.',
		'You have been corrupted by the Hive.',
		'This Guardian was Taken.',
		'This Guardian was eliminated by the Cabal.',
		'This one has Fallen.',
		'You... shall drown... in.. the Deep.',
		'Shin found you and now you\'re nothing but ash.',
		'Rasputin dropped a WarSat on you.',
		'One of Fikrul\'s skreeb took you out, so sad.',
		'You had been a hero for so long, but pride has led you down sorrow\'s road.',
		'You were killed by the Architects.',
		'You had a misadventure.',
		'This Guardian was converted into a Remnant by SIVA.',
		'Hey! Guess who just met TR3-VR?',
		'This one met the business end of JÃ¶tunn.',
		'The Nine have judged you unworthy.',
		'I cannot permit you to exist. -*Black Hammer*',
		'AI-COM/RSPN: TARGET//EXPENDABLE//ASSET//ELIMINATED.',
		'It helps to actually shoot the bad guys. RIP',
		'Do not look at me, creature! You are weak. Undisciplined. Cowering behind walls. You\'re not brave. You\'ve merely forgotten the fear of death.\n\nAllow me to reacquaint you. -*Dominus Ghaul*',
		'Life is a delicate thing, Guardian. Hope... faith... love... in an instant, they\'re gone. Everything you\'ve sworn to protect is lost. And all you\'re left with is silence and shadow... and the knowledge that you should\'ve done more. -*CMDR Zavala*',
		'Your kind never deserved the power you were given. I am Ghaul. And your Light... is mine. -*Dominus Ghaul*',
		'Bonewalkers of the Hive await. -*Variks the Loyal*',
		'Hive spawn claw their way towards your Light. -*Variks the Loyal*',
		'Not fighting today? Weak? Scared? -*Variks the Loyal*',
		'You know it\'s starting to concern me how seldom you talk. We\'ve been through a lot together, the neural symbiosis is pretty far progressed, but you\'d be surprised how little I understand what you\'re thinking. -*Ghost*',
		'Guardian... something\'s wrong... -*Ghost*'
		//ADDED AFTER UPDATE

	];
	const random = Math.floor(Math.random() * leavelist.length);
	const leave = new Discord.MessageEmbed()
		.setTitle('__**Departing Discord Member:**__', true)
		.addField(member.displayName, `${leavelist[random]}`, true)
		.setThumbnail(member.user.displayAvatarURL())
		.setFooter(`User ID: ${member.user.id}`, member.user.displayAvatarURL())
		.setColor('#ed0f08')
		.setTimestamp();
	channel.send(leave);
};