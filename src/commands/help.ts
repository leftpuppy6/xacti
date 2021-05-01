import { Message } from 'discord.js'
import {readFile} from "fs/promises"

export = {
    name: 'help',
    description: "Shows commands you can use.",
    async execute(message: Message) {
        const helpMessageBuffer = await readFile(`${__dirname}/../../assets/helpMessage`)
        const helpMessage = helpMessageBuffer.toString()
        message.channel.send("```" + helpMessage + "```")
    }
}
