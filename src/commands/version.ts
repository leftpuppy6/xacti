import {Message} from "discord.js"

export = {
    name: 'version',
    description: "Shows xacti's version.",
    execute(message:Message) {
        const version = require(`${process.cwd()}/package.json`).version
        message.channel.send(`v${version}`)
    }
}
