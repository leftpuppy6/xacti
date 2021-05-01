"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCommands_1 = require("./utils/getCommands");
const setup_1 = require("./setup");
const env_1 = require("./env");
const client = setup_1.setup();
client.on('message', async (message) => {
    // TODO Pack these return statements.
    if (/[가-힣]/u.test(message.content)) {
        const reply = await message.reply("このサーバーは韓国語禁止です。\nKorean is NOT allowed in this server.");
        message.delete();
        reply.delete({ timeout: 5000 });
        return;
    }
    if (message.author.bot) {
        return;
    }
    if (!message.content.startsWith(env_1.prefix)) {
        return;
    }
    const commands = await Promise.all(await getCommands_1.getCommands());
    const commandName = message.content.slice(env_1.prefix.length + 1).toLowerCase();
    const command = commands.filter((command) => command.name === commandName)[0];
    command === null || command === void 0 ? void 0 : command.execute(message);
});
