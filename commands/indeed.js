module.exports = {
	name: 'indeed',
	args: false,
	aliases: ['zavala', 'vuvuzela'],
	description: 'Posts everyone\'s favorite Vanguard Leader.',
	category: 'extra',
	cooldown: 10,
	execute(message) {

		const number = 8;
		const imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
		message.channel.send({
			files: [{ attachment: './commands/images/zavala/' + imageNumber + '.jpg' }]
		});
		return;
	}
};