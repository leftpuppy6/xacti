import { Message } from 'discord.js'

export = {
    name: 'help',
    description: "Shows commands you can use.",
    execute(message: Message) {
        message.channel.send('help')
    }
}
