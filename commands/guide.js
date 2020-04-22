const Discord = require('discord.js');

module.exports = {
	name: 'guide',
	args: true,
	aliases: ['guides', 'g'],
	description: 'On-the-fly guide posting by expansion/season.',
	usage: ['newlight | forsaken | forge | drifter etc..'],
	category: 'general',
	async execute(message, args) {
		if (!args.length) {
			message.channel.send('You didn\'t specify which guide to display.');
			return;
		}
		if (args[0] === 'newlight'|| args[0] === 'vanilla'){

			const vanilla = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('New Light (Year 1)')
				.setURL('https://www.bungie.net/7/en/Destiny/NewLight')
				.setThumbnail('https://i.ibb.co/bPLXJ6q/vanilla.jpg')
				.addFields(
					{ name: '**__Leviathan Raid Breakdown__**', value: '[**Entrance & Baths**](https://youtu.be/FVAvumqd2Yw \'Datto\') [🗺](https://i.ibb.co/1LjVn77/levi-courtyard.jpg \'Castellum Image\') [🗺](https://i.ibb.co/9bKxS5z/levi-baths-alt.jpg \'Baths Image\')\n[**Pleasure Gardens**](https://youtu.be/pPg7rxKxf8o \'Datto\') [🗺](https://i.ibb.co/VHLxDXX/gardens.jpg \'Gardens Image\')\n[**The Gauntlet**](https://youtu.be/T0DbeXjkKRs \'Datto\') [🗺](https://i.ibb.co/n8hm321/levi-gauntlet.jpg \'Gauntlet Image\')\n[**Emperor Calus**](https://youtu.be/aeKeJ6x_Zi8 \'Datto\') [🗺](https://i.ibb.co/HVCW7mg/levi-calus.jpg \'Throne Room Image\')\n[**Prestige Leviathan**](https://bit.ly/2i5KPp4 \'Datto\')\n[**Underbelly Map**(Image)](https://bit.ly/2Ivn3R5 \'Image Link\')\n[**Loot Pool**(Image)](https://i.ibb.co/jfpvsjM/levi-loot.jpg)' },
					{ name: '**__Year 1 Exotics__**', value: '[**RatKing, Sturm &\nMIDA Multi-tool**](https://youtu.be/rY6Gpt6pWp4 \'Datto\')\n[**Legend of Acrius**](https://youtu.be/CwEXvuTI8_Y \'Datto\')\n[**Whisper Puzzle**](https://youtu.be/bsjhgZYkld8 \'Datto\')\n[**Worldline Zero**](https://youtu.be/RI5KQ_yQLoU \'Datto\')\n[**Sleeper Nodes**](https://bit.ly/2ruS9im)', inline: true },
					{ name: '**__Curse of Osiris__**', value: '[**Eater of Worlds**](https://youtu.be/5WljA6Krwbk \'Datto\') [🗺](https://i.ibb.co/5GWFGjf/platforms.png \'Reactor Image\') [🗺](https://i.ibb.co/NpSHG9p/Argos.jpg \'Argos Image\')\n[**Lost Prophecies**](https://d2.destinygamewiki.com/wiki/Lost_Prophecies \'Wiki Link\')', inline: true },
					{ name: '**__Warmind__**', value: '[**Spire of Stars**](https://youtu.be/CSN6MIpjW04 \'Datto\')\n[**Val Ca\'our**](https://youtu.be/IxgTK2dHGis \'Datto\')  [🗺](https://i.ibb.co/X51D6fn/valcaour.png \'Val Ca\'our\')' }
				)
				.setImage('https://i.ibb.co/9Z6sZwS/newlight.png')
				.setFooter('Command: -g newlight or -g vanilla');

			message.channel.send(vanilla);
			return;
		}
		if (args[0] === 'forsaken' || args[0] === 'outlaw'){
            
			const forsaken = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('Forsaken (Year 2)')
				.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
				.setThumbnail('https://i.ibb.co/JmyNvN5/Ace-of-Spades.png')
				.addFields(
					{ name: '__**Last Wish Raid**__', value: '[**Kalli, the Corrupted**](https://youtu.be/mj6qnB1g7nU \'Datto\')\n[**Shuro Chi, the Corrupted**](https://youtu.be/bBjwtzkE_Kw \'Datto\')\n[**Morgeth, the Spirekeeper**](https://youtu.be/4xTXWzvLEkA \'Datto\')\n[**The Vault**](https://youtu.be/hRpWfYKGPJ8 \'Datto\') [🗺](https://i.ibb.co/xqrDbG7/lwcallouts.jpg \'Callouts Image\')\n[**Riven of A Thousand Voices**](https://youtu.be/LLmMrdACQC4 \'Datto\') [🗺](https://i.ibb.co/1MsK11j/Riven-Eyes.png \'OG Eyes\')\n[**Queen\'s Walk**(image)](https://i.ibb.co/8rnzXVT/queenswalk.png)\n[**Loot Table**(image)](https://i.ibb.co/JKKPXpW/lastwishdrops.jpg)' },
					{ name: '__**Forsaken Exotics**__', value: '[**Wishender**](https://youtu.be/u7TsLMQ7sW4 \'Datto\')\n[**Malfeasance**](https://youtu.be/fLzyp8W7tN0 \'Datto\')\n[**Corrupted Eggs**](https://youtu.be/G8p9IcoTEYY \'NinjaPups\')', inline: true },
					{ name: '__**Misc Extras**__', value: '[**Cat Statues**](https://youtu.be/iw46L-xnYns \'NinjaPups\')\n[**Solo Shattered Throne**](https://youtu.be/e0C5WAx1Fwk \'Pyro\')\n[**Wall of Wishes**](https://idleanimation.com/last-wish-plates)', inline: true },
					{ name: '__**Forsaken Lore**__', value: 'See `-g lore` for more info.' },
				)
				.setImage('https://i.ibb.co/nmY5JZj/forsaken.png')
				.setFooter('Command: -g forsaken');
			message.channel.send(forsaken);
			return;
		}
		if (args[0] === 'forge'){

			const forge = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('Forsaken (Year 2)')
				.setDescription('Season of the Forge (S.5)')
				.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
				.setThumbnail('https://i.ibb.co/8NkGgdx/forge.jpg')
				.addFields(
					{ name: '__**Scourge of the Past**__', value: '[**Downtown & Race**](https://youtu.be/ttoHmTTqLOg \'Datto\') [🗺](https://i.ibb.co/TtZVtmJ/botza.png \'Downtown Map\') [🗺](https://i.ibb.co/0X57VNW/scourge-sewers.png \'Sewers Map\') [🗺](https://i.ibb.co/njkygS7/sparrow.png \'Sparrow Race\')\n[**Insurrection Prime**](https://youtu.be/daka2OKi8xY \'Datto\') [🗺](https://i.ibb.co/8dBLXpX/ip2.png \'IP Chart\')\n[**SOTP Dummies Guide**](https://youtu.be/YMDqF9YLBtY \'KACKIS\')' },
					{ name: '__**Season 6 Exotics**__', value: '[**Izanagi\'s Burden**](https://youtu.be/jXrhoylMcy0 \'Datto\')\nAda-1 Bounties:\n**Jötunn**\n**Le Monarque**', inline: true },
					{ name: '**__Season 6 Extras__**', value: '[**Emblems**](https://youtu.be/lOF-0ckkyZw \'Datto\')\n[**Mysterious Datapad**](https://youtu.be/ZTr55aajAgQ \'Datto\')\n[**Niobe Labs**](https://idleanimation.com/niobe-labs)', inline: true }
				)
				.setImage('https://i.ibb.co/G2xwJWk/armory.png')
				.setFooter('Command: -g forge');
			message.channel.send(forge);
			return;
		}
		if (args[0] === 'drifter'){

			const drifter = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('Forsaken (Year 2)')
				.setDescription('Season of the Drifter (S.6)')
				.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
				.setThumbnail('https://i.ibb.co/XsVDSDM/drifter.jpg')
				.addFields(
					{ name: '__**Zero Hour**__', value: '[**Heroic Route**](https://youtu.be/-LI2NuzxsdE \'Datto\')\n[**Configuration Calculator**](http://ensemblefc.com/cryptarchlocks.php)\n[**Configuration Explaination**](https://youtu.be/n5CrjzGF_g0)' },
					{ name: '__**Season 7 Exotics**__', value: '[**Outbreak Perfected**](https://youtu.be/uVgOAe9pfwk \'Datto\')\n[**Thorn**](https://youtu.be/6uC8DkDOB-o \'xHOUNDISHx\')', inline: true },
					{ name: '__**Season 7 Extras**__', value: '[**The Survival Guide**](https://youtu.be/DGBrhJMlKxs \'Esoterickk\')\n[**Vanguard Allegiance**](https://youtu.be/2iBNP6D3RIo \'Esoterickk\')', inline: true }
				)
				.setImage('https://i.ibb.co/rbLTwj2/drifter.png')
				.setFooter('Command: -g drifter');
			message.channel.send(drifter);
			return;
		}
		if (args[0] === 'opulence'){

			const opulence = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('Forsaken (Year 2)')
				.setDescription('Season of Opulence (S.7)')
				.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
				.setThumbnail('https://i.ibb.co/hD9k6Ny/opulence.jpg')
				.addFields(
					{ name: '**__Crown of Sorrows__**', value: '[**Hive Ritual & Jumping Puzzle**](https://youtu.be/tXR6bwuXKpg \'Datto\') [🗺](https://i.ibb.co/b1vZB3Z/izH3D7Tg.jpg \'Ritual\')\n[**Gahlran\'s Deception & Phase 2**](https://youtu.be/_ZrNvGYDf6E \'Datto\') [🗺](https://i.ibb.co/YbYVMm5/e0Fvwfg.jpg \'Phase 1\') [🗺](https://i.ibb.co/XpNMZpv/4HpmzGq.jpg \'Phase 2\')\n[**All Challenges**](https://youtu.be/3o-9FZPScHc \'Datto\')' },
					{ name: '**__The Menagerie__**', value: '[**Basic Info**](https://youtu.be/JkCpe6hXb0I \'xHOUNDINSHx\')\n[**Hidden Triumphs**](http://bit.ly/2WD3Wgq)\n[**Chalice Spreadsheet**](http://bit.ly/2IpLOMZ)\n[**Chalice Infographic**](http://bit.ly/2QYyC5D)', inline: true },
					{ name: '**__Season 8 Exotics__**', value: '[**Truth Quest**](https://youtu.be/GrdJQUjftLg \'Datto\')\n[**Rose/Lumina**](https://youtu.be/TkfmhhGNcUw \'Datto\')\n**Bad Juju:**\n18 Tributes', inline: true },
					{ name: '**__Chalice Cheat-Sheet__**', value: '╔════ Chalice Weapons ════╗\n ⁞  **Calus Mini-tool** = 1.) Beast + 🟣\n ⁞  **Beloved** SR = 1.) Jubilation + 🔴\n ⁞  **Austringer** HC = 1.) Desire + 🔴\n ⁞  **Fixed Odds** = 1.) Ambition + 🔵\n ⁞  **Drang Baroque** = 1.) Pride + 🟣\n ⁞  **Epicurean** FR = 1.) Excess + 	🟢\n ⁞  **Imp. Decree** = 1.) Wealth + 	🟢\n╚═══════════════════╝' }
				)
				.setImage('https://i.ibb.co/DVQSSbj/opulence.png')
				.setFooter('Command: -g opulence');
			message.channel.send(opulence);
			return;
		}
		if (args[0] === 'shadowkeep' || args[0] === 'undying'){

			const shadowkeep = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('Shadowkeep (Year 3)')
				.setDescription('*Included Season of the Undying*')
				.setURL('https://www.bungie.net/7/en/Destiny/Shadowkeep')
				.setThumbnail('https://i.ibb.co/xHKzQcM/shadowkeep.jpg')
				.addFields(
					{ name: '__**Garden of Salvation**__', value: '[**The Consecrated Mind**](https://youtu.be/gBNVvlycPVY \'Datto\') [🗺](https://i.ibb.co/1nMngYr/encounter-3.jpg \'2nd & 3rd\') [🗺](https://i.ibb.co/PmHr3qG/encounter-2-3.png \'Eyes\')\n[**The Sanctified Mind**](https://youtu.be/3uQbsLr5vn0 \'Datto\') [🗺](https://i.ibb.co/TBNpXm6/final.png \'Final Encounter\')\n[**Loot Table**(image)](https://i.ibb.co/25Fm3X5/gosloot.png)', inline: true },
					{ name: '__**Pit of Heresy**__', value: '[**How-to**](https://youtu.be/_mqPAOSg-64 \'Datto\') [🗺](https://i.ibb.co/fxQkTcY/HERESY-2.jpg \'Ogre Area\') [🗺](https://i.ibb.co/bmqtL1t/WMDLx83.png \'The Harrow\')\n[**PoH Solo/Flawless**](https://youtu.be/9SHm-kbUFkc \'NinjaPups\')', inline: true },
					{ name: '__**Lectern Charms**__', value: '[**Ethereal Charm**](https://youtu.be/ZEdxdr-ykoQ \'Esoterickk\')\n[**Horned Wreath**](https://youtu.be/mu_XJlC6yEE0 \'Esoterickk\')\n[**Captive Cord**](https://youtu.be/gNedr6dG4- \'Esoterickk\')\n[**Bound Manacles**](https://youtu.be/yAHtHQgBH9g \'Esoterickk\')\n[**Necromantic Strand**](https://youtu.be/m4JEdQRu19w \'Esoterickk\')\n[**Withered Plumes**](https://youtu.be/nCPQJeNgpec \'Esoterickk\')\n[**Ralniks\'s Hatchet**](https://youtu.be/MN-tndUEgVY \'Esoterickk\')\n[**Fangs of Shun\'Gath**](https://youtu.be/-iKUXdZWEfE \'Esoterickk\')\n[**Ehrath\'Ur\'s Wreath**](https://youtu.be/55L2uMcAVsc \'Esoterickk\')' },
					{ name: '__**Shadowkeep Exotics**__', value: '[**Divinity**](https://youtu.be/2IQ6M43gEus \'Datto\')\n[**Leviathan\'s Breath**](https://youtu.be/jDN56HyXDOM \'Datto\')\n[**Xenophage**](https://youtu.be/1EGPjPkuE3k \'Datto\')\n[**Deathbringer**](https://youtu.be/t2ARvAJY8Ko \'Datto\')\n**__Season Exclusive__**\n**Eriana\'s Vow**', inline: true },
					{ name: '__**Shadowkeep Extras**__', value: '[**2.0 Spreadsheet**](http://bit.ly/30OutV7)\n[**Armor 2.0 Mods**](http://bit.ly/2Mig2DE)\n[**NASA Emblem**](https://youtu.be/0ApvCVp36rY \'Esoterickk\')', inline: true }
				)
				.setImage('https://i.ibb.co/g4QHn9z/ikora.png')
				.setFooter('Command: -g shadowkeep');
			message.channel.send(shadowkeep);
			return;
		}
		if (args[0] === 'dawn'){

			const dawn = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('Shadowkeep (Year 3)')
				.setDescription('Season of Dawn (S.9)\nDEC 10 - MAR 09')
				.setURL('https://www.bungie.net/7/en/Destiny/Shadowkeep')
				.setThumbnail('https://i.ibb.co/6vT3njp/dawnicon.png')
				.addFields(
					{ name: '__**Web & In-game Lore**__', value: '[**The Accolade**](https://t.co/mBxGF75LXV)\n[**Vanguard Commander**](http://bit.ly/2Lvw6lL)\n[**The Sundial**](http://bit.ly/2RthEP0)\n[**Actions of Mutual Friends**](http://bit.ly/36dKzuw)\n[**Sisters**](http://bit.ly/34YoLmu)\n[**Desperate Times**](http://bit.ly/2qAe4rk)\n**The Pigeon and the Phoenix:**\nBastion Quest (S.10+)' },
					{ name: '__**Season 9 EXCLUSIVE**(gone)__', value: '[**Lantern of Osiris**](https://youtu.be/QBRPLZfe15w \'Esoterickk\')\n[**Obelisks Breakdown**](https://youtu.be/CEtMyTxw-BU \'NinjaPups\')\n[**New Perks & Weapons**](https://youtu.be/nL6mqgReRJo \'NinjaPups\')\n[**Maximize Fractaline**](https://youtu.be/UhIlDiHoQqc \'Datto\')\n[**Corridors of Time**](https://youtu.be/55ecIgP9svc \'Esoterickk\')\n[**Vex Parts**](https://youtu.be/hPF72kbSbis \'Esoterickk\')\n[**Nessus Vex Transponders**](https://youtu.be/wzoOEHO-GFI \'Esoterickk\')\n[**Saint-14\'s Ghost**](https://youtu.be/6VuSosupArU \'Esoterickk\')\n**Constellations Lore Book:**\nComplete Sundial runs', inline: true },
					{ name: '__**Season 9 Exotics**__', value: '[**Bastion**](https://youtu.be/f8Mz-0CMGdI \'Esoterickk\')\n**__Season Exclusive__**\n[**Devil\'s Ruin**](https://youtu.be/TUiPTr65S7c \'Esoterickk\')\n**Symmetry**', inline: true }
				)
				.setImage('https://i.ibb.co/Cz0349B/dawn.png')
				.setFooter('Command: -g dawn');
			message.channel.send(dawn);
			return;
		}
		if (args[0] === 'worthy'){

			const worthy = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('Shadowkeep (Year 3)')
				.setDescription('Season of the Worthy (S.10)\nMAR 10 - JUN 16')
				.setURL('https://www.bungie.net/7/en/Destiny/Shadowkeep')
				.setThumbnail('https://i.ibb.co/ccy8WBZ/worthyicon.jpg')
				.addFields(
					{ name: '__**Season 10 Misc**__', value: '[**Warmind Khanjali** (artifact)](https://youtu.be/Ogp_SAesYKE \'Esoterickk\')\n[**Season In-depth**](https://youtu.be/R14hd9gPgL8 \'Datto\')'},
					{ name: '__**Season 10 Exotics**__', value: 'Tommy\'s Matchbook (pass)\n[**4th Horseman**](https://youtu.be/1-Morhzrsyg \'Esoterickk\')\nHier Apparent (Guardian Games)'},
					{ name: '__**Web & In-game Lore**__', value: '[**What Gives Me Pause**](http://bit.ly/32OybAX)\n[**Legacy**](http://bit.ly/3cN6InF)\n[**Legacy Pt.2**](http://bit.ly/2xwBOQn)\n[**Rememberance**](http://bit.ly/2TEjygj)\n[**Maint. Operations Log 30037**](http://bit.ly/39Sd2Iw)' }
				)
				.setImage('https://i.ibb.co/vc6LfhG/worthy.png')
				.setFooter('Command: -g worthy');
			message.channel.send(worthy);
			return;
		}
		if (args[0] === 'lore'){

			const lore = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('Lorebooks of Destiny 2 Forsaken')
				.setURL('https://www.ishtar-collective.net/')
				.setThumbnail('https://static.ishtar-collective.net/books/books-of-sorrow.png')
				.addFields(
					{ name: '__**Forsaken Lore Books**__', value: '📜[**Forsaken Prince**](https://youtu.be/kNt1Wtu9IoI \'Esoterickk\')\n📜[**The Awoken of the Reef**](https://youtu.be/cuQaV1pIido \'Esoterickk\')\n📜[**Ghost Stories**](https://youtu.be/iMBWiP2p4MA \'Esoterickk\')\n📜[**Ahamkara Bones**](https://youtu.be/9Usfzh6wBSo \'Esoterickk\') (Marasenna)\n📜**Variks the Loyal** -Heroic Adv, Tangled Shore FP\n📜**The Man They Called Cayde** -Ace in the Hole (best)\n📜**The Dreaming City** -DC Lost Sectors (best)\n📜**Truth to Power** -Mara\'s Throne MAX Curse\n📜**The Drifter** -Gambit Triumphs\n**Eva\'s Journey** -Heroic Daily Missions\n\nEntries marked with 📜 are required for **Chronicler** Title' },
					{ name: '__**Season of the Forge**__', value: '**The Black Armory Papers** -Fallen Forge Ignitions\n**Letters from a Renegade &\nThe Book of Unmaking** -The Last Word', inline: true },
					{ name: '__**Season of the Drifter**__', value: '[**Stolen Intelligence**](https://youtu.be/xO3WGjPIQa8 \'NinjaPups\')\n[**Dust**](https://youtu.be/4R-iodB3cVQ \'Esoterickk\')\n**The Warlock Aunor** -Vanguard Allegiance\n**Ecdysis** -Invitations of The Nine from Xûr\n**The Man with No Name** -Gambit Prime Bounties\n**For Every Rose, a Thorn** -RNG Thorn PVP Kills' },
					{ name: '__**Season of Opulence**__', value: '**The Chronicon** -Found during Chalice of Opulence Upgrades\n[**Confessions**](https://youtu.be/zJtZsaZ1k-Q \'Esoterickk\')\n**Nothing Ends** -Completion progress for Lumina' }
				)
				.setImage('https://i.ibb.co/vDgQ5wj/lore2.jpg')
				.setFooter('Command: -g lore');
			message.channel.send(lore);
			return;
		}
		if (args[0] === 'extras'){

			const extras = new Discord.MessageEmbed()
				.setColor('#545454')
				.setTitle('Extra Resources Available')
				.setURL('https://www.reddit.com/r/DestinyTheGame/comments/dd7fh3/in_the_spirit_of_new_light_heres_a_sizeable_list/')
				.setThumbnail('https://i.ibb.co/wYvZtB4/DStiq-SBWs-AAIM7-C.jpg')
				.addFields(
					{ name: '__**Reddit Sources**__', value: '[**r/DestinyTheGame**](https://www.reddit.com/r/DestinyTheGame/) -General Info\n[**r/RaidSecrets**](https://www.reddit.com/r/raidsecrets/) -Spoiler Heavy\n[**r/CruciblePlaybook**](https://new.reddit.com/r/CruciblePlaybook/) -Everything PVP\n[**r/GambitPlaybook**](https://www.reddit.com/r/GambitPlaybook/) -Everything Gambit\n[**r/DestinyLore**](https://www.reddit.com/r/DestinyLore/) -Everything Lore' },
					{ name: '__**Websites**__', value: '[**DestinyItemManager(DIM)**](https://app.destinyitemmanager.com/)\n[**Destiny Sets**](https://destinysets.com/)\n[**Interactive Director**](https://lowlidev.com.au/destiny/maps/)\n[**Light.gg**](https://light.gg/)\n[**Braytech.org**](https://braytech.org/)\n[**Where\'s Xur?**](https://ftw.in/game/destiny-2/find-xur)\n[**D2 Gunsmith**](https://d2gunsmith.com/)', inline: true },
					{ name: '__**Mobile Apps & Misc**__', value: '[**Redrix**](https://redrix.io/) 📱\n[**God Roll Spreadsheet**](https://bit.ly/3bmIsHz)', inline: true },
					{ name: '__**Soundboards**__', value: '[**Shaxx Soundboard**](https://evilarceus.github.io/Destiny2-Soundboard/#)\n[**Drifter Soundboard**](https://d2.asun.co/drifter/)' }
				)
				.setImage('https://i.ibb.co/k2X3xkV/extra2.png')
				.setFooter('Command: -g extras');
			message.channel.send(extras);
			return;
		}
	},
};