const { join } = require('kahoot.js-updated');
const Kahoot = require('kahoot.js-updated');
const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "k!"



bot.once('ready', () => {

	console.log(`I am logged in as ${bot.user.tag} to Discord!`);

    bot.user.setActivity(`k!help • ${bot.user.username.toUpperCase()}`, { type: "LISTENING" });
});

function sleep(ms) {
	return new Promise((resolve) => {
	  setTimeout(resolve, ms);
	});
  } 

function sendBots(name, pin, amount){
    for (var i = 0; i < amount; i++){
        try {
            joinGame(name+(i), pin);
        } catch (error) {
        }
    }
}



function joinGame(name, pin){
    try {
      client = new Kahoot();
      client.join(pin, name);
    } catch (error) {
      
    }
    
}

bot.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();



	if (command === 'help') {
		const embed = new Discord.MessageEmbed()
		.setColor("#46178f")
		.setThumbnail("https://pbs.twimg.com/profile_images/1110160553945763840/ZWDmk4h6.png")
		.setAuthor('Owen', 'https://pbs.twimg.com/profile_images/1110160553945763840/ZWDmk4h6.png')
		.addField('Flood', 'The Command used to flood a kahoot')
		.setTimestamp();
		message.channel.send(embed)
	} else if (command === 'flood') {
		let pin = args[0];
		let name = args[1]; 
		message.channel.send(`Sending Bots to **${pin}.** `)
		sendBots(name, pin, 50)
	}
});



bot.login('bot token')