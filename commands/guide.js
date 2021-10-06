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
			.setThumbnail('https://i.ibb.co/wYvZtB4/DStiq-SBWs-AAIM7-C.jpg')
			.addFields(
				{ name: '__**Reddit Sources**__', value: '[**r/DestinyTheGame**](https://www.reddit.com/r/DestinyTheGame/) -General Info\n[**r/RaidSecrets**](https://www.reddit.com/r/raidsecrets/) -Spoiler Heavy\n[**r/CrucibleGuidebook**](https://www.reddit.com/r/CrucibleGuidebook/) -Everything PVP\n[**r/GambitPlaybook**](https://www.reddit.com/r/GambitPlaybook/) -Everything Gambit\n[**r/DestinyLore**](https://www.reddit.com/r/DestinyLore/) -Everything Lore' },
				{ name: '__**Websites**__', value: '[**DestinyItemManager(DIM)**](https://app.destinyitemmanager.com/)\n[**Destiny Sets**](https://destinysets.com/)\n[**Light.gg**](https://light.gg/)\n[**Braytech.org**](https://braytech.org/)\n[**Where\'s Xur?**](https://wherethefuckisxur.com)\n[**Blueberries.gg**](https://www.blueberries.gg)', inline: true },
				{ name: '__**Mobile Apps & Misc**__', value: '[**Redrix**](https://redrix.io/) 📱\n[**Vault Cleaner**](https://destinyrecipes.com/vault)\n[**Roll Appraisal**](https://www.light.gg/god-roll/roll-appraiser/)\n[**D2 Armor Picker**](https://mijago.github.io/D2ArmorPicker/#/)\n[**D2 Gunsmith**](https://d2gunsmith.com/)', inline: true },
				{ name: '__**Soundboards**__', value: '[**Shaxx Soundboard**](https://evilarceus.github.io/Destiny2-Soundboard/#)\n[**Drifter Soundboard**](https://d2.asun.co/drifter/)' }
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
			.setDescription('*This is ACTIVE content only.*')
			.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
			.setThumbnail('https://www.bungie.net/common/destiny2_content/icons/6394ba870887c8361fca4bcb0b91264c.png')
			.addFields(
				{ name: '__**Last Wish Raid**__', value: '[**Kalli, the Corrupted**](https://youtu.be/mj6qnB1g7nU \'Datto\')\n[**Shuro Chi, the Corrupted**](https://youtu.be/bBjwtzkE_Kw \'Datto\')\n[**Morgeth, the Spirekeeper**](https://youtu.be/4xTXWzvLEkA \'Datto\')\n[**The Vault**](https://youtu.be/hRpWfYKGPJ8 \'Datto\') [🗺](https://i.ibb.co/xqrDbG7/lwcallouts.jpg \'Callouts Image\')\n[**Riven of A Thousand Voices**](https://youtu.be/LLmMrdACQC4 \'Datto\') [🗺](https://i.ibb.co/1MsK11j/Riven-Eyes.png \'OG Eyes\')\n[**Queen\'s Walk**(image)](https://i.ibb.co/8rnzXVT/queenswalk.png)\n[**Loot Table**(image)](https://i.ibb.co/JKKPXpW/lastwishdrops.jpg)' },
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
				{ name: '__**Garden of Salvation**__', value: '[**The Consecrated Mind**](https://youtu.be/gBNVvlycPVY \'Datto\') [🗺](https://i.ibb.co/1nMngYr/encounter-3.jpg \'2nd & 3rd\') [🗺](https://i.ibb.co/PmHr3qG/encounter-2-3.png \'Eyes\')\n[**The Sanctified Mind**](https://youtu.be/3uQbsLr5vn0 \'Datto\') [🗺](https://i.ibb.co/TBNpXm6/final.png \'Final Encounter\')\n[**Loot Table**(image)](https://i.ibb.co/25Fm3X5/gosloot.png)', inline: true },
				{ name: '__**Pit of Heresy**__', value: '[**How-to**](https://youtu.be/_mqPAOSg-64 \'Datto\') [🗺](https://i.ibb.co/fxQkTcY/HERESY-2.jpg \'Ogre Area\') [🗺](https://i.ibb.co/bmqtL1t/WMDLx83.png \'The Harrow\')\n[**PoH Solo/Flawless**](https://youtu.be/9SHm-kbUFkc \'NinjaPups\')', inline: true },
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
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__**Deep Stone Crypt**__', value: '[**Entrance/Security**](https://youtu.be/d7YtP9tRaFE \'Datto\')\n[**Atraks-1**](https://youtu.be/pN7Qj0j28qk \'Datto\')\n[**The Abomination pt.1&2**](https://youtu.be/ZX28ltKT1V8 \'Datto\')\n[**All Raid Challenges**](https://youtu.be/-jqEEyd6kdU \'Datto\')', inline: true },
				{ name: '__**DSC Raid Extras**__', value: '[**First Hidden Chest**](https://youtu.be/89X6QNZOfSs \'Esoterickk\')\n[**Exotic Raid Ghost**](https://youtu.be/N_qWFV2o-X8 \'NinjaPups\')\n[**Exotic Raid Sparrow**](https://youtu.be/aK9QJlRZrR4 \'NinjaPups\')\n[**Encounter Maps**](https://imgur.com/gallery/jj8eYvC \'imgbb\')\n[**Loot Table**](https://i.ibb.co/m83bv05/cryptloot.png \'imgbb\')', inline: true }
			)
			.setFooter('Command: -g beyond');
		
		const seasons4 = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('Year 4 Seasonal Content')
			.setDescription('*This content is playable during Year4.*')
			.setURL('https://www.bungie.net/7/en/Seasons')
			.setThumbnail('https://i.ibb.co/mHbPVmw/season15.png')
			.addFields(
				{ name: '__**Season of the Hunt**__', value: '[*Nov. 10 - Feb. 09*](https://www.bungie.net/7/en/Seasons/SeasonOfTheHunt \'bungie.net\')\n[**WEB LORE**](https://www.destinypedia.com/Weblore#Season_of_the_Hunt_Weblore \'destinypedia\')\n**The Dawning**(expired)\n[**Recipes**](https://i.ibb.co/tpHGt0n/Xfh7EVH.png \'imgbb\') **|** [**Ingredients**](https://i.ibb.co/kJzz0Lb/eptGJKA.png \'imgbb\')\n**Exotics**\n[**Hawkmoon**](https://youtu.be/98GoP7gBbNk \'Datto\')\n**Harbinger Feathers**\n**[wk1](https://youtu.be/NmdTwmw28KU \'Esoterickk\') | [wk2](https://youtu.be/S-qFxiG96Ng \'Esoterickk\') | [wk3](https://youtu.be/6_BtZRLnfiU \'Esoterickk\')**', inline: true },
				{ name: '__**Season of the Chosen**__', value: '[*Feb. 09 - May 11*](https://www.bungie.net/7/en/Seasons/SeasonOfTheChosen \'bungie.net\')\n[**Aspect of Influence**](https://youtu.be/dwGfZYA2k54 \'Esoterickk\')\n**Exotics**\n[**Dead Man\'s Tale**](https://youtu.be/WqTbe87ZuYc \'Datto\')\n*Heroic for catalyst*\n**Presage Secrets**\n[**Triumphs & Caches**](https://youtube.com/playlist?list=PLCe_gQqZx8OFAM0YHFts4f2VGZBd_6AvF \'Esoterickk\')', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__**Vault of Glass**__', value: '*free to all players*\n[**Templar Encounters**](https://youtu.be/BM688RORcOQ \'Datto\')\n[**Gatekeeper/Atheon**](https://youtu.be/vBYPSZotwkU \'Datto\')\n**Encounter Maps**\n[**Oracles**](https://i.ibb.co/K7mNqSG/oracles.png \'imgbb\')\n[**Gorgon\'s Maze**](https://i.ibb.co/hFhQt5B/gorgonmaze.png \'imgbb\')\n[**Atheon Oracles**](https://i.ibb.co/qrM2GVX/atheon.webp \'imgbb\')', inline: true  },
				{ name: '__**Vault of Glass - Extras**__', value: '[**Hidden Chests**](https://youtu.be/lt5ZRFl0GNc \'Esoterickk\')\n[**Pearl of Glass**](https://youtu.be/WQuBlgzi-Wg \'Esoterickk\')\n[**Loot Pool**](https://i.ibb.co/vVs25Mc/vogloot.png \'imgbb\')\n[**Mythoclast Catalyst**](https://youtu.be/hdF3dBmVmUA \'FalloutPlays\')\n[**Encounter Challenges**](https://youtu.be/l1avMGMr_V0 \'Datto\')\n[**Master VoG**](https://youtu.be/U_TzK1tAZrM \'Elitist Datto\')', inline: true },
				{ name: '\u200B', value: '\u200B', inline: false  },
				{ name: '__**Season of the Splicer**__', value: '[*May 11 - Aug 24*](https://www.bungie.net/7/en/Seasons/SeasonOfTheSplicer \'bungie.net\')\n[**Aspect of Interference**](https://youtu.be/tR5hs6dwf6g \'Esoterickk\')\n**Secrets**\n[**Eliksni Quarter**](https://youtu.be/pjSLde3hzOY \'Esoterickk\')\n[**Seasonal Story**](https://youtube.com/playlist?list=PLCe_gQqZx8OEMW7H1n0PsGIVsINmTBpz7 \'Esoterickk\')', inline: true },
				{ name: '__**Season of the Lost**__', value: '[*Aug 24 - Feb 22*](https://www.bungie.net/7/en/Seasons/SeasonOfTheLost)\n**Exotics\n[Ager\'s Scepter](https://youtu.be/c0b0TpZbtfs \'Esoterickk\')\nSecrets\n[Shattered Realm Items](https://youtu.be/RK9gSf58bC8 \'Esoterickk\')\nPatrol Anchors\n[EDZ](https://youtu.be/-kqH1gLTyNQ \'Esoterickk\') | [Shore](https://youtu.be/oXCHWjKEXpU \'Esoterickk\') | [Moon](https://youtu.be/K4UD0FcHfL0 \'Esoterickk\')\n[Seasonal Story](https://youtube.com/playlist?list=PLCe_gQqZx8OEKoHiitlPi577zh6Sh0Csa \'YouTube Playlist\')**', inline: true }
			)
			.setFooter('Command -g seasons');

			const witchqueen = new Discord.MessageEmbed()
			.setColor('#545454')
			.setTitle('The Witch Queen (Year 5)')
			.setDescription('*This is just expansion content.*')
			.setURL('https://www.bungie.net/7/en/Destiny/WitchQueen')
			.setThumbnail('https://i.ibb.co/DzKYZ9B/witchqueen.png')
			.addFields(
				{ name: '__**What we know.**__', value: '[**Reveal Trailer**](https://youtu.be/P0IlFZ61734 \'Bungie\')\n[**Gameplay Trailer**](https://youtu.be/1bkKwhMgI6s \'Bungie\')\n[**Bungie Showcase**](https://youtu.be/ktTfzug0Qbc?t=4283 \'Bungie\')', inline: true },
				{ name: 'Truth, is a funny thing.', value: 'Does it live in the world,\n..or in the mind?\nIs it constant,\n..or can it be bent?\nWho decides what is true\nin this universe of Light and Dark?\nThere is no greater power.\nTell me, Little Light..\n**What is your Truth now?**', inline: true }
			)
			.setFooter('Command: -g witch');

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

		if (args[0] === 'season' || args[0] === 'seasons'){
			message.channel.send(seasons4);
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

		if (args[0] === 'edit') {

			const fetched = await message.channel.messages.fetch(args[1]);

			if (message.channel.name === 'destiny_guides' && message.author.id !== '229060782065844224') {
					message.channel.send('Nope, Sorry. Only Tek can do that.')
						.then(message.delete({ timeout: 10000 }));
					return;
				} else {
					fetched.edit(beyond).catch(console.error);
			}
		}
		
		if (args[0] === 'edit2') {

			const fetched = await message.channel.messages.fetch(args[1]);

			if (message.channel.name === 'destiny_guides' && message.author.id !== '229060782065844224') {
					message.channel.send('Nope, Sorry. Only Tek can do that.')
						.then(message.delete({ timeout: 10000 }));
					return;
				} else {
					fetched.edit(seasons4).catch(console.error);
			}
		}
	}
};