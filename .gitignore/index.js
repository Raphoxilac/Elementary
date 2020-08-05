const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client();

client.on("ready", () => {
    console.log(`Je suis connecté sous ${client.user.tag}`);
});

client.on("message", message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    console.log(args);
    const command = args.shift().toLowerCase();
    console.log(command);

    if (message.content === `${PREFIX}test`) {
        message.reply("le test est réussi.");
    }

    if (message.content === `${PREFIX}ping`) {
        message.channel.send(":ping_pong: **| Pong !**");
    }
});

client.login(process.env.AUTHORIZATION);
");
