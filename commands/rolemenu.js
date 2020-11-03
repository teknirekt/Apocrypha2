const Discord = require('discord.js');

module.exports = {
	name: 'rolemenu',
	guildOnly: true,
	aliases: ['getrole', 'roles', 'getroles', 'assign', 'assignroles'],
	category: 'mod',
	description: 'Grants roles to the member.',
	args: true,
	async execute(message, args) {

        const region = new Discord.MessageEmbed()
            .setTitle(`Set your primary region/platform for ${message.guild.name}!`)
            .setDescription('*Select the corresponding reaction at the bottom.*')
            .setFooter('↓↓↓ Select your emoji here. ↓↓↓')
            .setColor('#2F2FD0')
            .addFields([
				{ name: '__**European Union / UK**__', value: '<:PC_EU:743200257273364579> [Steam]\n<:XB_EU:743201659186053164> [XBOX]', inline: true },
				{ name: '__**United States / Canada**__', value: '<:PC_NA:743200260272291870> [Steam]\n<:XB_NA:743201662717394964> [XBOX]', inline: true},
                { name: '__***Notices***__', value: '🔹This is the only role that is __required__, all other menus are *__optional__*.\n▫️Color represents platform (PC/White) - (XB/Green).\n▫️*Your name in the roster will be this color for easy ID.*\n⚠️This is your *preferred* platform only, Limit 1.', inline: false }
			]);

		const extras = new Discord.MessageEmbed()
            .setTitle(`Optional roles for ${message.guild.name}!`)
            .setDescription('*Select the corresponding reaction at the bottom.*')
            .setFooter('↓↓↓ Select your emoji here. ↓↓↓')
            .setColor('#2F2FD0')
            .addFields([
                { name: '__**Cross-save Platforms**__', value: '<:XS_PC:744689975257464872> Steam PC\n<:XS_XB:744689974502490163> XBOX\n<:XS_PS:744689977568526424> Playstation\n<:XS_ST:744689982605754429> Stadia', inline: true },
				{ name: '__**Discord Extras**__', value: '<:spam:744688612091756594> Auto-memes +\n<:saltmine:744689538395275384> The Salt Mines\n<:spoilers:744689759087231047> Spoiler Zone\n<:other:753435051961745538> Other Games', inline: true },
				{ name: '__***Notices***__', value: '🔹Cross-save roles are *additional* to your primary platform.\n▫️Additional channel roles will grant access to those areas.\n▫️Salt Mines & Spoiler Zone are separated **for a reason.**\n▫️"Other Games" are channels not related to Destiny.', inline: false }
			]);

		if (!args) {
			message.channel.send('Please specify which menu you want to load.')
			return;
		}
			
		if (args[0] === 'region') {
			message.channel.send(region).then(message => {
				message.react(':PC_EU:743200257273364579')
					.then(() => message.react(':XB_EU:743201659186053164'))
					.then(() => message.react(':PC_NA:743200260272291870'))
					.then(() => message.react(':XB_NA:743201662717394964'))
				});
				return;
		}
		if (args[0] === 'extras') {
			message.channel.send(extras).then(message => {
				message.react(':XS_PC:744689975257464872')
					.then(() => message.react(':XS_XB:744689974502490163'))
					.then(() => message.react(':XS_PS:744689977568526424'))
					.then(() => message.react(':XS_ST:744689982605754429'))
					.then(() => message.react(':spam:744688612091756594'))
					.then(() => message.react(':saltmine:744689538395275384'))
					.then(() => message.react(':spoilers:744689759087231047'))
					.then(() => message.react(':other:753435051961745538'))
			});
			return;
		}
	}
};



	// 	const role = message.member.roles.cache.find( r => ['XB1_NA', 'XB1_EU', 'PC_NA', 'PC_EU'].includes(r.name));

	// 	const access = message.guild.roles.cache.find(r => r.name === 'IronWolves');
	// 	const receivedEmbed = message.embeds[0];

	// 	const rolemenu = new Discord.MessageEmbed()
	// 		.setTitle(`Get new roles for ${message.guild.name}!`)
	// 		.setDescription('Select the corresponding emoji at the bottom to continue.')
	// 		.setFooter('↓↓↓Select emoji here.↓↓↓')
	// 		.setThumbnail('https://i.ibb.co/7kwjpRq/redactedpng.png')
	// 		.setColor('#ff7373')
	// 		.addFields([
	// 			{ name: '__**Main Menu Options**__', value: '🌐 Region & Platform(primary)\n🕹 Cross-Save\n<:destiny:688465591715102745> Destiny 2 LFG\n🎲 Other Games\n*Note: region/platform required, others optional.*' },
	// 			{ name: '__**Optional Roles(CAUTION)**__', value: '<:spam:615585267033702424> Spam, for **Club Afterdark**, **Reddit Memes** & More...\n(you\'ll want to mute channels here.)\n<:spoilers:730866951387217973> Spoilers, provides access to the spoiler channel.'},
	// 			{ name: '__**Additional Information**__', value: '*If you need to change your primary platform after it has been set, use the command modifier `-getroles reset` to change to the correct one.*' }
	// 		]);

	// 	const Timeout = new Discord.MessageEmbed()
	// 		.setTitle('**The command has expired due to time-out. Please try again later.**')
	// 		.setColor('#000000');

	// 	const region = new Discord.MessageEmbed(receivedEmbed)
	// 		.setTitle('__Supported Regions/Platforms__')
	// 		.setDescription('*Oceanic Region, PS4, and Stadia are not supported.*')
	// 		.addFields([
	// 			{ name: '__**US/CA Region**__', value: '<:PC_NA:688503043561619491> Steam PC\n<:XB1_NA:688514143778635881> XBOX ONE' },
	// 			{ name: '__**EU/UK Region**__', value: '<:PC_EU:688503037894852697> Steam PC\n<:XB1_EU:688514142071816248> XBOX ONE' },
	// 			{ name: '__**Additional Information**__', value: '*Note: If you select the incorrect region/platform, please remove the incorrect emoji first, then select the correct one afterwards while this menu is active.*'}
	// 		])
	// 		.setThumbnail('https://i.ibb.co/80htxGF/globe.png', true)
	// 		.setColor('#2F2FD0')
	// 		.setFooter('Select your PRIMARY platform to be identified as here.');

	// 	const xs = new Discord.MessageEmbed(receivedEmbed)
	// 		.setTitle('__Available Cross-Save Platforms__')
	// 		.setDescription('<:XS_PC:619986510825127947> **Steam PC**\n<:XS_XB:619986511051358210> **XBOX ONE**\n<:XS_PS:619986517485682689> **Playstation 4**\n<:XS_ST:619986521407356964> **Google Stadia**')
	// 		.setThumbnail('https://i.ibb.co/drSwC8N/cs.jpg')
	// 		.setColor('#2F2FD0')
	// 		.setFooter('Select any NON-PRIMARY cross-save enabled system.');
		
	// 	const d2 = new Discord.MessageEmbed(receivedEmbed)
	// 		.setTitle('__Available Destiny 2 LFG Roles__')
	// 		.setDescription('<:raid:611595872580534326> **Raids & General PVE**\n<:gambit:611595618900639806> **Gambit/Reckoning**\n<:pvp:611595656175419398> **Standard PVP**\n<:comp:611595575195992067> **Comp & Trials**')
	// 		.setThumbnail('https://i.ibb.co/bPLXJ6q/vanilla.jpg', true)
	// 		.setColor('#2F2FD0')
	// 		.setFooter('Selecting a role will notify you if someone is LFG.');
		
	// 	const others = new Discord.MessageEmbed(receivedEmbed)
	// 		.setTitle('__Currently Available Game Roles__')
	// 		.addFields([
	// 			{ name: '__**Individual Games**__', value: '<:W_F:611695174615040074> ► Warframe\n<:HALO:651458650711392266> ► Halo\n<:BL_3:611821316005167113> ► Borderlands\n<:ACNH:710218343876919417> ► Animal Crossing\n<:MINE:710220082768511036> ► Minecraft / Deep Rock\n<:CARD:710222056305852496> ► Cards Against / MTGA' },
	// 			{ name: '__**Game Categories**__', value: '<:TFPS:688804913911824433> ► Team-based FPS (OW/CS/R6S)\n<:V_R:611691183650898102> ► Virtual Reality\n<:B_R:651463106634973205> ► Battle Royale Games\n<:MMO:623548135360430090> ► MMORPGs' }
	// 		])
	// 		.setThumbnail('https://i.ibb.co/GvBd0md/download.jpg')
	// 		.setColor('#2F2FD0')
	// 		.setFooter('Selecting a role will open access to that channel.');

	// 	const filter = (reaction, user) => ['🌐', '🕹', 'destiny', '🎲'].includes(reaction.emoji.name) && user.id === message.author.id;
		
	// 	if (!message.member.roles.cache.some(r => ('RΞDΛCTΞD').includes(r.name))) {
	// 		message.channel.send('Charlemagne must first verify your clan affiliation before proceeding.\n*Please play for a short time to update the API.*\n\nIn the event this does not solve the issue, contact Teknirekt.')
	// 			.then(message => {
	// 				if (message.channel.name !== 'landing') {
	// 					message.delete({ timeout: 20000 });
	// 				}
	// 			});
	// 		return;
	// 	} 
	// 	if (args[0] === 'reset') {
	// 		if (!role) {
	// 			message.channel.send('You do not have a Region/Platform roll currently assigned. Please use *just* `-getroles` to assign one.')
	// 				.then(message => { 
	// 					if (message.channel.name !== 'landing') {
	// 						message.delete({ timeout: 30000 });
	// 					}
	// 				}).catch(console.error);
	// 			return;
	// 		} else
	// 			message.channel.send(`You have been removed from the ${role.name} role, please re-assign the correct one below.`, region)
	// 				.then(message => {
	// 					message.react(':PC_NA:688503043561619491')
	// 						.then(() => message.react(':XB1_NA:688514143778635881'))
	// 						.then(() => message.react(':PC_EU:688503037894852697'))
	// 						.then(() => message.react(':XB1_EU:688514142071816248'))
	// 						.then(() => { 
	// 							if (message.channel.name !== 'landing') {
	// 								message.delete({ timeout: 30000 });
	// 							}
	// 						});
	// 				});
	// 		message.member.roles.remove(role);
	// 		message.member.setNickname(message.member.user.username);
	// 		return;
	// 	} 
	// 	else
	// 		message.member.roles.add(access);
	// 	message.channel.send(rolemenu).then(message => {
	// 		message.react('🌐')
	// 			.then(() => message.react('🕹'))
	// 			.then(() => message.react(':destiny:688465591715102745'))
	// 			.then(() => message.react('🎲'))
	// 			.then(() => message.react(':spam:615585267033702424'))
	// 			.then(() => message.react(':spoilers:730866951387217973'));

	// 		message.awaitReactions(filter, {
	// 			max: 1,
	// 			time: 40000,
	// 			error: ['time'],
	// 		}).then(collected => {

	// 			const reaction = collected.first();

	// 			if (reaction.emoji.name === '🌐') {

	// 				message.edit(region).then(() => message.reactions.removeAll())
	// 					.then(() => message.react(':PC_NA:688503043561619491'))
	// 					.then(() => message.react(':XB1_NA:688514143778635881'))
	// 					.then(() => message.react(':PC_EU:688503037894852697'))
	// 					.then(() => message.react(':XB1_EU:688514142071816248'))
	// 					.then(() => { 
	// 						if (message.channel.name !== 'landing') {
	// 							message.delete({ timeout: 30000 });
	// 						}});
	// 			}
	// 			if (reaction.emoji.name === '🕹') {
	// 				message.edit(xs).then(() => message.reactions.removeAll())
	// 					.then(() => message.react(':XS_PC:619986510825127947'))
	// 					.then(() => message.react(':XS_XB:619986511051358210'))
	// 					.then(() => message.react(':XS_PS:619986517485682689'))
	// 					.then(() => message.react(':XS_ST:619986521407356964'))
	// 					.then(() => { 
	// 						if (message.channel.name !== 'landing') {
	// 							message.delete({ timeout: 30000 });
	// 						}});
	// 			}
	// 			if (reaction.emoji.name === 'destiny') {

	// 				message.edit(d2).then(() => message.reactions.removeAll())
	// 					.then(() => message.react(':raid:611595872580534326'))
	// 					.then(() => message.react(':gambit:611595618900639806'))
	// 					.then(() => message.react(':pvp:611595656175419398'))
	// 					.then(() => message.react(':comp:611595575195992067'))
	// 					.then(() => { 
	// 						if (message.channel.name !== 'landing') {
	// 							message.delete({ timeout: 30000 });
	// 						}});
	// 			}
	// 			if (reaction.emoji.name === '🎲') {
	// 				message.edit(others).then(() => message.reactions.removeAll())
	// 					.then(() => message.react(':W_F:611695174615040074'))
	// 					.then(() => message.react(':HALO:651458650711392266'))
	// 					.then(() => message.react(':BL_3:611821316005167113'))
	// 					.then(() => message.react(':ACNH:710218343876919417'))
	// 					.then(() => message.react(':MINE:710220082768511036'))
	// 					.then(() => message.react(':CARD:710222056305852496'))
	// 					.then(() => message.react(':TFPS:688804913911824433'))
	// 					.then(() => message.react(':V_R:611691183650898102'))
	// 					.then(() => message.react(':B_R:651463106634973205'))
	// 					.then(() => message.react(':MMO:623548135360430090')).then(() => { 
	// 						if (message.channel.name !== 'landing') {
	// 							message.delete({ timeout: 30000 });
	// 						}});
	// 			}
	// 		}).catch(() => {
	// 			message.edit(Timeout).then(message => message.reactions.removeAll())
	// 				.then(message => {
	// 					if (message.channel.name !== 'landing') {
	// 						message.delete({ timeout: 10000	});
	// 					}
	// 				});
	// 			return;
	// 		});
	// 	}).catch(error => console.log(error));