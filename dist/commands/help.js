"use strict";
const promises_1 = require("fs/promises");
module.exports = {
    name: 'help',
    description: "Shows commands you can use.",
    async execute(message) {
        const helpMessageBuffer = await promises_1.readFile(`${__dirname}/../assets/helpMessage`);
        const helpMessage = helpMessageBuffer.toString();
        message.channel.send("```" + helpMessage + "```");
    }
};
