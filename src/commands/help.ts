import { Message } from 'discord.js'

export = {
    name: 'help',
    execute(message: Message) {
        message.channel.send('help')
    }
}
