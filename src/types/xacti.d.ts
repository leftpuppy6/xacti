import { Message } from 'discord.js'

type CommandName = 'help' | 'invite'

export interface CommandObject {
    name: CommandName
    execute: (message: Message) => void
}