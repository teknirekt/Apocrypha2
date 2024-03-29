const Discord = require('discord.js');

module.exports = {
	name: 'guide',
	args: true,
	aliases: ['guides', 'g'],
	description: 'On-the-fly guide posting by expansion/season.',
	usage: ['legacy | forsaken | shadowkeep | beyond etc..'],
	category: 'general',
	async execute(message, args) {
		if (!args.length) {
			message.channel.send('You didn\'t specify which guide to display.');
			return;
		}
		//========EMBEDS
		const extras = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Extra Resources Available')
			.setDescription('*These are additional things to assist you.*')
			.setURL('https://www.reddit.com/r/DestinyTheGame/comments/dd7fh3/in_the_spirit_of_new_light_heres_a_sizeable_list/')
			.setThumbnail('https://www.bungie.net/common/destiny2_content/icons/icon_m0da74290bef8b05f7cdf2e10aec14dd5.png')
			.addFields(
				{ name: '__Reddit Sources__', value: '[**r/DestinyTheGame**](https://www.reddit.com/r/DestinyTheGame/) -General Info\n[**r/RaidSecrets**](https://www.reddit.com/r/raidsecrets/) -Spoiler Heavy\n[**r/CrucibleGuidebook**](https://www.reddit.com/r/CrucibleGuidebook/) -Everything PVP\n[**r/GambitPlaybook**](https://www.reddit.com/r/GambitPlaybook/) -Everything Gambit\n[**r/DestinyLore**](https://www.reddit.com/r/DestinyLore/) -Everything Lore', inline: false },
				{ name: '__Websites__', value: '[**DestinyItemManager(DIM)**](https://app.destinyitemmanager.com/)\n[**Destiny Sets**](https://destinysets.com/)\n[**Light.gg**](https://light.gg/)\n[**Braytech.org**](https://braytech.org/)\n[**Where\'s Xur?**](https://wherethefuckisxur.com)\n[**Blueberries.gg**](https://www.blueberries.gg)', inline: true },
				{ name: '__Mobile Apps & Misc.__', value: '[**Redrix**](https://redrix.io/) 📱\n[**Vault Cleaner**](https://destinyrecipes.com/vault)\n[**Roll Appraisal**](https://www.light.gg/god-roll/roll-appraiser/)\n[**D2 Armor Picker**](https://mijago.github.io/D2ArmorPicker/#/)\n[**D2 Gunsmith**](https://d2gunsmith.com/)', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__Soundboards__', value: '**[MEGA Board](https://d2soundboard.mikey.app/#/ \'website\')\n[Alt. Drifter Board](https://d2.asun.co/drifter/ \'website\')**', inline: true },
				{ name: '__Spreadsheets__', value: '**[Enhanced Traits](https://docs.google.com/spreadsheets/d/1L5Tqbkmy5HmYRl-2ML6e0YJzyg59ueu73H2xXD9bPyg/htmlview \'googledocs\')**', inline: true }
			)
			.setFooter('Command: -g extras');

		const legacy = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('RETIRED CONTENT')
			.setDescription('*This is INACTIVE content only.*')
			.setURL('https://www.bungie.net/7/en/Destiny/NewLight')
			.setThumbnail('https://i.ibb.co/bPLXJ6q/vanilla.jpg')
			.addFields(
				{ name: '**__Leviathan Raid Breakdown__**', value: '[**Entrance & Baths**](https://youtu.be/FVAvumqd2Yw \'Datto\') [🗺](https://i.ibb.co/1LjVn77/levi-courtyard.jpg \'Castellum Image\') [🗺](https://i.ibb.co/9bKxS5z/levi-baths-alt.jpg \'Baths Image\')\n[**Pleasure Gardens**](https://youtu.be/pPg7rxKxf8o \'Datto\') [🗺](https://i.ibb.co/VHLxDXX/gardens.jpg \'Gardens Image\')\n[**The Gauntlet**](https://youtu.be/T0DbeXjkKRs \'Datto\') [🗺](https://i.ibb.co/n8hm321/levi-gauntlet.jpg \'Gauntlet Image\')\n[**Emperor Calus**](https://youtu.be/aeKeJ6x_Zi8 \'Datto\') [🗺](https://i.ibb.co/HVCW7mg/levi-calus.jpg \'Throne Room Image\')\n[**Prestige Leviathan**](https://bit.ly/2i5KPp4 \'Datto\')\n[**Underbelly Map**(Image)](https://i.ibb.co/HhrggHc/Underbelly.jpg \'Image Link\')\n[**Loot Pool**(Image)](https://i.ibb.co/jfpvsjM/levi-loot.jpg \'Image Link\')', inline: false },
				{ name: '**__Curse of Osiris__**', value: '[**Eater of Worlds**](https://youtu.be/5WljA6Krwbk \'Arekkz\') [🗺](https://i.ibb.co/5GWFGjf/platforms.png \'Reactor Image\') [🗺](https://i.ibb.co/NpSHG9p/Argos.jpg \'Argos Image\')\n[**Lost Prophecies**](https://d2.destinygamewiki.com/wiki/Lost_Prophecies \'Wiki Link\')', inline: true },
				{ name: '**__Warmind__**', value: '[**Spire of Stars**](https://youtu.be/CSN6MIpjW04 \'Datto\')\n[**Val Ca\'our**](https://youtu.be/IxgTK2dHGis \'Datto\')  [🗺](https://i.ibb.co/X51D6fn/valcaour.png \'Val Ca\'our\')', inline: true },
				{ name: '**__Season of the Forge__**', value: '[**SotP pt. 1&2**](https://youtu.be/ttoHmTTqLOg \'Datto\') [🗺](https://i.ibb.co/TtZVtmJ/botza.png \'Downtown Map\') [🗺](https://i.ibb.co/0X57VNW/scourge-sewers.png \'Sewers Map\') [🗺](https://i.ibb.co/JvT5r4d/sparrow.png \'Sparrow Race\')\n[**Insurrection Prime**](https://youtu.be/daka2OKi8xY \'Datto\') [🗺](https://i.ibb.co/8dBLXpX/ip2.png \'IP Chart\')\n[**SotP Dummies Guide**](https://youtu.be/YMDqF9YLBtY \'KACKIS\')', inline: false },
				{ name: '**__Season of the Drifter__**', value: '__**Zero Hour**__', value: '[**Heroic Route**](https://youtu.be/-LI2NuzxsdE \'Ninja Pups\')\n[**Configuration Calculator**](http://ensemblefc.com/cryptarchlocks.php)\n[**Configuration Explaination**](https://youtu.be/n5CrjzGF_g0 \'Ninja Pups\')', inline: false },
				{ name: '**__Season of Opulence__**', value: '[**Crown of Sorrows pt. 1&2**](https://youtu.be/tXR6bwuXKpg \'Datto\') [🗺](https://i.ibb.co/b1vZB3Z/izH3D7Tg.jpg \'Ritual\')\n[**Crown of Sorrows pt. 3&4**](https://youtu.be/_ZrNvGYDf6E \'Datto\') [🗺](https://i.ibb.co/YbYVMm5/e0Fvwfg.jpg \'Phase 1\') [🗺](https://i.ibb.co/XpNMZpv/4HpmzGq.jpg \'Phase 2\')\n[**All Challenges**](https://youtu.be/3o-9FZPScHc \'Datto\')', inline: false }
			)
			.setFooter('Command: -g legacy');

		const expired = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Expired Seasonal Content (Year 3)')
			.setDescription('*This is for archival purposes.*')
			.setURL('https://www.bungie.net/7/en/Seasons')
			.setThumbnail('https://www.bungie.net/common/destiny2_content/icons/e162742a72895355d1a2d7a2fbc73188.png')
			.addFields(
				{ name: '__**Season of the Undying**__', value: '*Oct. 01 - Dec. 10*\n[**Info Page**](https://www.bungie.net/7/en/Seasons/SeasonOfTheUndying)\n[**WEB LORE**](https://www.destinypedia.com/Weblore#Shadowkeep_Weblore)', inline: true },
				{ name: '__**Season of Dawn**__', value: '*Dec. 10 - March 09*\n[**Info Page**](https://www.bungie.net/7/en/Seasons/SeasonOfDawn)\n[**WEB LORE**](https://www.destinypedia.com/Weblore#Season_of_Dawn_Weblore)\n======\n[**New Perks & Weapons**](https://youtu.be/nL6mqgReRJo \'NinjaPups\')\n[**Corridors of Time**](https://youtu.be/55ecIgP9svc \'Esoterickk\')', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__**Season of Worthy**__', value: '*March 10 - June 09*\n[**Info Page**](https://www.bungie.net/7/en/Seasons/SeasonOfTheWorthy)\n[**WEB LORE**](https://www.destinypedia.com/Weblore#Season_of_the_Worthy_Weblore)\n======\n[**Season In-depth**](https://youtu.be/R14hd9gPgL8 \'Datto\')\n[**Warmind Mods**](https://youtu.be/rpaaDVl485s \'Datto\')', inline: true },
				{ name: '__**Season of Arrivals**__', value: '*June 09 - Nov. 09*\n[**Info Page**](https://www.bungie.net/7/en/Seasons/SeasonOfArrivals)\n[**WEB LORE**](https://www.destinypedia.com/Weblore#Season_of_Arrivals_Weblore)\n======\n[**Umbral Engram System**](https://youtu.be/pL8J6L-PP4Y \'xHoundishx\')\n[**Heroic "Contact" PE**](https://youtu.be/ibC58GezyoU \'Esoterickk\')\n[**Prophecy Mechanics**](https://youtu.be/Msjcufwbnag \'NinjaPups\')\n[**Loot Table**](https://www.niris.tv/blog/prophecy-dungeon-loot-table \'Niris.tv\')', inline: true },
			)
			.setImage('https://i.ibb.co/Cz2X8pH/retired.png')
			.setFooter('Command -g expired');

		const forsaken = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Forsaken (Year 2)')
			.setDescription('*Some of this content has been removed.*')
			.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
			.setThumbnail('https://www.bungie.net/common/destiny2_content/icons/6394ba870887c8361fca4bcb0b91264c.png')
			.addFields(
				{ name: '__**Forsaken Exotics**__', value: '[**Wishender**](https://youtu.be/u7TsLMQ7sW4 \'Datto\')\n[**Malfeasance**](https://youtu.be/fLzyp8W7tN0 \'Datto\')\n[**Corrupted Eggs**](https://youtu.be/G8p9IcoTEYY \'NinjaPups\')', inline: true },
				{ name: '__**Misc Extras**__', value: '[**Cat Statues**](https://youtu.be/iw46L-xnYns \'NinjaPups\')\n[**Solo Shattered Throne**](https://youtu.be/e0C5WAx1Fwk \'Pyro\')\n[**Wall of Wishes**](https://idleanimation.com/last-wish-plates \'IdleAnimation\')', inline: true }
			)
			.setFooter('Command: -g forsaken');

		const shadowkeep = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Shadowkeep (Year 3)')
			.setDescription('*This is ACTIVE content only.*')
			.setURL('https://www.bungie.net/7/en/Destiny/Shadowkeep')
			.setThumbnail('https://www.bungie.net/common/destiny2_content/icons/e162742a72895355d1a2d7a2fbc73188.png')
			.addFields(
				{ name: '__**Lectern Charms**__', value: '[**Ethereal Charm**](https://youtu.be/ZEdxdr-ykoQ \'Esoterickk\')\n[**Horned Wreath**](https://youtu.be/mu_XJlC6yEE0 \'Esoterickk\')\n[**Captive Cord**](https://youtu.be/gNedr6dG4-g \'Esoterickk\')\n[**Bound Manacles**](https://youtu.be/yAHtHQgBH9g \'Esoterickk\')\n[**Necromantic Strand**](https://youtu.be/m4JEdQRu19w \'Esoterickk\')\n[**Withered Plumes**](https://youtu.be/nCPQJeNgpec \'Esoterickk\')\n[**Ralniks\'s Hatchet**](https://youtu.be/MN-tndUEgVY \'Esoterickk\')\n[**Fangs of Shun\'Gath**](https://youtu.be/-iKUXdZWEfE \'Esoterickk\')\n[**Ehrath\'Ur\'s Wreath**](https://youtu.be/55L2uMcAVsc \'Esoterickk\')' },
				{ name: '__**Shadowkeep Exotics**__', value: '[**Divinity**](https://youtu.be/2IQ6M43gEus \'Datto\')\n[**Xenophage**](https://youtu.be/1EGPjPkuE3k \'Datto\')\n[**Deathbringer**](https://youtu.be/t2ARvAJY8Ko \'Datto\')', inline: true },
				{ name: '__**Shadowkeep Extras**__', value: '[**NASA Emblem**](https://youtu.be/0ApvCVp36rY \'Esoterickk\')\n[**Hunt Time-trials**](https://www.niris.tv/blog/nightmare-hunts \'Niris.tv\')', inline: true }
			)
			.setFooter('Command: -g shadowkeep');

		const beyond = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Beyond Light (Year 4)')
			.setDescription('*This just expansion content.*')
			.setURL('https://www.bungie.net/7/en/Destiny/BeyondLight')
			.setThumbnail('https://www.bungie.net/common/destiny2_content/icons/384cec4adc621195325aebea4ebb49ec.png')
			.addFields(
				{ name: '__**General Info**__', value: '[**Leveling Guide**](https://youtu.be/KMHaq2sujZ0 \'Datto\')\n[**Exotic Kiosk**](https://youtu.be/MmHsfq3Z2zQ \'Datto\')\n[**Upgrade Stasis**](https://youtu.be/1nqs0bBWCYg \'xHoundishx\')\n[**2nd Aspect**](https://youtu.be/-Ci-QFjCxLo \'Esoterickk\')\n[**New Exotic Armor**](https://youtu.be/6EnOZOc3C68 \'xHoundishx\')', inline: true },
				{ name: '__**Europa Gear Chests**__', value: '[**Boots**](https://youtu.be/wNW5TLtp5zg \'Esoterickk\') **|** [**Gloves**](https://youtu.be/0zN_uO7rN7Y \'Esoterickk\')\n[**Chest**](https://youtu.be/r0aOI4UfeYE \'Esoterickk\') **|** [**Class**](https://youtu.be/a4II8tluE8Y \'Esoterickk\')\n[**Helmet**](https://youtu.be/KpKAWxtpfrk \'Esoterickk\')', inline: true },
				{ name: '__**Exotic Quests**__', value: '[**Salvation\'s Grip**](https://youtu.be/kXzUyS8FZXs \'Datto\')\n[**Lament &**\n**Cloudstrike**](https://youtu.be/18efqWWLq8A \'Datto\')', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__**Augmented Obsession**__', value: '[**Riis-Reborn** *(Riis)*](https://youtu.be/L752JHcCGgc \'Esoterickk\')\n[**Technocrat\'s Iron** *(Riis)*](https://youtu.be/1vSogg4K_Wo \'Esoterickk\')\n[**Kell\'s Rising** *(Riis)*](https://youtu.be/0QYBFZfrfg0 \'Esoterickk\')\n[**Nexus** *(Vex)*](https://youtu.be/KiLRVHdFWD0 \'Esoterickk\')\n[**Well of Infinitude** *(Vex)*](https://youtu.be/O74R7ide_Ok \'Esoterickk\')\n[**Creation** *(Bray)*](https://youtu.be/V4T-oRbf7Zc \'Esoterickk\')\n[**Bray Exoscience** *(Bray)*](https://youtu.be/QjsQVdlaYf4 \'Esoterickk\')\n[**Eternity** *(Bray)*](https://youtu.be/xCTC75LXQvQ \'Esoterickk\')', inline: true },
				{ name: '__**Beyond Light Extras**__', value: '[**All Entropic Shards**](https://youtu.be/qR7_yCjMw6w \'Esoterickk\')\n[**All Penguins**](https://youtu.be/c8gMlEe6UVk \'Esoterickk\')\n[**All Exo Frames**](https://youtu.be/uu-W653ZZBE \'Esoterickk\')', inline: true },
			)
			.setFooter('Command: -g beyond');
		
		const seasons4 = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Year 4 EXPIRED Seasonal Content')
			.setDescription('*This content is no longer playable.*')
			.setURL('https://www.bungie.net/7/en/Seasons')
			.setThumbnail('https://i.ibb.co/mHbPVmw/season15.png')
			.addFields(
				{ name: '__**Season of the Hunt**__', value: '[*Nov. 10 - Feb. 09*](https://www.bungie.net/7/en/Seasons/SeasonOfTheHunt \'bungie.net\')\n[**WEB LORE**](https://www.destinypedia.com/Weblore#Season_of_the_Hunt_Weblore \'destinypedia\')\n**The Dawning**(expired)\n[**Recipes**](https://i.ibb.co/tpHGt0n/Xfh7EVH.png \'imgbb\') **|** [**Ingredients**](https://i.ibb.co/kJzz0Lb/eptGJKA.png \'imgbb\')\n**Exotics**\n[**Hawkmoon**](https://youtu.be/98GoP7gBbNk \'Datto\')\n**Harbinger Feathers**\n**[wk1](https://youtu.be/NmdTwmw28KU \'Esoterickk\') | [wk2](https://youtu.be/S-qFxiG96Ng \'Esoterickk\') | [wk3](https://youtu.be/6_BtZRLnfiU \'Esoterickk\')**', inline: true },
				{ name: '__**Season of the Chosen**__', value: '[*Feb. 09 - May 11*](https://www.bungie.net/7/en/Seasons/SeasonOfTheChosen \'bungie.net\')\n[**Aspect of Influence**](https://youtu.be/dwGfZYA2k54 \'Esoterickk\')\n**Exotics**\n[**Dead Man\'s Tale**](https://youtu.be/WqTbe87ZuYc \'Datto\')\n*Heroic for catalyst*\n**Presage Secrets**\n[**Triumphs & Caches**](https://youtube.com/playlist?list=PLCe_gQqZx8OFAM0YHFts4f2VGZBd_6AvF \'Esoterickk\')', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__**Season of the Splicer**__', value: '[*May 11 - Aug 24*](https://www.bungie.net/7/en/Seasons/SeasonOfTheSplicer \'bungie.net\')\n[**Aspect of Interference**](https://youtu.be/tR5hs6dwf6g \'Esoterickk\')\n**Secrets**\n[**Eliksni Quarter**](https://youtu.be/pjSLde3hzOY \'Esoterickk\')\n[**Seasonal Story**](https://youtube.com/playlist?list=PLCe_gQqZx8OEMW7H1n0PsGIVsINmTBpz7 \'Esoterickk\')', inline: true },
				{ name: '__**Season of the Lost**__', value: '[*Aug 24 - Feb 22*](https://www.bungie.net/7/en/Seasons/SeasonOfTheLost)\n**Exotics\n[Ager\'s Scepter](https://youtu.be/c0b0TpZbtfs \'Esoterickk\')\nSecrets\n[Shattered Realm Items](https://youtu.be/RK9gSf58bC8 \'Esoterickk\')\nPatrol Anchors\n[EDZ](https://youtu.be/-kqH1gLTyNQ \'Esoterickk\') | [Shore](https://youtu.be/oXCHWjKEXpU \'Esoterickk\') | [Moon](https://youtu.be/K4UD0FcHfL0 \'Esoterickk\')\n[Seasonal Story](https://youtube.com/playlist?list=PLCe_gQqZx8OEKoHiitlPi577zh6Sh0Csa \'YouTube Playlist\')**', inline: true }
			)
			.setFooter('Command -g y4seasons');

			const dungeons = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Destiny 2 Dungeons')
			.setDescription('*This is info on all available dungeons.*')
			.setURL('https://www.bungie.net/7/en/Destiny/NewLight')
			.setThumbnail('https://www.bungie.net/common/destiny2_content/icons/082c3d5e7a44343114b5d056c3006e4b.png')
			.addFields(
				{ name: '__Shattered Throne__', value: '[**Basic How-to**](https://youtu.be/xWDOnB6HLWI \'Datto\')\n[**Solo Walk-through**](https://youtu.be/e0C5WAx1Fwk \'Pyro\')', inline: true},
				{ name: '__Pit of Heresy__', value: '[**Walk-through**](https://youtu.be/_mqPAOSg-64 \'Datto\') [🗺](https://i.ibb.co/fxQkTcY/HERESY-2.jpg \'Ogre Area\') [🗺](https://i.ibb.co/bmqtL1t/WMDLx83.png \'The Harrow\')\n[**PoH Solo/Flawless**](https://youtu.be/9SHm-kbUFkc \'NinjaPups\')', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__Prophecy__', value: '[**Walk-through**](https://youtu.be/Msjcufwbnag \'NinjaPups\')\n[**Loot Table**](https://www.niris.tv/blog/prophecy-dungeon-loot-table \'Niris.tv\')', inline: true },
				{ name: '__Grasp of Avarice__', value: '**[Walk-through](https://youtu.be/2yAldSinpss \'FalloutPlays\')\n[Wilheim-7\'s Messages](https://youtu.be/ZPKoGLLJylU \'Esoterickk\')\n[Loot Table](https://i.ibb.co/0qTMvWF/avariceloot.png \'imgbb\')**', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__Duality__', value: '**[Walk-through](https://youtu.be/LHTIiDvPC94 \'FalloutPlays\')\n[1st Bonus Chest](https://youtu.be/4NaCTaovMXs \'Esoterickk\')\n[2nd Bonus Chest](https://youtu.be/X9qRaniCRhE \'Esoterickk\')\n[Calus Memories](https://youtu.be/6QGD1nK5RT4 \'Esoterickk\')\n[Loot Table](https://www.blueberries.gg/weapons/duality-loot-table/ \'blueberries.gg\')**', inline: true },
				{ name: '__Spire of the Watcher__', value: '*Coming Soon*', inline: true }
			)
			.setFooter('comand: -g dungeons');

			const raids = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Destiny 2 Raids')
			.setDescription('*Raids usually require yearly expansions to access.*')
			.setURL('https://www.bungie.net')
			.setThumbnail('https://www.bungie.net/common/destiny2_content/icons/8b1bfd1c1ce1cab51d23c78235a6e067.png')
			.addFields(
				{ name: '__Last Wish__', value: '*Forsaken Pack*\n[**Kalli, the Corrupted**](https://youtu.be/mj6qnB1g7nU \'Datto\')\n[**Shuro Chi, the Corrupted**](https://youtu.be/bBjwtzkE_Kw \'Datto\')\n[**Morgeth, the Spirekeeper**](https://youtu.be/4xTXWzvLEkA \'Datto\')\n[**The Vault**](https://youtu.be/hRpWfYKGPJ8 \'Datto\') [🗺](https://i.ibb.co/xqrDbG7/lwcallouts.jpg \'Callouts Image\')\n[**Riven, of 1k Voices**](https://youtu.be/LLmMrdACQC4 \'Datto\') [🗺](https://i.ibb.co/1MsK11j/Riven-Eyes.png \'OG Eyes\')\n[**Queen\'s Walk**](https://i.ibb.co/8rnzXVT/queenswalk.png \'imgbb\')\n[**Loot Table**](https://i.ibb.co/JKKPXpW/lastwishdrops.jpg \'imgbb\')', inline: true },
				{ name: '__Garden of Salvation__', value: '*Shadowkeep*\n[**The Consecrated Mind**](https://youtu.be/gBNVvlycPVY \'Datto\') [🗺](https://i.ibb.co/1nMngYr/encounter-3.jpg \'2nd & 3rd\') [🗺](https://i.ibb.co/PmHr3qG/encounter-2-3.png \'Eyes\')\n[**The Sanctified Mind**](https://youtu.be/3uQbsLr5vn0 \'Datto\') [🗺](https://i.ibb.co/TBNpXm6/final.png \'Final Encounter\')\n[**Loot Table**](https://i.ibb.co/25Fm3X5/gosloot.png \'imgbb\')', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__Deepstone Crypt__', value: '*Beyond Light*\n[**Entrance/Security**](https://youtu.be/d7YtP9tRaFE \'Datto\')\n[**Atraks-1**](https://youtu.be/pN7Qj0j28qk \'Datto\')\n[**The Abomination pt.1&2**](https://youtu.be/ZX28ltKT1V8 \'Datto\')\n[**All Raid Challenges**](https://youtu.be/-jqEEyd6kdU \'Datto\')', inline: true },
				{ name: '__DSC Extras__', value: '[**First Hidden Chest**](https://youtu.be/89X6QNZOfSs \'Esoterickk\')\n[**Exotic Raid Ghost**](https://youtu.be/N_qWFV2o-X8 \'NinjaPups\')\n[**Exotic Raid Sparrow**](https://youtu.be/aK9QJlRZrR4 \'NinjaPups\')\n[**Encounter Maps**](https://imgur.com/gallery/jj8eYvC \'imgbb\')\n[**Loot Table**](https://i.ibb.co/m83bv05/cryptloot.png \'imgbb\')', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__Vault of Glass__', value: '*Free for all players*\n[**Templar Encounters**](https://youtu.be/BM688RORcOQ \'Datto\')\n[**Gatekeeper/Atheon**](https://youtu.be/vBYPSZotwkU \'Datto\')\n**Encounter Maps**\n[**Oracles**](https://i.ibb.co/K7mNqSG/oracles.png \'imgbb\')\n[**Gorgon\'s Maze**](https://i.ibb.co/hFhQt5B/gorgonmaze.png \'imgbb\')\n[**Atheon Oracles**](https://i.ibb.co/qrM2GVX/atheon.webp \'imgbb\')', inline: true },
				{ name: '__VoG Extras__', value: '[**Hidden Chests**](https://youtu.be/lt5ZRFl0GNc \'Esoterickk\')\n[**Pearl of Glass**](https://youtu.be/WQuBlgzi-Wg \'Esoterickk\')\n[**Loot Pool**](https://i.ibb.co/vVs25Mc/vogloot.png \'imgbb\')\n[**Mythoclast Catalyst**](https://youtu.be/hdF3dBmVmUA \'FalloutPlays\')\n[**Encounter Challenges**](https://youtu.be/l1avMGMr_V0 \'Datto\')\n[**Master VoG**](https://youtu.be/U_TzK1tAZrM \'Elitist Datto\')', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__Vow of the Disciple__', value: '*Witch Queen*\n**[Post WF Cutscene](https://youtu.be/CptovsCQnZc \'Esoterickk\')\n[Acquisition & Caretaker](https://youtu.be/jdpa4PlJ81A \'Datto\')\n[Upended Summit & Rhulk](https://youtu.be/K9VYsnrnHvQ \'Datto\')\nExtras\n[Secret Chest #1](https://youtu.be/Kf6DO2odGlo \'CheeseForever\')\n[Secret Chest #2](https://youtu.be/ftGOFxCMPAQ \'CheeseForever\')\n[Bonus Clear Chest](https://youtu.be/ayQWhcS8Zzw \'Skarrow9\')**', inline: true },
				{ name: '__VotD Maps/Callouts__', value: '**[Symbol Callouts](https://www.todayindestiny.com/activity/vow_of_the_disciple \'imgbb\')\n[Acquisition Encounter](https://i.ibb.co/xg9TnXz/Vot-D-Encounter-1-V6.png \'imgbb\')\n[Caretaker Encounter](https://i.ibb.co/jDr63p3/caretaker.jpg \'imgbb\')\n[Exhibition Encounter](https://i.ibb.co/JRW6bVk/Vot-D-Encounter-3-V6.jpg \'imgbb\')\n[Rhulk Encounter](https://i.ibb.co/4FnJbNv/Vot-D-Encounter-4-v2.png \'imgbb\')\n[Loot Table](https://www.blueberries.gg/wp-content/uploads/2022/03/Vow-of-the-Disciple-loot-table-infographic-v2-scaled.jpg \'blueberries.gg\')**', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__King\'s Fall__', value: '*Free for all players*\n**[Datto\'s Guide](https://youtu.be/eUUCO8-YQms \'Datto\')\n[Fallout\'s Guide](https://youtu.be/Nk0pSu4yr1E \'Fallout Plays\')\nChallenges\n[Totems Encounter](https://youtu.be/F4_apwMnyvo?t=143 \'gmeiners\')\n[War Priest](https://youtu.be/iSl7mz64kMI?t=187 \'gmeiners\')\n[Golgoroth](https://youtu.be/6yl0RTl3TUQ?t=142 \'gmeiners\')\n[Daughters](https://youtu.be/ZnVpoOoHZeU?t=125 \'gmeiners\')\n[Oryx](https://youtu.be/MXoELtALCSA?t=189 \'gmieners\')**', inline: true },
				{ name: '__King\'s Fall Extras__', value: '**[Bonus Red Border](https://youtu.be/dP6HCVIoiNk?t=14 \'Skarrow9\')\n[ToM Catalyst](https://youtu.be/w-29apeXooE?t=14 \'Skarrow9\')\n[All Secret Chests](https://youtu.be/ei3WR1bsMDE \'SneakyBeaver\')\n[Loot Table](https://blueberries.gg/wp-content/uploads/2022/08/Destiny-2-Kings-Fall-Loot-table-infographic-v2.jpg \'blueberries.gg\')\nImage Maps\n[Red-border Symbols](https://i.ibb.co/b3gXB0t/cMbN3RF.png \'imgbb\')\n[Symbol Locations](https://i.ibb.co/c1sV9wY/20220830-085651.jpg \'imgbb\')\n[Cellar Map](https://i.ibb.co/cQNbTG4/Destiny-2-Kings-Fall-Golgoroths-Maze-Hidden-Chest-Plate-Order.jpg \'imgbb\')**', inline: true}
			)
			.setFooter('command: -g raids');

			const witchqueen = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('The Witch Queen (Year 5)')
			.setDescription('*This is just expansion content.*')
			.setURL('https://www.bungie.net/7/en/Destiny/WitchQueen')
			.setThumbnail('https://i.ibb.co/dBy1bKL/y5.png')
			.addFields(
				{ name: '__General Info__', value: '**[First Impressions](https://youtu.be/H4e2i2Z--O0 \'Datto\')\n[Weapon Crafting](https://youtu.be/em41cWBx8Ts \'Datto\')\n[Updated Crafting Info](https://youtu.be/FkkuCUYXP_A \'Datto\')\n[Every New Weapon](https://youtu.be/0IgyQsNtC9M \'FalloutPlays\')\n[Leveling to 1560](https://youtu.be/pIRyVrFl01A \'Datto\')**', inline: true },
				{ name: '__Exotics__', value: '**[Parasite](https://youtu.be/MZ4rn-k3kFk \'Datto\')\n[Dead Messenger](https://youtu.be/fX4i4j-wUYo \'xHOUNDISHx\')\n[Exotic Glaives](https://youtu.be/P4ZbuRmrZb0 \'xHOUNDISHx\')\n[Imperitous Sun Ghost](https://youtu.be/itkt13-syuc \'Skarrow9\')**', inline: true },
				{ name: '__Extras__', value: '**Lucent Moths\n[[wk1]](https://youtu.be/2-cYU_XzBkI \'Esoterickk\') [[wk2]](https://youtu.be/_SMPyuPQ0LY \'Esoterickk\') [[wk3]](https://youtu.be/OQEwI5zIfvk \'Esoterickk\')\n[[wk4]](https://youtu.be/aREAntiv7bc \'Esoterickk\')[[wk5]](https://youtu.be/KA1nsMPIjFY \'Esoterickk\')\nDarkness Rifts\n[No Peeking Triumph](https://youtu.be/gaNtvsEa1QQ \'Esoterickk\')**', inline: false },
			)
			.setFooter('Command: -g witch');

			const seasons5 = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Year 5 Seasonal Content')
			.setDescription('*This content is playable during Year 5.*')
			.setURL('https://www.bungie.net/7/en/Seasons')
			.setThumbnail('https://i.ibb.co/Ss0ksT7/seraph.png')
			.addFields(
				{ name: '__Season of the Risen__', value: '*[Feb. 22 - May 24](https://www.bungie.net/7/en/Seasons/SeasonOfTheRisen)*\n**[Mod: Volatile Flow](https://youtu.be/d74nBzgzmJk \'Datto\')\n[Seasonal Damage Chart](https://docs.google.com/spreadsheets/d/1i1KUwgVkd8qhwYj481gkV9sZNJQCE-C3Q-dpQutPCi4/edit?usp=sharing \'googledocs\')**', inline: true },
				{ name: '__Season of the Haunted__', value: '*[May 24 - Aug 23](https://www.bungie.net/7/en/Seasons/SeasonOfTheHaunted)*\n**[Activities](https://youtu.be/5VoXRNIcu48 \'Datto\')\n[Bonus Containment Chests](https://youtu.be/jWDVfhIY99E \'Esoterickk\')\n[New Deepsight Weapons](https://youtu.be/mUl3Q2bSqCQ \'xHOUNDISHx\')\n[Fever Dream Triumph](https://youtu.be/WiiQvkxuk_c \'Skarrow9\')\n[Shadow\'s Return Triumph](https://youtu.be/TySgvMCKI7o \'Skarrow9\')\nSever Mission Secrets\n[Bobbleheads](https://youtu.be/-bU31_BSBxs \'Esoterickk\')\n[Calus Automations](https://youtu.be/5Y5CgmewDTE \'Esoterickk\')**', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__Season of Plunder__', value: '*[Aug 23 - Dec 06](https://www.bungie.net/7/en/Seasons/SeasonOfPlunder)*\n**[Seasonal Loop](https://youtu.be/dkVeumwk-aQ \'Datto\')\nARC 3.0\n[Titan](https://youtu.be/kq5dYF4rXtQ \'CoolGuy\')\n[Warlock](https://youtu.be/VOoeBfUtFtA \'Aztecross\')\n[Hunter](https://youtu.be/7GqRwJwcDNo \'NickTew\')\n*Spoiler Warning Below*\n[Secret Weapon &\nWeapon Patterns](https://youtu.be/dkVeumwk-aQ \'xHOUNDISHx\')**', inline: true },
				{ name: '__Season of the Seraph__', value: '*[Dec 06 - Feb 28](https://www.bungie.net/7/en/Seasons/SeasonOfTheSeraph)*\n**[Seasonal Loop](https://youtu.be/V19ZN2mxAck \'Datto\')\n[All 12 Resonance Amps](https://youtu.be/rrJlhV0yEuo \'Esoterickk\')\n[New Craftable Weapons](https://youtu.be/7T5t19I6ko0 \'xHOUNDISHx\')\nExotics\n[Manticore](https://youtu.be/zUYYnv2j6Pw \'Fallout\')\n*REVISION Zero (Dec20th)***', inline: true }
			)
			.setFooter('Command -g y5seasons');

			const lightfall = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Lightfall (Year 6)')
			.setDescription('*This is just expansion content.*')
			.setURL('https://www.bungie.net/7/en/Destiny/Lightfall')
			.setThumbnail('https://i.ibb.co/dBy1bKL/y5.png')
			.addFields(
				{ name: '__General Info__', value: '**[Reveal Trailer](https://youtu.be/lfoeZLp5A7k \'Destiny Official\')**', inline: true },
				{ name: '__Exotics__', value: '*standby...*', inline: true },
				{ name: '__Extras__', value: '*standby...*', inline: false },
			)
			.setFooter('Command: -g lightfall');

		//========END EMBEDS 

		if (args[0] === 'extras'){
			message.channel.send(extras);
			return;
		}

		if (args[0] === 'legacy'|| args[0] === 'vanilla'){
			message.channel.send(legacy);
			return;
			}

		if (args[0] === 'forsaken' || args[0] === 'year2'){
			message.channel.send(forsaken);
			return;
			}

		if (args[0] === 'shadowkeep' || args[0] === 'year3'){
			message.channel.send(shadowkeep);
			return;
		}

		if (args[0] === 'beyond' || args[0] === 'year4'){
			message.channel.send(beyond);
			return;
		}

		if (args[0] === 'expired' || args[0] === 'inactive'){
			message.channel.send(expired);
			return;
		}

		if (args[0] === 'y4season' || args[0] === 'y4seasons'){
			message.channel.send(seasons4);
			return;
		}

		if (args[0] === 'y5season' || args[0] === 'y5seasons'){
			message.channel.send(seasons5);
			return;
		}

		if (args[0] === 'dungeons' || args[0] === 'dungeon'){
			message.channel.send(dungeons);
			return;
		}

		if (args[0] === 'raids' || args[0] === 'raid'){
			message.channel.send(raids);
			return;
		}

		if (args[0] === 'witch' || args[0] === 'year5'){
			message.channel.send(witchqueen);
			return;
		}

		if (args[0] === 'all' || args[0] === 'complete'){
			message.channel.send('type: \`extras, legacy, expired, year2, year3, year4, seasons, year5\`');
			return;
		}

		if (args[0] === 'wqedit') {

			const fetched = await message.channel.messages.fetch(args[1]);

			if (message.channel.name === 'destiny_guides' && message.author.id !== '229060782065844224') {
					message.channel.send('Nope, Sorry. Only Tek can do that.')
						.then(message.delete({ timeout: 10000 }));
					return;
				} else {
					fetched.edit(witchqueen).catch(console.error);
			}
		}
		
		if (args[0] === 'y5edit') {

			const fetched = await message.channel.messages.fetch(args[1]);

			if (message.channel.name === 'destiny_guides' && message.author.id !== '229060782065844224') {
					message.channel.send('Nope, Sorry. Only Tek can do that.')
						.then(message.delete({ timeout: 10000 }));
					return;
				} else {
					fetched.edit(seasons5).catch(console.error);
			}
		}

		if (args[0] === 'raidedit') {

			const fetched = await message.channel.messages.fetch(args[1]);

			if (message.channel.name === 'destiny_guides' && message.author.id !== '229060782065844224') {
					message.channel.send('Nope, Sorry. Only Tek can do that.')
						.then(message.delete({ timeout: 10000 }));
					return;
				} else {
					fetched.edit(raids).catch(console.error);
			}
		}

		if (args[0] === 'dungeonedit') {

			const fetched = await message.channel.messages.fetch(args[1]);

			if (message.channel.name === 'destiny_guides' && message.author.id !== '229060782065844224') {
					message.channel.send('Nope, Sorry. Only Tek can do that.')
						.then(message.delete({ timeout: 10000 }));
					return;
				} else {
					fetched.edit(dungeons).catch(console.error);
			}
		}

		if (args[0] === 'extrasedit') {

			const fetched = await message.channel.messages.fetch(args[1]);

			if (message.channel.name === 'destiny_guides' && message.author.id !== '229060782065844224') {
					message.channel.send('Nope, Sorry. Only Tek can do that.')
						.then(message.delete({ timeout: 10000 }));
					return;
				} else {
					fetched.edit(extras).catch(console.error);
			}
		}
	}
};