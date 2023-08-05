const Discord = require('discord.js');
const client = new Discord.Client({
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

let guildMembers = [];  // Array to store guild members
let meetingNotes = {}; // Object to store meeting notes


client.on("ready", (client) => {
  console.log("This bot is now online: " + client.user.tag)
});

client.on('messageCreate', msg => {
  console.log("message sent")
  if (msg.content === '!meeting-notes') {
    // Get guild from message
    const guild = msg.guild;

    // Fetch guild members
    guild.members.fetch()
      .then(members => {
        guildMembers = members.map(member => {
          return {
            id: member.id,
            name: member.user.username,
          }
        });
        console.log(guildMembers)
      })
    // Send member selection embed
    msg.reply({
      embed: {
        description: guildMembers.map(member => `${member.name} - ${member.id}`).join('\n') + '\n\nEnd Meeting Notes'
      }
    });
  }
});



module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('selectmenu')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {

    const menu = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.SelectMenuBuilder()
          .setCustomId('select')
          .setPlaceholder("nothing selected")
          .addOptions(
            {
              label: 'first option',
              description: 'this is option number 1',
              value: 'OPTION 1',
            },
            {
              label: 'second option',
              description: 'this is option 2',
              value: 'option 2',
            }
          )
      )
  },
};

client.on(Discord.Events.InteractionCreate, async interaction => {
  if(!interaction.isStringSelectMenu()) return;

  if(interaction.custom_id === 'select'){
    let choices = "";

    await interaction.values.forEach(async value => {
      choices += `${value}`
    })

    await interaction.replu({content: `${value}`})
  }
})

module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};


