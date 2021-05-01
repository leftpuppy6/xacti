import { Message } from 'discord.js'

type CommandName = 'help' | 'invite' | 'version'

interface CommandObject {
    name: CommandName
    description: string
    execute: (message: Message) => void
}
