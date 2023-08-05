// APP ID: 1136080695496806460
// Toke: MTEzNjA4MDY5NTQ5NjgwNjQ2MA.Ga7s9A.doREmg0yRhQyEsGPyCjbwpuBsubhaSJAcrasMM
// Invite link: https://discord.com/oauth2/authorize?client_id=1136080695496806460&scope=bot

const Discord = require('discord.js');

const Client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.Guilds,

  ],
  partials: [
    Discord.Partials.Message,
    Discord.Partials.Channel,
    Discord.Partials.GuildMember,
    Discord.Partials.User,
    Discord.Partials.GuildScheduledEvent,
  ]
});

Client.on("ready", (client) => {
  console.log("This bot is now online: " + client.user.tag)
});

Client.on("messageCreate", (message) => {

  // const userInputText = message.content.toLowerCase()
  const commands = ["!help", "!commands", "!age"];
  const content = message.content.toLowerCase();

  // only allow non-bots to perform code execution
  if (message.author.bot) return;

  console.log("a new message was written");

  if (message.author.bot === false) {
    message.channel.send("Hello world! You are not a bot!")
  }

  // Commands
  if (commands.includes(content)) {
    message.reply("This bot operates on the following commands: !help !commands !age !math")
  }

  // Age command
  if (message.content === "!age") {
    const date = new Date(message.guild.createdTimestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    message.reply(`${year}-${month}-${day}`);
  }

  // message.guild.members.fetch().then(
  //   (value) => {
  //     console.log(value)
  //   }, (error) => {
  //     console.log(error)
  //   }
  // )
  if (content === "!members") {
    message.guild.members.fetch()
      .then(members => {
        let memberList = "";
        members.forEach(member => {
          memberList += `${member.user.displayName}\n`;
        });
        message.reply(`Members in this channel: \n${memberList}`);
      })
      .catch(console.error);
  }
})


Client.login("MTEzNjA4MDY5NTQ5NjgwNjQ2MA.Ga7s9A.doREmg0yRhQyEsGPyCjbwpuBsubhaSJAcrasMM")

