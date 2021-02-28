import {Message} from 'discord.js'

export interface CommandObject {
    name: string
    execute: (message: Message) => void
}