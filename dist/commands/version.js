"use strict";
module.exports = {
    name: 'version',
    description: "Shows xacti's version.",
    execute(message) {
        const version = require(`${process.cwd()}/package.json`).version;
        message.channel.send(`v${version}`);
    }
};
