const Discord = require('discord.js');

module.exports = {
	name: 'guide',
	args: true,
	aliases: ['guides', 'g'],
	description: 'On-the-fly guide posting by expansion.',
	usage: ['vanilla'],
	category: 'general',
	async execute(message, args) {
		if (!args.length) {
			message.channel.send('You didn\'t specify which guide to display.');
			return;
		}
		if (args[0] === 'newlight'){

			const vanilla = new Discord.MessageEmbed()
				.setColor('#ffffff')
				.setTitle('New Light (Year 1)')
				.setURL('https://www.bungie.net/7/en/Destiny/NewLight')
				.setThumbnail('https://i.ibb.co/bPLXJ6q/vanilla.jpg')
				.addFields(
					{ name: '**__Leviathan Raid Breakdown__**', value: '[**Baths/Entrance**](https://youtu.be/FVAvumqd2Yw \'Datto Video\')\n[**Pleasure Gardens**](https://youtu.be/pPg7rxKxf8o \'Datto Video\')\n[**The Gauntlet**](https://youtu.be/T0DbeXjkKRs \'Datto Video\')\n[**Emperor Calus**](https://youtu.be/aeKeJ6x_Zi8 \'Datto Video\')\n[**Prestige Leviathan**](https://bit.ly/2i5KPp4 \'Datto Video\')\n[**Underbelly Map**](https://bit.ly/2Ivn3R5 \'Image Link\')' },
					{ name: '**__Year 1 Exotics__**', value: '[**RatKing, Sturm &\nMIDA Multi-tool**](https://youtu.be/rY6Gpt6pWp4 \'Datto\')\n[**Legend of Acrius**](https://youtu.be/CwEXvuTI8_Y)\n[**Whisper Puzzle**](https://youtu.be/bsjhgZYkld8)\n[**Worldline Zero**](https://youtu.be/RI5KQ_yQLoU)\n[**Sleeper Nodes**](https://bit.ly/2ruS9im)', inline: true },
					{ name: '**__Curse of Osiris__**', value: '[**Eater of Worlds**](https://youtu.be/5WljA6Krwbk \'Datto Video\')\n[**Lost Prophecies**](https://d2.destinygamewiki.com/wiki/Lost_Prophecies \'Wiki Link\')', inline: true },
					{ name: '**__Warmind__**', value: '[**Spire of Stars**](https://youtu.be/CSN6MIpjW04 \'Datto Video\')\n[**Val Ca\'our**](https://youtu.be/IxgTK2dHGis \'Datto Video\')', inline: true }
				)
				.setFooter('Command: -g newlight', 'https://i.ibb.co/q5pBWfW/v12.png');

			message.channel.send(vanilla);
			return;
		}
		if (args[0] === 'forsaken'){
            
			const forsaken = new Discord.MessageEmbed()
				.setColor('#660000')
				.setTitle('Forsaken (Year 2)')
				.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
				.setThumbnail('https://i.ibb.co/JmyNvN5/Ace-of-Spades.png')
				.addFields(
					{ name: '__**Last Wish Raid**__', value: '[**Kalli, the Corrupted**](https://youtu.be/mj6qnB1g7nU)\n[**Shuro Chi, the Corrupted**](https://youtu.be/bBjwtzkE_Kw)\n[**Morgeth, the Spirekeeper**](https://youtu.be/4xTXWzvLEkA)\n[**The Vault**](https://youtu.be/hRpWfYKGPJ8)\n[**Riven of A Thousand Voices**](https://youtu.be/LLmMrdACQC4)' },
					{ name: '__**Forsaken Exotics**__', value: '[**Wishender**](https://youtu.be/u7TsLMQ7sW4)\n[**Malfeasance**](https://youtu.be/fLzyp8W7tN0)\n[**Corrupted Eggs**](https://youtu.be/G8p9IcoTEYY)', inline: true },
					{ name: '__**Misc Extras**__', value: '[**Cat Statues**](https://youtu.be/iw46L-xnYns)\n[**Shattered Throne**](https://www.youtube.com/watch?v=e0C5WAx1Fwk)\n[**Wall of Wishes**](https://idleanimation.com/last-wish-plates)', inline: true },
					{ name: '__**Forsaken Lore**__', value: 'See `-g lore` for more info.' },
				)
				.setFooter('Command: -g forsaken', 'https://i.ibb.co/q5pBWfW/v12.png');
			message.channel.send(forsaken);
			return;
		}
		if (args[0] === 'forge'){

			const forge = new Discord.MessageEmbed()
				.setColor('#660000')
				.setTitle('Forsaken (Year 2)')
				.setDescription('Season of the Forge (S.5)')
				.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
				.setThumbnail('https://i.ibb.co/8NkGgdx/forge.jpg')
				.addFields(
					{ name: '__**Scourge of the Past**__', value: '[**Downtown & Race**](https://youtu.be/ttoHmTTqLOg)\n[**Insurrection Prime**](https://youtu.be/daka2OKi8xY)\n[**SOTP Dummies Guide**](https://youtu.be/YMDqF9YLBtY)' },
					{ name: '__**Season 6 Exotics**__', value: '[**Izanagi\'s Burden**](https://youtu.be/jXrhoylMcy0)\nAda-1 Bounties:\n**Jötunn**\n**Le Monarque**', inline: true },
					{ name: '**__Season 6 Extras__**', value: '[**Emblems**](https://youtu.be/lOF-0ckkyZw)\n[**Mysterious Datapad**](https://youtu.be/ZTr55aajAgQ)\n[**Niobe Labs**](https://idleanimation.com/niobe-labs)', inline: true }
				)
				.setFooter('Command: -g forge', 'https://i.ibb.co/q5pBWfW/v12.png');
			message.channel.send(forge);
			return;
		}
		if (args[0] === 'drifter'){

			const drifter = new Discord.MessageEmbed()
				.setColor('#660000')
				.setTitle('Forsaken (Year 2)')
				.setDescription('Season of the Drifter (S.6)')
				.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
				.setThumbnail('https://i.ibb.co/XsVDSDM/drifter.jpg')
				.addFields(
					{ name: '__**Zero Hour**__', value: '[**Heroic Route**](https://youtu.be/-LI2NuzxsdE)\n[**Configuration Calculator**](http://ensemblefc.com/cryptarchlocks.php)\n[**Configuration Explaination**](https://youtu.be/n5CrjzGF_g0)' },
					{ name: '__**Season 7 Exotics**__', value: '[**Outbreak Perfected**](https://youtu.be/uVgOAe9pfwk)\n[**Thorn**](https://youtu.be/6uC8DkDOB-o)', inline: true },
					{ name: '__**Season 7 Extras**__', value: '[**The Survival Guide**](https://youtu.be/DGBrhJMlKxs)\n[**Vanguard Allegiance**](https://youtu.be/2iBNP6D3RIo)', inline: true }
				)
				.setFooter('Command: -g drifter', 'https://i.ibb.co/q5pBWfW/v12.png');
			message.channel.send(drifter);
			return;
		}
		if (args[0] === 'opulence'){

			const opulence = new Discord.MessageEmbed()
				.setColor('#660000')
				.setTitle('Forsaken (Year 2)')
				.setDescription('Season of Opulence (S.7)')
				.setURL('https://www.bungie.net/7/en/Destiny/Forsaken')
				.setThumbnail('https://i.ibb.co/hD9k6Ny/opulence.jpg')
				.addFields(
					{ name: '**__Crown of Sorrows__**', value: '[**Hive Ritual & Jumping Puzzle**](https://youtu.be/tXR6bwuXKpg)\n[**Gahlran\'s Deception & Phase 2**](https://youtu.be/_ZrNvGYDf6E)\n[**All Challenges**](https://youtu.be/3o-9FZPScHc)' },
					{ name: '**__The Menagerie__**', value: '[**Basic Info**](https://youtu.be/JkCpe6hXb0I)\n[**Hidden Triumphs**](http://bit.ly/2WD3Wgq)\n[**Chalice Spreadsheet**](http://bit.ly/2IpLOMZ)\n[**Chalice Infographic**](http://bit.ly/2QYyC5D)', inline: true },
					{ name: '**__Season 8 Exotics__**', value: '[**Truth Quest**](https://youtu.be/GrdJQUjftLg)\n[**Rose/Lumina**](https://youtu.be/TkfmhhGNcUw)\n**Bad Juju:**\n18 Tributes', inline: true },
					{ name: '**__Chalice Cheat-Sheet__**', value: '╔════ Chalice Weapons ════╗\n ⁞  **Calus Mini-tool** = 1.) Beast + 🟣\n ⁞  **Beloved** SR = 1.) Jubilation + 🔴\n ⁞  **Austringer** HC = 1.) Desire + 🔴\n ⁞  **Fixed Odds** = 1.) Ambition + 🔵\n ⁞  **Drang Baroque** = 1.) Pride + 🟣\n ⁞  **Epicurean** FR = 1.) Excess + 	🟢\n ⁞  **Imp. Decree** = 1.) Wealth + 	🟢\n╚═══════════════════╝' }
				)
				.setFooter('Command: -g opulence', 'https://i.ibb.co/q5pBWfW/v12.png');
			message.channel.send(opulence);
			return;
		}
		if (args[0] === 'shadowkeep'){

			const shadowkeep = new Discord.MessageEmbed()
				.setColor('#00580A')
				.setTitle('Shadowkeep (Year 3)')
				.setDescription('*Included Season of the Undying*')
				.setURL('https://www.bungie.net/7/en/Destiny/Shadowkeep')
				.setThumbnail('https://i.ibb.co/xHKzQcM/shadowkeep.jpg')
				.addFields(
					{ name: '__**Garden of Salvation**__', value: '[**The Consecrated Mind**](https://youtu.be/gBNVvlycPVY)\n[**The Sanctified Mind**](https://youtu.be/3uQbsLr5vn0)', inline: true },
					{ name: '__**Pit of Heresy**__', value: '[**How-to**](https://youtu.be/_mqPAOSg-64)\n[**PoH Solo/Flawless**](https://youtu.be/9SHm-kbUFkc)', inline: true },
					{ name: '__**Lectern Charms**__', value: `
                [**Ethereal Charm**](https://youtu.be/ZEdxdr-ykoQ)
                [**Horned Wreath**](https://youtu.be/mu_XJlC6yEE0)
                [**Captive Cord**](https://youtu.be/gNedr6dG4-)
                [**Bound Manacles**](https://youtu.be/yAHtHQgBH9g)
                [**Necromantic Strand**](https://youtu.be/m4JEdQRu19w)
                [**Withered Plumes**](https://youtu.be/nCPQJeNgpec)
                [**Ralniks's Hatchet**](https://youtu.be/MN-tndUEgVY)
                [**Fangs of Shun'Gath**](https://youtu.be/-iKUXdZWEfE)
                [**Ehrath'Ur's Wreath**](https://youtu.be/55L2uMcAVsc)` },
					{ name: '__**Shadowkeep Exotics**__', value: `
                [**Divinity**](https://youtu.be/2IQ6M43gEus)
                [**Leviathan's Breath**](https://youtu.be/jDN56HyXDOM)
                [**Xenophage**](https://youtu.be/1EGPjPkuE3k)
                [**Deathbringer**](https://youtu.be/t2ARvAJY8Ko)
                **__Season Exclusive__**
                **Eriana's Vow**`, inline: true },
					{ name: '__**Shadowkeep Extras**__', value: `
                [**2.0 Spreadsheet**](http://bit.ly/30OutV7)
                [**Armor 2.0 Mods**](http://bit.ly/2Mig2DE)
                [**NASA Emblem**](https://youtu.be/0ApvCVp36rY)`, inline: true }

				)
				.setFooter('Command: -g shadowkeep', 'https://i.ibb.co/q5pBWfW/v12.png');
			message.channel.send(shadowkeep);
			return;
		}
		if (args[0] === 'dawn'){

			const dawn = new Discord.MessageEmbed()
				.setColor('#00580A')
				.setTitle('Shadowkeep (Year 3)')
				.setDescription('Season of Dawn (S.9)\nDEC 10 - MAR 09')
				.setURL('https://www.bungie.net/7/en/Destiny/Shadowkeep')
				.setThumbnail('https://i.ibb.co/6vT3njp/dawnicon.png')
				.addFields(
					{ name: '__**Web & In-game Lore**__', value: `
                [**The Accolade**](https://t.co/mBxGF75LXV)
                [**Vanguard Commander**](http://bit.ly/2Lvw6lL)
                [**The Sundial**](http://bit.ly/2RthEP0)
                [**Actions of Mutual Friends**](http://bit.ly/36dKzuw)
                [**Sisters**](http://bit.ly/34YoLmu)
                [**Desperate Times**](http://bit.ly/2qAe4rk)
                **The Pigeon and the Phoenix:**
                Bastion Quest (S.10+)` },
					{ name: '__**Season 9 EXCLUSIVE**__', value: `
                [**Lantern of Osiris**](http://bit.ly/36jWQ0H)
                [**Obelisks Breakdown**](https://youtu.be/CEtMyTxw-BU)
                [**New Perks & Weapons**](https://youtu.be/nL6mqgReRJo)
                [**Maximize Fractaline**](https://youtu.be/UhIlDiHoQqc)
                [**Corridors of Time**](https://youtu.be/55ecIgP9svc)
                [**Vex Parts**](https://youtu.be/hPF72kbSbis)
                [**Nessus Vex Transponders**](https://youtu.be/wzoOEHO-GFI)
                [**Saint-14's Ghost**](https://youtu.be/6VuSosupArU)
                **Constellations Lore Book:**
                Complete Sundial runs`, inline: true },
					{ name: '__**Season 9 Exotics**__', value: `
                [**Bastion**](https://youtu.be/f8Mz-0CMGdI)
                **__Season Exclusive__**
                [**Devil's Ruin**](https://youtu.be/TUiPTr65S7c)
                **Symmetry**
                `, inline: true }
				)
				.setFooter('Command: -g dawn', 'https://i.ibb.co/q5pBWfW/v12.png');
			message.channel.send(dawn);
			return;
		}
		if (args[0] === 'worthy'){

			const worthy = new Discord.MessageEmbed()
				.setColor('#00580A')
				.setTitle('Shadowkeep (Year 3)')
				.setDescription('Season of the Worthy (S.10)\nMAR 10 - JUN 16')
				.setURL('https://www.bungie.net/7/en/Destiny/Shadowkeep')
				.setThumbnail('https://i.ibb.co/ccy8WBZ/worthyicon.jpg')
				.addFields(
					{ name: '__**Web & In-game Lore**__', value: 'placeholder' }
				)
				.setFooter('Command: -g worthy', 'https://i.ibb.co/q5pBWfW/v12.png');
			message.channel.send(worthy);
			return;
		}
		if (args[0] === 'lore'){

			const lore = new Discord.MessageEmbed()
				.setColor('#ffffff')
				.setTitle('Lorebooks of Destiny')
				.setURL('https://www.ishtar-collective.net/')
				.setThumbnail('https://static.ishtar-collective.net/books/books-of-sorrow.png')
				.addFields(
					{ name: '__**Forsaken Lore Books**__', value: `
                📜[**Forsaken Prince**](https://youtu.be/kNt1Wtu9IoI)
                📜[**The Awoken of the Reef**](https://youtu.be/cuQaV1pIido)
                📜[**Ghost Stories**](https://youtu.be/iMBWiP2p4MA)
                📜[**Ahamkara Bones**](https://youtu.be/9Usfzh6wBSo) (Marasenna)
                📜**Variks the Loyal** -Heroic Adventures, Tangled Shore Flashpoint
                📜**The Man They Called Cayde** -Ace in the Hole chests (best)
                📜**The Dreaming City** -Dreaming City Lost Sectors (best)
                📜**Truth to Power** -Visits to Mara's Throne during MAX Curse
                📜**The Drifter** -Tied to gambit triumphs
                **Eva's Journey** -Heroic Daily Missions RNG
                
                Entries marked with 📜 are required for **Chronicler** Title` },
					{ name: '__**Season of the Forge**__', value: `**The Black Armory Papers** -Fallen Forge Ignitions
                **Letters from a Renegade &
                The Book of Unmaking** -The Last Word`, inline: true },
					{ name: '__**Season of the Drifter**__', value: `
                [**Stolen Intelligence**](https://youtu.be/xO3WGjPIQa8)
                [**Dust**](https://youtu.be/4R-iodB3cVQ)
                **The Warlock Aunor** -Vanguard Allegiance
                **Ecdysis** -Invitations of The Nine from Xûr
                **The Man with No Name** -Gambit Prime Bounties
                **For Every Rose, a Thorn** -RNG Thorn PVP Kills` },
					{ name: '__**Season of Opulence**__', value: `
                **The Chronicon** -Found during Chalice of Opulence Upgrades
                [**Confessions**](https://youtu.be/zJtZsaZ1k-Q)
                **Nothing Ends** -Completion progress for Lumina` }
				)
				.setFooter('Command: -g lore', 'https://i.ibb.co/q5pBWfW/v12.png');
			message.channel.send(lore);
			return;
		}
		if (args[0] === 'extras'){

			const extras = new Discord.MessageEmbed()
				.setColor('#00580A')
				.setTitle('Extra Resources Available')
				.setURL('https://www.reddit.com/r/DestinyTheGame/comments/dd7fh3/in_the_spirit_of_new_light_heres_a_sizeable_list/')
				.setThumbnail('https://i.ibb.co/wYvZtB4/DStiq-SBWs-AAIM7-C.jpg')
				.addFields(
					{ name: '__**Reddit Sources**__', value: `
                [**r/DestinyTheGame**](https://www.reddit.com/r/DestinyTheGame/) -General Info
                [**r/RaidSecrets**](https://www.reddit.com/r/raidsecrets/) -Spoiler Heavy
                [**r/CruciblePlaybook**](https://new.reddit.com/r/CruciblePlaybook/) -Everything PVP
                [**r/GambitPlaybook**](https://www.reddit.com/r/GambitPlaybook/) -Everything Gambit
                [**r/DestinyLore**](https://www.reddit.com/r/DestinyLore/) -Everything Lore` },
					{ name: '__**Websites**__', value: `
                [**DestinyItemManager(DIM)**](https://app.destinyitemmanager.com/)
                [**Destiny Sets**](https://destinysets.com/)
                [**Interactive Director**](https://lowlidev.com.au/destiny/maps/)
                [**Light.gg**](https://light.gg/)
                [**Braytech.org**](https://braytech.org/)
                [**Where's Xur?**](https://ftw.in/game/destiny-2/find-xur)
                [**D2 Gunsmith**](https://d2gunsmith.com/)
                `, inline: true },
					{ name: '__**Mobile Apps & Misc**__', value: `
                [**Redrix**](https://redrix.io/) 📱
                [**God Roll Spreadsheet**](https://docs.google.com/spreadsheets/d/1xWLG3zydCEMrISKr9_qU3jDPT8LeakGfRBvj5kOj_JU/htmlview?sle=true#)`, inline: true },
					{ name: '__**Soundboards**__', value: `
                [**Shaxx Soundboard**](https://evilarceus.github.io/Destiny2-Soundboard/#)
                [**Drifter Soundboard**](https://d2.asun.co/drifter/)` }
				)
				.setFooter('Command: -g extras', 'https://i.ibb.co/q5pBWfW/v12.png');
			message.channel.send(extras);
			return;
		}
	},
};