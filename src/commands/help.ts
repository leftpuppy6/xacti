import { Message } from 'discord.js'

export default {
    name: 'help',
    execute(message: Message) {
        message.channel.send('help')
    }
}
