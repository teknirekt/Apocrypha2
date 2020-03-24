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
		'This one met the business end of Jötunn.',
		'The Nine have judged you unworthy.',
		'I cannot permit you to exist.\n-*Black Hammer*',
		'AI-COM/RSPN: TARGET//EXPENDABLE//ASSET//ELIMINATED.',
		'It helps to actually shoot the bad guys. RIP',
		'Do not look at me, creature! You are weak. Undisciplined. Cowering behind walls. You\'re not brave. You\'ve merely forgotten the fear of death.\n\nAllow me to reacquaint you.\n-*Dominus Ghaul*',
		'Life is a delicate thing, Guardian. Hope... faith... love... in an instant, they\'re gone. Everything you\'ve sworn to protect is lost. And all you\'re left with is silence and shadow... and the knowledge that you should\'ve done more.\n-*CMDR Zavala*',
		'Your kind never deserved the power you were given. I am Ghaul. And your Light... is mine.\n-*Dominus Ghaul*',
		'Bonewalkers of the Hive await.\n-*Variks the Loyal*',
		'Hive spawn claw their way towards your Light.\n-*Variks the Loyal*',
		'Not fighting today? Weak? Scared?\n-*Variks the Loyal*',
		'You know it\'s starting to concern me how seldom you talk. We\'ve been through a lot together, the neural symbiosis is pretty far progressed, but you\'d be surprised how little I understand what you\'re thinking.\n-*Ghost*',
		'Guardian... something\'s wrong...\n-*Ghost*',
		'Your Traveler should have chosen me, and now it is too late! Look upon your dead god! It won\'t save humanity a second time! I am Ghaul! I claim what is mine!\n-*Dominus Ghaul*',
		'For now, let\'s keep this between us. I\'d hate to have to throw you off this wall.\n-*Ikora*',
		'There is no Light here. You are alone. You shall drift. You shall drown in the Deep.\n-*Xol, Will of Thousands*',
		'*How\'s your sister?*\n-*Cayde-6*',
		'I\'m comin\' home, Ace.\n-*Cayde-6*',
		'One by one, Crota slaughtered many Guardians. The Light stood by and did nothing. And a great disaster ensued. In Light, there is only death. Respite lies ahead.\n-*Ghost, possessed*',
		'Don\'t you recognize us? We are not your friend. We are not your enemy. We are your... salvation.\n-*The Darkness*',
		'We have heard your cries for help. And soon we will answer.\n-*The Darkness*',
		'Everything I\'ve ever built has died. I\'ve buried most of the people I\'ve met. I... I can\'t do this. Not anymore.\n-*Saint-14*',
		'I\'ve killed enough of you to end a war. And you took my Light. I guess that makes us even. What are you waiting for? Last words? Finish it, you cowards!\n-*Saint-14*',
		'Since the day I met you, I swore I would make it my duty to follow your example. I\'m still trying.\n-*Saint-14*'

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