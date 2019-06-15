const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("589591132015427596")
setInterval(function() {
channel.send(`iTzLeXz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);