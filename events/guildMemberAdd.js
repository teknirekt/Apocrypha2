require('../index.js');
const Discord = require('discord.js');

module.exports = async (client, member) => {
	//ROLES
	const visitor = member.guild.roles.cache.find(r => r.name === 'Visitor');
	const intro = member.guild.roles.cache.find(r => r.name === 'Beginner');
	const platform = member.guild.roles.cache.find(r => r.name === '=====|[ Clan Rank/Platform ]|=====');
	
	const flairdiv = member.guild.roles.cache.find(r => r.name === '=====|[ Destiny2 Accolades ]|=====');
	
	//CHANNELS
	const landing = member.guild.channels.cache.find(ch => ch.name === 'landing');
	const reportchannel = member.guild.channels.cache.find(ch => ch.name === 'workshop');
	//WELCOME DM
	const instructions = new Discord.MessageEmbed()
		.setTitle('Welcome to ᵀᴴᴱ [RΞDΛCTΞD] Community')
		.setColor('#ae0001')
		.addFields(
			{ name: '__Instructions for **Visitors**__', value: 'No further action required. Enjoy your stay!\n*You may access all visible channels, but not the main area(s).*' },
			{ name: '__Instructions for **NEW Applicants/Members**__', value: `*Within 24hrs of joining the discord:*\n**Be sure to follow all instructions posted in ${landing.toString()}.**\n*JUST joining the discord - then doing nothing, is non-compliance.*` },
			{ name: '__**Important Channels (Visitor\'s Center)**__', value: '*If joining as a member, review the channels in this category as it should contain the answers you seek regarding how we operate.*' },
			{ name: '__**Additional Information**__', value: `Those marked as \`Visitor\` __are removed weekly at reset__. ${landing.toString()} is auto-purged.\n[**Clan Page**](https://www.bungie.net/en/ClanV2?groupid=1427868) **|** [**Steam Group**](https://steamcommunity.com/groups/RedactedDestiny) **|** **Invite others:** \`discord.gg/2AuhYX2\`\n*This is the only unsolicited DM you will receive from me.*` },
		)
		.setFooter('I am the AI liason for ᵀᴴᴱ [RΞDΛCTΞD].', 'https://i.ibb.co/q5pBWfW/v12.png');
	//WELCOME EMBED
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;

	const welcomelist = [
		'ᵀᴴᴱ [RΞDΛCTΞD] welcomes you!',
		'Eyes up Guardian!',
		'Lock \'n Load Guardian. Time to kick ass and chew bubblegum!',
		'We need to help Eris Morn on Luna, are you ready?',
		'Calus is calling his shadows. Will you answer?',
		'When you whisper to the void, does it whisper back? -*Rahool*',
		'Defy extinction. -*Bones of Eao*',
		'Eternity is very close. Can you feel yourself slipping? -*Necrochasm*',
		'Cayde riff in 6, watch us for the changes and uh, try to keep up.',
		'GUARDIAN WILL DISMANTLE MINES... YESSS?',
		'The Drifter needs someone for his scams, you game?',
		'Welcome Guardian, are you ready to peer beyond the veil?',
		'The Darkness draws near, are you prepared?',
		'Prepare for transmat!',
		'The Nine have judged you favorably.',
		'AI-COM/RSPN: ASSETS//NEW//MEMBER//IDENTIFIED.',
		'Moon\'s Haunted.',
		'Sweep sweep Guardian, Sweep Sweep.',
		'Welcome to the Last Safe City.',
		'Come, come! Drink from this Chalice, O\' Champion Mine.',
		'WHAT DO YOU MEAN YOU CAN\'T CONCENTRATE WHEN I\'M YELLING? RELAX! -*Lord Shaxx*',
		'Operation oboe has begun. No one gets left behind, Piccolo! -*CMDR Zavala*',
		'Ah, I\'ve seen you met my new friends, Failsafe and her evil twin.. Failsafe. -*Cayde-6*',
		'The first kill is a metaphor for winning the whole thing. -*Cayde-6*',
		'Whether we wanted it or not, we\'ve stepped into a war with the Cabal on Mars. So let\'s get to taking out their command, one by one.\nValus Ta\'aurc. From what I can gather, he commands the Siege Dancers from an Imperial Land Tank just outside of Rubicon. He\'s well protected, but with the right team, we can punch through those defenses, take this beast out, and break their grip on Freehold.',
		'Guardians aren\'t supposed to investigate their past. That\'s the rule.\nBut I\'m not good with rules. Not when there\'s this much at stake. -*Ana Bray*',
		'That\'s cute, you\'ve got one of the uptight Ghosts. -*Ana Bray*',
		'You are the last hope of the Light? I have taken entire worlds! You are not worthy to face me! -*Oryx, The Taken King*',
		'Come for me, warrior of Light. I will finish what Crota began. -*Oryx, The Taken King*',
		'A knife, thrown just right, can accomplish wonderful things. -*Cayde-6*',
		'Who am I to offer advice to a legend? You\'re the sharp blade, the fast draw, the dark arrow. We\'re lucky to have you out there. -*Cayde-6*',
		'I tried standing under a falling Warsat once. Good thing I have a Ghost. -*Cayde-6*',
		'You just never quit do you? Took out Ghaul. Woke up the traveler, and now half of what I hear on the streets is how much you and your clan are making a difference. That\'s why I started this whole clan thing in the first place. People are still waiting for the vanguard to solve all their problems for them. People like you are making a difference. No pressure. -*Suraya Hawthorne*'

	];
	const random = Math.floor(Math.random() * welcomelist.length);
	const welcome = new Discord.MessageEmbed()
		.setTitle('__**New Discord Member:**__')
		.addFields(
			{ name: member.displayName, value: `${welcomelist[random]}` }
		)
		.setThumbnail(member.user.displayAvatarURL())
		.setFooter(`User ID: ${member.user.id}`, member.user.displayAvatarURL())
		.setColor('#4555b9')
		.setTimestamp();
	channel.send(welcome);
	//ROLE ASSIGN
	await member.roles.add([ platform, flairdiv, visitor, intro ])
		.catch(() => reportchannel.send(`I had an issue assigning roles to ${member.displayName}.`));
	//WELCOME DM
	await member.send(instructions).catch(() => reportchannel.send(`I was unable to send ${member.user.tag} the welcome DM.`));
};