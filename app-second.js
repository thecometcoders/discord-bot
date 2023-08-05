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
  // Read message and check if bot
  let userInput = message.content.toLowerCase()
  if (message.author.bot === true) {
    return;
  }

  const gameOption = ["rock", "paper", "scissors"]

  // Generate random response
  const roll = Math.floor(Math.random() * 3)

  message.channel.send("You chose " + userInput)

  if (userInput === "rock") {
    let statusMessage = "";
    if (gameOption[roll] === userInput) {
      statusMessage = "It's a draw"
    } else if (gameOption[roll] === "scissors") {
      statusMessage = "You win"
    } else if (gameOption[roll] === "paper") {
      statusMessage = "You lose"
    } else {
      message.reply("erro")
    }
    message.reply(statusMessage)


  } else if (userInput === "paper") {
    let statusMessage = "";
    if (gameOption[roll] === userInput) {
      statusMessage = "It's a draw"
    } else if (gameOption[roll] === "rock") {
      statusMessage = "You win"
    } else {
      statusMessage = "You lose"
    }
    message.reply(statusMessage)


  } else if (userInput === "scissors") {
    let statusMessage = "";
    if (gameOption[roll] === userInput) {
      statusMessage = "It's a draw"
    } else if (gameOption[roll] === "paper") {
      statusMessage = "You win"
    } else {
      statusMessage = "You lose"
    }
    message.reply(statusMessage)

  } else {
    message.reply("Error")
  }


})

function returnNewGameObject(userID, name) {
  return {
    ID : 0,
    userID : userID,
    name: name,
    draw: 0,
    win : 0,
    lose: 0,
    rounds : 0,
    time : new Date().toString()
  }
}

