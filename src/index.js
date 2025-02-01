import { Client, GatewayIntentBits } from "discord.js";
import { TOKEN } from "./config.js";
import onReady from "./events/ready.js";
import onMessageCreate from "./events/messageCreate.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => onReady(client));
client.on("messageCreate", onMessageCreate);

client.login(TOKEN);
