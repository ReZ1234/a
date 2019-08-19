const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("612059671158849545")
setInterval(function() {
channel.send(`حط الكلام اللي تبغاه هنا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);