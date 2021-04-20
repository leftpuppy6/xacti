import { Message } from 'discord.js'

type CommandName = 'help' | 'invite'

export interface CommandObject {
    name: CommandName
    description: string
    execute: (message: Message) => void
}